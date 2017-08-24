package sportsapp.ro.controllers.sport;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import sportsapp.ro.data.sport.entity.Sport;
import sportsapp.ro.exception.CustomException;
import sportsapp.ro.services.sport.SportService;

@RestController
@RequestMapping(value = "/sport")
public class SportController {
	
	@Autowired
	private SportService sportService;
	
	@RequestMapping(value = "/setSport" , method = RequestMethod.POST)
	public ResponseEntity<Sport> setSport(@RequestBody Sport sport) throws CustomException {
		Sport sportResponse = sportService.setSport(sport);  
	    return new ResponseEntity<>(sportResponse, HttpStatus.OK);
	}
	
	@RequestMapping(value = "/getAllSports" , method = RequestMethod.GET)
	public ResponseEntity<List<Sport>> getAllSports() {
		List<Sport> sportResponse = sportService.getAllSports();  
	    return new ResponseEntity<>(sportResponse, HttpStatus.OK);
	}
	  
	  

}
