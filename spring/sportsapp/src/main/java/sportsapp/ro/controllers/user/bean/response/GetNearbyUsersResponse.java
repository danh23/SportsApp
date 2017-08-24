package sportsapp.ro.controllers.user.bean.response;

import java.util.List;

import sportsapp.ro.controllers.bean.BaseRequest;
import sportsapp.ro.data.user.entity.User;

public class GetNearbyUsersResponse extends BaseRequest {

	private static final long serialVersionUID = 5877598767214267256L;
	
	private List<User> nearbyUsers;

	public List<User> getNearbyUsers() {
		return nearbyUsers;
	}

	public void setNearbyUsers(List<User> nearbyUsers) {
		this.nearbyUsers = nearbyUsers;
	}

	@Override
	public String toString() {
		return "GetNearbyUsersResponse [nearbyUsers=" + nearbyUsers + "]";
	}
	
}
