package com.example.react.aop;

import lombok.extern.slf4j.Slf4j;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
//import org.springframework.context.annotation.EnableLoadTimeWeaving;
import org.springframework.stereotype.Component;


//import static org.springframework.context.annotation.EnableLoadTimeWeaving.AspectJWeaving.ENABLED;

@Slf4j
@Aspect
@Component
//@EnableLoadTimeWeaving(aspectjWeaving=ENABLED)
public class Logging {

//    @Before("@annotation(com.example.react.aop.Loggable)")
    @Before("execution(* com.example.react.rest.Controller.*(..))")
    public void beforeAdvice(){
        log.info("\n\n\n\n\nTest\n\n\n\n\n");
    }
}
