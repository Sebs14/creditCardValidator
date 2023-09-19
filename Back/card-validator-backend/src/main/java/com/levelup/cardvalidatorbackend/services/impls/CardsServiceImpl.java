package com.levelup.cardvalidatorbackend.services.impls;

import com.levelup.cardvalidatorbackend.models.dto.CardInformation;
import com.levelup.cardvalidatorbackend.models.entities.Card;
import com.levelup.cardvalidatorbackend.repositories.CardRepository;
import com.levelup.cardvalidatorbackend.services.CardsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CardsServiceImpl implements CardsService {

    @Autowired
    private CardRepository cardRepository;

    @Override
    public void validate(CardInformation cardInformation) throws Exception {
        Card card = new Card();

        card.setOwner(cardInformation.getOwner());
        card.setNumber(cardInformation.getNumber());
        card.setCvv(cardInformation.getCvv());
        card.setMonth(cardInformation.getMonth());
        card.setYear(cardInformation.getYear());

        cardRepository.save(card);
    }
}
