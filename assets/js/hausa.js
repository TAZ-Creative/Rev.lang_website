const API_KEY = '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'

const newWord = document.querySelector(".anyWord")
const transWord = document.querySelector(".translatedWord")
translateBtn = document.querySelector(".translate-btn")
nxtBtn = document.querySelector(".generate-btn")
speakBtn = document.querySelector("#listen-btn")

const hausaWord = ["Sannu"];

newWord.textContent = hausaWord[0]

translateBtn.addEventListener("click", () => {
    let word = newWord.textContent; //takes the word being displayed
    translateFrom = "ha-NG"; //langauge value to translate from
    translateTo = "en-GB"; //language value to translate to -- always English

    let apiUrl = `https://api.mymemory.translated.net/get?q=${word}&langpair=${translateFrom}|${translateTo}`
    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        transWord.textContent = data.responseData.translatedText; // Set translated text here
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
            messages: [{ role: "user", content: "Generate an everyday word in Hausa language. Strictly write only this single word and nothing else." }]
        })
    })
        .then(response => response.json())
        .then(data => {
        const generatedWord = data.choices[0].message.content;
        newWord.textContent = generatedWord;
        transWord.textContent = ""; // Clear
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