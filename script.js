import data from './response.js';
import { prev } from './response.js';
import { listaNomes } from './response.js';

const drugData = data;
const drugDataList = listaNomes
let hintLevel = 1;
let actualHint = 1
const drugKeys = Object.keys(drugData);
const hintMessages = drugKeys.map(key => {
    if (Array.isArray(drugData[key])) {
        return `<span class='large-key'>${key}</span>:<br> <br>${drugData[key].join(', ')}`;
    } else if (typeof drugData[key] === 'object') {
        const properties = Object.entries(drugData[key]).map(([propKey, propValue]) => `<br><br><b>${propKey}:</b> ${propValue}`).join('');
        return `<b><span class='large-key'>${key}:</span><br></b>${properties} `;
    } else {
        return `<b><span class='large-key'>${key}:</span></b><br> <br>${drugData[key]}</br>`;
    }
});

document.addEventListener('DOMContentLoaded', () => {
    showHint(hintLevel);
    document.getElementById('submitButton').addEventListener('click', checkAnswer);
    document.getElementById('botao-esquerdo').addEventListener('click', prevHint);
    document.getElementById('botao-direito').addEventListener('click', nextHint);
    document.getElementById('result').innerText = `A droga de ontem foi o/a ${prev}`
});

document.getElementById('answer').addEventListener('input', function() {
    const input = this.value.trim().toLowerCase();
    const suggestions = drugDataList.filter(drug => drug.toLowerCase().includes(input));
    displaySuggestions(suggestions);
});

function displaySuggestions(suggestions) {
    const suggestionsElement = document.getElementById('suggestions');
    suggestionsElement.innerHTML = '';
    if (suggestions.length === 0 || suggestions.length >= 10) {
        suggestionsElement.style.display = 'none';
        return;
    }

    suggestions.forEach(suggestion => {
        const suggestionDiv = document.createElement('div');
        suggestionDiv.textContent = suggestion;
        suggestionDiv.addEventListener('click', function() {
            document.getElementById('answer').value = suggestion;
            suggestionsElement.style.display = 'none';
        });
        suggestionsElement.appendChild(suggestionDiv);
    });
    suggestionsElement.style.display = 'block';
}


function prevHint() {
    if (actualHint >= 2) {
        const cards = document.getElementById('cards');
        cards.innerHTML = `${hintMessages[actualHint-1]}`;
        actualHint--;
    }
};

function nextHint() {
    if (actualHint < hintLevel) {
        let hint = hintMessages[actualHint]
        const cards = document.getElementById('cards');
        actualHint++;
        cards.innerHTML = `${hint}`;
    }
};

function showHint(level) {
    const cards = document.getElementById('cards');
    cards.innerHTML = `${hintMessages[level]}`;
}

function checkAnswer() {
    const answer = document.getElementById('answer')
    const userAnswer = answer.value.trim().toLowerCase();
    const resultElement = document.getElementById('result');

    if (userAnswer === drugData['Nome'].toLowerCase()) {
        resultElement.textContent = `Correto! A droga é ${drugData.Nome}.`;
        resultElement.style.color = 'green';
        hintLevel = Object.keys(drugData).length
        document.getElementById('submitButton').removeEventListener('click', checkAnswer);
        answer.addEventListener('keydown', function(e) {
            e.preventDefault();
        });
    } else {
        hintLevel++;
        actualHint = hintLevel
        if (hintLevel < Object.keys(drugData).length) {
            showHint(hintLevel);
            resultElement.textContent = 'Incorreto. Tente novamente.';
            resultElement.style.color = 'red';
        } else {
            resultElement.textContent = `Incorreto. Você usou todas as dicas. A droga era ${drugData.Nome}.`;
            resultElement.style.color = 'red';
            document.getElementById('submitButton').removeEventListener('click', checkAnswer);
            answer.addEventListener('keydown', function(e) {
                e.preventDefault();
            });
        }
    }
    answer.value = ""
}
