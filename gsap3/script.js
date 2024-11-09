var main = document.querySelector(".main")
var main2 = document.querySelector(".main2")
var cursor = document.querySelector(".cursor")

var imagediv = document.querySelector(".image")


main.addEventListener("mousemove", function (dets) {
  gsap.to(cursor, {
    x: dets.x,
    y: dets.y,
    duration: 1,
    ease: "power3"
  });
});

main2.addEventListener("mousemove", function (dets) {
  gsap.to(cursor, {
    x: dets.clientX,
    y: dets.clientY,
    duration: 0.6,
  });
});


imagediv.addEventListener("mouseenter", function () {
  cursor.innerHTML = "View More"
  gsap.to(cursor, {
    scale: 4,
    backgroundColor: "#ffffff8a"
  })
})

imagediv.addEventListener("mouseleave", function () {
  cursor.innerHTML = ""
  gsap.to(cursor, {
    scale: 1,
    backgroundColor: "#fff"

  })
})
