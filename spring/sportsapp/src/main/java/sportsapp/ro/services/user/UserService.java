package sportsapp.ro.services.user;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import sportsapp.ro.data.user.UserRepository;
import sportsapp.ro.data.user.entity.User;
import sportsapp.ro.data.user_friends.UserFriendsRepository;
import sportsapp.ro.data.user_friends.entity.UserFriends;
import sportsapp.ro.exception.CustomException;

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
		try{
			User dbUser = userRepository.findOneByUsername(user.getUsername());
			if(dbUser != null) {
				dbUser.setCity(user.getCity());
				dbUser.setCountry(user.getCountry());
				dbUser.setEmail(user.getEmail());
				dbUser.setFacebookId(user.getFacebookId());
				dbUser.setFirstName(user.getFirstName());
				dbUser.setLastName(user.getLastName());
				dbUser.setUsername(user.getUsername());
				return userRepository.saveAndFlush(dbUser);
			}
			return userRepository.saveAndFlush(user);
		} catch(Exception e){
			throw new CustomException(0, e.getMessage());
		}
	}
	
	public List<User> getAllUsers(){
		return userRepository.findAll();
	}
	
	public List<UserFriends> getUserFriends(Integer userId){
		return userFriendsRepository.findByUser(userId);
	}
}
