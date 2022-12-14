const average = (array) => {
  if (array.length === 0) return undefined;

  let sum = 0;
  for (let i = 0; i < array.length; i += 1) {
    if (typeof array[i] !== 'number') return undefined;
    sum += array[i];
  }

  // Documentação da função Math.round(): https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/round
  return Math.round(sum / array.length);
};

module.exports = average;