package sportsapp.ro.services.sport;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import sportsapp.ro.data.sport.SportRepository;
import sportsapp.ro.data.sport.entity.Sport;

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
		return sportRepository.findByUser_Id(id);
	}
}
