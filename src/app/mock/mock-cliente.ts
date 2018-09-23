
import {Cliente, Conteudo} from '../modal/cliente'

export class ClienteMock{


    joao: Cliente = new Cliente("1", "Joao", "545454545", "joao@gmail.com");
    paulo: Cliente = new Cliente("2", "Paulo", "3434343434", "paulo@gmail.com");
    antonio: Cliente = new Cliente("3", "Antonio", "23232323", "antonio@gmail.com");
    maria: Cliente = new Cliente("4", "Maria", "434343434", "maria@gmail.com");
    mariana: Cliente = new Cliente("5", "Mariana", "690909090", "mariana@gmail.com");
    joaquim: Cliente = new Cliente("6", "Joaquim", "989898989", "joaquim@gmail.com");
    marcelo: Cliente = new Cliente("7", "Marcelo", "8787878787", "marcelo@gmail.com");
    juca: Cliente = new Cliente("8", "Juca", "78787878787", "juca@gmail.com");
    marcio: Cliente = new Cliente("9", "Marcio", "434343434", "marcio@gmail.com");
    tania: Cliente = new Cliente("10", "Tania", "3323232323", "tania@gmail.com");
    joice: Cliente = new Cliente("11", "Joice", "76676767677", "joice@gmail.com");

     conteudo: Conteudo = new Conteudo(
         [
          this.joao,
          this.paulo,
          this.antonio,
          this.maria,
          this.mariana,
          this.joaquim,
          this.marcelo,
          this.juca,
          this.marcio,
          this.tania,
          this.joice
        ]
        );

    
     
}