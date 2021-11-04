let autre = 0
let i = 0
let up = false

window.addEventListener('scroll', ()=>{
  if ((document.body.getBoundingClientRect()).top < autre) {
    up = true
    i = i++
    window.scrollTo({
            top: document.getElementById("ancre" + i).offsetTop,
            behavior: 'smooth'
          })
  }
  else {
    up = false
    i = i--
    window.scrollTo({
            top: document.getElementById("ancre" + i).offsetTop,
            behavior: 'smooth'
          })
  }
  autre = document.body.getBoundingClientRect().top
  console.log(i);
})