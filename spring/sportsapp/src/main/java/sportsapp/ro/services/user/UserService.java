package sportsapp.ro.services.user;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import sportsapp.ro.data.user.UserRepository;
import sportsapp.ro.data.user.entity.User;
import sportsapp.ro.data.user_friends.UserFriendsRepository;
import sportsapp.ro.data.user_friends.entity.UserFriends;

@Service
public class UserService {

	@Autowired
	private UserRepository userRepository;
	
	@Autowired UserFriendsRepository userFriendsRepository;
	
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
	
	public List<UserFriends> getUserFriends(Integer userId){
		return userFriendsRepository.findByUser(userId);
	}
}
