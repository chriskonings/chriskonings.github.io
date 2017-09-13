// document.addEventListener("DOMContentLoaded", function(event) {
//   var accordion = document.querySelector('.accordion');
//   accordion.querySelector('.accordion__button').addEventListener("click", function(){
//     var content = this.nextElementSibling;
//     content.classList.toggle('accordion__content--open');
//   }, false);
// });

var everythingLoaded = setInterval(function() {
  if (/loaded|complete/.test(document.readyState)) {
    clearInterval(everythingLoaded);
    init();
  }
}, 10);

function init() {
  document.querySelector('.content').classList.add('content--loaded');
  document.querySelector('.loader').classList.add('loader--hidden');
}
