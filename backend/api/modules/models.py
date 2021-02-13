# No. | Name of editor | Changelog                                              | Datetime
#==============================================================================================
# 1   | Naiame         | Added init schemas		                 				| 2021-02-12
#==============================================================================================

from typing import Optional
from pydantic import BaseModel, EmailStr

class BaseUser(BaseModel):
	email: EmailStr
	password: str

class UserCRUD(BaseUser):
	username: str
	first_name: str
	last_name: str
	id: Optional[int]

class BaseResponse(BaseModel):
	success: bool
	error: bool
	msg: Optional[str]

class SuccessResponse(BaseResponse):
	success: bool = True
	error: bool = False
	msg: str

	class Config:
		schema_extra = {
			"example" : {
				"success" : True,
				"error" : False,
				"msg" : "Success message"
			}
		}

class ErrorResponse(BaseResponse):
	success: bool = False
	error: bool = True
	msg: str

	class Config:
		schema_extra = {
			"example" : {
				"success" : False,
				"error" : True,
				"msg" : "Error message"
			}
		}

class AuthSuccess(BaseResponse):
	success: bool = True
	error: bool = False
	msg: str

	class Config:
		schema_extra = {
			"example" : {
				"success" : True,
				"error" : False,
				"msg" : "Token for authorization"
			}
		}

class ListResponse(BaseResponse):
	data: list = []

	class Config:
		schema_extra = {
			"example" : {
				"username" : "Foo"
			}
		}

class ProfileResponse(BaseResponse):
	data: dict = []

	class Config:
		schema_extra = {
			"example" : {
				"username" : "Foo",
				"first_name" : "Foo",
				"last_name" : "Bar",
				"email" : "foo.bar@example.com",
				"created_at" : "2021-01-01",
				"updated_at" : "2021-01-01"
			}
		}