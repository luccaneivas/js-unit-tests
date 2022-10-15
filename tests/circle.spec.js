/* eslint-disable max-len */
/* eslint-disable no-unused-vars */

const circle = require('../src/circle');

describe('4 - Implemente os casos de teste para a função `circle`', () => {
  it('Verifica se ao receber um raio, a função `circle` retorna um objeto contedos os valores esperados', () => {
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste se circle retorna undefined, caso o parâmetro passado não seja um número.
    expect(circle('radius')).toBeUndefined();
    // Teste se circle retorna um objeto.
    expect(typeof circle(9)).toBe('object');
    // Teste se o objeto retornado tem 3 propriedades.
    expect(Object.keys(circle(9))).toHaveLength(3);
    // Teste se a função, quando não recebe nenhum parâmetro, retorna undefined.
    expect(circle()).toBeUndefined();
    // Teste que a função retorna, dentro de um objeto, a circunferência correta para um círculo de raio 2.
    expect(circle(2)).toHaveProperty('circumference', 12.56);
    // Teste que a função retorna, dentro de um objeto, a área correta para um círculo de raio 3.
    expect(parseFloat((circle(3).area).toPrecision(2))).toBe(28);
    // Teste que a função retorna, num objeto, os dados corretos de um círculo de raio 3.
  });
});
