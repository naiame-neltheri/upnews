# No. | Name of editor | Changelog                                              | Datetime
#==============================================================================================
# 1   | Naiame         | Added init configuration                 				| 2021-02-12
#==============================================================================================

from typing import Optional
from pydantic import BaseSettings, Field

class GlobalConfig(BaseSettings):
	SERVER_IP: Optional[str] = "127.0.0.1"
	SERVER_PORT: Optional[int] = 8443
	SECRET: Optional[str] = None
	DB_PORT: Optional[int] = None
	DB_HOST: Optional[str] = None
	DB_NAME: Optional[str] = None
	DB_USER: Optional[str] = None
	DB_PASS: Optional[str] = None
	DB_POOL_SIZE: Optional[int] = 3
	DB_MAX_POOL_SIZE: Optional[int] = 5
	DB_CONNECTION_TIMEOUT: Optional[int] = 10
	LOG_FILE: Optional[str] = "app.log"
	LOG_LEVEL: Optional[str] = "WARNING"
	LOG_MAXFILESIZE: Optional[int] = 1
	SESSION_TIMER: Optional[int] = 60
	ENV_STATE: Optional[str] = Field(None, env="ENV_STATE")

	class Config:
		env_file: str = ".env"
		env_file_encoding = "utf-8"

class DevConfig(GlobalConfig):
	class Config:
		env_prefix: str = "DEV_"
		env_file_encoding = "utf-8"

class ProdConfig(GlobalConfig):
	class Config:
		env_prefix: str = "PROD_"
		env_file_encoding = "utf-8"

class MainConfig:

	def __init__(self, env_state: Optional[str]):
		self.env_state = env_state

	def __call__(self):
		if self.env_state == "dev":
			return DevConfig()
		elif self.env_state == "prod":
			return ProdConfig()

cnf = MainConfig(GlobalConfig().ENV_STATE)()
print(cnf.__repr__())