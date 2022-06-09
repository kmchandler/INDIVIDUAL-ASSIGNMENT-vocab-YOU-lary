import renderToDOM from './renderToDom';

const selectLanguage = (languageType) => {
  const domString = `<label for="selectedLanguage">Select a Language</label>
    <select class="form-control" id="selectedLanguage" required>
      <option value="">Select a Language</option>;
      <option value="CSS" selected=${languageType === 'CSS'}>CSS</option>
      <option value="HTML" ${languageType === 'HTML' ? 'selected' : ''}>HTML</option>
      <option value="JavaScript" ${languageType === 'JavaScript' ? 'selected' : ''}>JavaScript</option>
      <option value="Python" ${languageType === 'Python' ? 'selected' : ''}>Python</option>
      <option value="React" ${languageType === 'React' ? 'selected' : ''}>React</option>
      <option value="Tech" ${languageType === 'Tech' ? 'selected' : ''}>Tech</option>;
    </select>`;

  renderToDOM('#select-language', domString);
};

export default selectLanguage;
