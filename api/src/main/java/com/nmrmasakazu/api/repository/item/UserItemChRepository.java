package com.nmrmasakazu.api.repository.item;

import com.nmrmasakazu.api.domain.item.UserItemCh;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface UserItemChRepository extends JpaRepository<UserItemCh, Long> {

    UserItemCh findById(int id);

    @Query(value = "select * from user_item_ch where user_id = :user_id", nativeQuery = true)
    List<UserItemCh> findItemByUserId(@Param("user_id") int user_id);

    @Query(value = "select * from user_item_ch where user_id = :user_id and item_id = :item_id", nativeQuery = true)
    UserItemCh findItemByItemId(@Param("user_id") int user_id, @Param("item_id") int item_id);

}
