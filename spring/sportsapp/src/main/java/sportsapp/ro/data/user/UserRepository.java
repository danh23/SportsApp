package sportsapp.ro.data.user;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import sportsapp.ro.data.user.entity.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long>{

	public User findOneByEmail(String email);
	Page<User> findAllUsersBySports_Id(Integer sportId, Pageable page);
}
