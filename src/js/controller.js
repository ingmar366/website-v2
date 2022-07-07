import navView from "./views/navView";
import smoothscroll from "smoothscroll-polyfill";
import aboutView from "./views/aboutView";
import projectsView from "./views/projectsView";
import lazyImages from "./views/lazyImages";

const smoothScroll = function (e) {
  e.preventDefault();
  if (e.target.classList.contains(`nav__link`)) {
    // console.log(e.target.classList);
    const id = e.target.getAttribute(`href`);
    document.querySelector(id).scrollIntoView({ behavior: `smooth` });
  }
};

const arrowClick = function (e) {
  const targetClasses = e.target.classList;
  if (!targetClasses.contains("arrow")) return;
  projectsView.toggleArrows();
  if (targetClasses[0] === "projects__arrow-right")
    projectsView.translateProjects(-100);
  if (targetClasses[0] === "projects__arrow-left")
    projectsView.translateProjects(0);
};

const init = function () {
  smoothscroll.polyfill();
  navView.stuckNav();
  navView.handlerClick(smoothScroll);
  navView.appearSection();
  aboutView.appearSection();
  projectsView.clickHandler(arrowClick);
  lazyImages.intersectImg();
};
init();
