//Funzione per animare le righe in modo che appaiano solo quando lo scroll arriva alla loro altezza.

var carousels = document.querySelectorAll('.carousel-trans');

var callback = function(items){
  items.forEach((item) => {
    if (item.isIntersecting) {
      item.target.classList.add("visibily");
    } else {
      item.target.classList.remove("visibily");
    }
  });
}

// observer

var observer = new IntersectionObserver(callback, { threshold: 0.5} );


carousels.forEach((element) => {
  observer.observe(element);
});
