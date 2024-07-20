---
layout: default
title: Configuração Inicial do GitHub
---

# Ciclo de Vida do Angular

### Constructor(){}
É Executado primeiro e antes da execução de qualquer outro evento do ciclo de vida do componente.

### NgOnInit(){}
Este evento é inicializado após o angular exibir pela primeira vez as propriedades vinculadas aos dados ou quando o componente é inicializado. Este evendo é usado principalmente para inicializar dados em um componente. 

Neste exemplo abaixo quando o componente for inicializado o que será apresentado primeiro será o que estiver dentro do ngOnInit()


export class ExemploComponent implements OnInit {
  message: string;

  ngOnInit() {
    this.message = 'Olá, mundo!';
  }

  Neste outro exemplo, utilizando o setTimeOut, ele aguarda 5 segundos para que o conteúdo do console.log apareça
  setTimeout(() => {
      console.log(1);
    }, 5000)
}

### NgOnChanges()
Este evento é executado sempre que um valor de um controle de entrada dentro do componente é alterado. 
Sempre que um componente recebe um dado do @Input() ou seja externo o ngOnChanges() é invocado



[Voltar ao Sumário](../index.md)
