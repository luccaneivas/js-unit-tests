/* eslint-disable max-len */

const orderFromMenu = (request, consumption) => {
  consumption.push(request);
};

const getBill = (keys, menu, consumed, i) => {
  for (let j = 0; j < keys.length; j += 1) {
    if (menu[keys[j]][consumed[i]] !== undefined) {
      return menu[keys[j]][consumed[i]];
    }
  }
};

const payment = (menu, consumed) => {
  if (consumed.length === 0) return 0;

  let bill = 0;

  const keys = Object.keys(menu);
  for (let i = 0; i < consumed.length; i += 1) {
    bill += getBill(keys, menu, consumed, i);
  }
  return parseFloat(parseFloat(bill * 1.10).toFixed(2));
};

const createMenu = (object) => {
  const objReturned = {
    fetchMenu: () => object,
    consumption: [],
  };

  objReturned.order = (request) => orderFromMenu(request, objReturned.consumption);
  objReturned.pay = () => payment(objReturned.fetchMenu(), objReturned.consumption);

  return objReturned;
};

module.exports = createMenu;