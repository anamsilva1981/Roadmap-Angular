---
layout: default
title: Configuração Inicial do GitHub
---
### Ciclo de Vida dos Componentes no Angular

Quando você cria um componente no Angular, ele passa por várias etapas de vida. Cada uma dessas etapas é uma oportunidade para fazer algo específico. Vamos explorar essas etapas uma por uma:

1. **Constructor**
   - **O que é:** O `constructor` é o primeiro método chamado quando o Angular cria uma instância do seu componente.
   - **Para que serve:** É usado para configurar serviços que seu componente precisa, como serviços de API, ou para definir valores iniciais.
   - **Quando usar:** Utilize o `constructor` para preparar seu componente antes de ele ser exibido, como configurar variáveis ou injetar serviços necessários.

2. **ngOnChanges()**
   - **O que é:** Esse método é chamado sempre que uma propriedade de entrada (`@Input()`) do seu componente muda.
   - **Para que serve:** Permite que o componente reaja a mudanças nos dados recebidos de outros componentes.
   - **Quando usar:** Use `ngOnChanges()` quando precisar atualizar o componente com base em novas informações que chegam dele.

3. **ngOnInit()**
   - **O que é:** O `ngOnInit` é chamado uma vez, logo após a primeira exibição das propriedades vinculadas ao seu componente.
   - **Para que serve:** Ideal para inicializar dados e fazer configurações que precisam da certeza de que as propriedades já estão definidas.
   - **Quando usar:** Utilize `ngOnInit()` para buscar dados de um serviço ou preparar o componente para exibição, após as propriedades estarem configuradas.

4. **ngDoCheck()**
   - **O que é:** Esse método é chamado sempre que o Angular verifica mudanças no componente.
   - **Para que serve:** Permite realizar verificações adicionais que não são feitas automaticamente pelo Angular.
   - **Quando usar:** Use `ngDoCheck()` quando precisar verificar ou reagir a mudanças complexas que não são capturadas pelos métodos padrão.

5. **ngAfterContentInit()**
   - **O que é:** Chamado após o Angular adicionar o conteúdo projetado (o conteúdo que você colocou dentro do seu componente).
   - **Para que serve:** Útil para fazer algo depois que o conteúdo inserido no componente está pronto.
   - **Quando usar:** Utilize `ngAfterContentInit()` para manipular ou acessar o conteúdo que foi inserido no componente via `<ng-content>`.

6. **ngAfterContentChecked()**
   - **O que é:** Esse método é chamado após o Angular verificar o conteúdo projetado do componente.
   - **Para que serve:** Permite realizar ações depois que o conteúdo projetado foi verificado.
   - **Quando usar:** Use `ngAfterContentChecked()` para fazer ajustes ou atualizações baseadas na verificação do conteúdo.

7. **ngAfterViewInit()**
   - **O que é:** Chamado uma vez que a visualização completa do componente, incluindo o DOM, está inicializada.
   - **Para que serve:** Ideal para acessar e manipular elementos do DOM do componente ou inicializar plugins externos.
   - **Quando usar:** Utilize `ngAfterViewInit()` para fazer ajustes finais no DOM ou inicializar funcionalidades que dependem da visualização estar pronta.

8. **ngAfterViewChecked()**
   - **O que é:** Esse método é chamado após o Angular verificar e atualizar a visualização do componente.
   - **Para que serve:** Permite realizar ações depois que a visualização foi verificada.
   - **Quando usar:** Use `ngAfterViewChecked()` para atualizar o estado ou realizar cálculos depois que a visualização foi revisada.

9. **ngOnDestroy()**
   - **O que é:** Chamado antes do componente ser destruído e removido da tela.
   - **Para que serve:** Usado para limpar recursos e evitar vazamentos de memória, como desconectar observables ou parar timers.
   - **Quando usar:** Utilize `ngOnDestroy()` para garantir que todos os recursos usados pelo componente sejam liberados corretamente antes que ele seja removido.


[Voltar ao Sumário](../index.md)
