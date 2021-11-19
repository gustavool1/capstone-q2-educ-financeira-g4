<h1>Finance Kids API - DOCS</h1>

<h2>POST/register</h2>
<p>Este end point é utilizado para cadastrar um novo usuário. Nesta API temos dois tipos de usuário o tipo parent e o tipo children, segue abaixo o corpo da requisição para criar qualquer um dos tipos de usuário. </p>

Entrada

```json
{
  "email": "eric@email.com",
  "password": "123456",
  "name": "Eric",
  "wallet": 0,
  "type": "children",
  "wishlist": [],
  "balance": [],
  "parentId": 2
}
```

**Formato balance
balance: [
{
"date": "15/11/2021 19:09:10",
"move": 10
}]
**Formato wishlist
wishlist: [{
"name": "skate",
"value": 400,
"kitty": 0
}]
** type -> children/parent
** parentId no caso de resposável é 0, no caso de dependente é o id do responável.

<p>Caso a requisição seja bem sucedida irá retornar algo parecido com isto</p>

```json
{
  "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImVyaWM0QGVtYWlsLmNvbSIsImlhdCI6MTYzNzI3MTQyNSwiZXhwIjoxNjM3Mjc1MDI1LCJzdWIiOiIxOCJ9.w6Fu0NdXK3vXsJ1C2krMeGZtxmfEXpy1YEHvnin2R64",
  "user": {
    "email": "eric@email.com",
    "name": "Eric",
    "wallet": 0,
    "type": "children",
    "wishlist": [],
    "balance": [],
    "parentId": 2,
    "id": 18
  }
}
```

<h2>POST/login</h2>
<p>Este endpoint é utilizado para fazer o login, segue abaixo uma requisição de exemplo</p>

```json
{
  "email": "eric@email.com",
  "password": "123456"
}
```

<p>Caso a requisição dê certo irá retornar a seguinte resposta <p>

```json
{
  "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImVyaWMxQGVtYWlsLmNvbSIsImlhdCI6MTYzNzI3MTY0NSwiZXhwIjoxNjM3Mjc1MjQ1LCJzdWIiOiI2In0.gJh5hp1PMeijTztYQ4YAtJeCuzDJ6S5TJJfA0PcSLvA",
  "user": {
    "email": "eric@email.com",
    "name": "Eric",
    "wallet": 0,
    "type": "children",
    "wishlist": [],
    "balance": [],
    "id": 6,
    "parentId": 2
  }
}
}
```

<h2>PATCH/users/id</h2>
<p>Este endpoint é utilizado para editar um usuário, podendo ser utilizado para adicionar um objeto do tipo wishlist ou balance segue abaixo uma requisição de exemplo. Também é necessário uma <strong>autentificação de Bearer</strong>.</p>

```json
{
  "wishlist": [
    {
      "name": "computador",
      "value": 500,
      "kitty": 0
    }
  ]
}
```

<p>Caso dê certo irá retornar uma resposta assim</p>

```json
{
  "email": "eric1@email.com",
  "password": "$2a$10$c5Zsmr.BzXn//3To3anMVePM08./pKeSBCp27I1yaEYDBXHDlZud.",
  "name": "Eric",
  "wallet": -790,
  "type": "children",
  "wishlist": [
    {
      "name": "computador",
      "value": 500,
      "kitty": 0
    }
  ],
  "balance": [],
  "id": 6,
  "parentId": 2
}
```

<h2>POST/activities</h2>
<p>Este endpoint é utilizado para criar uma nova atividade, segue abaixo uma requisição de exemplo. Também é necessário uma <strong>autentificação de Bearer</strong>.</p>

```json
{
  "name": "Lavar Louça",
  "reward": 1,
  "frequency": "Diaria",
  "userId": 3,
  "childAchivied": false,
  "parentAchivied": false
}
```

<p>Caso dê certo irá retornar uma resposta assim</p>

```json
{
  "name": "Lavar Louça",
  "reward": 1,
  "frequency": "Diaria",
  "userId": 3,
  "childAchivied": false,
  "parentAchivied": false,
  "id": 87
}
```

<h2>PATCH/activities/id</h2>
<p>Este endpoint serve para editar a atividade.Para editarmos a atividade precisamos apenas passar o id da atividade pela URL e no corpo da requisição faremos as mudanças. Como no exemplo abaixo.  Também é necessário  uma </strong>autentificação de Bearer</strong>.</p>

```json
{
  "name": "Lavar a louça",
  "reward": 10,
  "frequency": "Diaria",
  "userId": 1,
  "id": 1
}
```

<p>Caso a requisição dê errado irá retornar um objeto vazio.</p>

<h2>DELETE/activities/id</h2>
<p>Este endpoint tem o intuito de apagar uma atividade para faze-lo basta apenas passar o id da atividade pela url. Caso a requisição seja bem sucedida irá retornar um objeto vazio.  Também é necessário  uma <strong>autentificação de Bearer</strong>.</p>
