package com.nmrmasakazu.api.repository.item;

import com.nmrmasakazu.api.domain.item.ItemTr;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ItemTrRepository extends JpaRepository<ItemTr, Long> {

    ItemTr findById(int id);

}
