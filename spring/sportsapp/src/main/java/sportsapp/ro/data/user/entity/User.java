package sportsapp.ro.data.user.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;

import sportsapp.ro.data.user_friends.entity.UserFriends;

@Entity
@Table(name="USERS")
public class User {

	@Id
    @GeneratedValue(strategy = GenerationType.AUTO)	
	@Column(name = "id", unique = true, nullable = false)
	private Long id;
	
	private String username;
	
	@Column(unique=true)
	private String email;
	
	private String facebookId;
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
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
	public String getFacebookId() {
		return facebookId;
	}
	public void setFacebookId(String facebookId) {
		this.facebookId = facebookId;
	}
	
}
