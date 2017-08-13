package sportsapp.ro.data.user_friends;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import sportsapp.ro.data.user_friends.entity.UserFriends;
import sportsapp.ro.data.user_friends.entity.UserFriendsPk;

@Repository
public interface UserFriendsRepository extends JpaRepository<UserFriends, UserFriendsPk> {

	public List<UserFriends> findByUser(Integer userId);
}
