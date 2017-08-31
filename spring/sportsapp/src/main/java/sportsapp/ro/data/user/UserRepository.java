package sportsapp.ro.data.user;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import sportsapp.ro.data.user.entity.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long>{

	@Query(value = "SELECT * FROM USERS MINUS SELECT * FROM USERS WHERE ID = ?1", nativeQuery = true)
	public List<User> findAllUsers(Long userId);
	
	public User findOneByEmail(String email);
	
	public Page<User> findAllUsersBySports_Id(Integer sportId, Pageable page);

}
