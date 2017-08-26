package sportsapp.ro.data.sport;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import sportsapp.ro.data.sport.entity.Sport;
import sportsapp.ro.data.user.entity.User;

@Repository
public interface SportRepository extends JpaRepository<Sport, Integer>{
	
	Page<User> findAllUsersById(Integer sportId, Pageable page);
}
