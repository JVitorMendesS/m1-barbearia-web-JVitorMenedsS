const barbearia = {
    cortes: [
        { id: 1, tipo: "Militar", valor: 20 },
        { id: 2, tipo: "Samurai", valor: 35 },
        { id: 3, tipo: "Pompadour", valor: 20 },
        { id: 4, tipo: "Moicano", valor: 10 },
        { id: 5, tipo: "Razor part", valor: 5 },
    ],
  
    barbas: [
        { id: 1, tipo: "Capitão Jack", valor: 20 },
        { id: 2, tipo: "Van Dyke", valor: 20 },
        { id: 3, tipo: "Barba Média", valor: 20 },
        { id: 4, tipo: "Barba Baixa", valor: 20 },
        { id: 5, tipo: "Barba Zero", valor: 15 },
    ],
    estaAberto: true,
};
  
  
function buscaCortePorId(id) {
    let objReturn = barbearia.cortes.find(obj => obj.id === id);

    if (objReturn){
        return objReturn;
    } else {
        return "Corte não encontrado";
    }
}

function buscaBarbaPorId(id) {
    let objReturn2 = barbearia.barbas.find(obj2 => obj2.id === id);

    if (objReturn2){
        return objReturn2;
    } else {
        return "Barba não encontrada";
    }
}

function verificaStatusBarbearia() {
    if (barbearia.estaAberto === true){
        return "Estamos abertos";
    } else{
        return "Estamos fechados";
    }
}

function retornaTodosCortes() {
    return barbearia.cortes;
}

function retornaTodasBarbas() {
    return barbearia.barbas;
}

function criaPedido(nomeCliente, corteId, barbaId) {
    const corte = buscaCortePorId(corteId);
    const barba = buscaBarbaPorId(barbaId);

    return {
        nome: nomeCliente,
        pedidoCorte: corte.tipo,
        pedidoCortePreco: corte.valor,
        pedidoBarba: barba.tipo,
        pedidoBarbaPreco: barba.valor
    };
}

function atualizarServico(lista, id, valor, tipo) {
    let item = lista.find(obj => obj.id === id);
    if (item) {
        item.valor = valor;
        item.tipo = tipo;
    }
    return lista;
}

function calculaTotal(pedido) {
    return pedido.pedidoCortePreco + pedido.pedidoBarbaPreco;
}
  
  
