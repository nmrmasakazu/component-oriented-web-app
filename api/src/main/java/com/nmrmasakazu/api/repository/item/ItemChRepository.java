package com.nmrmasakazu.api.repository.item;

import com.nmrmasakazu.api.domain.item.ItemCh;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ItemChRepository extends JpaRepository<ItemCh, Long> {

    ItemCh findById(int id);

}
