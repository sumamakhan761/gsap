
// level 1

/*
gsap.to(".box1", {
  rotation: 360,
  x: 1200,
  y: -100,
  duration: 2,
  delay: 2,
  backgroundColor: "orange",
  borderRadius: "50%",
  scale: "2",
  repeat: -1,
  yoyo:true

});
gsap.from(".box2", {
  rotation: 360,
  x: 1000,
  y: 200,
  duration: 2,
  delay: 2,
  backgroundColor: "green",
  borderRadius: "50%",
  scale: 2,
  repeat: 1,// repeat 1 more time
  repeat: -1,//if you want to infinte time run
  yoyo:true // yoyo effect give true so we can see the animation in reverse order

});
gsap.to(".box3", {
  rotation: 360,
  x: 800,
  y: 300,
  duration: 2,
  delay: 2,
  backgroundColor: "blue",
  borderRadius: "50%",
  scale: 2,
  repeat: -1,
  yoyo:true
});
*/


// level 2
/*gsap.from("h1", {
  opacity: 0, // 0 to 1 means invisible to  visible
  y: 30,
  delay: 1,
  duration: 1,
  stagger: 0.3,// means all are apppear one by  which you give duration like 1 , 2 ,0.2
  //  stagger : -1 // reversely appear one by one
})*/

// level 3
// timeline  why use time line bcz using timeline we can control the animation of multiple elements at same time and they animate one after one
/*
let tl = gsap.timeline();

tl.to(".box1", {
  rotation: 360,
  x: 1200,
  duration: 2,
  delay: 2,
  backgroundColor: "orange",
  borderRadius: "50%",
  scale: "2",

})

tl.from(".box2", {
  rotation: 360,
  x: 1200,
  duration: 2,
  delay: 0,
  backgroundColor: "green",
  borderRadius: "50%",
  scale: 2,

})

tl.to(".box3", {
  rotation: 360,
  x: 800,
  duration: 2,
  delay: 0,
  backgroundColor: "blue",
  borderRadius: "50%",
  scale: 2,
})
  */


// lavel 5 scroll trigger -> scroll trigger is used to animate the elements when they come in view of the screen
/*
gsap.from(".page1 .box1", {
  rotation: 360,
  scale: 0,
  duration: 2,
  delay: 1,
});
gsap.from(".page2 .box2", {
  rotation: 360,
  scale: 0,
  duration: 2,
  delay: 1,
  scrollTrigger: {
    trigger: ".page2 .box2",//give a name where you want to give a scroll tigger
    scroller: "body",
    markers: true, // give a start and end point of the animation give you can see and control the animation
    start: "top 60%", // start the animation when the element is 60% from
    scrub: 2 // smoothness
  }
});
gsap.from(".page3 .box3", {
  rotation: 360,
  scale: 0,
  duration: 2,
  delay: 1,
  scrollTrigger: {
    trigger: ".page3 .box3",//give a name where you want to give a scroll tigger
    scroller: "body",
    markers: true, // give a start and end point of the animation give you can see and control the animation
    start: "top 100%", // start the animation when the element is 60% from
    scrub: 2 // smoothness
  }
});
*/

gsap.to(".page2 h1", {
  transform: "translateX(-150%)",
  scrollTrigger: {
    trigger: ".page2",
    scroller: "body",
    markers: true,
    start: "top 0%",
    end: "top -200%",
    scrub: 5,
    pin: true
  }
});
