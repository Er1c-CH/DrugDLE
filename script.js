import data from './response.js';

const drugData = data;
let hintLevel = 1;

document.addEventListener('DOMContentLoaded', () => {
    showHint();
    document.getElementById('submitButton').addEventListener('click', checkAnswer);
});

function showHint() {
    const drugKeys = Object.keys(drugData);
    const hintMessages = drugKeys.map(key => {
        if (Array.isArray(drugData[key])) {
            return `${key}: ${drugData[key].join(', ')}`;
        } else if (typeof drugData[key] === 'object') {
            const properties = Object.entries(drugData[key]).map(([propKey, propValue]) => `<br>${propKey}: ${propValue}</br>`).join('');
            return `${key}:${properties} `;
        } else {
            return `${key}: <br>${drugData[key]}</br>`;
        }
    });

    const container = document.getElementById('container');
    let p = document.createElement('p');
    p.innerHTML = `${hintMessages[hintLevel]}`;
    container.appendChild(p);
}

function checkAnswer() {
    const userAnswer = document.getElementById('answer').value.trim().toLowerCase();
    const resultElement = document.getElementById('result');

    if (userAnswer === drugData['Nome'].toLowerCase()) {
        resultElement.textContent = `Correto! A droga é ${drugData.Nome}.`;
        resultElement.style.color = 'green';
    } else {
        hintLevel++;
        if (hintLevel < 11) {
            showHint();
            resultElement.textContent = 'Incorreto. Tente novamente.';
            resultElement.style.color = 'red';
        } else {
            resultElement.textContent = `Incorreto. Você usou todas as dicas. A droga era ${drugData.Nome}.`;
            resultElement.style.color = 'red';
        }
    }
}
