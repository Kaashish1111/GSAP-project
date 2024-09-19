let t=gsap.timeline();
t.from("#nav h3",{
    y:-50,
    opacity:0,
    duration:1,
    delay:0.5,
    stagger:0.3
})
t.from("#main h1",{
    x:-500,
    opacity:0,
    duration:3,
    delay:0.3,
    stagger:0.5
})
t.from("img",{
    x:100,
    opacity:0,
    duration:1,
    rotate:45,
    delay:0.3,
    stagger:1
})