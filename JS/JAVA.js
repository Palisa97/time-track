
/*let Work = {
  daily: {
    current: 5,
    previous: 7
  },
  weekly: {
    current: 32,
    previous: 36
  },
  monthly: {
    current: 103,
    previous: 128
  },

}

console.log(Work);


let Play = {

  daily: {
    current: 1,
    previous: 2
  },
  weekly: {
    current: 10,
    previous: 8
  },
  monthly: {
    current: 23,
    previous: 29
  },
}
console.log(Play);

let Study = {
  daily: {
    current: 0,
    previous: 1
  },
  weekly: {
    current: 4,
    previous: 7
  },
  monthly: {
    current: 13,
    previous: 19
  },
}
console.log(Study);

let Exercise = {

  daily: {
    current: 1,
    previous: 1
  },
  weekly: {
    current: 4,
    previous: 5
  },
  monthly: {
    current: 11,
    previous: 18
  },
}
console.log(Exercise);


let Social = {

  daily: {
    current: 1,
    previous: 3
  },
  weekly: {
    current: 5,
    previous: 10
  },
  monthly: {
    current: 21,
    previous: 23
  },

}
console.log(Social);

let SelfCare = {

  daily: {
    current: 0,
    previous: 1
  },
  weekly: {
    current: 2,
    previous: 2
  },
  monthly: {
    current: 7,
    previous: 11
  },
}
console.log(SelfCare);*/

function showSlides(n){
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  