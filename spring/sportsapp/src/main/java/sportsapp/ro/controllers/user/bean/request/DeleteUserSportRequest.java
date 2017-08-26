package sportsapp.ro.controllers.user.bean.request;

import sportsapp.ro.controllers.bean.BaseRequest;

public class DeleteUserSportRequest  extends BaseRequest {

	private static final long serialVersionUID = -7264763063213317746L;
	
	private Long userId;
	private Integer sportId;
	
	public Long getUserId() {
		return userId;
	}
	public void setUserId(Long userId) {
		this.userId = userId;
	}
	public Integer getSportId() {
		return sportId;
	}
	public void setSportId(Integer sportId) {
		this.sportId = sportId;
	}
	@Override
	public String toString() {
		return "DeleteUserSportRequest [userId=" + userId + ", sportId=" + sportId + "]";
	}

}
