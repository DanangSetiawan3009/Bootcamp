
package com.g2academy.bootcamp.orderfullfillment.messaging;

import java.util.concurrent.CountDownLatch;
import org.springframework.stereotype.Component;


@Component
public class CheckoutReceiver {
    
    private CountDownLatch latch = new CountDownLatch(1);
    public void receiveMessage(String message) {
        System.out.println("Receive: " + message);
        latch.countDown();
        // ideally convert message to cart object and
        // then convert cart object to order object and save it to database
    }
    public CountDownLatch getLatch() {
        return latch;
    }
}
