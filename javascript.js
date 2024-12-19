function calc(op) {
  var n1 = parseFloat(document.getElementById("num1").value);
  var n2 = parseFloat(document.getElementById("num2").value);
  var o = 0;

  switch (op) {
    case "+":
      o = n1 + n2;
      break;
    case "-":
      o = n1 - n2;
      break;
    case "*":
      o = n1 * n2;
      break;
    case "/":
      o = n1 / n2;
      break;
  }

  document.getElementById("output").value = o;

  var newHist = "<p>" + n1 + " " + op + " " + n2 + " " + "=" + " " + o + "</p>";
  var history = document.getElementById("hist");

  history.innerHTML = newHist + history.innerHTML;

  if (history.children.length > 10) {
    history.removeChild(history.childNodes[10]);
  }
}
