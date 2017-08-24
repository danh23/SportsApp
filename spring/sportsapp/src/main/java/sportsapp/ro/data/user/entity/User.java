package sportsapp.ro.data.user.entity;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import sportsapp.ro.data.sport.entity.Sport;

@Entity
@Table(name="USERS")
public class User {

	private Long id;
	private String username;
	private String email;	
	private String facebookId;	
	private String firstName;
	private String lastName;
	private String city;
	private String country;
	private List<Sport> sports;
	private List<User> friend;
	
	@ManyToMany(fetch=FetchType.LAZY)
	@JoinTable(name="user_friends", joinColumns = { @JoinColumn(name = "user_id", referencedColumnName = "id")}, inverseJoinColumns = {
	@JoinColumn(name = "friend_id", referencedColumnName = "id")})
	@JsonIgnore
	public List<User> getFriend() {
		return friend;
	}
	public void setFriend(List<User> friend) {
		this.friend = friend;
	}
	
	@ManyToMany(fetch=FetchType.LAZY)
	@JoinTable(name="user_sports", joinColumns = { @JoinColumn(name = "user_id", referencedColumnName = "id")}, 
		inverseJoinColumns = { @JoinColumn(name = "sport_id", referencedColumnName = "id")})
	@JsonBackReference
	public List<Sport> getSports() {
		return sports;
	}
	public void setSports(List<Sport> sports) {
		this.sports = sports;
	}
	
	@Id
    @GeneratedValue(strategy = GenerationType.AUTO)	
	@Column(name = "id", unique = true, nullable = false)
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
	
	@Column(unique=true)
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
	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	public String getCountry() {
		return country;
	}
	public void setCountry(String country) {
		this.country = country;
	}
	@Override
	public String toString() {
		return "User [id=" + id + ", username=" + username + ", email=" + email + ", facebookId=" + facebookId
				+ ", firstName=" + firstName + ", lastName=" + lastName + ", city=" + city + ", country=" + country
				+ "]";
	}
	
}
