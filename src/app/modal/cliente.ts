export class Cliente{
    
    id: string;
    nome: string;
    telefone: string;
    email: string;


    constructor(id: string, nome: string, telefone: string, email: string){
        this.id = id;
        this.nome = nome;
        this.telefone = telefone;
        this.email = email;
    }
}

export class Conteudo{
    conteudo: Cliente[];
    constructor(conteudo: Cliente[]){
    this.conteudo = conteudo;
    }
}