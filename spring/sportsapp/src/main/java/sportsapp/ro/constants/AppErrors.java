package sportsapp.ro.constants;

public enum AppErrors {
    INTERNAL_SERVER_ERROR(0, "Internal service error!"),    
    INVALID_SHOP(1, "Invalid shop code"),
    VALIDATION_ERROR(2, "Validation Error"),    
    INVALID_LANGUAGE(3, "Invalid language code"),
    INVALID_TICKET(4, "Invalid ticket"),
    APPOINTMENT_SERVICE_ERROR(5,"Appointment service error"),
    INTERNAL_APPOINTMENT_ERROR(6,"Internal appointment service error"),
    INVALID_SHOP_OPERATION_ID(7,"Operation unavailable for this shop"),
    NO_ZONE_DEFINED(8,"No zone defined for specified shop and operation"),
    NO_DESK_DEFINED(9,"Invalid shop desk"),
    INTERNAL_DSMX_ERROR(10,"Internal DSMX service error"),
    INVALID_USERNAME(11, "Invalid username"),
    INVALID_USER_LOGGED_IN(12,"User is not logged in"),
    INVALID_USER_STATUS_ID(13,"Invalid user status id"),
    INVALID_CLOSE_ACTION(14, "Invalid close action value"),
    INVALID_USER_ZONE(15,"Undefined zone for current user"),
    INVALID_TICKET_TYPE(16, "Invalid ticket type"),
    INVALID_USER_RIGHTS(17,"Invalid user rights for this operation"),
    INVALID_ZONE(18, "Invalid zone id"),
    INVALID_OPERATION_ID(19,"Invalid operation id"),
    INVALID_APP_MESSAGE_KEY(20,"Invalid application message key"),
    EMPTY_LANGUAGES_LIST(21,"The languages list cannot be empty"),
    EMPTY_ZONES_LIST(22,"The zones list cannot be empty"),
    EMPTY_OPERATIONS_LIST(23,"The operations list cannot be empty"),
	INVALID_DATE_OLD(24,"The date provided was older then current date"),
	SHOPS_NOT_FOUND(25,"The date provided was older then current date"),
	INVALID_QUEUE_TICKET(26, "Invalid queue ticket"),
	ITEMS_NOT_FOUND(27, "No items found!"),
	INVALID_DATA(28, "Invalid data!"),
	INVALID_USER_SHOP(29, "Invalid shopcode for user!"),
	INVALID_AGENT_INFO(30, "Invalid agent info!"),
	INVALID_APP_AGENT(31, "Invalid application agent!"),
	INVALID_SHOP_CONFIG(32, "Shop is not configured! Please contact the platform Administrator!"),
	INVALID_DEALER_PROFILE(33, "Invalid dealer profile!"),
	INVALID_SALES_PROFILE(33, "Invalid sales profile!"),
	ZONE_DEACTIVATION_ERROR(34, "This zone cannot be deactivated because is active for the shop :"),
	INVALID_APPOINTMENT(35,"Invalid appointment id"),
	INVALID_PICTURE(36,"Invalid Base64 picture"),
	INVALID_TICKET_IN_PROGRESS(37,"Ticket is not in progress"),
	INVALID_APPOINTMENT_IN_PROGRESS(38,"Appointment is not in progress"),
	INTERVAL_OPNS_SERVICE_ERROR(39,"Internal OPNS service error");
	

    private Integer code;
    private String message;

    AppErrors(Integer code, String message) {
        this.code = code;
        this.message = message;
    }

    public Integer getCode() {
        return code;
    }

    public void setCode(Integer code) {
        this.code = code;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
