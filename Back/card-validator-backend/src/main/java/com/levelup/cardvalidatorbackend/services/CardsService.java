package com.levelup.cardvalidatorbackend.services;

import com.levelup.cardvalidatorbackend.models.dto.CardInformation;

public interface CardsService {

    void validate(CardInformation cardInformation) throws Exception;

}
