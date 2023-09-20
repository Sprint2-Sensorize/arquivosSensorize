function verificar() {
    var nomeAcademia = input_nome_academia.value
    var nomeRepresentante = input_representante.value
    var nClientes = Number(input_numero_clientes.value)
   

    div_novo_quadrado.style.display = 'block'
    div_texto.innerHTML = `<h2>Olá, <b>${nomeRepresentante}</b>!!</h2> <br>
    <p>Vejo que você se importa muito com a ${nomeAcademia} e com seus clientes. Isso é muito importante para o crescimento do seu estabelecimento.<br>
    Mas você sabia que <b>25%</b> das pessoas desistem de fazer academia por conta da falta de tempo e outros <b>16%</b> desistem devido à lotação das academias? <br>
    Isso significa a possibilidade de a sua empresa perder <b>${nClientes * 0.41} clientes</b> nos próximos meses. <br>
    Pensando nisso, nós da <b>Sensorize</b> criamos um projeto chamado <b>TechGym</b> que vai solucionar esse problema
    <br> Utilizando dados que serão obtidos por meio de sensores colocados nos equipamentos garantiremos uma melhor rotatividade para a sua academia, para que todos os seus clientes consigam treinar sem sofrer com esses problemas.`
    

}
