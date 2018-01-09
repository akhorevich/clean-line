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

  res.innerHTML = "Налог УСН 'Доходы': <b>" + result.toFixed(2) + "</b> руб.";
  st.innerHTML = "Страховые взносы: <b>" + fee.toFixed(2) + "</b> руб.";

}

function costsCalc() {
  var income = parseInt(document.getElementById('income').value);
  var costs = parseInt(document.getElementById('costs').value);
  var stock = parseInt(document.getElementById('stock').value);

  var result = (income - costs) * 0.15;
  var fee = (stock * 0.22) + (stock * 0.029) + (stock * 0.051);
  var res = document.getElementById('res');
  var st = document.getElementById('st');

  res.innerHTML = "Налог УСН 'Расходы': <b>" + result.toFixed(2) + "</b> руб.";
  st.innerHTML = "Страховые взносы: <b>" + fee.toFixed(2) + "</b> руб.";


}

function osnCalc() {
  var income = parseInt(document.getElementById('income').value);
  var ssi = parseInt(document.getElementById('ssi').value);
  var revenue = parseInt(document.getElementById('revenue').value);
  var stock = parseInt(document.getElementById('stock').value);

  var fee = (stock * 0.22) + (stock * 0.029) + (stock * 0.051);
  var result = (income * 0.2) + (ssi * 0.022) + (revenue * 0.18) + fee;

  var res = document.getElementById('res');
  var st = document.getElementById('st');


  res.innerHTML = "Налог ОСН: <b>" + result.toFixed(2) + "</b> руб.";
  st.innerHTML = "Страховые взносы: <b>" + fee.toFixed(2) + "</b> руб.";

}

function allCount() {
  var income = parseInt(document.getElementById('income').value);
  var revenue = parseInt(document.getElementById('revenue').value);
  var ssi = parseInt(document.getElementById('ssi').value);
  var costs = parseInt(document.getElementById('costs').value);
  var stock = parseInt(document.getElementById('stock').value);

  if (!isNumber.test(income) || !isNumber.test(revenue) || !isNumber.test(ssi) || !isNumber.test(stock)) {
    //$('#myModal').modal(show) // Проверка всех полей на соответствие.
    alert("error");
  } else {
    fee = (stock * 0.22) + (stock * 0.029) + (stock * 0.051);
    res1 = income * 0.06;
    if (costs > 0) {
      res2 = (income - costs) * 0.15;
    }
    res3 = (income * 0.2) + (ssi * 0.022) + (revenue * 0.18) + fee;

    var type;

    if (costs > 0) {
      if (res1 < res2 && res1 < res3) {
        type = 1;
      } else if (res2 < res1 && res2 < res3) {
        type = 2;
      } else {
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
    var first = document.getElementById("first");
    var second = document.getElementById("second");
    var third = document.getElementById("third");
    var but = document.getElementById("but");

    var incomeRes = document.getElementById('res');
    var st = document.getElementById('st');

    main.style.display = "none";
    info.style.display = "block";
    switch (type) {
      case 1:
        first.style.display = "block";
        but.style.display = "block";
        incomeRes.innerHTML = res1.toFixed(2) + "</b> руб.";
        st.innerHTML = fee.toFixed(2) + "</b> руб.";
        break;
      case 2:
        second.style.display = "block";
        but.style.display = "block";
        incomeRes.innerHTML = res2.toFixed(2) + "</b> руб.";
        st.innerHTML = fee.toFixed(2) + "</b> руб.";
        break;
      case 3:
        third.style.display = "block";
        but.style.display = "block";
        incomeRes.innerHTML = res3.toFixed(2) + "</b> руб.";
        st.innerHTML = fee.toFixed(2) + "</b> руб.";
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



