
document.getElementById('cng-bg-hover').addEventListener('mouseup',function(){
    const hover = document.getElementById('cng-bg-hover');
    hover.style.backgroundColor = ' aqua'
})
function triangleArea(){
    // get the triangle base value
    const triangleBaseInput = document.getElementById("triangle-base");
    const triangleBaseValue = triangleBaseInput.value;
    const base = parseFloat(triangleBaseValue)
    // console.log( typeof base,base)

    // get the triangle height value
    const triangleHeightInput = document.getElementById('triangle-height');
    const triangleHeightValue = triangleHeightInput.value;
   const height = parseFloat(triangleHeightValue);
// console.log(height)

const area = 0.5 *base*height;
console.log('triangle value',area)
// get triangle area
const triangleSpanArea = document.getElementById('triangle-area')
 triangleSpanArea.innerText = area;
}
// hello
 // rectangle area
 document.getElementById('cng-bg-pink').addEventListener('mouseup',function(){
    const hover = document.getElementById('cng-bg-pink');
    hover.style.backgroundColor = ' pink'
})
function rectangleArea(){
    // get the width of rectangle
    const rectangleWidth = document.getElementById('rectangle-field');
    const rectangleWidthValue = rectangleWidth.value;
    const width = parseFloat(rectangleWidthValue);
    // console.log('width',width)

    // get the length of rectangle
    const rectangleHeight = document.getElementById('rectangle-height');
    const rectangleHeightValue = rectangleHeight.value;
    const height = parseFloat(rectangleHeightValue);
    // console.log(height)

    // view in rectangle area
    const viewValueArea = document.getElementById('viewValueArea');
    viewValueArea.innerText = width * height;
}

// Parallelogram area 
document.getElementById('cng-bg-mediumaquamarine').addEventListener('mouseup',function(){
    const hover = document.getElementById('cng-bg-mediumaquamarine');
    hover.style.backgroundColor = ' mediumaquamarine'
})
function pantagonArea(){
    // get the pantagon base value
    const pantagonBaseInput = document.getElementById('pantagon-base');
    const pantagonBaseValue = pantagonBaseInput.value;
    const base = parseFloat(pantagonBaseValue);
    // console.log('base of pantagon',base)

   //get the pantagon height value
   const pantagonHeightInput = document.getElementById('pantagon-height');
   const pantagonHeightValue = pantagonHeightInput.value;
   const height = parseFloat(pantagonHeightValue);
//    console.log(height)
 
// math 
const area = base * height;
// view to display calculate value
const viewValue = document.getElementById('span-area');
viewValue.innerText = area;
}

// Rhombus Area
document.getElementById('cng-bg-mediumspringgreen').addEventListener('mouseup',function(){
    const hover = document.getElementById('cng-bg-mediumspringgreen');
    hover.style.backgroundColor = ' mediumspringgreen'
})
function rhombusArea(){
    //get the rhombus d1 value
    const rhombusAreaD1Input = document.getElementById('rhombusAreaD1');
    const rhombusAreaD1Value = rhombusAreaD1Input.value;
    const d1 = parseFloat(rhombusAreaD1Value);
    // console.log(d1)

    //get the rhombus d2 value
    const rhombusAreaD2Input = document.getElementById('rhombusAreaD2');
    const rhombusAreaD2Value = rhombusAreaD2Input.value;
    const d2 = parseFloat(rhombusAreaD2Value);
    // console.log(d2)
    // do math area of rhombus 
    const area = 0.5* d1 *d2;
    //view in the display area 
    const displayArea = document.getElementById('spanArea');
    displayArea.innerText = area;

};

// pentagon area
document.getElementById('cng-bg-mediumvioletred').addEventListener('mouseup',function(){
    const hover = document.getElementById('cng-bg-mediumvioletred');
    hover.style.backgroundColor = ' mediumvioletred'
})

function pentagonArea(){
    // get pentagon p 
    const pentagonAreaPInput = document.getElementById('pentagon-p');
    const pentagonAreaPValue = pentagonAreaPInput.value;
    const pentagonP = parseFloat(pentagonAreaPValue);
   // get pentagon b
   const pentagonAreaBaseInput =document.getElementById('pentagon-AreaBase');
   const pentagonAreaBaseValue = pentagonAreaBaseInput.value;
   const base = parseFloat(pentagonAreaBaseValue);
//    console.log(base)
// math 
const area = 0.5 * pentagonP * base;

// view in display to area value
const viewArea = document.getElementById('pentagon-span-area');
viewArea.innerText = area;
}

// Ellipse area
document.getElementById('cng-bg-violet').addEventListener('mouseup',function(){
    const hover = document.getElementById('cng-bg-violet');
    hover.style.backgroundColor = ' violet'
})
function ellipseArea(){

}