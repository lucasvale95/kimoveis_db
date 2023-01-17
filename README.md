# KImóveis - TypeORM com Relacionamentos

Projeto acadêmico com o intuito de criar um banco de dados completo em NodeJS.


## 🛠️ Construído com

* [NodeJS](https://nodejs.org/en/) 
* [Express](https://expressjs.com/)
* [TypeORM](https://typeorm.io/)
* [Jest](https://jestjs.io/docs/cli)



## 🔧 Instalação

Para começar, clone o repositório em sua máquina:

```
git clone git@github.com:lucasvale95/kimoveis_db.git

```

Para inciar este projeto, é necessário instalar as dependências, que serão utilizadas nos testes. Portanto utilize o comando abaixo para instalar tais dependências:

```
yarn install

```

Essa entrega já está com o Docker configurado, basta preencher as variáveis de ambiente no .env

Basta buildar e subir nossos containers usando o comando padrão:

````
docker-compose up --build
````

ou
````
docker compose up --build
````

O comando pode variar com a versão do docker compose instalada em sua máquina

***ATENÇÃO:*** a porta utilizada para rodar nosso docker é a `5431`.
Caso tenha algum problema com essa porta, basta alterá-la no docker-compose.yml.

<br>

## ⚡ Rodando os testes

Para rodar os testes é necessário que no seu terminal, você esteja dentro do diretório do projeto.

Estando no terminal e dentro do caminho correto, você poderá utilizar os comandos a seguir:

### Rodar todos os testes
````
yarn test
````
#
### Rodar todos os testes e ter um log ainda mais completo
````
yarn test --all
````
#

### Rodar os testes de uma pasta específica
`detalhe: repare que tests está envolvido por 2 underlines. Isso se chama dunder.`
````
yarn test ./scr/__tests__/integration/<subpasta>
````
#
### Rodar os testes de um arquivo específico
````
yarn test ./scr/__tests__/integration/<subpasta>/<arquivo>
````
#
### Rodar um teste específico
````
yarn test -t <describe ou test específico envolto em aspas>
````
````
\\ ex: yarn test -t "/categories"
\\ rodaria os testes do describe "/categorias" no caminho
\\ ./scr/__tests__/integration/categories/categoriesRoutes.test.ts
````

<br>
