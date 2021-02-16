const lengthSideOne = document.getElementById('lengthSideOne');
const lengthSideTwo = document.getElementById('lengthSideTwo');
const widthSideTwo = document.getElementById('widthSideOne');
const widthSideOne = document.getElementById('widthSideTwo');
const result = document.getElementById('result');

document.getElementById('resultBtn').addEventListener('click', () => {
    const lengthSideOneNumber = parseFloat(lengthSideOne.value);
    const lengthSideTwoNumber = parseFloat(lengthSideTwo.value);
    const widthSideOneNumber = parseFloat(widthSideOne.value);
    const widthSideTwoNumber = parseFloat(widthSideTwo.value);

    document.getElementById('show').style.display = 'block';

    const lengthResult = (lengthSideOneNumber + lengthSideTwoNumber) / 2;
    const widthResult = (widthSideOneNumber + widthSideTwoNumber) / 2;
    const squareFootage = lengthResult * widthResult;

    const squareFootageShow = `
        <h5>Answer:</h5>
        <p><b>Length=</b>${' '+lengthResult+' '}ft</p>
        <p><b>Width=</b>${' '+widthResult+' '}ft</p>
        <p><b>Square Footage=</b>${' '+squareFootage+' '}ft<sup>2</sup></p>
    `
    result.innerHTML = squareFootageShow;
})