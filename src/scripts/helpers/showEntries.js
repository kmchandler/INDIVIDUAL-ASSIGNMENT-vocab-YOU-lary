import clearDom from './clearDom';
import renderToDom from './renderToDom';

const showEntries = (array) => {
  clearDom();

  let domString = '';
  array.forEach((item) => {
    domString += `
    <div class="card">
      <div class="card-body">
        <div class="card-body"
          <h5 class="card-title">${item.title}</h5>
          <hr>
          <p class="card-text">${item.definition}</p>
          <hr>
          <p class="card-text">${item.language_tech}</p>
          <p class="card-text">${item.timeSubmitted}</p>
          <p class="card-text">${item.userID}</p>
          <a href="#" id="edit-entry-btn--${item.firebaseKey}" class="fas fa-edit btn btn-info"></a>
          <a href="#" id="delete-entry-btn--${item.firebaseKey}" class="btn btn-danger fas fa-trash-alt"></a>
      </div>
      </div>
    </div>`;
  });
  renderToDom('#view', domString);
};

const emptyEntries = () => {
  const domString = '<h1>No Entries</h1>';
  renderToDom('#view', domString);
};

export { emptyEntries, showEntries };
