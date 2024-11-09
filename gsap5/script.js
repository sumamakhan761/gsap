// animation 1

/*
function breakText() {
  var h1 = document.querySelector("h1")
  var h1text = h1.textContent //text selected
  var textBreak = h1text.split('')
  var clutter = ''
  textBreak.forEach(function (elem) {
    clutter += `<span>${elem}</span>`
  })

  h1.innerHTML = clutter
}

breakText()


// span is a inline elem that the translate transform function will not work on

// that why in the css we give spna inline block so that every thing is work well.


// go css and give h1 overflow hidden so that animation looks good its like zammen se kuch nikal rha hai
gsap.from("h1 span", {
  y: 50,
  duration: 0.8,
  delay: 0.5,
  opacity: 0,
  stagger: 0.15,
})
*/

// animation 2 is total same as animation 1 but we just give somthing craazy

function breakText() {
  var h1 = document.querySelector("h1")
  var h1text = h1.textContent //text selected
  var textBreak = h1text.split('')
  var halfValue = Math.floor(textBreak.length / 2)

  var clutter = ''

  textBreak.forEach(function (elem, idx) {

    if (idx < halfValue) {
      clutter += `<span class="a">${elem}</span>`
    } else {
      clutter += `<span class="b">${elem}</span>`
    }
  })

  h1.innerHTML = clutter
}

breakText()

gsap.from("h1 .a", {
  y: 50,
  duration: 0.6,
  delay: 0.5,
  opacity: 0,
  stagger: 0.15,
  opacity: 0
})

gsap.from("h1 .b", {
  y: 50,
  duration: 0.6,
  delay: 0.5,
  opacity: 0,
  stagger: -0.15,
  opacity: 0
})

