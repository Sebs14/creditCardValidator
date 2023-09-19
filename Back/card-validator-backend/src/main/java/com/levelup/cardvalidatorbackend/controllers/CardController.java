package com.levelup.cardvalidatorbackend.controllers;

import com.levelup.cardvalidatorbackend.services.CardsService;
import com.levelup.cardvalidatorbackend.models.dto.CardInformation;
import com.levelup.cardvalidatorbackend.models.dto.Messages;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.time.ZoneId;
import java.util.Date;

@RestController
@RequestMapping("/cards")
@CrossOrigin(origins = "*")
public class CardController {
    //Getting date
    Date date = new Date();
    ZoneId timeZone = ZoneId.systemDefault();
    LocalDate getLocalDate = date.toInstant().atZone(timeZone).toLocalDate();

    //Setting variables to compare
    Integer monthValue = getLocalDate.getMonthValue();
    Integer yearValue = getLocalDate.getYear();

    @Autowired
    CardsService cardsService;

    @PostMapping("/validate")
    public ResponseEntity<Messages> Validate (@RequestBody CardInformation cardInformation, BindingResult result) {
        try {
            if (result.hasErrors()) {
               String errors = result.getAllErrors().toString();

               return new ResponseEntity<>(
                 new Messages("There's some errors: " + errors), HttpStatus.BAD_REQUEST
               );
            }

            //Validation from card due to expiration date
            if ((cardInformation.getMonth() >= monthValue && cardInformation.getYear() >= yearValue && LuhnValidation(cardInformation.getNumber()))
                    || (cardInformation.getMonth() < monthValue && cardInformation.getYear() > yearValue) && LuhnValidation(cardInformation.getNumber())){
                //Validation due to CVV and PAN length, if it's a AMEX card the CVV must be 4 digits.
                if(cardInformation.getNumber().length() == 15 && cardInformation.getCvv().length() == 4){
                    cardsService.validate(cardInformation);

                    return new ResponseEntity<>(
                      new Messages("Valid Card"), HttpStatus.CREATED
                    );
                } else if(cardInformation.getNumber().length() > 15 && cardInformation.getCvv().length() == 3){
                    cardsService.validate(cardInformation);

                    return new ResponseEntity<>(
                            new Messages("Valid Card"), HttpStatus.CREATED
                    );
                }
            }
            // if Card's not valid then return
            return new ResponseEntity<>(
              new Messages("Not a valid card"), HttpStatus.INTERNAL_SERVER_ERROR
            );
        }
        catch (Exception e) {
            return new ResponseEntity<>(
                    new Messages("Server error"),
                    HttpStatus.INTERNAL_SERVER_ERROR
            );
        }
    }

    private static boolean LuhnValidation(String pan) {
        int total = 0;
        boolean val = false;
        for (int i = pan.length() - 1; i >= 0; i--){
            int number = Integer.parseInt(pan.substring(i, i + 1));
            if (val) {
                number *= 2;
                if (number > 9) {
                    number = (number % 10) + 1;
                }
            }
            total += number;
            val = !val;
        }
        return (total % 10 == 0);
    }
}
