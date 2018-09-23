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
  clicado: any;

  visivel: boolean = false;

  toggle(clicado: any){
    this.clicado = clicado;

  if(this.clicado == clicado && !this.visivel){
    this.visivel = true

  }else if(this.clicado == clicado && this.visivel){
    this.visivel = false;
  }else{
    this.visivel = false;
    this.clicado = clicado;
  }
   
  }
  
  constructor(private service: ClienteService) { }

  ngOnInit() {

    this.conteudo = this.service.conteudo.conteudo
  }

}
