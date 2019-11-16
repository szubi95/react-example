package com.example.react;

import com.atlassian.templaterenderer.TemplateRenderer;
import com.google.common.collect.Maps;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class ReactServlet extends HttpServlet{

    private final TemplateRenderer templateRenderer;

    public ReactServlet(TemplateRenderer templateRenderer) {
        this.templateRenderer = templateRenderer;
    }

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws IOException {
        templateRenderer.render("index.html", Maps.newHashMap(), resp.getWriter());
    }
}