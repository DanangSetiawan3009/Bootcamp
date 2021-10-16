package co.g2academy.bootcamp.finalexam.orderfullfillment.entity.controller;

import co.g2academy.bootcamp.finalexam.orderfullfillment.entity.Order;
import co.g2academy.bootcamp.finalexam.orderfullfillment.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class OrderController {

    @Autowired
    private OrderRepository orderRepository;

    @PostMapping("/order-shipped")
    public String setStatusToShip(
            @RequestBody Integer orderId) {
        Order order = orderRepository.findById(orderId).get();
        
        if(order != null){
            order.setStatus("DELIVERED");
            orderRepository.save(order);
        }
        return "ok";
    }

}
