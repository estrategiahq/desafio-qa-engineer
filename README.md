# QA Engineer Challenge!


## Instruções 
**Peço para que leia todas instruções atentamente até o final antes de começar o teste.**

O teste será dividido em 2 partes:
- Casos de teste + Reporte de Bugs e Melhorias + Automação de uma Feature Web
- Casos de teste + Reporte de Bugs e Melhorias + Automação de uma API

Caso de Teste:
Utilize o formato/ferramenta que desejar para criar os casos de teste. Mas coloque em um arquivo no repositório do projeto no github. Dependendo do framework de automação que irá usar, pode ser usando o mesmo arquivo por exemplo.

Reporte de Bugs e Melhorias:

Quaisquer bugs e/ou melhorias que você encontrar você deve criar tickets, criando um arquivo explicando o bug dentro do projeto lá no git com o nome de `bugs.txt` por exemplo. Você pode colocar possíveis anexos junto em qualquer formato que possam adicionar a seu report. Deixe os bugs e seus anexos dentro de uma pasta chamada `bugs`.
Não se esquecendo que um ticket normalmente tem mais do que um campo de descrição, imagine que um desenvolvedor e/ou P.O. de sua equipe irá ler e entender o que está lá sem maiores explicações.

Automações:
Você estará livre para usar qualquer ferramenta/framework que quiser para automatizar seus testes de API e WEB. Desde que seja possível executar os testes com apenas com as instruções que você deixará no README.MD do projeto.

O Projeto deve ter uma documentação readme.md explicando tudo que será necessário fazer para instalar as dependencias do projeto e como rodá-lo, preferencialmente em inglês (apenas o readme.md), mas se quiser escrever em português, fique à vontade. Não se esqueça de seprar os bugs/melhorias e seus anexos na pasta `bugs `.

### Entrega

A entrega será feita por meio do github, para todas partes do projeto.
Você deverá criar um repositório no github.com e nos enviar o link para que a gente possa cloná-lo e executá-lo sem dificuldades quando estiver pronto. Você não poderá commitar depois da deadline. Quaisquer commits posteriores deadline não poderão ser considerados.
**O deadline vai ser de 7 dias corridos a partir do momento que você receber estes requisitos.**

### Parte 1 - Feature WEB:
Criar casos de teste baseados no seu entendimento do que a feature de busca e visualização de detalhe de cursos da nossa home deve fazer. 

`Endereço da Home: https://www.estrategiaconcursos.com.br/`

### Automação:
Agora você deve automatizar pelo menos três cenários de teste sobre a feature de busca e visualização. O primeiro vamos pedir que faça o seguinte cenário:
```
1. Acessar a home da estratégia: https://www.estrategiaconcursos.com.br/.
2. Utilizar a busca "Por Professor"
3. Acessar os cursos de professor qualquer
4. Escolha um dos cursos que estarão disponíveis para verificar se o valor do curso na listagem de cursos da professor bate com o valor da página de detalhes do curso.
5. Verifique também se o valor parcelado do curso bate com o valor total do curso.
6. Faça outras asserções que achar necessárias
```
Agora baseado nos cenários que **criou como cenários de teste, automatize dois cenários** que desejar para esta feature. Se achar relevante criar mais teste, fique a vontade.


### Parte 2 - API: 
Os casos de teste de API todos serão feitos propriamente para serem automatizados, cobrindo o máximo de cenários que conseguir na automação de um endpoint do JSON Placeholder.

Endpoint:
/posts

Automatizar todos exemplos de GET e POST desse recurso.

**Endereço da API:** https://jsonplaceholder.typicode.com/

Neste endereço acima estarão as especificações do endpoint que será testado.



### Resumo e últimas considerações
* Todas as partes serão entregues através do git, sendo os casos de testes em formato de arquivos `.feature` usando framework de BDD da linguagem que estiver usando. Ou se não for BDD, num arquivo contendo os casos de teste escritos. 
* Não se esqueça do arquivo `readme.md` descrevendo como executar o projeto.
* Nem todos casos de testes deverão ser automatizados.
* Se não encontrar bugs, crie pelo menos algum ticket de melhoria.
* Se quiser criar tickets de bug/melhoria que encontrar em outras partes do nosso site, também é bastante válido. Assim conseguimos te avaliar melhor.
* O deadline vai ser de *7 dias corridos a partir do momento que você receber estes requisitos.* Por favor não realize commits depois da data da entrega descrita.
* O projeto irá ser usado para avaliar suas habilidades e deve funcionar completamente e ser executável por nós sem problemas. Vamos avaliar o projeto como se fosse uma entrega de trabalho normal.
