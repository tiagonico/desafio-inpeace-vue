<img src="https://admin.inpeaceapp.com/app/img/inpeace_logo.png" width=20%/>

# Teste Desenvolvedor Frontend

Refatoração do teste aos candidatos as vagas de desenvolvimento Frontend da Inpeaceapp utilizando Vue.

## 📜 Descrição

<b>Objetivo:</b>

Simular uma aplicação que consiste em gerenciar usuários de um sistema.
Não será necessário qualquer tipo de validação de acesso ou outros tipos de tratamento, o propósito é simplesmente avaliar a capacidade de desenvolvimento das telas propostas.

<b>Desafio:</b> 

Serão três telas que, juntas, simulam o acesso a um sistema de gerenciamento de usuários.

<b>Layout:</b> 

* <b>Login:</b> Tela contendo cabeçalho, com logo da empresa, e um box com: título, campos de E-mail e Senha e botão de acesso e link para tela de cadastro.
- <b>Cadastro:</b> Tela contendo cabeçalho e um box com formulário, título, campos de nome, e-mail, estado, sexo, senha e repetir senha, botão de cadastro e link para a tela de login.
- <b>Lista de Usuários:</b> Tela contendo cabeçalho, título, lista em coluna contendo 6 cards com as informações do usuário (foto, nome, email e botão de editar) e informação de quantos usuários estão sendo mostrados e a quantidade total.

## 🛠️ Instalação

 1️⃣ Primeiramente faça o download do projeto, seja baixando o arquivo .zip pelo navegador ou através do comando <i>git clone</i>.

 :two: Instale o Node caso não tenha instalado em sua máquina. <a href="https://nodejs.org/en/">Site oficial do Node</a>. 
 
 3️⃣ Na pasta raiz do projeto digite o comando no terminal para fazer o download das dependências:
 
 ```
 npm install
 ```
 
 4️⃣ Execute o comando abaixo para rodar a aplicação:
 
 ```
 npm run serve
 ```
 
 ## 📝 Requisitos do Desafio
 
 <b>Pré-requisitos:</b> Todos os pré-requisitos foram cumpridos e implementados.
 
 <b>Plus:</b>
 * ✅ Utilização do Axios para as requests.
 * ✅ <i>Loading</i> enquanto aguarda resposta da API.  
 
 <b>OBS.:</b> Como o tempo de resposta da API é muito rápido, a tela de <i>loading</i> praticamente não aparece, por conta disso foi adicionado um <i>delay</i> de 2 segundos no código para que a tela de <i>loading</i> possa aparecer. 
 
 * ✅ Utilização de pré-processador de CSS (SASS/SCSS).
 * ✅ Na página de administrar usuários, opção de mostrar os usuários de 1 a 6 e de 7 a 12.
 * ✅ Botão de <i>logout</i> na tela de administrar usuários.
 * ✅ Fazer a criptografia da senha.
 
 <b>OBS.:</b> A chave da função hash foi armazenada no código para esse exemplo simples, mas em uma aplicação real essa chave deve ser guardada em uma variável de ambiente.
 
 * ✅ Os botões de editar nos <i>cards</i> da tela de administrar usuários abrem um modal ao serem clicados e permitem editar o nome e email do usuário.
 
 <b>OBS.:</b> Nesse projeto, como os dados provêm de uma <i>API fake</i> não é possível persistir essas alterações nas informações dos usuários. Porém, em uma aplicação real isso poderia ser feito facilmente realizando uma requisição PUT para a API, passando as informações do usuário a serem modificadas.
 
