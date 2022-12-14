/* eslint-disable max-len */
/* eslint-disable no-unused-vars */

const getCharacter = require('../src/getCharacter');

describe('9 - Implemente os casos de teste da função `getCharacter`', () => {
  it('Verifica se a função `getCharacter` retorna o objeto do personagem corretamente.', () => {
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste se a função, quando não recebe nenhum parâmetro, retorna undefined.
    expect(getCharacter()).toBeUndefined();
    // Teste se a função retorna o objeto correto para o parâmetro 'Arya',
    expect(getCharacter('Arya')).toEqual({ name: 'Arya Stark', class: 'Rogue', phrases: [ 'Not today', 'A girl has no name.' ] });
    // Teste se a função retorna o objeto correto para o parâmetro 'Brienne',
    expect(getCharacter('Brienne')).toEqual({ name: 'Brienne Tarth', class: 'Knight', phrases: ['Im No Lady, Your Grace.', 'I, Brienne Of Tarth, Sentence You To Die.'] });
    // Teste se a função retorna o objeto correto para o parâmetro 'Melissandre',
    expect(getCharacter('Melissandre')).toEqual({ name: 'Melissandre', class: 'Necromancer', phrases: ['Death By Fire Is The Purest Death.', 'For The Night Is Dark And Full Of Terrors.'] });
    // Teste se os parâmetros não são Case Sensitive.
    expect(getCharacter('ARyA')).toEqual({ name: 'Arya Stark', class: 'Rogue', phrases: [ 'Not today', 'A girl has no name.' ] });
    expect(getCharacter('bRIenNe')).toEqual({ name: 'Brienne Tarth', class: 'Knight', phrases: ['Im No Lady, Your Grace.', 'I, Brienne Of Tarth, Sentence You To Die.'] });
    expect(getCharacter('meLISSANDRE')).toEqual({ name: 'Melissandre', class: 'Necromancer', phrases: ['Death By Fire Is The Purest Death.', 'For The Night Is Dark And Full Of Terrors.'] });
    // Teste se ao passar um nome que não está na tabela, a função retorna undefined.
    expect(getCharacter('Aragorn')).toBeUndefined();
  });
});
