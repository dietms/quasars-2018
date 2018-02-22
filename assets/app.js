var mobMenuState = false;

$(document).ready(function () {
  var el = $('.tabs');
  var instance = M.Tabs.init(el, { swipeable: false });

  var collapsible = $('.collapsible');
  M.Collapsible.init(collapsible);

  // MaterialBox init
  $('.materialboxed').materialbox();
  
  // Menu toggle for mobile devices
  $('#mobile-menu-open').on('click', function () {

    if (!mobMenuState) {
      document.querySelector('#mobile-menu').classList.remove('hide');
      mobMenuState = true;
    }
  });
  $('#mobile-menu-close').on('click', function () {
    if (mobMenuState) {
      document.querySelector('#mobile-menu').classList.add('hide');
      mobMenuState = false;
    }
  });
  $('.menu-close').on('click', function () {
    if (mobMenuState) {
      document.querySelector('#mobile-menu').classList.add('hide');
      mobMenuState = false;
    }
  });

  $('#scroll-down').on('click', function() {
    // console.log(window.innerHeight);
    window.scroll({
      top: window.innerHeight - 64,
      left: 0,
      behavior: 'smooth'
    });
  });

  // updating the active schedule tab
  $('#schedule .tab a[date]').each(function() {
    var dt = new Date($(this).attr('date')).toISOString().slice(0, 10);
    var currDate = new Date().toISOString().slice(0,10);
    if (dt === currDate) {
      $(this).get()[0].click();
    }
  });

  document.addEventListener("scroll", function() {
    const scrollTopBtn = document.querySelector('#scroll-top');
    if (window.scrollY > window.innerHeight/2 && scrollTopBtn.classList.contains('hide')) {
      scrollTopBtn.classList.remove('hide');
    }
    if (window.scrollY === 0 && !scrollTopBtn.classList.contains('hide')) {
      document.querySelector('#scroll-top').classList.add('hide');
    }
  });

  document.querySelector('#scroll-top .btn-floating').addEventListener('click', function() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  });
});

function scrollToSection(elem) {
  const top = document.querySelector(elem).top;
  window.scroll({
    top: top,
    left: 0,
    behavior: 'smooth'
  });
}