package com.ProjetoAcademiaJavaBack.controller;

import com.ProjetoAcademiaJavaBack.model.Itens;
import com.ProjetoAcademiaJavaBack.repository.ItensRepository;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/itens")
@AllArgsConstructor
public class ItensController {


    private final ItensRepository itensRepository;
    @GetMapping
    public List<Itens> list() {
        return itensRepository.findAll();
    }



}
