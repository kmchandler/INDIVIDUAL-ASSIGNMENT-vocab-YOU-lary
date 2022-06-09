import clearDom from './clearDom';
import renderToDom from './renderToDom';

const showEntries = (array) => {
  clearDom();

  let domString = '';
  let buttonString = '';

  array.forEach((item) => {
    domString += `
    <div id="cardContainer">
      <div id="cardDiv" class="card">
        <div class="card-body">
          <div class="card-body"
            <h5 class="card-title">${item.title}</h5>
            <hr>
            <p id="definitionDiv" class="card-text">${item.definition}</p>
            <hr>
            <p class="card-text">${item.language_tech}</p>
            <hr>
            <div id="timeUser">
            <p class="card-text">time submitted: ${item.timeSubmitted}</p>
            <p class="card-text">uid: ${item.uid}</p>
            </div>
            <p></p>
            <a href="#" id="edit-entry-btn--${item.firebaseKey}" class="fas fa-edit btn btn-info greenBtn"></a>
            <a href="#" id="delete-entry-btn--${item.firebaseKey}" class="btn btn-danger fas fa-trash-alt greenBtn"></a>
        </div>
        </div>
      </div>
    </div>`;
  });

  buttonString += `
  <button type="button" id="allFilter" class="btn btn-primary btnCSS">All Entries</button>
  <button type="button" id="css" class="btn btn-primary btnCSS">CSS</button>
  <button type="button" id="django" class="btn btn-primary btnCSS">Django</button>
  <button type="button" id="html" class="btn btn-primary btnCSS">HTML</button>
  <button type="button" id="javascript" class="btn btn-primary btnCSS">Javascript</button>
  <button type="button" id="python" class="btn btn-primary btnCSS">Python</button>
  <button type="button" id="react" class="btn btn-primary btnCSS">React</button>
  <button type="button" id="tech" class="btn btn-primary btnCSS">Tech</button>
  `;

  renderToDom('#view', domString);
  renderToDom('#filterBtns', buttonString);
};

const emptyEntries = () => {
  const domString = '<h1>No Entries</h1>';
  renderToDom('#view', domString);
};

export { emptyEntries, showEntries };
