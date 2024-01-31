package com.Time.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * 首页控制器
 * @author Narwhal
 **/
@Controller
public class MainController {

    @GetMapping("/")//浏览器访问/时，能够看到此字符串
    public String MainPage() {
        return "main";
    }

    @GetMapping("/about")//浏览器访问/时，能够看到此字符串
    public String aboutPage() {
        return "about";
    }
}
