const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const header = document.querySelector('.header ,.container');

hamburger.addEventListener('click',()=>{
    hamburger.style.transition = '.5s ease toggleClose';
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
});
document.addEventListener('scroll',()=>{
    var scroll_postion = window.scrollY;
    if(scroll_postion>200)
     {
        header.style.backgroundColor ='#29323c';
     }
     else
     {
        header.style.backgroundColor = 'transparent';
     }
});
function toggleClose()
   {
      hamburger.classList.toggle('active');
      mobile_menu.classList.toggle('active');
   }