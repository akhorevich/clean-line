function calculator() {
  var people, month, year, cost, other;
  /* Получаем данные из полей ввода */
  people = parseInt(document.getElementById('people').value);
  month = parseInt(document.getElementById('month').value);
  year = parseInt(document.getElementById('year').value);
  cost = parseInt(document.getElementById('cost').value);
  other = parseInt(document.getElementById('other').value);

  if (people > 100 || month > 90000000 || year > 150000000 || cost > 150000000 || other > 25) {
    window.open("osn.html", "_self");
  } else {
    window.open("choice.html", "_self");
  }
}

function income() {
  var income, stock, result, fee;
  income = parseInt(document.getElementById('income').value);
  stock = parseInt(document.getElementById('stock').value);
  result = income * 0.06;
  fee = (stock * 0.22) + (stock * 0.029) + (stock * 0.051);
  var res = document.getElementById('res');
  var st = document.getElementById('st');


  res.innerHTML = "Налог УСН 'Доходы': <b>" + result.toFixed(2) + "</b> руб.";
  st.innerHTML = "Страховые взносы: <b>" + fee.toFixed(2) + "</b> руб.";
}

function costs() {
  var income, stock, costs, result, fee;
  income = parseInt(document.getElementById('income').value);
  costs = parseInt(document.getElementById('costs').value);
  stock = parseInt(document.getElementById('stock').value);
  result = (income - costs) * 0.15;
  fee = (stock * 0.22) + (stock * 0.029) + (stock * 0.051);
  var res = document.getElementById('res');
  var st = document.getElementById('st');


  res.innerHTML = "Налог УСН 'Расходы': <b>" + result.toFixed(2) + "</b> руб.";
  st.innerHTML = "Страховые взносы: <b>" + fee.toFixed(2) + "</b> руб.";
}

function osn() {
  var income, ssi, revenue, stock, result, fee;
  income = parseInt(document.getElementById('income').value);
  ssi = parseInt(document.getElementById('ssi').value);
  revenue = parseInt(document.getElementById('revenue').value);
  stock = parseInt(document.getElementById('stock').value);

  fee = (stock * 0.22) + (stock * 0.029) + (stock * 0.051);
  result = (income * 0.2) + (ssi * 0.022) + (revenue * 0.18) + fee;

  var res = document.getElementById('res');
  var st = document.getElementById('st');


  res.innerHTML = "Налог ОСН: <b>" + result.toFixed(2) + "</b> руб.";
  st.innerHTML = "Страховые взносы: <b>" + fee.toFixed(2) + "</b> руб.";
}
