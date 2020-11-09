package com.nmrmasakazu.api.repository.item;

import com.nmrmasakazu.api.domain.item.UserItemTr;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface UserItemTrRepository extends JpaRepository<UserItemTr, Long> {

    UserItemTr findById(int id);

    @Query(value = "select * from user_item_tr where user_id = :user_id", nativeQuery = true)
    List<UserItemTr> findItemByUserId(@Param("user_id") int user_id);

    @Query(value = "select * from user_item_tr where user_id = :user_id and item_id = :item_id", nativeQuery = true)
    UserItemTr findItemByItemId(@Param("user_id") int user_id, @Param("item_id") int item_id);

}
