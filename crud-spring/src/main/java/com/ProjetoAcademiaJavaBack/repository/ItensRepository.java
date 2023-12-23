package com.ProjetoAcademiaJavaBack.repository;

import com.ProjetoAcademiaJavaBack.model.Itens;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


public interface ItensRepository extends JpaRepository<Itens,Long > {
}
