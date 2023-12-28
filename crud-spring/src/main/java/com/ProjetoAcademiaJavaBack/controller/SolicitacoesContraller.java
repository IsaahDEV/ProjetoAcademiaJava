package com.ProjetoAcademiaJavaBack.controller;


import com.ProjetoAcademiaJavaBack.model.Itens;
import com.ProjetoAcademiaJavaBack.model.Solicitacoes;
import com.ProjetoAcademiaJavaBack.repository.SolicitacoesRepository;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/solicitacoes")
@AllArgsConstructor
public class SolicitacoesContraller {


    private final SolicitacoesRepository solicitacoesRepository;
    @GetMapping
    public  @ResponseBody List<Solicitacoes> list() {
        return solicitacoesRepository.findAll();
    }
    @GetMapping("/{id}")
    public ResponseEntity<Solicitacoes> findById(@PathVariable Long id) {
        return solicitacoesRepository.findById(id)
                .map(record -> ResponseEntity.ok().body(record))
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    @ResponseStatus(code = HttpStatus.CREATED)
    public Solicitacoes create(@RequestBody Solicitacoes solicitacoes){
        return solicitacoesRepository.save(solicitacoes);
    }

}

