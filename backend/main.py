import uvicorn
from api import app
from api.core.config import cnf

if "__main__" in __name__:
	uvicorn.run(app, host = cnf.SERVER_IP, port = cnf.SERVER_PORT)