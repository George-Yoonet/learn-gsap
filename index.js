
gsap.registerPlugin(ScrollTrigger);
gsap.to(".box.blue", {
	scrollTrigger: {
  	trigger: ".box.blue",
    start: "top center",
    end: "top 100px",
    markers: true,
    toggleActions: "restart pause reverse pause"
  },
  x: 400,
  rotation: 360,
  duration: 3
});