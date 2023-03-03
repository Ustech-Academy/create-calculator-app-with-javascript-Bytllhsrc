var inputText = "";

const operatorArray = ["-", "+", "*", "/"];

const forbiddenOperators = ["+", "*", "/"];


function handleClick(key) {
    let hasEnteredPointBefore = key === "." && inputText.includes(".");
    let hasSubsequentOperators = operatorArray.includes(key) && operatorArray.includes(inputText[inputText.length-1])
     
    if (hasEnteredPointBefore) {
        document.getElementById("input").value = "Noktaya bastın zaten, Mecnun!";
        setTimeout(() => {
            document.getElementById("input").value = inputText;
        }, 1000);
        return;
    }
    if (hasSubsequentOperators) {
        document.getElementById("input").value = "Dört işlemi öğren, Yaviz!";
        setTimeout(() => {
            document.getElementById("input").value = inputText;
        }, 1000);
        return;
    }
    if (forbiddenOperators.includes(key) && inputText === "") {
        inputText = "Önce rakam yaz, Boşş İsmail!";
        document.getElementById("input").value = inputText;
        setTimeout(() => {
            inputText = "";
            document.getElementById("input").value = "";
        }, 1000);
        return;
    }
    inputText += key;
    document.getElementById("input").value = inputText;
}

function actionClear() {
    inputText = "";
    document.getElementById("input").value = "";
}

function findResult() {
    if (inputText === ""){ 
        return;
    }
    document.getElementById("input").value = eval(inputText)
    inputText = "";
}







