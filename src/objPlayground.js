const calculator = (number1, number2) => {
  const calculos = {
    sum: parseInt(number1 + number2, 10),
    mult: parseInt(number1 * number2, 10),
    div: parseInt(number1 / number2, 10),
    sub: parseInt(number1 - number2, 10),
  };

  return calculos;
};

const arrayGenerator = (type, object) => {
  if (type === 'keys') {
    return Object.keys(object);
  }
  if (type === 'values') {
    return Object.values(object);
  }
  if (type === 'entries') {
    return Object.entries(object);
  }
};

module.exports = { calculator, arrayGenerator };
