package sportsapp.ro.controllers.user.bean.request;

import sportsapp.ro.controllers.bean.BaseRequest;

public class GetNearbyUsersRequest extends BaseRequest {
	
	private static final long serialVersionUID = 1252061301884668190L;
	
	private String username;
	private String email;
	private long logitude;
	private long latitude;

	public GetNearbyUsersRequest() {
		super();
	}

	public GetNearbyUsersRequest(String username, String email, long logitude, long latitude) {
		super();
		this.username = username;
		this.email = email;
		this.logitude = logitude;
		this.latitude = latitude;
	}
	
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public long getLogitude() {
		return logitude;
	}
	public void setLogitude(long logitude) {
		this.logitude = logitude;
	}
	public long getLatitude() {
		return latitude;
	}
	public void setLatitude(long latitude) {
		this.latitude = latitude;
	}
	@Override
	public String toString() {
		return "GetNearbyUsersRequest [username=" + username + ", email=" + email + ", logitude=" + logitude
				+ ", latitude=" + latitude + "]";
	}
}
