package com.ProjetoAcademiaJavaBack.model;


import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
public class Solicitacoes {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(length = 200, nullable = false)
    private String solicitante;

    @Column(length = 10, nullable = false)
    private String setor;

    @Column(nullable = false)
    private int quantidade;

    @Column(nullable = false)
    private int centroCusto;



    @Column(nullable = false)
    private String dataSolicitacao;

    @Column(length = 10, nullable = false)
    private String status;


    @ManyToOne // Muitas solicitações para um item, ajuste conforme necessário
    @JoinColumn(name = "item_id") // Nome da coluna de chave estrangeira na tabela de Solicitacoes
    private Itens item;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getSolicitante() {
        return solicitante;
    }

    public void setSolicitante(String solicitante) {
        this.solicitante = solicitante;
    }

    public String getSetor() {
        return setor;
    }

    public void setSetor(String setor) {
        this.setor = setor;
    }

    public int getQuantidade() {
        return quantidade;
    }

    public void setQuantidade(int quantidade) {
        this.quantidade = quantidade;
    }

    public int getCentroCusto() {
        return centroCusto;
    }

    public void setCentroCusto(int centroCusto) {
        this.centroCusto = centroCusto;
    }

    public String getDataSolicitacao() {
        return dataSolicitacao;
    }

    public void setDataSolicitacao(String dataSolicitacao) {
        this.dataSolicitacao = dataSolicitacao;
    }
    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public Itens getItem() {
        return item;
    }

    public void setItem(Itens item) {
        this.item = item;
    }
   }
