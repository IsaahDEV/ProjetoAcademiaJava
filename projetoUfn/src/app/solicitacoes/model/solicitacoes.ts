export interface Solicitacao{
  _id: string;
  solicitante: string;
  setor: string;
  quantidade: number;
  centroCusto: number;
  dataSolicitacao: string;
  status: string;
  codigosItens: number[];


}
