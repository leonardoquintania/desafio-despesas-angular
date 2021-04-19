import { Component, OnInit } from '@angular/core';
import { Senador, SenadoresService } from 'src/app/services/senadores.service';

@Component({
  selector: 'app-list-senadores',
  templateUrl: './list-senadores.component.html',
  styleUrls: ['./list-senadores.component.css'],
})
export class ListSenadoresComponent implements OnInit {
  senadores: Array<Senador> = [];
  constructor(private senadoresService: SenadoresService) {}

  ngOnInit(): void {
    this.senadoresService.listSenadores().subscribe((senadores) => {
      this.senadores = senadores;
    });
  }
}
