package sportsapp.ro.services.sport;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import sportsapp.ro.data.sport.SportRepository;
import sportsapp.ro.data.sport.entity.Sport;
import sportsapp.ro.data.user.UserRepository;
import sportsapp.ro.data.user.entity.User;

@Service
public class SportService {

	@Autowired
	private SportRepository sportRepository;
	
	public Sport setSport(Sport sport) {
		Sport dbSport = new Sport();
		dbSport.setName(sport.getName());
		return sportRepository.saveAndFlush(dbSport);
	}
	
	public List<Sport> getAllSports(){
		return sportRepository.findAll();
	}
	
	public List<Sport> getSportsByUserId(Long id){
		return null;
	}
}
