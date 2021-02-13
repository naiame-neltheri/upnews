# No. | Name of editor | Changelog                                              | Datetime
#==============================================================================================
# 1   | Naiame         | Intialized				                 				| 2021-02-12
# 2	  | Naiame		   | Added logging feature									| 2021-02-13
#==============================================================================================
import jwt, datetime
from api.core.config import cnf
from sqlalchemy.orm import Session
from api.core.database import get_db
from fastapi import APIRouter, Depends
from fastapi.responses import JSONResponse
from api.core.crud import get_users, create_user, get_user, update_user, authenticate
from api.modules.models import SuccessResponse, ErrorResponse, BaseUser, BaseResponse, AuthSuccess, UserCRUD, ListResponse, ProfileResponse

auth_resp = {
	200: {"model" : AuthSuccess, "description" : "Successful login"},
	401: {"model" : ErrorResponse, "description" : "Invalid username or password"}
}

register_resp = {
	200: {"model" : SuccessResponse, "description" : "User created successfully"},
	401: {"model" : ErrorResponse, "description" : "Invalid data"}
}

update_resp = {
	200: {"model" : SuccessResponse, "description" : "User data updated successfully"},
	400: {"model" : ErrorResponse, "description" : "Invalid data"}
}

route = APIRouter(prefix="/api/v1/user", tags = ["Users"])

@route.post("/auth", response_model = BaseResponse, responses = auth_resp, tags = ["Users"], summary = "User authentication")
def login(user: BaseUser, db: Session = Depends(get_db)):
	auth = authenticate(db, user.email, user.password)
	if auth:
		expiration = datetime.datetime.utcnow() + datetime.timedelta(minutes = cnf.SESSION_TIMER)
		token = jwt.encode({"username" : auth.username, "id" : auth.id, "exp" : expiration}, cnf.SECRET, algorithm = "HS256")
		return AuthSuccess(msg = token)
	else:
		return ErrorResponse(msg = "Invalid username or password")

@route.post("/register", response_model = BaseResponse, responses = register_resp, tags = ["Users"], summary = "Account creation")
def register(user: UserCRUD, db: Session = Depends(get_db)):
	ret = create_user(db, user)
	if ret:
		return SuccessResponse(msg = "User created")
	else:
		return ErrorResponse(msg = "Failed to create user")

@route.put('/update/{user_id}', response_model = BaseResponse, responses = update_resp, tags = ["Users"], summary = "Update user data")
def update_profile(user_id, user: UserCRUD, db: Session = Depends(get_db)):
	ret = update_user(db, user)
	if ret:
		return SuccessResponse(msg = "Data updated successfully")
	else:
		return ErrorResponse(msg = "Error occured while updating user data")

@route.get('/get/{user_id}', response_model = ProfileResponse, responses = {500: {"model" : ErrorResponse, "description" : "Error occured"}}, tags = ["Users"], summary = "Get profile information")
def get_profile(user_id, db: Session = Depends(get_db)):
	ret = get_user(db, user_id)
	if ret:
		return ProfileResponse(data = ret, success = True, error = False)
	else:
		return ErrorResponse(msg = "Error while getting data")


@route.get("/all", response_model = ListResponse, tags = ["Users"], summary = "Get all users in database")
async def get_all_user(db: Session = Depends(get_db)):
	data = get_users(db)
	if data:
		return ListResponse(success = True, error = False, data = data)
	else:
		return ErrorResponse(msg = "Error while getting data")