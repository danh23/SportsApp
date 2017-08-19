package sportsapp.ro.data.user.entity;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import sportsapp.ro.data.sport.entity.Sport;

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
	
	private String firstName;
	private String lastName;
	private String city;
	private String country;
	
	@ManyToMany(fetch=FetchType.LAZY)
	@JoinTable(name = "user_sports")
	@JsonBackReference
	private List<Sport> sport;
	
	@ManyToMany(fetch=FetchType.LAZY)
	@JoinTable(name = "user_friends")
	@JsonBackReference
	private List<User> friend;

	public List<User> getFriend() {
		return friend;
	}
	public void setFriend(List<User> friend) {
		this.friend = friend;
	}
	public List<Sport> getSport() {
		return sport;
	}
	public void setSport(List<Sport> sport) {
		this.sport = sport;
	}
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
