package sportsapp.ro.data.sport.entity;

import java.io.Serializable;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

import sportsapp.ro.data.user.entity.User;

@Entity
@Table(name="SPORTS")
public class Sport implements Serializable {

	private static final long serialVersionUID = -5669618779638230508L;

	@Id
    @GeneratedValue(strategy = GenerationType.AUTO)	
	@Column(name = "id", unique = true, nullable = false)
	private Integer id;
	
	private String name;
	
/*	@ManyToMany(fetch = FetchType.EAGER)
	@JoinTable(name = "user_sports")
	private List<User> user;
	
	
	public List<User> getUsers() {
		return user;
	}

	public void setUsers(List<User> users) {
		this.user = users;
	}*/

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	@Override
	public String toString() {
		return "Sport [id=" + id + ", name=" + name + "]";
	}

}
