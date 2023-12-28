package com.ProjetoAcademiaJavaBack.repository;

import com.ProjetoAcademiaJavaBack.model.Itens;
import com.ProjetoAcademiaJavaBack.model.Solicitacoes;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SolicitacoesRepository extends JpaRepository<Solicitacoes,Long > {
}
