const header = document.querySelector('#header');
const mainMenuLists = header.querySelectorAll('.main-menu li');

mainMenuLists.forEach(function(mainMenuList) {
  mainMenuList.addEventListener('mouseenter', function () {
    header.classList.add('active');
  });
});
mainMenuLists.forEach(function(mainMenuList) {
  mainMenuList.addEventListener('mouseleave', function () {
    header.classList.remove('active');
  });
});



