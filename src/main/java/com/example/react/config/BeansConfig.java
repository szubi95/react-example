package com.example.react.config;

import com.atlassian.templaterenderer.TemplateRenderer;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import static com.atlassian.plugins.osgi.javaconfig.OsgiServices.importOsgiService;

@Configuration
public class BeansConfig {

    @Bean
    public TemplateRenderer getTemplateRendererBean() {
        return importOsgiService(TemplateRenderer.class);
    }
}
