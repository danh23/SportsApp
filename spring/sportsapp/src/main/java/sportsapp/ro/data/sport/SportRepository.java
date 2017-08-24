package sportsapp.ro.data.sport;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import sportsapp.ro.data.sport.entity.Sport;

@Repository
public interface SportRepository extends JpaRepository<Sport, Integer>{
	

}
