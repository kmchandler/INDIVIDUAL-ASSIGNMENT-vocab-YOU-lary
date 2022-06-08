import clearDom from './clearDom';
import renderToDom from './renderToDom';

const showEntries = (array) => {
  clearDom();

  let domString = '';
  let buttonString = '';

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

  buttonString += `
  <button type="button" id="cssFilter" class="btn btn-primary">CSS</button>
  <button type="button" id="djangoFilter" class="btn btn-primary">Django</button>
  <button type="button" id="htmlFilter" class="btn btn-primary">HTML</button>
  <button type="button" id="javascriptFilter" class="btn btn-primary">Javascript</button>
  <button type="button" id="pythonFilter" class="btn btn-primary">Python</button>
  <button type="button" id="reactFilter" class="btn btn-primary">React</button>
  <button type="button" id="techFilter" class="btn btn-primary">Tech</button>
  `;

  renderToDom('#view', domString);
  renderToDom('#filterBtns', buttonString);
};

const emptyEntries = () => {
  const domString = '<h1>No Entries</h1>';
  renderToDom('#view', domString);
};

export { emptyEntries, showEntries };
