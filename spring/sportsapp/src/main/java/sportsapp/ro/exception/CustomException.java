package sportsapp.ro.exception;

import sportsapp.ro.constants.AppErrors;

public class CustomException extends BaseException {

	private static final long serialVersionUID = -5721536699867067182L;

	public CustomException(Integer errorCode, String errorMessage) {
		super(errorCode, errorMessage);
	}
	
	public CustomException(AppErrors error) {
		super(error);
	}

}