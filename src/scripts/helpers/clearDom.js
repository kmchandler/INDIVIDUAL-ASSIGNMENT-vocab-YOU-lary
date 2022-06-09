const clearDom = () => {
  document.querySelector('#form-container').innerHTML = '';
  document.querySelector('#view').innerHTML = '';
  document.querySelector('#filterBtns').innerHTML = '';
};

export default clearDom;
