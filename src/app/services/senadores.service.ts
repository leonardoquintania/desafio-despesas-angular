import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Senador {
  id: number;
  nomeSenador: string;
}

export interface Despesa {
  tipo: number;
  fornec: string;
  ano: number;
  mes: number;
  dia: number;
  valor: number;
}

export interface SenadorDespesas {
  id: number;
  nomeSenador: string;
  despesas: Array<Despesa>;
}

const urlBase = 'http://localhost:3000';

@Injectable({
  providedIn: 'root',
})
export class SenadoresService {
  constructor(private http: HttpClient) {}

  listSenadores() {
    return this.http.get<Senador[]>(`${urlBase}/senadores?_sort=nomeSenador`);
  }

  retrieveSenador(id: number) {
    return this.http.get<SenadorDespesas>(
      `${urlBase}/despesasSenadores/${id}/`
    );
  }

  getTipoDespesa(id: number) {
    switch (id) {
      case 1:
        return 'Aluguel de imóveis e despesas concernentes a eles.';
      case 2:
        return 'Divulgação da atividade parlamentar.';
      case 3:
        return 'Aquisição de material de consumo para uso no escritório.';
      case 4:
        return 'Passagens aéreas, aquáticas e terrestres nacionais.';
      case 5:
        return 'Contratação de consultorias, assessorias, pesquisas, trabalhos técnicos e outros serviços.';
      case 6:
        return 'Locomoção, hospedagem, alimentação e combustíveis.';
      case 7:
        return 'Serviços de Segurança Privada.';
    }
  }
}
