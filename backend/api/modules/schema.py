import datetime
from api.core.database import Base
from sqlalchemy.orm import relationship
from sqlalchemy import Boolean, Column, ForeignKey, Integer, String, Unicode, DateTime

class User(Base):
	__tablename__ = "users"
	id = Column(Integer, primary_key = True, index = True)
	username = Column(String(30), unique = False, nullable = False)
	email = Column(String(254), unique = True, nullable = False)
	first_name = Column(Unicode(50), unique = False, nullable = False)
	last_name = Column(Unicode(50), unique = False, nullable = False)
	password = Column(String(65), unique = False, nullable = False)
	created_at = Column(DateTime, unique = False, nullable = True, default = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S"))
	updated_at = Column(DateTime, unique = False, nullable = True)