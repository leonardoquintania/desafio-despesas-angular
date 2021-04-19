import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  SenadorDespesas,
  SenadoresService,
} from 'src/app/services/senadores.service';

@Component({
  selector: 'app-detahes-senadores',
  templateUrl: './detahes-senadores.component.html',
  styleUrls: ['./detahes-senadores.component.css'],
})
export class DetahesSenadoresComponent implements OnInit {
  senador: SenadorDespesas;
  despesasResumidas = [];
  id: number;
  constructor(
    private senadoresService: SenadoresService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap) => {
      this.id = parseInt(paramMap.get('id'));
      this.senadoresService.retrieveSenador(this.id).subscribe((despesas) => {
        this.senador = despesas;
        let despesasTotal = 0;
        for (let index = 1; index <= 7; index++) {
          const filteredDep = this.senador.despesas.filter(
            (despesa) => despesa.tipo === index
          );

          const currencyTotal = filteredDep.reduce((accumulator, current) => {
            return accumulator + current.valor;
          }, 0);
          despesasTotal += currencyTotal;
          this.despesasResumidas.push({
            tipo: index,
            currencyTotal: currencyTotal.toFixed(2),
          });
        }
        this.despesasResumidas.push({
          tipo: 8,
          currencyTotal: despesasTotal.toFixed(2),
        });
      });
    });
  }
}
