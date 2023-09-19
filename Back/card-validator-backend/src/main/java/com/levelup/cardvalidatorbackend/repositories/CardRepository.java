package com.levelup.cardvalidatorbackend.repositories;

import com.levelup.cardvalidatorbackend.models.entities.Card;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CardRepository extends JpaRepository<Card, Long> {

}
