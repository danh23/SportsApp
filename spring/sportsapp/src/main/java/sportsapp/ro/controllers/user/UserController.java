package sportsapp.ro.controllers.user;

import java.security.Principal;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import sportsapp.ro.controllers.user.bean.GetNearbyUsersRequest;
import sportsapp.ro.controllers.user.bean.GetNearbyUsersResponse;
import sportsapp.ro.data.user.entity.User;
import sportsapp.ro.services.user.UserService;

@RestController
@RequestMapping(value = "/user")
public class UserController {
	
	@Autowired
	private UserService userService;
	
	  @RequestMapping(value = "/getUser" , method = RequestMethod.GET)
	  public ResponseEntity user(Principal principal) {
	    return new ResponseEntity(principal, HttpStatus.OK);
	  }
	  
	  @RequestMapping(value = "/getUserByUsername/{username}" , method = RequestMethod.GET)
	  public ResponseEntity<User> getAllUsers(@PathVariable String username) {
		  User user = userService.getUserByUsername(username);  
	    return new ResponseEntity<User>(user, HttpStatus.OK);
	  }
	  
	  @RequestMapping(value = "/getAllUsers" , method = RequestMethod.GET)
	  public ResponseEntity<List<User>> user() {
		  List<User> userList = userService.getAllUsers();  
	    return new ResponseEntity<List<User>>(userList, HttpStatus.OK);
	  }
	  
	  @RequestMapping(value = "/setUser" , method = RequestMethod.POST)
	  public ResponseEntity<User> user(@RequestBody User user) {
		  User userResponse = userService.setUser(user);  
	    return new ResponseEntity<User>(userResponse, HttpStatus.OK);
	  }
	  
	  @RequestMapping(value = "/getNearbyUsers" , method = RequestMethod.POST)
	  public ResponseEntity<GetNearbyUsersResponse> getNearbyUsers(GetNearbyUsersRequest request) {
	    return new ResponseEntity(null, HttpStatus.OK);
	  }
}
