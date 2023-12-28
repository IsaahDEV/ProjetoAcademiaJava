package com.ProjetoAcademiaJavaBack.model;


import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
public class Solicitacoes {
    @Id
    @GeneratedValue(strategy =  GenerationType.AUTO)
    private Long id;

    @Column(length = 200, nullable = false)
    private String nome;

    @Column(length = 10, nullable = false)
    private int codigo;

    @Column(length = 10, nullable = false)
    private float preco;

    @Column(length = 10, nullable = false)
    private  int quantidade;

}
