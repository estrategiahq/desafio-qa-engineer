# language: pt
@PesquisarCurso
Funcionalidade: Pesquisar curso por professor
  O sistema deve realizar todas as operações de maneira correta para a funcionalidade e pesquisa de curso por professor.

  Cenario: Pesquisar professor e validar valores
    Dado que acesso a url "https://www.estrategiaconcursos.com.br/"
    E clico na opção "POR PROFESSOR"
    E clico na professora "Ena Loiola"
    E realizo filtro com o valor "Assinatura Básica 2 Anos - Cartão até 12 x"
    Quando verifico o valor do curso e clico no link de "Detalhes" 
    Entao comparo que o valor do curso é igual ao da pagina anterior e que o valor das parcelas é igual ao valor total

  Cenario: Validar pesquisa com curso que Não existe
    Dado que acesso a url "https://www.estrategiaconcursos.com.br/"
    E clico na opção "POR PROFESSOR"
    E clico na professora "Ena Loiola"
    Quando realizo filtro com o valor "Paraquedismo"
    Entao sistema apresenta a mensagem "Nenhum resultado encontrado."

  Cenario: Validar Recuperação de senha
    Dado que acesso a url "https://www.estrategiaconcursos.com.br/"
    E clico na opção "POR PROFESSOR"
    E clico na professora "Ena Loiola"
    E realizo filtro com o valor "Assinatura Platinum - Mensal"
    E clico no botão "Comprar"
    E clico no link "Esqueci minha senha"
    Quando informo email e clico no botão "Enviar"
    Entao sistema apresenta a mensagem "Se email corretamente informado, você receberá um link para troca da senha"

  Cenario: Cadastrar usuário
    Dado que acesso a url "https://www.estrategiaconcursos.com.br/"
    E clico na opção "POR PROFESSOR"
    E clico na professora "Ena Loiola"
    E realizo filtro com o valor "Assinatura Platinum - Mensal"
    E clico no botão "Comprar"
    Quando informo dados para um novo cadastro e clico no botão "Continuar"
    Entao sistema me direciona para tela de finalização do cadastro

  Cenario: Pesquisar e comprar curso
    Dado que acesso a url "https://www.estrategiaconcursos.com.br/"
    E clico na opção "POR PROFESSOR"
    E clico na professora "Ena Loiola"
    E realizo filtro com o valor "Assinatura Platinum - Mensal"
    E clico no botão "Comprar"
    E realizo login 
    Quando clico no botão "Finalizar"
    Entao sistema apresenta tela para finalização da compra

  Cenario: Validar login com facebook
    Dado que acesso a url "https://www.estrategiaconcursos.com.br/"
    E clico na opção "POR PROFESSOR"
    E clico na professora "Ena Loiola"
    E realizo filtro com o valor "Assinatura Platinum - Mensal"
    E clico no botão "Comprar"
    Quando realizo login com o facebook
    Entao sistema apresenta tela para confirmação e finalização da compra

  Cenario: Validar login com google
    Dado que acesso a url "https://www.estrategiaconcursos.com.br/"
    E clico na opção "POR PROFESSOR"
    E clico na professora "Ena Loiola"
    E realizo filtro com o valor "Assinatura Platinum - Mensal"
    E clico no botão "Comprar"
    Quando realizo login com o google
    Entao sistema apresenta tela para confirmação e finalização da compra



"
