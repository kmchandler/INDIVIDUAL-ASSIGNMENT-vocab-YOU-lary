import renderToDOM from './renderToDom';

const selectLanguage = () => {
  let domString = `<label for="author">Select a Language</label>
    <select class="form-control" id="selectedLanguage" required>
    <option value="">Select a Language</option>;
          <option
            value="CSS">
            CSS
          </option>
          <option
            value="Django">
            Django
          </option>
          <option
            value="HTML">
            HTML
          </option>
          <option
            value="JavaScript">
            JavaScript
          </option>
          <option
            value="Python">
            Python
          </option>
          <option
            value="React">
            React
          </option>
          <option
            value="Tech">
            Tech
          </option>`;

  domString += '</select>';

  renderToDOM('#select-language', domString);
};

export default selectLanguage;
