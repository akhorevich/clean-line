
var isNumber = /^-?\d+$/; // Регулярное выражение, проверяющее чтобы строка содержало числа и не было пустым.

function calculator() {

  /* Получаем данные из полей ввода */
  var people = parseInt(document.getElementById('people').value);
  var month = parseInt(document.getElementById('month').value);
  var year = parseInt(document.getElementById('year').value);
  var cost = parseInt(document.getElementById('cost').value);
  var other = parseInt(document.getElementById('other').value);

  if (people > 100 || month > 90000000 || year > 150000000 || cost > 150000000 || other > 25) {
    window.open("osn.html", "_self");
  } else {
    window.open("choice.html", "_self");
  }

}

function incomeCalc() {
  var income = parseInt(document.getElementById('income').value);
  var stock = parseInt(document.getElementById('stock').value);

  var result = income * 0.06;
  var fee = (stock * 0.22) + (stock * 0.029) + (stock * 0.051);
  var res = document.getElementById('res');
  var st = document.getElementById('st');
  var pf = document.getElementById('pf');
  var fss = document.getElementById('fss');
  var foms = document.getElementById('foms');

  if (fee < result/2) { // Если страховые взносы меньше 50% от налогов
    result = result - fee; // то сумма налогов уменьшается на сумму взносов
  } else { // если нет - 
    result = result / 2; // то сумма налогов уменьшается на 50%
  }

  res.innerHTML = "Налог ОСН: <b>" + result.toFixed(2) + "</b> руб.";
  st.innerHTML = "<b>Страховые взносы:</b>";
  pf.innerHTML = "ПФР: <b>" + (stock * 0.22).toFixed(2) + "</b> руб.";
  fss.innerHTML = "ФСС: <b>" + (stock * 0.029).toFixed(2) + "</b> руб.";
  foms.innerHTML = "ФОМС: <b>" + (stock * 0.051).toFixed(2) + "</b> руб.";

}

function costsCalc() {
  var income = parseInt(document.getElementById('income').value);
  var costs = parseInt(document.getElementById('costs').value);
  var stock = parseInt(document.getElementById('stock').value);

  var result = (income - costs) * 0.15;
  var fee = (stock * 0.22) + (stock * 0.029) + (stock * 0.051);
  var res = document.getElementById('res');
  var st = document.getElementById('st');
  var pf = document.getElementById('pf');
  var fss = document.getElementById('fss');
  var foms = document.getElementById('foms');

  res.innerHTML = "Налог ОСН: <b>" + result.toFixed(2) + "</b> руб.";
  st.innerHTML = "<b>Страховые взносы:</b>";
  pf.innerHTML = "ПФР: <b>" + (stock * 0.22).toFixed(2) + "</b> руб.";
  fss.innerHTML = "ФСС: <b>" + (stock * 0.029).toFixed(2) + "</b> руб.";
  foms.innerHTML = "ФОМС: <b>" + (stock * 0.051).toFixed(2) + "</b> руб.";


}

function osnCalc() {
  var income = parseInt(document.getElementById('income').value); //Прибыль
  var ssi = parseInt(document.getElementById('ssi').value); //ССИ
  var revenue = parseInt(document.getElementById('revenue').value); //Выручка
  var stock = parseInt(document.getElementById('stock').value); //Фонд заработной

  var fee = (stock * 0.22) + (stock * 0.029) + (stock * 0.051); //Страховые взносы
  var result = (income * 0.2) + (ssi * 0.022) + (revenue * 0.18) + fee;

  var res = document.getElementById('res');
  var st = document.getElementById('st');
  var pf = document.getElementById('pf');
  var fss = document.getElementById('fss');
  var foms = document.getElementById('foms');

  res.innerHTML = "Налог ОСН: <b>" + result.toFixed(2) + "</b> руб.";
  st.innerHTML = "<b>Страховые взносы:</b>";
  pf.innerHTML = "ПФР: <b>" + (stock * 0.22).toFixed(2) + "</b> руб.";
  fss.innerHTML = "ФСС: <b>" + (stock * 0.029).toFixed(2) + "</b> руб.";
  foms.innerHTML = "ФОМС: <b>" + (stock * 0.051).toFixed(2) + "</b> руб.";

}

