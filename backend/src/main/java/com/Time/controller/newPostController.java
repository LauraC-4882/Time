package com.Time.controller;

import com.Time.dto.PostDto;
import com.Time.service.newPostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@PostMapping("/submit-form") //change for future
public String submitForm(@ModelAttribute FormData formData) {
    System.out.println("Relationship: " + formData.getRelationship());
    return "redirect:/form-success"; // Redirect to a success page
}

@GetMapping("/form-success")
public String formSuccess() {
    return "form-success";
}


}
