exports.initialize = function () {
  addScrollOffsetClass();
  calculateBannerHeight();
  includeHTML();
  initializeLanguageSelector();
};

function calculateBannerHeight() {
  const banner = document.querySelector('[role="banner"]');
  const bannerHeight = banner.offsetHeight;

  // Set the padding top of .scroll-offset to the banner height
  const scrollOffsetEls = document.querySelectorAll('.scroll-offset');
  for (const el of scrollOffsetEls) {
    el.style.paddingTop = `${bannerHeight}px`;
    el.style.marginTop = '-2em';
  }

  // Set the margin top of the body to the banner height
  document.body.style.marginTop = `${bannerHeight}px`;
}

function addScrollOffsetClass() {
  const headings = document.querySelectorAll('main h1, main h2, main h3, main h4, main h5, main h6');
  headings.forEach(heading => {
    heading.classList.add('scroll-offset');
  });
}

function includeHTML() {
  const elements = document.querySelectorAll('[data-include]');

  elements.forEach(element => {
    const file = element.getAttribute('data-include');
    fetch(file)
      .then(response => {
        if (response.status === 200) {
          return response.text();
        }
        throw new Error('File not found');
      })
      .then(html => {
        element.innerHTML = html;
      })
      .catch(error => {
        console.error('Error including HTML file:', error);
      });
  });
}

function initializeLanguageSelector() {
  const languageSelect = document.getElementById('language-select');

  if (languageSelect) {
    languageSelect.addEventListener('change', event => {
      const selectedLanguage = event.target.value;
      changeLanguage(selectedLanguage);
    });
  }
}

function changeLanguage(language) {
  // Implement your language switching logic here
  // For example, you could load different language files
  // or use an API to translate the content of your website
  console.log(`Selected language: ${language}`);
}