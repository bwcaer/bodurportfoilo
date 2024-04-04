 var tl = gsap.timeline({scrollTrigger:{
  trigger: ".two",
  start: "0% 95%",
  end: "70% 50%",
  scrub: true,
// markers:true,
}})

tl.to(".wheel",{
  top:"120%",
  left:"0%",
}, 'shark')
tl.to(".shark",{
  top:"120%",
  left:"15%",

}, 'shark')
tl.to(".well",{
  top:"148%",
  left:"15%",

}, 'shark')
tl.to(".hors",{
  top:"155%",
  left:"15%",

}, 'shark')

var tl1 = gsap.timeline({scrollTrigger:{
  trigger:".three",
  start:"0% 95%",
  end:"20% 50%",
  scrub: true,
}})

tl1.from(".j1",{
  rotate:"-90deg",
  left:"-50%",
  top:"110%",
},'ca' )

tl1.from(".s1",{
  rotate:"-90deg",
  left:"-50%",
  top:"110%",
} ,'ca')

tl1.from(".s2",{
  rotate:"90deg",
  left:"100%",
  top:"110%",
} ,'ca')

