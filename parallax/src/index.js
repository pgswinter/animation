const startDiv = document.querySelector(".start-content");
const animationDiv = document.querySelector(".animation .wrapper");
const deviceHeight = document.documentElement.clientHeight;
const getHeightStart = startDiv.clientHeight;
const offetTopAnimation = animationDiv.offsetTop;
const animationHeight = animationDiv.clientHeight;

// SD: Screen device
// VERTICAL: scrolling from SD bottom border to Object (DISTANCE between SD and Object) =
// distance between Browser Top and Object - height of SD
const distanceToObj = offetTopAnimation - deviceHeight;
const distanceAnimationActive = distanceToObj + animationHeight / 2;
const distanceAnimationUnactive = distanceToObj + animationHeight + 100;

function addClassName(obj, name) {
  if (obj.className.indexOf(name) === -1) {
    const classStr = obj.className;
    const newClassName = classStr.concat(` ${name}`);
    obj.className = newClassName;
  }
}
function removeClassName(obj, name) {
  if (obj.className.indexOf(name) > -1) {
    const classStr = obj.className;
    const newClassName = classStr.replace(` ${name}`, "");
    obj.className = newClassName;
  }
}
let lastScroll = 0;
window.onscroll = () => {
  "use strict";
  // window.pageYOffset || document.documentElement.scrollTop
  const scrollTopPos = document.documentElement.scrollTop;
  //   console.log(`scrollTopPos: `, scrollTopPos);
  //   console.log(`lastScroll BEFORE: `, lastScroll);
  //   console.log(
  //     `scrollTopPos > lastScroll: ${scrollTopPos} > ${lastScroll}`,
  //     scrollTopPos > lastScroll
  //   );
  if (scrollTopPos > lastScroll) {
    console.log("down");
    if (document.documentElement.scrollTop >= distanceAnimationActive) {
      addClassName(animationDiv, "active");
    }
  } else {
    console.log("up");
    if (document.documentElement.scrollTop < distanceAnimationUnactive) {
      removeClassName(animationDiv, "active");
    }
  }
  lastScroll = scrollTopPos;
};
