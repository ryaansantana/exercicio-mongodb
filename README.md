# Atlas-MongoDB

Repositório com atividades práticas e exercícios de **NoSQL (MongoDB)** do curso técnico de Desenvolvimento de Sistemas na Etec.

## Estrutura

```
.
└── BD3-NoSQL-AtlasMongoDB/        # Criação de banco, inserção e consultas com uma coleção de alunos
    ├── playground-1-Criando-db.mongodb.js
    ├── playground-2-Inserindo.mongodb.js
    └── playground-3-Selecionando.mongodb.js
```

Novas atividades entram como novas pastas na raiz, seguindo o mesmo padrão.

## Atividades

| Pasta | Descrição |
|---|---|
| `BD3-NoSQL-AtlasMongoDB/` | Criação de banco/collection, inserção de documentos e consultas com filtros, usando uma coleção de alunos como exemplo |

> A cada nova atividade, adicione uma linha aqui e uma pasta correspondente na estrutura acima.

## Como criar um cluster no MongoDB Atlas

1. Acesse [mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas) e crie uma conta (ou faça login)
2. Clique em **Build a Database** e escolha a opção **Free (M0)**
3. Escolha o provedor de nuvem e a região mais próxima e clique em **Create**
4. Em **Security Quickstart**:
   - Crie um usuário e senha para o banco (guarde essas credenciais)
   - Em **Network Access**, adicione seu IP atual, ou `0.0.0.0/0` para permitir acesso de qualquer lugar (recomendado só para estudo/testes)
5. Aguarde o cluster ser provisionado (leva alguns minutos)
6. Clique em **Connect** → **Drivers** (ou **Compass**, se preferir interface gráfica) e copie a **connection string** (algo como `mongodb+srv://usuario:senha@cluster.mongodb.net/`)

## Como rodar os exercícios

1. Instale a extensão **MongoDB for VS Code**
2. Na extensão, clique em **Connect** e cole a connection string do Atlas (substituindo `<password>` pela senha criada)
3. Abra o arquivo `.mongodb.js` da atividade desejada
4. Selecione o cluster conectado e execute os comandos (com o botão de play ao lado de cada bloco, ou "Run All")
5. Nas atividades com múltiplos playgrounds, execute na ordem: criação do banco → inserção → consultas

## Sobre

Repositório organizado para fins de estudo e prática, servindo como registro de aprendizado ao longo do curso técnico.
