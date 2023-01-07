# Todas as rotas devem possuir validações (erro e status)

# Validar se o recurso solicitado existe ANTES de efetuar a busca (erro e status)

# Usuários devem ser salvos em um array de usuários

# Criar classe User (nome, cpf, email, age, transactions[], id)

# Criar classe Transaction(title, value, type, id)

## POST /users

    >> body(name, cpf<único por usuário>, email, age)
    >> criar uma instância de User com os dados recebidos e add ao array de usuários
    >> Middleware para verificar se já existe usuário com CPF informado

## GET /users/:id

    >>Retornar um único usuário SEM as transações

## GET /users

    >>Retornar todos os usuários SEM transações.
    >>filtrar por nome, email ou CPF

## PUT/DELETE /users/:id

    >>editar ou deletar usuários

## POST /user/:userId/transactions

    >>body(title, value, type<income/outcome>)
    >>criar instância de Transactions e add ao usuário salvo no array
    >>Middleware verificando usuário na rota

## GET /user/:userId/transactions/:id

    >>retornar uma única transação
    >>Middleware verificando usuário na rota

## GET /user/:userId/transactions

    >>retornar todas as transições
    >>retonar um "balance", com:
        >>soma das entradas (income)
        >>soma das retiradas (outcome)
        >>crédito total (total)
    >>filtro por título e tipo de transação
    >>Middleware verificando usuário na rota

## PUT/DELETE /users/:userId/transactions/:id

    >>editar ou deletar transações
    >>Middleware verificando usuário na rota
