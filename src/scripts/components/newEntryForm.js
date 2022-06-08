import renderToDom from '../helpers/renderToDom';
import clearDom from '../helpers/clearDom';
import selectLanguage from '../helpers/selectLanguage';

const newEntryForm = (userID, obj = {}) => {
  clearDom();
  const domString = `
    <form id="${obj.firebaseKey ? `update-entry--${obj.firebaseKey}` : 'submit-entry'}" class="mb-4">
      <div class="form-group">
        <label for="title">Word/Phrase</label>
        <input type="text" class="form-control" id="title" aria-describedby="title" placeholder="Enter a word or phrase" value="${obj.title || ''}" required>
      </div>
      <div class="form-group">
        <label for="definition">Definition</label>
        <textarea class="form-control" placeholder="Definition" id="definition" style="height: 100px" value="${obj.definition || ''}" ></textarea>
      </div>
      <div class="form-group" id="select-language">
      </div>
      <button id="submitBtn" type="submit" class="btn btn-primary">Submit
      </button>
    </form>`;

  renderToDom('#form-container', domString);
  selectLanguage(userID, `${obj.language_tech || ''}`);
};

export default newEntryForm;
