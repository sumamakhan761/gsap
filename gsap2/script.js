var path = `M 50 100 Q 725 100 1500 100`
var final = `M 50 100 Q 725 100 1500 100`

// Create SVG -> to mozaila mdn
// Scalable Vector Graphics (SVG) is an XML-based markup language for describing two-dimensional based vector graphics

var container = document.querySelector(".container")

container.addEventListener("mousemove", function (dets) {
  path = `M 50 100 Q ${dets.x*1.3} ${dets.y*1.3} 1500 100`

  gsap.to("svg path", {
    attr: { d: path }, // attr se hum path ko update karte hai
    duration: 0.3,
    ease: "power3.out"// this is used to make animation smooth
  })
})

container.addEventListener("mouseleave", function () {
  gsap.to("svg path", {
    attr: { d: final },
    duration: 1.5,
    ease:"elastic.out(1, 0.2)"
  })
})