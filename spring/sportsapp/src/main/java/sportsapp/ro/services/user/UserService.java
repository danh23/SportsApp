package sportsapp.ro.services.user;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import sportsapp.ro.data.sport.SportRepository;
import sportsapp.ro.data.sport.entity.Sport;
import sportsapp.ro.data.user.UserRepository;
import sportsapp.ro.data.user.entity.User;
import sportsapp.ro.data.user_friends.UserFriendsRepository;
import sportsapp.ro.data.user_friends.entity.UserFriends;
import sportsapp.ro.exception.CustomException;

@Service
public class UserService {

	@Autowired
	private UserRepository userRepository;
	
	@Autowired 
	private SportRepository sportRepository;
	
	@Autowired 
	private UserFriendsRepository userFriendsRepository;
	
	public User getUserByEmail(String email) {
		User user = userRepository.findOneByEmail(email);
		user.getFriend();
		return user;
	}
	
	public User setUser(User user) {
		try{
			User dbUser = userRepository.findOneByEmail(user.getEmail());
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
	
	public List<Sport> getUserSports(Long id) {
		User user = userRepository.findOne(id);
		return user.getSport();
	}
}
