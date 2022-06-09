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
          <p class="card-text">${item.uid}</p>
          <a href="#" id="edit-entry-btn--${item.firebaseKey}" class="fas fa-edit btn btn-info"></a>
          <a href="#" id="delete-entry-btn--${item.firebaseKey}" class="btn btn-danger fas fa-trash-alt"></a>
      </div>
      </div>
    </div>`;
  });

  buttonString += `
  <button type="button" id="allFilter" class="btn btn-primary">All Entries</button>
  <button type="button" id="cssFilter" class="btn btn-primary">CSS</button>
  <button type="button" id="django" class="btn btn-primary">Django</button>
  <button type="button" id="html" class="btn btn-primary">HTML</button>
  <button type="button" id="javascript" class="btn btn-primary">Javascript</button>
  <button type="button" id="python" class="btn btn-primary">Python</button>
  <button type="button" id="react" class="btn btn-primary">React</button>
  <button type="button" id="tech" class="btn btn-primary">Tech</button>
  `;

  renderToDom('#view', domString);
  renderToDom('#filterBtns', buttonString);
};

const emptyEntries = () => {
  const domString = '<h1>No Entries</h1>';
  renderToDom('#view', domString);
};

export { emptyEntries, showEntries };