function allCount() {
  var income = parseInt(document.getElementById('income').value);
  var revenue = parseInt(document.getElementById('revenue').value);
  var profit = parseInt(document.getElementById('profit').value);
  var ssi = parseInt(document.getElementById('ssi').value);
  var costs = parseInt(document.getElementById('costs').value);
  var stock = parseInt(document.getElementById('stock').value);
  var pf, fss, foms;
  var nn1Val,nn2Val, nn3Val;


  if (!isNumber.test(income) || !isNumber.test(revenue) || !isNumber.test(ssi) || !isNumber.test(stock)) {
    //$('#myModal').modal(show) // Проверка всех полей на соответствие.
    alert("error");
  } else {
    pf = stock * 0.22;
    fss = stock * 0.029;
    foms = stock * 0.051;
    fee = stock * 0.3;
    res1 = income * 0.06;
    if (costs > 0) {
      res2 = (income - costs) * 0.15;
    }
    res3 = (profit * 0.2) + (ssi * 0.022) + (revenue * 0.18) + fee;


    if (fee < res1/2) { // Если страховые взносы меньше 50% от налогов
    res1 = res1 - fee; // то сумма налогов уменьшается на сумму взносов
      } else { // если нет - 
    res1 = res1 / 2; // то сумма налогов уменьшается на 50%
      }

      var type;

      if (costs > 0) {
          if (res1 < res2 && res1 < res3) {
              type = 1;
          }
          if (res2 < res1 && res2 < res3) {
              type = 2;
          }
          if (res3 < res1 && res3 < res2){
              type = 3;
          }
      } else {
          if (res1 < res3) {
              type = 1;
          } else {
              type = 3;
          }
      }



    var main = document.getElementById("main");
    var info = document.getElementById("info");
    var first = document.getElementById("fs");
    var second = document.getElementById("sc");
    var third = document.getElementById("th");
    var but = document.getElementById("btnExport");

    var incomeRes1 = document.getElementById('res1');
    var incomeRes2 = document.getElementById('res2');
    var incomeRes3 = document.getElementById('res3');
    var nn1 = document.getElementById('nn1');
    var nn2 = document.getElementById('nn2');
    var nn3 = document.getElementById('nn3');
    var st1 = document.getElementById('st1');
    var st2 = document.getElementById('st2');
    var st3 = document.getElementById('st3');

    var nl1 = document.getElementById('nl1');
    var nl2 = document.getElementById('nl2');
    var nl3 = document.getElementById('nl3');

    var pf1 = document.getElementById('pf1');
    var pf2 = document.getElementById('pf2');
    var pf3 = document.getElementById('pf3');

    var fss1 = document.getElementById('fss1');
    var fss2 = document.getElementById('fss2');
    var fss3 = document.getElementById('fss3');

    var foms1 = document.getElementById('foms1');
    var foms2 = document.getElementById('foms2');
    var foms3 = document.getElementById('foms3');

    var nb1 = document.getElementById('nb1');
    var nb2 = document.getElementById('nb2');
    var nb3 = document.getElementById('nb3');


    main.style.display = "none";
    info.style.display = "block";
    incomeRes1.innerHTML = res1.toFixed(2) + " руб.";
    incomeRes2.innerHTML = res2.toFixed(2) + " руб.";
    incomeRes3.innerHTML = res3.toFixed(2) + " руб.";

    st1.innerHTML = st2.innerHTML = st3.innerHTML = fee.toFixed(2) + "</b> руб.";

    pf1.innerHTML = pf2.innerHTML = pf3.innerHTML =  pf.toFixed(2) + "</b> руб.";

    fss1.innerHTML = fss2.innerHTML = fss3.innerHTML = fss.toFixed(2) + "</b> руб.";

    foms1.innerHTML = foms2.innerHTML = foms3.innerHTML = foms.toFixed(2) + "</b> руб.";

    var nb1Var = res1 + fee;
    var nb2Var = res2 + fee;
    var nb3Var = res3 + fee;
    nb1.innerHTML = nb1Var.toFixed(2) + " руб.";
    nb2.innerHTML = nb2Var.toFixed(2) + " руб.";
    nb3.innerHTML = nb3Var.toFixed(2) + " руб.";


      nn1Val = (res1/nb1Var)*100;
      nn2Val = (res2/nb2Var)*100;
      nn3Val = (res3/revenue)*100;

      nn1.innerHTML = nn1Val.toFixed(2) + " %";
      nn2.innerHTML = nn2Val.toFixed(2) + " %";
      nn3.innerHTML = nn3Val.toFixed(2) + " %";




      console.log(type)

      switch (type) {
         case 1:
           first.setAttribute("id","win");
          // incomeRes.innerHTML = res1.toFixed(2) + "</b> руб.";
           //st.innerHTML = fee.toFixed(2) + "</b> руб.";
           break;
         case 2:
         second.setAttribute("id","win");
          // incomeRes.innerHTML = res2.toFixed(2) + "</b> руб.";
          // st.innerHTML = fee.toFixed(2) + "</b> руб.";
           break;
         case 3:
           third.setAttribute("id","win");
           //incomeRes.innerHTML = res3.toFixed(2) + "</b> руб.";
           //st.innerHTML = fee.toFixed(2) + "</b> руб.";
           break;
       }

  }
}

