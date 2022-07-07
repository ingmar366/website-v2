import observer from "./observer";

class NavView extends observer {
  _nav = document.querySelector(".nav");
  _header = document.querySelector(".header");
  _allSection = document.querySelectorAll(".section");

  stuckNav() {
    const navHeight = this._nav.getBoundingClientRect().height;
    const headerObserver = new IntersectionObserver(
      this._stickyNav.bind(this),
      {
        root: null,
        threshold: 0,
        rootMargin: `-${navHeight}px`,
      }
    );
    headerObserver.observe(this._header);
  }

  // function to set the sticky bar fixed
  _stickyNav(entries) {
    const [entry] = entries;
    if (!entry.isIntersecting) {
      this._nav.classList.add(`sticky`);
    } else {
      this._nav.classList.remove(`sticky`);
    }
  }

  handlerClick(handler) {
    this._nav.addEventListener("click", handler);
  }
}

export default new NavView();
