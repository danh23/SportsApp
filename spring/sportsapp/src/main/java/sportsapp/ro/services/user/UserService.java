package sportsapp.ro.services.user;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import sportsapp.ro.controllers.user.bean.request.DeleteUserSportRequest;
import sportsapp.ro.controllers.user.bean.request.SetUserSportsRequest;
import sportsapp.ro.controllers.user.bean.response.SetUserSportsResponse;
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
	
	public List<User> getUserFriends(Long userId){
		User user = userRepository.findOne(userId);
		return user.getFriend();
	}
	
	public List<Sport> getUserSports(Long id) {
		User user = userRepository.findOne(id);
		return user.getSports();
	}
	
	public Page<User> getAllUsersBySport(Integer sportId) {
		Pageable page = new PageRequest(0, 10);
		return userRepository.findAllUsersBySports_Id(sportId, page);
	}

	public SetUserSportsResponse setUserSports(SetUserSportsRequest request) {
		SetUserSportsResponse response = new SetUserSportsResponse();
		User user = userRepository.findOne(request.getUserId());
		user.setSports(request.getSports());
		userRepository.saveAndFlush(user);
		response.setSports(user.getSports());
		return response;
	}

	public void deleteUserSport(DeleteUserSportRequest request) {
		User user = userRepository.findOne(request.getUserId());
		Sport sport = sportRepository.findOne(request.getSportId());
		user.getSports().remove(sport);
		userRepository.saveAndFlush(user);
	}

}
