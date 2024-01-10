  // // Function to open language-specific page
  // function openLanguagePage(language) {
  //   window.location.href = `${language}.html`;
  // }

  function openLanguagePage(language) {
    window.location.href = `${language}.html?language=${language}`;
  }