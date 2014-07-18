"use strict";

/********************************************
	Función para ordenar los elementos de la tabla dinámica
********************************************/
function sortTable(){
  var rows = $('#openings tbody  tr').get();

  rows.sort(function(a, b) {

    var A = $(a).children('td').eq(0).text().toUpperCase();
    var B = $(b).children('td').eq(0).text().toUpperCase();

    if(A > B) {
      return -1;
    }

    if(A < B) {
      return 1;
    }

    return 0;

  });

  $.each(rows, function(index, row) {
    $('#openings table').children('tbody').append(row);
  });
}

/********************************************
	Función para ordenar los elementos de los selectbox
********************************************/
function sortSelect(selElem) {
	var tmpAry = new Array();
	for (var i=0;i<selElem.options.length;i++) {
	    tmpAry[i] = new Array();
	    tmpAry[i][0] = selElem.options[i].text;
	    tmpAry[i][1] = selElem.options[i].value;
	}
	tmpAry.sort(function(a,b){
		if(a[1] === "*"){
			return -1;
		}else if (b[1] === "*"){
			return 1;
		}else{
			if(a[0] < b[0]){
				return -1;
			}else{
				return 1;
			}
		}
	});
	while (selElem.options.length > 0) {
	    selElem.options[0] = null;
	}
	for (var i=0;i<tmpAry.length;i++) {
	    var op = new Option(tmpAry[i][0], tmpAry[i][1]);
	    selElem.options[i] = op;
	}
	return;
}