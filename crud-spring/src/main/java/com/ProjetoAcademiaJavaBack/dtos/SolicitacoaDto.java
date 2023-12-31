package com.ProjetoAcademiaJavaBack.dtos;

import com.ProjetoAcademiaJavaBack.model.Itens;
import jakarta.persistence.*;

public class SolicitacoaDto {

    private String solicitante;

    private String setor;

    private int quantidade;

    private int centroCusto;

    private String dataSolicitacao;

    private String status;
    private int Codigoitem;

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

    public int getItem() {
        return Codigoitem;
    }

    public void setItem(int item) {
        this.Codigoitem = item;
    }
}
