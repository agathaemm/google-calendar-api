# POC Google calendar api

- Informações iniciais
- Instalando o projeto
- Rodando a aplicação

---

## Tecnologias utilizadas

- [Node](https://nodejs.org/pt) 
- [Express](https://expressjs.com/pt-br/)

## Instalando o projeto

1. Garanta que o NodeJS está instalado e configurado na sua máquina.
   A versão sugerida para o projeto atualmente é `v18`. \*\*
   \*\* Caso você precise utilizar outras verões do NodeJS em diferentes projetos você pode utilizar o [NVM](https://github.com/nvm-sh/nvm), para gerenciar versões diferentes.
2. Instale as dependencias do projeto com o comando `yarn install` ou `yarn`.
3. O arquivo token.json inicia vazio, pois ali vão ficar armazenadas as credenciais apos o usuário se autenticar no google (Em uma aplicação de produção essa informação deve ficar em um local seguro)
4. No arquivo credentials.json voce deve adicionar os IDs do cliente OAuth 2.0. Para fazer o download desses IDs voce primeiro precisa configurar um projeto no google seguindo o [tutorial](https://developers.google.com/calendar/api/quickstart/nodejs?hl=pt-br) em seguida basta baixar o json do seus IDs do cliente OAuth 2.0 na pagina de credenciais. (em uma aplicação de produção essas informações devem ficar em um local seguro)

## Rodando a aplicação

1. Após a instalação das dependencias rode o projeto com o comando `node app.js`
2. Abra o endereço [http://localhost:3000](http://localhost:3000) para navegar na aplicação.

---

_Última revisão em 02/07/2024_
