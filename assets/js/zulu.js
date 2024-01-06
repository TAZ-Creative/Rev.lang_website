import { API_KEY } from "./config.js";

const newWord = document.querySelector(".anyWord");
const transWord = document.querySelector(".translatedWord");
const translateBtn = document.querySelector(".translate-btn");
const nxtBtn = document.querySelector(".generate-btn");
const speakBtn = document.querySelector("#listen-btn");

const zuluWord = ["sawubona"];

newWord.textContent = zuluWord[0]

translateBtn.addEventListener("click", () => {
    let word = newWord.textContent; //takes the word being displayed
    let translateFrom = "zu-ZA"; //langauge value to translate from
    let translateTo = "en-GB"; //language value to translate to -- always English

    let apiUrl = `https://api.mymemory.translated.net/get?q=${word}&langpair=${translateFrom}|${translateTo}`
    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        transWord.textContent = data.responseData.translatedText; // translated text 
    })

speakBtn.addEventListener("click", () => {
    let hearIt = new SpeechSynthesisUtterance(newWord.textContent);
    hearIt.lang =  translateFrom

})
    

});

nxtBtn.addEventListener("click", () => {
    fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${API_KEY}`,
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content: "Generate a word in zulu language. Strictly write only this single word and nothing else." }]
        })
    })
        .then(response => response.json())
        .then(data => {
        const generatedWord = data.choices[0].message.content;
        newWord.textContent = generatedWord;
        transWord.textContent = ""; 
        })
        .catch(error => {
            console.error('Error fetching data from OpenAI API:', error);
        });
});


/*nxtBtn.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * yorubaWord.length);
    newWord.textContent = yorubaWord[randomIndex];
    console.log('buttton clicked');
    transWord.textContent=""
})*/