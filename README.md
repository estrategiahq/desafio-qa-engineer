# QA Engineer Challenge!


## Instruções 
Supondo que você faça parte do time do Estratégia Educacional que é responsável pela feature de busca de cursos, filtragem de cursos e exibição de detalhe dos cursos que são exibidos na nossa home. Seu dever será criar alguns casos de teste para estas features e automatizar parte desse fluxo. **Peço para que leia todas instruções atentamente até o final antes de começar o teste.**

### Entrega

A entrega será feita por meio do github. Você deverá criar um repositório no github.com e nos enviar o link para que a gente possa cloná-lo e executá-lo quando estiver pronto. Você não poderá commitar depois da deadline. Quaisquer commits posteriores deadline não poderão ser considerados.
**O deadline vai ser de 5 dias corridos a partir do momento que você receber estes requisitos.**

### Parte 1:
Criar casos de teste baseados no seu entendimento do que a feature de busca, filtragem e visualização de detalhe de cursos da nossa home deve fazer. 

`Endereço da Home: https://www.estrategiaconcursos.com.br/`

Você pode utilizar o formato BDD pois você irá automatizar parte dos cenários que você criou. Mas não é necessário usar BDD nem nos casos de testes, nem na automação. Fica seu critério a melhor forma de escrever seus casos de teste. Não se preocupe em ter de automatizar todos cenários que criar, nessa parte o foco é ver primeiro os possíveis cenários de teste da feature.

Quaisquer bugs e/ou melhorias que você encontrar você deve criar um ticket (um arquivo explicando o bug dentro do projeto lá no git com o nome de `bugs.txt` e possíveis anexos junto) como se fossem tickets reais que você criaria numa ferramenta como o JIRA (por exemplo) não se esquecendo que um ticket normalmente tem mais do que um campo de descrição. Se quiser fique a vontade para colocar anexos, mas deixe os bugs e seus anexos dentro de uma pasta chamada `bugs`.

### Parte 2:
  Agora você deve automatizar três cenários de teste sobre a feature descrita. O primeiro vamos pedir que faça o seguinte cenário:
```
1. Acessar a home da estratégia: https://www.estrategiaconcursos.com.br/.
2. Utilizar a busca "Por Professor"
3. Acessar os cursos da professora "Ena Loiola"
4. Escolha um dos cursos que estarão disponíveis para verificar se o valor do curso na listagem de cursos da professora bate com o valor da página de detalhes do curso.
5. Verifique também se o valor parcelado do curso bate com o valor total do curso.
6. Faça outras asserções que achar necessárias
```
Agora baseado nos cenários que **criou na parte 1, crie outros dois cenários** que desejar para esta feature.


### Parte 3: 
O Projeto deve ter uma documentação readme.md explicando tudo que será necessário fazer para instalar as dependencias do projeto e como rodá-lo, preferencialmente em inglês (apenas o readme.md), mas se quiser escrever em português, fique à vontade. 

### Resumo e últimas considerações
* Todas as partes serão entregues através do git, sendo os casos de testes em formato de arquivos `.feature` usando framework de BDD da linguagem que estiver usando. Ou se não for BDD, num arquivo contendo os casos de teste escritos. 
* Não se esqueça do arquivo `readme.md` descrevendo como executar o projeto.
* Nem todos casos de testes deverão ser automatizados.
* Se não encontrar bugs, crie pelo menos algum ticket de melhoria.
* Se quiser criar tickets de bug/melhoria que encontrar em outras partes do nosso site, também é bastante válido. Assim conseguimos te avaliar melhor.
* O deadline vai ser de *5 dias corridos a partir do momento que você receber estes requisitos.* Por favor não realize commits depois da data da entrega descrita.
* O projeto irá ser usado para avaliar suas habilidades e deve funcionar completamente e ser executável por nós sem problemas. Vamos avaliar o projeto como se fosse uma entrega de trabalho normal.
