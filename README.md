<h1>Finance Kids API - DOCS</h1>

<h2>POST/register</h2>
<p>Este end point é utilizado para cadastrar um novo usuário. Nesta API temos dois tipos de usuário o tipo parent e o tipo children, segue abaixo o corpo da requisição para criar qualquer um dos tipos de usuário. </p>

```json
{
	"name":"Eric",
	"email":"eric@email.com",
	"password":"123456",
	"wallet":[],
	"wishlist":[],
	"balance":[],
  "type":"children",
  "parentId":1
}
```


```json
{
	"name":"Cássio",
	"email":"gugu@gmail1.com",
	"password":"123456",
	"children":[]
}
```

<p>Caso a requisição seja bem sucedida irá retornar algo parecido com isto</p>

```json
{
  "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imd1Z3VAZ21haWwxLmNvbSIsImlhdCI6MTYzNjY2NjY5NiwiZXhwIjoxNjM2NjcwMjk2LCJzdWIiOiI0In0.zTpvZlH9NiBQx6NP4Imm8DQjs4Y8YVbdYy9g-nTf1ZM",
  "user": {
    "email": "gugu@gmail1.com",
    "name": "Cássio",
    "children": [],
    "id": 4
  }
}
```

<h2>POST/login</h2>
<p>Este endpoint é utilizado para fazer o login, segue abaixo uma requisição de exemplo</p>

```json
{
	"email":"gugu@gmail1.com",
	"password":"123456"
}
```
<p>Caso a requisição dê certo irá retornar a seguinte resposta <p>

```json
{
  "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imd1Z3VAZ21haWwxLmNvbSIsImlhdCI6MTYzNjY2Nzk1OSwiZXhwIjoxNjM2NjcxNTU5LCJzdWIiOiI0In0.8ezY_t4lQqxOuTAMwcEe0YHFGfcYLXDTQVcrfCmZpOc",
  "user": {
    "email": "gugu@gmail1.com",
    "name": "Cássio",
    "children": [],
    "id": 4
    }
}
```

<h2>POST/activities</h2>
<p>Este endpoint é utilizado para criar uma nova atividade, segue abaixo uma requisição de exemplo. Também é necessário  uma autentificação de Bearer.</p>

```json
{
    "name":"Lavar a louça",
    "reward":10,
    "frequency":"Diaria",
    "userId":1
}
```
<p>Caso dê certo irá retornar uma resposta assim</p>

```json
 {
    "name": "Lavar a louça",
    "reward": 10,
    "frequency": "Diaria",
    "userId":1,
    "id": 1
  }
```


<h2>PATCH/activities/id</h2>
<p>Este endpoint serve para editar a atividade.Para editarmos a atividade precisamos apenas passar o id da atividade pela URL e no corpo da requisição faremos as mudanças. Como no exemplo abaixo.  Também é necessário  uma autentificação de Bearer.</p>

```json
{
    "name": "Lavar a louça",
    "reward": 10,
    "frequency": "Diaria",
    "userId":1,
    "id": 1
}
```
<p>Caso a requisição dê errado irá retornar um objeto vazio.</p>


<h2>DELETE/activities/id</h2>
<p>Este endpoint tem o intuito de apagar uma atividade para faze-lo basta apenas passar o id da atividade pela url. Caso a requisição seja bem sucedida irá retornar um objeto vazio.  Também é necessário  uma autentificação de Bearer.</p>