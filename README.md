# 📌 Sobre o Projeto

Este repositório contém testes automatizados utilizando o Cypress para validar funcionalidades do exercício de automação de sites. Os casos de teste foram criados com base nos cenários disponíveis no próprio site.

# 🚀 Tecnologias Utilizadas

Cypress - Framework de testes de ponta a ponta
Faker.js - Geração de dados fictícios
JavaScript

# 📂 Estrutura do Projeto

A estrutura do projeto segue uma organização por categoria de testes, garantindo modularidade e fácil manutenção.

📂 cypress

├── 📂 e2e  # Testes E2E organizados por categoria


│     ├── 📂 autenticacao   # Testes de autenticação (login, registro, logout)


│   │   ├── login.cy.js

│   │   ├── login_incorreto.cy.js

│   │   ├── logout.cy.js

│   │   ├── registro_sucesso.cy.js

│   │   ├── registro_antes_compra.cy.js

│   │   ├── registro_e_compra.cy.js

│   │   ├── registro_erro.cy.js

│   ├── 📂 interacao_usuario # Testes de interação do usuário

│   │   ├── avaliacao.cy.js

│   │   ├── endereco_checkout.cy.js

│   │   ├── fatura_compra.cy.js

│   │   ├── login_compra.cy.js

│   │   ├── pesquisa_login.cy.js

│   │   ├── produtos_carrinho.cy.js

│   │   ├── quantidade_produtos.cy.js

│   ├── 📂 navegacao         # Testes de navegação e funcionalidades gerais

│   │   ├── assinatura.cy.js

│   │   ├── assinatura_carrinho.cy.js

│   │   ├── casos_teste.cy.js

│   │   ├── formulario_contato.cy.js

│   │   ├── pesquisar_produto.cy.js

│   │   ├── produtos_categoria.cy.js

│   │   ├── produtos_marca.cy.js

│   │   ├── recomendados.cy.js

│   │   ├── removedor_produtos.cy.js

│   │   ├── rolagem.cy.js

├── 📂 fixtures              # Dados simulados para os testes (ex: credenciais)

│   ├── credenciais.json

├── 📂 support               # Comandos customizados e configurações globais

│   ├── comandos.js

├── cypress.config.js        # Configuração do Cypress


# ⚙️ Configuração

Pré-requisitos

Node.js instalado (versão 14 ou superior)

Cypress instalado no projeto:

npm install cypress --save-dev

Instalação

Clone o repositório:

git clone https://github.com/seu-usuario/seu-repositorio.git

cd seu-repositorio

Instale as dependências:

npm install

# ▶️ Como Executar os Testes

Modo Interativo (UI do Cypress)

npx cypress open

Escolha o navegador e execute os testes desejados.

Modo Headless (Linha de Comando)

npx cypress run

# 🔄 Reutilização de Dados (Login)

Os testes utilizam um arquivo JSON (credentials.json) para armazenar credenciais reutilizáveis. Caso seja necessário alterar os dados de login, edite:

📂 cypress/fixtures/credentials.json
{

  "email": "Lucio.Wuckert25@gmail.com",
  
  "senha": "NJbaFtNTLSMShRX"
  
}

# ✅ Casos de Teste Implementados

Registro de usuário

Login do usuário com e-mail e senha corretos

Login do usuário com e-mail e senha incorretos

Logout do usuário

Registro de usuário com e-mail existente

Formulário de contato

Verificação da página de casos de teste

Verificação de todos os produtos e da página de detalhes do produto

Pesquisa de produto

Verificação da assinatura na página inicial

Verificação da assinatura na página do carrinho

Adicionar produtos ao carrinho

Verificação da quantidade de produtos no carrinho

Finalização de compra:

Registro durante a finalização da compra

Registro antes da finalização da compra

Login antes da finalização da compra

Remoção de produtos do carrinho

Exibição de produtos por categoria

Visualização e adição de produtos de determinada marca ao carrinho

Pesquisa de produtos e verificação do carrinho após login

Adição de avaliação ao produto

Adição de itens recomendados ao carrinho

Verificação dos detalhes do endereço na página de checkout

Download da fatura após uma compra

Verificação da rolagem para cima e para baixo com e sem botão "Seta"

# 📜 Autor

Desenvolvido por Gabriela Vasconcelos.

