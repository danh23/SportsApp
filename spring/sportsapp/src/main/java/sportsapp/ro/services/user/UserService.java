package sportsapp.ro.services.user;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import sportsapp.ro.data.user.UserRepository;
import sportsapp.ro.data.user.entity.User;

@Service
public class UserService {

	@Autowired
	private UserRepository userRepository;
	
	public User getUserByUsername(String username) {
		User user = userRepository.findOneByUsername(username);
		return user;
	}
	
	public User setUser(User user) {
		return userRepository.saveAndFlush(user);
	}
	
	public List<User> getAllUsers(){
		return userRepository.findAll();
	}
}
