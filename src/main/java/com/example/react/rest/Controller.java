package com.example.react.rest;

import com.example.react.rest.model.Model;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.util.Comparator;
import java.util.List;
import java.util.stream.Stream;

import static java.util.stream.Collectors.toList;

@Path("/react")
public class Controller {

    private List<Model> modelsList = Stream.of(
            Model.builder().id(1).name("Name1").description("opis1").build(),
            Model.builder().id(2).name("Name2").description("opis2").build(),
            Model.builder().id(3).name("Name3").description("opis3").build(),
            Model.builder().id(4).name("Name4").description("opis4").build(),
            Model.builder().id(5).name("Name5").description("opis5").build(),
            Model.builder().id(6).name("Name6").description("opis6").build(),
            Model.builder().id(7).name("Name7").description("opis7").build(),
            Model.builder().id(8).name("Name8").description("opis8").build()
    ).collect(toList());

    @GET
    @Path("/get")
    @Consumes({MediaType.APPLICATION_JSON})
    @Produces({MediaType.APPLICATION_JSON})
    public Response get() {
        return Response
                .ok(modelsList.stream()
                        .sorted(Comparator.comparing(Model::getId))
                        .collect(toList()))
                .build();
    }
}
