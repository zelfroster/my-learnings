// ScrollMagic allows us to trigger specific animation while we scroll

// First we will set a controller
let controller = new ScrollMagic.Controller();

// Now we will create scenes for different specific animations and add it to
// controller for handling


// Timeline allows us to chain together multiple animations
let timeline = new TimelineMax();

// Animate an element by changing its property
// timeline.to('.text', 5, { x: 500 });

// Animate an element by changing its previous property and assigning new 
// property
// timeline.fromTo('.text', {opacity: 0}, {opacity: 1, duration: 3});

timeline
  .to('#rock', 5, { y: -300})
  .to('#girl', 5, { y: -200}, '-=5')
  .fromTo('#bg1', { y: -50}, {y: 0, duration: 5}, '-=5')
  .to('.content', 5, {top: '0%'}, '-=5')

let scene = new ScrollMagic.Scene({
  triggerElement: 'section',
  duration: '200%',
  triggerHook: 0,
})
  .setTween(timeline)
  .setPin('section')
  .addTo(controller)
