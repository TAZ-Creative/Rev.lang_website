const API_KEY = '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';

// Configuration for each language
const languages = {
  yoruba: {
    languageCode: 'yo-NG',
    words: ["káàbọ̀"]
  },
  xhosa: {
    languageCode: 'xh-ZA',
    words: ["Uxolo"]
  },
  hausa: {
    languageCode: 'ha-NE',
    words: ["Sannu"]
  },
  zulu: {
    languageCode: 'zu-ZA',
    words: ["sawubona"]
  },
  
};

const newWord = document.querySelector(".anyWord");
const transWord = document.querySelector(".translatedWord");
const translateBtn = document.querySelector(".translate-btn");
const nxtBtn = document.querySelector(".generate-btn");
const speakBtn = document.querySelector("#listen-btn");
const languageTitle = document.getElementById("languageTitle");
const languageWord = document.getElementById("languageWord");



let currentLanguage = getCurrentLanguageFromUrl(); // name of language from URL

// Get the current langguage from the URL
function getCurrentLanguageFromUrl() {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get('language'); 
}


// Function to set up the name for a language per page
function initializeLanguage(language) {
    newWord.textContent = languages[language].words[0];
    languageTitle.textContent = `Let’s learn some everyday ${language.charAt(0).toUpperCase() + language.slice(1)} words.`;
  }
  
  // translation API
  function translateWord() {
    const word = newWord.textContent;
    const translateFrom = languages[currentLanguage].languageCode;
    const translateTo = 'en-GB';
  
    const apiUrl = `https://api.mymemory.translated.net/get?q=${word}&langpair=${translateFrom}|${translateTo}`;
  
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        transWord.textContent = data.responseData.translatedText;
      });

  }
  
// See English Meaning
translateBtn.addEventListener("click", translateWord);

speakBtn.addEventListener("click", () => {
  const hearIt = new SpeechSynthesisUtterance(newWord.textContent);
  hearIt.lang = languages[currentLanguage].languageCode;
});

//Generate New Word
nxtBtn.addEventListener("click", () => {
  fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${API_KEY}`,
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: `Generate an everyday word in ${currentLanguage} language. Strictly write only this single word and nothing else.` }]
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
