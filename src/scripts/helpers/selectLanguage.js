import renderToDOM from './renderToDom';

const selectLanguage = (languageType) => {
  let domString = `<label for="author">Select a Language</label>
    <select class="form-control" id="selectedLanguage" required>
    <option value="">Select a Language</option>;
          <option
            value="CSS"
            selected=${languageType === 'CSS'}>
            CSS
          </option>
          <option
            value="Django">
            selected=${languageType === 'Django'}>
            Django
          </option>
          <option
            value="HTML">
            selected=${languageType === 'HTML'}>
            HTML
          </option>
          <option
            value="JavaScript">
            selected=${languageType === 'JavaScript'}>
            JavaScript
          </option>
          <option
            value="Python">
            selected=${languageType === 'Python'}>
            Python
          </option>
          <option
            value="React">
            selected=${languageType === 'React'}>
            React
          </option>
          <option
            value="Tech">
            selected=${languageType === 'Tech'}>
            Tech
          </option>`;

  domString += '</select>';

  renderToDOM('#select-language', domString);
};

export default selectLanguage;
