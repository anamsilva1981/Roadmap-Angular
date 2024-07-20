---
layout: default
title: Configuração Inicial do GitHub
---

# Ciclo de Vida do Angular

## constructor(){}
É Executado primeiro e antes da execução de qualquer outro evento do ciclo de vida do componente.

## ngOnInit(){}
Este evento é inicializado após o angular exibir pela primeira vez as propriedades vinculadas aos dados ou quando o componente é inicializado. Este evendo é usado principalmente para inicializar dados em um componente. 

Neste exemplo abaixo quando o componente for inicializado o que será apresentado primeiro será o que estiver dentro do ngOnInit()
export class ExemploComponent implements OnInit {
  message: string;

  ngOnInit() {
    this.message = 'Olá, mundo!';
  }
}

[Voltar ao Sumário](../index.md)
