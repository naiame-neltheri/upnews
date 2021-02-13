# No. | Name of editor | Changelog                                              | Datetime
#==============================================================================================
# 1   | Naiame         | Initiated db connection                 				| 2021-02-12
#==============================================================================================

from api.core.config import cnf
from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from sqlalchemy.pool import QueuePool

SQLALCHEMY_DATABASE_URI = f"postgresql://{cnf.DB_USER}:{cnf.DB_PASS}@{cnf.DB_HOST}/{cnf.DB_NAME}"

engine = create_engine(SQLALCHEMY_DATABASE_URI, pool_size = cnf.DB_POOL_SIZE, max_overflow = cnf.DB_MAX_POOL_SIZE, pool_timeout = cnf.DB_CONNECTION_TIMEOUT, poolclass = QueuePool)
SessionLocal = sessionmaker(autocommit = False, autoflush = False, bind = engine)

Base = declarative_base()

def get_db():
	try:
		db = SessionLocal()
		yield db
	finally:
		db.close()