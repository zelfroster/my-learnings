// define the path for the bezier curve
const flightPath = {
  curviness: 1.5,
  autoRotate: true,
  values: [
    {x: 100, y: -20},
    {x: 400, y: -80},
    {x: 700, y: 120},
    {x: 400, y: 80},
    {x: 600, y: -100},
    {x: 900, y: 80},
    {x: 1200, y: -50},
    {x: window.innerWidth, y: -280},
  ]
}

// new object for animation
const tween = new TimelineLite();

tween.add(
  TweenLite.to('.paper-plane', 2, {
    bezier: flightPath,
    ease: Power1.easeInOut
  })
)

const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
  triggerElement: '.animation',
  duration: 2000,
  triggerHook: 0
})

  .setTween(tween)
  // .addIndicators()
  .setPin('.animation')
  .addTo(controller);

