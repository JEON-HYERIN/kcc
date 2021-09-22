const header = document.querySelector('#header');
const mainMenuLists = header.querySelectorAll('.main-menu li');

mainMenuLists.forEach(function(mainMenuList) {
  mainMenuList.addEventListener('mouseenter', function () {
    header.classList.add('active');
    mainMenuList.classList.add('selected');
  });
});
mainMenuLists.forEach(function(mainMenuList) {
  mainMenuList.addEventListener('mouseleave', function () {
    header.classList.remove('active');
    mainMenuList.classList.remove('selected');
  });
});

const banner = document.querySelector('#banner');
const bannerHeight = banner.getBoundingClientRect().height;
console.log(bannerHeight)
console.log(window.scrollY)
window.addEventListener('scroll', function () {
  console.log(window.scrollY)
  if(window.scrollY > bannerHeight / 100) {
    header.classList.add('active');
  } else {
    header.classList.remove('active');
  }
});


