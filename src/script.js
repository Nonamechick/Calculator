document.addEventListener("DOMContentLoaded", function(){
    const display = document.getElementById('calc-display');
    const buttons = document.getElementsByClassName('btn');
    console.log(display);
    console.log(buttons);

    let CurrentValue = "";

    function evaluateResult() {
      const convertedValue = CurrentValue
      .replace("×","*")
      .replace("÷","/")
      .replace("%","*0.01");


      const result = eval(convertedValue);
      CurrentValue = result.toString();
      display.value = CurrentValue;
    }

    for (let i = 0; i < buttons.length; i++) {
      const button = buttons[i];
      button.addEventListener('click', function () {
        const value = button.innerText;

        if (value == "AC") {
          CurrentValue = "";
          display.value = CurrentValue;
        } else if (value == "=") {
          evaluateResult();
        } else {
          CurrentValue += value;
          console.log('currentValue:', CurrentValue);
          display.value = CurrentValue;
        } 
      });
    }
});