import LocomotiveScroll from 'locomotive-scroll';

const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});
function firstPageAnim(){
    var tl = gsap.timeline();
    tl.from("#nav",{
      y:'-10',
      opacity:0,
      duration: 1.5,
      ease : Expo.easeInOut
    })
    .to(".boundingelem",{
      y:0,
      ease : Expo.easeInOut,
      duration:2,
      stragger :.2
    })
    .from("#herofooter",{
      y:-10,
      opacity :0,
      duration :1.5,
      delay: -.5,
      ease:Expo.easeInOut
    })
}
function circleMouseFollower(xscale, yscale) {
  window.addEventListener("mousemove", function (dets) {
    document.querySelector(
      "#minicircle"
    ).style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${xscale}, ${yscale})`;
  });
}
circleMouseFollower();
firstPageAnim();import LocomotiveScroll from 'locomotive-scroll';

const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});
function firstPageAnim(){
    var tl = gsap.timeline();
    tl.from("#nav",{
      y:'-10',
      opacity:0,
      duration: 1.5,
      ease : Expo.easeInOut
    })
    .to(".boundingelem",{
      y:0,
      ease : Expo.easeInOut,
      duration:2,
      stragger :.2
    })
    .from("#herofooter",{
      y:-10,
      opacity :0,
      duration :1.5,
      delay: -.5,
      ease:Expo.easeInOut
    })
}
function circleMouseFollower(xscale, yscale) {
  window.addEventListener("mousemove", function (dets) {
    document.querySelector(
      "#minicircle"
    ).style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${xscale}, ${yscale})`;
  });
}
circleMouseFollower();
firstPageAnim();import LocomotiveScroll from 'locomotive-scroll';

const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});
function firstPageAnim(){
    var tl = gsap.timeline();
    tl.from("#nav",{
      y:'-10',
      opacity:0,
      duration: 1.5,
      ease : Expo.easeInOut
    })
    .to(".boundingelem",{
      y:0,
      ease : Expo.easeInOut,
      duration:2,
      stragger :.2
    })
    .from("#herofooter",{
      y:-10,
      opacity :0,
      duration :1.5,
      delay: -.5,
      ease:Expo.easeInOut
    })
}
function circleMouseFollower(xscale, yscale) {
  window.addEventListener("mousemove", function (dets) {
    document.querySelector(
      "#minicircle"
    ).style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${xscale}, ${yscale})`;
  });
}
circleMouseFollower();
firstPageAnim();
