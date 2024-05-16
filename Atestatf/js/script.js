let sideBar = document.querySelector('.side-bar');

document.querySelector('#menu-btn').onclick = () =>{
   sideBar.classList.toggle('active');
   body.classList.toggle('active');
}

document.querySelector('.close-side-bar').onclick = () => {
   sideBar.classList.toggle('active');
   body.classList.toggle('active');
}

