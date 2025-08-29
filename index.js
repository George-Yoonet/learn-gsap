
gsap.registerPlugin(ScrollTrigger);
gsap.to(".box.blue", {
	scrollTrigger: {
  	trigger: ".box.black",
    start: "top 50px",
    endTrigger: ".box.red",
    end: "bottom 80%",
    markers: true,
    toggleActions: "restart pause reverse pause"
  },
  x: 400,
  rotation: 360,
  duration: 3
});