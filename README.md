Testes Automatizados com Cypress - Automation Exercise

📌 Sobre o Projeto

Este repositório contém testes automatizados utilizando o Cypress para validar funcionalidades do site Automation Exercise. Os casos de teste foram criados com base nos cenários disponíveis no próprio site.

🚀 Tecnologias Utilizadas

Cypress - Framework de testes end-to-end

Faker.js - Geração de dados fictícios

JavaScript

📂 Estrutura do Projeto
A estrutura do projeto segue uma organização por categoria de testes, garantindo modularidade e fácil manutenção.

📂 cypress
 ├── 📂 e2e                    # Testes E2E organizados por categoria
 │   ├── 📂 autenticacao        # Testes de autenticação (login, registro, logout)
 │   │   ├── login.cy.js
 │   │   ├── login_incorreto.cy.js
 │   │   ├── logout.cy.js
 │   │   ├── registro_sucesso.cy.js
 │   │   ├── registro_antes_compra.cy.js
 │   │   ├── registro_e_compra.cy.js
 │   │   ├── registro_erro.cy.js
 │   ├── 📂 interacao_usuario   # Testes de interação do usuário
 │   │   ├── avaliacao.cy.js
 │   │   ├── endereco_checkout.cy.js
 │   │   ├── fatura_compra.cy.js
 │   │   ├── login_compra.cy.js
 │   │   ├── pesquisa_login.cy.js
 │   │   ├── produtos_carrinho.cy.js
 │   │   ├── quantidade_produtos.cy.js
 │   ├── 📂 navegacao           # Testes de navegação e funcionalidades gerais
 │   │   ├── assinatura.cy.js
 │   │   ├── assinatura_carrinho.cy.js
 │   │   ├── casos_teste.cy.js
 │   │   ├── formulario_contato.cy.js
 │   │   ├── pesquisar_produto.cy.js
 │   │   ├── produtos_categoria.cy.js
 │   │   ├── produtos_marca.cy.js
 │   │   ├── recomendados.cy.js
 │   │   ├── remover_produtos.cy.js
 │   │   ├── rolagem.cy.js
 ├── 📂 fixtures                # Dados simulados para os testes (ex: credenciais)
 │   ├── credentials.json
 ├── 📂 support                 # Comandos customizados e configurações globais
 │   ├── commands.js
 ├── cypress.config.js          # Configuração do Cypress
⚙️ Configuração
Pré-requisitos
Node.js instalado (versão 14 ou superior)
Cypress instalado no projeto (npm install cypress --save-dev)
Instalação
Clone o repositório:
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio
Instale as dependências:
npm install

▶️ Como Executar os Testes
Modo Interativo (UI do Cypress):
npx cypress open
Escolha o navegador e execute os testes desejados.

Modo Headless (Linha de Comando):
npx cypress run

🔄 Reutilização de Dados (Login)
Os testes utilizam um arquivo JSON (credentials.json) para armazenar credenciais reutilizáveis.
Caso precise alterar os dados de login, edite:
📂 cypress/fixtures/credentials.json


{
  "email": "Lucio.Wuckert25@gmail.com",
  "password": "NJbaFtNTLSMShRX"
}

✅ Casos de Teste Implementados:
Registrar usuário;
Login do usuário com e-mail e senha corretos;
Login de usuário com e-mail e senha incorretos;
Sair do usuário;
Registrar usuário com e-mail existente;
Formulário de contato;
Verificar página de casos de teste;
Verificar todos os produtos e a página de detalhes do produto;
Pesquisar produto;
Verificar assinatura na página inicial;
Verificar assinatura na página do carrinho;
Adicionar produtos ao carrinho;
Verificar quantidade de produtos no carrinho;
Fazer pedido: Registrar durante a finalização da compra;
Fazer pedido: Registrar antes de finalizar a compra;
Fazer pedido: Efetuar login antes de finalizar a compra;
Remover produtos do carrinho;
Exibir produtos de categoria;
Visualizar e colocar produtos da marca no carrinho;
Pesquisar produtos e verificar carrinho após o login;
Adicionar avaliação ao produto;
Adicionar ao carrinho de itens recomendados;
Verificar detalhes do endereço na página de checkout;
Baixar fatura após o pedido de compra;
Verificar a rolagem para cima usando o botão "Seta" e a funcionalidade de rolagem para baixo;
Verificar a rolagem para cima sem o botão "Seta" e a funcionalidade de rolagem para baixo;

📜 Autor

Desenvolvido por Gabriela Vasconcelos.
