import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../service/cliente.service';
import { Cliente } from '../modal/cliente';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {
  conteudo: Cliente[] = [];

  visivel: boolean = false;

  toggle(){
    console.log("passou aqui")
   this.visivel = !this.visivel;
  }
  
  constructor(private service: ClienteService) { }

  ngOnInit() {

    this.conteudo = this.service.conteudo.conteudo
  }

}
