package sportsapp.ro.exception;

import sportsapp.ro.constants.AppErrors;

public class BaseException extends RuntimeException {

	private static final long serialVersionUID = -5721536699867067182L;
	
	private String errorInfo;
	private Integer errorCode;

	public BaseException(Integer errorCode, String errorMessage) {
		super(errorMessage);
		this.errorInfo = errorMessage;
		this.errorCode = errorCode;
	}
	
	public BaseException(AppErrors error) {
		super(error.getMessage());
		this.errorCode = error.getCode();
		this.errorInfo = error.getMessage();
	}	

	public String getErrorInfo() {
		return errorInfo;
	}

	public void setErrorInfo(String errorInfo) {
		this.errorInfo = errorInfo;
	}

	public Integer getErrorCode() {
		return errorCode;
	}

	public void setErrorCode(Integer errorCode) {
		this.errorCode = errorCode;
	}
	
}