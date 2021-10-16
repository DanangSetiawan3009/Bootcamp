package com.g2academy.bootcamp.orderfullfillment;

import com.g2academy.bootcamp.orderfullfillment.messaging.CheckoutReceiver;
import org.springframework.amqp.core.MessageListener;
import org.springframework.amqp.rabbit.connection.ConnectionFactory;
import org.springframework.amqp.rabbit.listener.SimpleMessageListenerContainer;
import org.springframework.amqp.rabbit.listener.adapter.MessageListenerAdapter;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class OrderfullfillmentFinalProjectApplication {

	public static void main(String[] args) {
		SpringApplication.run(OrderfullfillmentFinalProjectApplication.class, args);
	}
        
        public static final String TOPIC_EXCHANGE_NAME = "tokoshop-exchange";
        
        public static final String QUEUE_NAME = "tokoshop-cart-queue";
        
        @Bean
        public SimpleMessageListenerContainer container(
                        ConnectionFactory connectionFactory,
                MessageListenerAdapter listener) {
            SimpleMessageListenerContainer container = new SimpleMessageListenerContainer();
            container.setConnectionFactory(connectionFactory);
            container.setQueueNames(QUEUE_NAME);
            container.setMessageListener(listener);
            return container;
        }
        
        @Bean
        public MessageListenerAdapter listenerAdapter(CheckoutReceiver receiver) {
            return new MessageListenerAdapter(receiver, "receiveMessage");
        }

}
