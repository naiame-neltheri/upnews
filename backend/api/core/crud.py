# No. | Name of editor | Changelog                                              | Datetime
#==============================================================================================
# 1   | Naiame         | Intialized				                 				| 2021-02-12
# 2	  | Naiame		   | Added logging feature									| 2021-02-13
#==============================================================================================
from api import logger
import hashlib, datetime
from fastapi import Depends
from api.modules import schema
from api.modules import models
from sqlalchemy.orm import load_only
from sqlalchemy import and_
from sqlalchemy.orm.exc import NoResultFound

def authenticate(db, email, pwd):
	try:
		tmpObj = db.query(schema.User).options(load_only("username", "id")).filter(and_(schema.User.email == email, schema.User.password == pwd))
		logger.debug(tmpObj)
		tmpObj = tmpObj.one()
		return tmpObj
	except NoResultFound:
		return False
	except Exception as error:
		logger.error(f"{str(error)}")
		return False

def get_users(db):
	try:
		ret = db.query(schema.User).options(load_only("username", "first_name", "last_name", "created_at", "updated_at", "email"))
		logger.debug(ret)
		return ret.all()
	except Exception as error:
		logger.error(f"{str(error)}")
		return None

def get_user(db, user_id):
	try:
		res = db.query(schema.User).get(user_id)
		ret = {}
		ret['username'] = res.username
		ret['first_name'] = res.first_name
		ret['last_name'] = res.last_name
		ret['email'] = res.email
		ret['created_at'] = res.created_at
		ret['updated_at'] = res.updated_at
		logger.debug(f"Getting user profile {ret}")
		return ret
	except Exception as error:
		logger.error(f"{str(error)}")
		return False

def create_user(db, user):
	try:
		hashed_pwd = hashlib.sha256(user.password.encode('utf8')).hexdigest()
		new_user = schema.User(username = user.username, password = hashed_pwd, email = user.email, first_name = user.first_name, last_name = user.last_name)
		db.add(new_user)
		db.commit()
		db.refresh(new_user)
		logger.debug(f"Creating user : {new_user}")
		logger.info(f"New user created with ID of {new_user.id}")
		return True
	except Exception as error:
		logger.error(f"{str(error)}")
		return False

def update_user(db, user):
	try:
		logger.debug(f"Updating user data wth id : {user.id}")
		tmp_user = db.query(schema.User).get(user.id)
		tmp_user.username = user.username
		tmp_user.email = user.email
		tmp_user.first_name = user.first_name
		tmp_user.last_name = user.last_name
		logger.debug(f"Updated user data : {tmp_user}")
		db.commit()
		db.refresh(tmp_user)
		logger.info(f"Updated user data with ID of {tmp_user.id}")
		return True
	except Exception as error:
		logger.error(f"{str(error)}")
		return False