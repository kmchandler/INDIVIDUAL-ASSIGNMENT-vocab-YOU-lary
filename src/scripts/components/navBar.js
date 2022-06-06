import renderToDOM from '../helpers/renderToDom';
import logoutButton from './logoutButton';

const navBar = () => {
  const navLogo = `
  <span class="iconify" data-icon="emojione:letter-v" data-width="30" data-height="30"></span>`;
  const domString = `
    <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark mb-5">
    <div class="container-fluid">
        <a id="navLogoDiv">${navLogo}</a>
        <a class="navbar-brand title" href="#">ocab-YOU-lary</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item active">
              <a class="nav-link" href="#" id="all-entries-nav">
                All Entries <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" id="new-entry-nav">Create New Entry</a>
            </li>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" id="logout-nav">Logout</a>
            </li>
          </ul>
        </div>
        </div>
      </nav>`;

  renderToDOM('#navigation', domString);
  logoutButton();
};

export default navBar;
