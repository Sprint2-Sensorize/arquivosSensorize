var database = require('../database/config')

function autenticar(email, senha) {
  console.log(
    "ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ",
    email,
    senha
  )
  var instrucao = `
  select r.representante_id as representante_id, a.academia_id as usuario_id,  r.nome_representante as nome, r.email_acesso as
   email, a.nome_academia as academia, a.cnpj, t.fixo, t.celular from
	representante as r join academia as a
							on r.representante_id = a.fk_representante
						join telefone as t
							on t.fk_academia = a.academia_id
            WHERE email_acesso = '${email}' AND senha_acesso = '${senha}';
    `
  console.log('Executando a instrução SQL: \n' + instrucao)
  return database.executar(instrucao)
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucao
function cadastrar(nome, email, senha, token) {
  console.log(
    "ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():",
    nome,
    email,
    senha
  )

  // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
  //  e na ordem de inserção dos dados.
  var instrucao = `
  update representante set senha_acesso = '${senha}', nome_representante = '${nome}', email_acesso = '${email}' where representante_id = '${token}';
    `
  console.log('Executando a instrução SQL: \n' + instrucao)
  return database.executar(instrucao)
}

module.exports = {
  autenticar,
  cadastrar
}
