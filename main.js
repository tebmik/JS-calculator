const getHistory = () => {
  return document.querySelector('.history-value').innerText;
};

const printHistory = (num) => {
  document.querySelector('.history-value').innerText=num;
};

const getOutput = () => {
  return document.querySelector('.output-value').innerText;
};

const printOutput = (num) => {
  if(num === '') {
    document.querySelector('.output-value').innerText=num;
  } else {
    document.querySelector('.output-value').innerText=getFormattedNumber(num);
  }
};
const getFormattedNumber = (num) => {
  if(num == '-') {
    return '';
  }
  let n = Number(num);
  let value = n.toLocaleString('en');
  return value;
};

const reverseNumberFormat = (num) => {
  return Number(num.replace(/,/g,''));
};

let operator = document.getElementsByClassName('operator');
for(let i = 0; i < operator.length; i++) {
  operator[i].addEventListener('click', (elem) => {
    elem = elem.target || elem.srcElement;
    
    if(elem.id == 'clear') {
      printHistory('');
      printOutput('');
    }
    
    else if(elem.id == 'backspace') {
      let output = reverseNumberFormat(getOutput()).toString();
      if(output) { //if output has a value
        output = output.substr(0, output.length -1);
        printOutput(output);
      }
    }
    else {
      
      let output = getOutput();
      let history = getHistory();
      
      if(output === '' && history !== ''){
        if(isNaN(history[history.length-1])) {
          history = history.substr(0, history.length -1);
        }
      }
      
      if(output !== '' || history!== '') {
        //condition?true:false
        output = output === ''?
        output:reverseNumberFormat(output);
        history = history + output;
        if(elem.id === '=') {
          let result = eval(history);
          printOutput(result);
          printHistory('');
        }
        else {
          history = history + elem.id;
          printHistory(history);
          printOutput('');
        }
      }
    }
    
  });
}

let number = document.getElementsByClassName('number');
for(let i = 0; i < number.length; i++) {
  number[i].addEventListener('click', (elem) => {
    elem = elem.target || elem.srcElement;
    
    let output = reverseNumberFormat(getOutput());
    if(output !== isNaN) { //if output is a number
      output=output+elem.id;
      printOutput(output);
    }
  });
}


