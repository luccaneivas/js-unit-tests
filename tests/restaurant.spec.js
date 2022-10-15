const createMenu = require('../src/restaurant');

describe('10 - Implemente os casos de teste e a função `createMenu`', () => {
  it('Verifica se a função `createMenu` tem o comportamento esperado', () => {
    const objReturned = createMenu();
    const objKeys = Object.keys(objReturned);
    // TESTE 1: Verifique se o retorno da função createMenu() é um objeto que possui a
    // chave fetchMenu, a qual tem como valor uma função.
    expect( typeof (objReturned) ).toEqual('object');
    expect( objKeys.includes('fetchMenu') ).toBeTruthy();
    expect( typeof (objReturned.fetchMenu) ).toEqual('function');
    // TESTE 2: Verifique se 'objetoRetornado.fetchMenu()' retorna um objeto cujas chaves são somente `food` e `drink`, 
    // considerando que a função createMenu() foi chamada com o objeto: `{ food: {}, drink: {} }`.
    expect( Object.keys(createMenu({ food: {}, drink: {} }).fetchMenu()) ).toStrictEqual(['food', 'drink']);
    // ```
    // const objetoRetornado = createMenu({ food: {}, drink: {} });
    // objetoRetornado.fetchMenu() // Retorno: { food: {}, drink: {}}
    // ```
    // TESTE 3: Verifique se o menu passado pra função createMenu é identico ao menu recuperado pela função 'objetoRetornado.fetchMenu'
    const returned = createMenu({ food: {}, drink: {} });
    expect( returned.fetchMenu() ).toEqual({ food: {}, drink: {} });
    // ```
    // const objetoRetornado = createMenu(objetoQualquer);
    // objetoRetornado.fetchMenu() // Retorno: objetoQualquer
    // ```
    // Agora faça o PASSO 1 no arquivo `src/restaurant.js`.
    // --------------------------------------------------------------------------------------
    // TESTE 4: Verifique se 'objetoRetornado.consumption', após a criação do menu, retorna um array vazio.
    const returnedObj = createMenu( { food: { coxinha: 3.90 }, drink: { agua: 3.90 } } );
    expect( returnedObj.consumption ).toEqual([]);
    // Agora faça o PASSO 2 no arquivo `src/restaurant.js`.
    // --------------------------------------------------------------------------------------
    // TESTE 5: Verifique se, ao chamar uma função associada à chave `order` no objeto retornado,
    // passando uma string como parâmetro (como `objetoRetornado.order('coxinha')`), tal string é adicionada
    // ao array retornado em `objetoRetornado.consumption`.
    returnedObj.order("coxinha");
    expect( returnedObj.consumption ).toEqual(["coxinha"]);
    // Agora faça o PASSO 3 no arquivo `src/restaurant.js`.
    // --------------------------------------------------------------------------------------
    // TESTE 6: Verifique se, ao adicionar três pedidos, dentre bebidas e comidas, o array `objetoRetornado.consumption` contém os itens pedidos.
    returnedObj.order("agua");
    returnedObj.order("sopa");
    returnedObj.order("sashimi");
    expect( returnedObj.consumption ).toEqual(["coxinha", "agua", "sopa", "sashimi"]);
    // Agora faça o TESTE 7 deste arquivo.
    // --------------------------------------------------------------------------------------
    // TESTE 7: Verifique se a função `order` aceita que pedidos repetidos sejam acrescidos a consumption.
    returnedObj.consumption = [];
    returnedObj.order("coxinha");
    returnedObj.order("agua");
    returnedObj.order("coxinha");
    expect( returnedObj.consumption ).toEqual(['coxinha', 'agua', 'coxinha']);
    // Agora faça o TESTE 8 deste arquivo.
    // --------------------------------------------------------------------------------------
    // TESTE 8: Verifique se, ao chamar `objetoRetornado.pay()`, retorna-se a soma dos preços de tudo que foi pedido, conforme registrado em `objetoRetornado.consumption`
    returnedObj.consumption = ['coxinha', 'agua', 'coxinha'];
    expect( returnedObj.pay() ).toEqual(12.87);
    // ```
    // objetoRetornado.order('coxinha');
    // objetoRetornado.order('agua');
    // objetoRetornado.order('coxinha');
    // objetoRetornado.pay() // Retorno: somaDosPreçosDosPedidos
    // ```
    // Agora faça o PASSO 4 no arquivo `src/restaurant.js`.
  });
});
