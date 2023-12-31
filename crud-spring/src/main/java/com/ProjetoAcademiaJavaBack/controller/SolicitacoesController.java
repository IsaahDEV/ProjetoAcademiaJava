package com.ProjetoAcademiaJavaBack.controller;


import com.ProjetoAcademiaJavaBack.dtos.SolicitacoaDto;
import com.ProjetoAcademiaJavaBack.model.Solicitacoes;
import com.ProjetoAcademiaJavaBack.repository.ItensRepository;
import com.ProjetoAcademiaJavaBack.repository.SolicitacoesRepository;
import jakarta.persistence.EntityExistsException;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/solicitacoes")
@AllArgsConstructor
public class SolicitacoesController {


    private final SolicitacoesRepository solicitacoesRepository;
    private final ItensRepository itensRepository;
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
    public Solicitacoes create(@RequestBody SolicitacoaDto solicitacoesRecebida){


        Solicitacoes solicitacaoAdd = new Solicitacoes();
        solicitacaoAdd.setStatus(solicitacoesRecebida.getStatus());
        solicitacaoAdd.setSetor(solicitacoesRecebida.getSetor());
        solicitacaoAdd.setDataSolicitacao(solicitacoesRecebida.getDataSolicitacao());
        solicitacaoAdd.setCentroCusto(solicitacoesRecebida.getCentroCusto());
        solicitacaoAdd.setItem(itensRepository.findByCodigo(solicitacoesRecebida.getItem()));
        solicitacaoAdd.setSolicitante(solicitacoesRecebida.getSolicitante());
        solicitacaoAdd.setQuantidade(solicitacoesRecebida.getQuantidade());

        return solicitacoesRepository.save(solicitacaoAdd);
    }
    @PutMapping("/{id}")
    public Solicitacoes update(@PathVariable Long id, @RequestBody Solicitacoes solicitacoes){
        return solicitacoesRepository.findById(id)
                .map(recordFound -> {
                    recordFound.setSolicitante(solicitacoes.getSolicitante());
                    recordFound.setSetor(solicitacoes.getSetor());
                    recordFound.setQuantidade(solicitacoes.getQuantidade());
                    recordFound.setCentroCusto(solicitacoes.getCentroCusto());
                    recordFound.setDataSolicitacao(solicitacoes.getDataSolicitacao());
                    recordFound.setStatus(solicitacoes.getStatus());
                    Solicitacoes updated = solicitacoesRepository.save(recordFound);
                    return ResponseEntity.ok().body(updated);
                })
                .orElse(ResponseEntity.notFound().build()).getBody();
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id){
        return solicitacoesRepository.findById(id)
                .map(recordFound -> {
                    solicitacoesRepository.deleteById(id);
                    return ResponseEntity.noContent().<Void>build();
                })
                .orElse(ResponseEntity.notFound().build());
    }

}

