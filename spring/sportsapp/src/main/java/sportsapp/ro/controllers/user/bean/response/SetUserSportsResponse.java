package sportsapp.ro.controllers.user.bean.response;

import java.util.List;

import sportsapp.ro.controllers.bean.BaseRequest;
import sportsapp.ro.data.sport.entity.Sport;

public class SetUserSportsResponse extends BaseRequest {

	private static final long serialVersionUID = -6185706568894525418L;
	
	private List<Sport> sports;

	public List<Sport> getSports() {
		return sports;
	}

	public void setSports(List<Sport> sports) {
		this.sports = sports;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}

	@Override
	public String toString() {
		return "SetUserSportsResponse [sports=" + sports + "]";
	}

}
