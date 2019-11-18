package com.example.react.config;

import com.atlassian.templaterenderer.TemplateRenderer;
import org.springframework.aop.aspectj.annotation.ReflectiveAspectJAdvisorFactory;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
//import org.springframework.context.weaving.AspectJWeavingEnabler;
//import org.springframework.instrument.classloading.InstrumentationLoadTimeWeaver;

import static com.atlassian.plugins.osgi.javaconfig.OsgiServices.importOsgiService;
import org.springframework.aop.aspectj.annotation.AnnotationAwareAspectJAutoProxyCreator;

@Configuration
public class BeansConfig {

    @Bean
    public TemplateRenderer getTemplateRendererBean() {
        return importOsgiService(TemplateRenderer.class);
    }

    @Bean
    public ReflectiveAspectJAdvisorFactory getReflective() {
        return importOsgiService(ReflectiveAspectJAdvisorFactory.class);
    }

//    @Bean
//    public AnnotationAwareAspectJAutoProxyCreator getAnnotation() {
//        return importOsgiService(AnnotationAwareAspectJAutoProxyCreator.class);
//    }

//    @Bean
//    public InstrumentationLoadTimeWeaver loadTimeWeaver() {
//        return importOsgiService(InstrumentationLoadTimeWeaver.class);
//    }
//
//    @Bean
//    public AspectJWeavingEnabler getEnabler() {
//        AspectJWeavingEnabler aspectJWeavingEnabler = importOsgiService(AspectJWeavingEnabler.class);
//        AspectJWeavingEnabler.enableAspectJWeaving(loadTimeWeaver(), ClassLoader.getSystemClassLoader());
//        return aspectJWeavingEnabler;
//    }
}
