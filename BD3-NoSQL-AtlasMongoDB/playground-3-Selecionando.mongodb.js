/* CRIAÇÃO DA CONSTANTE COM NOME DO BANCO DE DADOS */
const database = 'bd3-nosql-atv1';

/* HABILITA O BANCO DE DADOS PARA USO */
use(database);

/* LISTAR UM ALUNO PELO CPF SEM O CAMPO DE "COD_ALUNO" */
db.alunos.find({});