var tableToExcel = (function() {
  var uri = 'data:application/vnd.ms-excel;base64,'
    , template = '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--><meta http-equiv="content-type" content="text/plain; charset=UTF-8"/></head><body><table>{table}</table></body></html>'
    , base64 = function(s) { return window.btoa(unescape(encodeURIComponent(s))) }
    , format = function(s, c) { return s.replace(/{(\w+)}/g, function(m, p) { return c[p]; }) }
  return function(table, name) {
    if (!table.nodeType) table = document.getElementById(table)
    var ctx = {worksheet: name || 'Worksheet', table: table.innerHTML}
    window.location.href = uri + base64(format(template, ctx))
  }
})()



var xport = {
  _fallbacktoCSV: true,  
  toXLS: function(tableId, filename) {   
    this._filename = (typeof filename == 'undefined') ? tableId : filename;
    
    //var ieVersion = this._getMsieVersion();
    //Fallback to CSV for IE & Edge
    if ((this._getMsieVersion() || this._isFirefox()) && this._fallbacktoCSV) {
      return this.toCSV(tableId);
    } else if (this._getMsieVersion() || this._isFirefox()) {
      alert("Not supported browser");
    }

    //Other Browser can download xls
    var htmltable = document.getElementById(tableId);
    var html = htmltable.outerHTML;

    this._downloadAnchor("data:application/vnd.ms-excel" + encodeURIComponent(html), 'xls'); 
  },
  toCSV: function(tableId, filename) {
    this._filename = (typeof filename === 'undefined') ? tableId : filename;
    // Generate our CSV string from out HTML Table
    var csv = this._tableToCSV(document.getElementById(tableId));
    // Create a CSV Blob
    var blob = new Blob([csv], { type: "text/csv" });

    // Determine which approach to take for the download
    if (navigator.msSaveOrOpenBlob) {
      // Works for Internet Explorer and Microsoft Edge
      navigator.msSaveOrOpenBlob(blob, this._filename + ".csv");
    } else {      
      this._downloadAnchor(URL.createObjectURL(blob), 'csv');      
    }
  },
  _getMsieVersion: function() {
    var ua = window.navigator.userAgent;

    var msie = ua.indexOf("MSIE ");
    if (msie > 0) {
      // IE 10 or older => return version number
      return parseInt(ua.substring(msie + 5, ua.indexOf(".", msie)), 10);
    }

    var trident = ua.indexOf("Trident/");
    if (trident > 0) {
      // IE 11 => return version number
      var rv = ua.indexOf("rv:");
      return parseInt(ua.substring(rv + 3, ua.indexOf(".", rv)), 10);
    }

    var edge = ua.indexOf("Edge/");
    if (edge > 0) {
      // Edge (IE 12+) => return version number
      return parseInt(ua.substring(edge + 5, ua.indexOf(".", edge)), 10);
    }

    // other browser
    return false;
  },
  _isFirefox: function(){
    if (navigator.userAgent.indexOf("Firefox") > 0) {
      return 1;
    }
    
    return 0;
  },
  _downloadAnchor: function(content, ext) {
      var anchor = document.createElement("a");
      anchor.style = "display:none !important";
      anchor.id = "downloadanchor";
      document.body.appendChild(anchor);

      // If the [download] attribute is supported, try to use it
      
      if ("download" in anchor) {
        anchor.download = this._filename + "." + ext;
      }
      anchor.href = content;
      anchor.click();
      anchor.remove();
  },
  _tableToCSV: function(table) {
    // We'll be co-opting `slice` to create arrays
    var slice = Array.prototype.slice;

    return slice
      .call(table.rows)
      .map(function(row) {
        return slice
          .call(row.cells)
          .map(function(cell) {
            return '"t"'.replace("t", cell.textContent);
          })
          .join(",");
      })
      .join("\r\n");
  }
};



