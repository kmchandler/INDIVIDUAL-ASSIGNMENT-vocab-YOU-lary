import renderToDom from '../helpers/renderToDom';
import clearDom from '../helpers/clearDom';

const newEntryForm = () => {
  clearDom();
  const domString = `
    <form id="entryForm" class="mb-4">
      <div class="form-group">
        <label for="title">Word/Phrase</label>
        <input type="text" class="form-control" id="word" aria-describedby="title" placeholder="Enter a word or phrase" required>
      </div>
      <div class="form-group">
        <label for="definition">Definition</label>
        <textarea class="form-control" placeholder="Definition" id="definition" style="height: 100px"></textarea>
      </div>
      <div class="form-group" id="select-language">
      </div>
      <button type="submit" class="btn btn-primary">Submit
      </button>
    </form>`;

  renderToDom('#form-container', domString);
  // selectLanguage(uid, `${obj.author_id || ''}`);
};

export default newEntryForm;
