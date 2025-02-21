(function () {
  let screen = document.querySelector(".screen");
  let buttons = document.querySelectorAll(".btn");
  let clear = document.querySelector(".btn-clear");
  let equal = document.querySelector(".btn-equal");
  let dot = document.querySelector(".btn-dot");

  buttons.forEach(function (button) {
    button.addEventListener("click", function (e) {
      let value = e.target.dataset.num;
      screen.value += value;
    });
  });

  equal.addEventListener("click", function (e) {
    let expression = screen.value;
    expression = expression.replace(/[^0-9+\-*/().]/g, "");
    if (expression === "") {
      screen.value = "Enter a Value";
      return;
    } else {
      const calculate = new Function("return " + expression);
      let answer = calculate();
      screen.value = answer;
    }
  });

  clear.addEventListener("click", function (e) {
    screen.value = "";
  });
})();
