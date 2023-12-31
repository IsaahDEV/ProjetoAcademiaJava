package com.ProjetoAcademiaJavaBack.controller;

import com.ProjetoAcademiaJavaBack.model.Itens;
import com.ProjetoAcademiaJavaBack.repository.ItensRepository;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/itens")
@AllArgsConstructor
public class ItensController {


    private final ItensRepository itensRepository;
    @GetMapping
    public  @ResponseBody List<Itens> list() {
        return itensRepository.findAll();
    }
    @GetMapping("/{id}")
    public ResponseEntity<Itens>  findById(@PathVariable  Long id) {
        return itensRepository.findById(id)
                .map(recordFound -> ResponseEntity.ok().body(recordFound))
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    @ResponseStatus(code = HttpStatus.CREATED)
    public Itens create(@RequestBody Itens itens){
        return itensRepository.save(itens);
    }

    @PutMapping("/{id}")
    public Itens update(@PathVariable Long id, @RequestBody Itens itens){
        return itensRepository.findById(id)
                .map(recordFound -> {
                    recordFound.setCodigo(itens.getCodigo());
                    recordFound.setNome(itens.getNome());
                    recordFound.setPreco(itens.getPreco());
                    recordFound.setQuantidade(itens.getQuantidade());
                    Itens updated = itensRepository.save(recordFound);
                    return ResponseEntity.ok().body(updated);
                })
                .orElse(ResponseEntity.notFound().build()).getBody();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id){
        return itensRepository.findById(id)
                .map(recordFound -> {
                    itensRepository.deleteById(id);
                    return ResponseEntity.noContent().<Void>build();
                })
                .orElse(ResponseEntity.notFound().build());
    }
}