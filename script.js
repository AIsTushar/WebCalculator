let currentInput = "";

function clearResult() {
  currentInput = "";
  document.getElementById("result").value = "";
}

function appendToResult(value) {
  currentInput += value;
  document.getElementById("result").value = currentInput;
}

function deleteLast() {
  currentInput = currentInput.slice(0, -1);
  document.getElementById("result").value = currentInput;
}

function calculate() {
  try {
    const result = eval(currentInput);
    document.getElementById("result").value = result;
    currentInput = result.toString();
  } catch (error) {
    document.getElementById("result").value = "Error";
    currentInput = "";
  }
}
