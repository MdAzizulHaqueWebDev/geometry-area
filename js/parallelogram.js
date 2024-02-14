function calculateParallelogramCall(){
 const base = sendInput('parallelogram-base');
 const height = sendInput('parallelogram-height')
 const area = base * height;
//  console.log(area)
 const displayOnArea = document.getElementById('span-area');
  displayOnArea.innerText = area;
  const squareBase = sendInput('square-base');
  const squareHeight =sendInput('square-height');
  const squareArea = squareBase * squareHeight;
  const inputValue = document.getElementById('square-area-view');
  inputValue.innerText = squareArea;
}

function sendInput(inputMe){
    const getValueOfInput = document.getElementById(inputMe).value;
    const value = parseFloat(getValueOfInput);
return value;
}
