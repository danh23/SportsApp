package sportsapp.ro.data.user_friends.entity;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.IdClass;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import sportsapp.ro.data.user.entity.User;

@Entity
//@IdClass(UserFriendsPk.class)
@Table(name="user_friends")
public class UserFriends implements Serializable{

	private static final long serialVersionUID = -4486216277928034697L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)	
	private Integer id;
	
	private Integer user;
	private Integer friend;
	
	public Integer getUserId() {
		return user;
	}
	public void setUserId(Integer user) {
		this.user = user;
	}
	
	@ManyToOne(fetch=FetchType.EAGER)
	@JoinColumn(name="id")
	public Integer getFriendId() {
		return friend;
	}
	public void setFriendId(Integer friend) {
		this.friend = friend;
	}
	
	@Override
	public String toString() {
		return "UserFriends [user=" + user + ", friend=" + friend + "]";
	}

}
