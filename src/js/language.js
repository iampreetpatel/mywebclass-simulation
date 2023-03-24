document.addEventListener('DOMContentLoaded', () => {
  const languageSelect = document.getElementById('language-select');

  languageSelect.addEventListener('change', (event) => {
    const selectedLanguage = event.target.value;
    changeLanguage(selectedLanguage);
  });

  function changeLanguage(language) {
    // Implement your language switching logic here
    // For example, you could load different language files
    // or use an API to translate the content of your website
    console.log(`Selected language: ${language}`);
  }
});