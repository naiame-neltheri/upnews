# No. | Name of editor | Changelog                                              | Datetime
#==============================================================================================
# 1   | Naiame         | Intialized				                 				| 2021-02-12
#==============================================================================================
import codecs, logging, sys
from fastapi import FastAPI
from api.core.config import cnf
from logging.handlers import RotatingFileHandler

logging.basicConfig(
	filename = cnf.LOG_FILE,
	format = '[%(asctime)s %(name)s] : %(levelname)s - %(message)s',
	datefmt = '%Y-%m-%d %H:%M:%S')
handler = RotatingFileHandler(cnf.LOG_FILE, backupCount = 10, encoding = 'utf8', maxBytes = (cnf.LOG_MAXFILESIZE * 1024))
if not logging.handlers:
	logging.addHandler(handler)
logger = logging.getLogger('BACKEND-SERVICE')
if cnf.LOG_LEVEL.upper() == 'DEBUG':
	logger.setLevel(logging.DEBUG)
elif cnf.LOG_LEVEL.upper() == 'INFO':
	logger.setLevel(logging.INFO)
elif cnf.LOG_LEVEL.upper() == 'WARNING':
	logger.setLevel(logging.WARNING)
elif cnf.LOG_LEVEL.upper() == 'ERROR':
	logger.setLevel(logging.ERROR)
elif cnf.LOG_LEVEL.upper() == 'CRITICAL':
	logger.setLevel(logging.CRTICAL)
else:
	print(f"[!] Error occured while setting log level\n[*] Please set log level according to : DEBUG,INFO,WARNING,ERROR,CRITICAL")
	sys.exit(1)

tags_medata = [
	{
		"name" : "Users",
		"description" : "Users in UPNEWS, handles login"
	}
]

app = FastAPI(title = "UPNEWS backend service", description = "UPNEWS is a open source news sharing platform", version = "0.1.0", openapi_tags = tags_medata)
from api.modules.routes import route
app.include_router(route)