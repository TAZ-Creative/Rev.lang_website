const newWord = document.querySelector(".anyWord")
const transWord = document.querySelector(".translatedWord")
translateBtn = document.querySelector(".translate-btn")
nxtBtn = document.querySelector(".generate-btn")
speakBtn = document.querySelector("#listen-btn")

const yorubaWord = ["káàbọ̀", "émi","òun","àwọn","kus"];

newWord.textContent = yorubaWord[0]

/*for (const country_code in countries) {
    console.log(countries[country_code]);
}*/

translateBtn.addEventListener("click", () => {
    let word = newWord.textContent; //takes the word being displayed
    translateFrom = "yo-NG"; //langauge value to translate from
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
    hearIt.lang =  translateFrom;
    
     speechSynthesis.speak(hearIt);

})
    

});

nxtBtn.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * yorubaWord.length);
    newWord.textContent = yorubaWord[randomIndex];
    console.log('buttton clicked');
    transWord.textContent=""
})