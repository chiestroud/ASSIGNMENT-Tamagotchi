const buttonSubmitFunc = (e) => {
  e.preventDefault();
  const buttonId = e.target.id;
  const imgUrl = document.querySelector('#imgUrl').value;
  if (buttonId === 'submit') {
    document.querySelector('#secretImg').innerHTML = `<img class="userPic" src="${imgUrl}">`;
    document.querySelector('#secretImg2').innerHTML = `<img class="userPic" src="${imgUrl}">`;
  }
};

export default buttonSubmitFunc;
