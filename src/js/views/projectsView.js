class ProjectView {
  _projects = document.querySelector(`.projects`);
  _cardContainer = document.querySelector(`.projects__cards`);
  _arrowLeft = document.querySelector(`.projects__arrow-left`);
  _arrowRight = document.querySelector(`.projects__arrow-right`);

  clickHandler(handler) {
    this._projects.addEventListener(`click`, handler);
  }

  toggleArrows() {
    this._arrowLeft.classList.toggle(`hidden`);
    this._arrowRight.classList.toggle(`hidden`);
  }

  translateProjects(value) {
    this._cardContainer.style.transform = `translateX(${value}%)`;
  }
}

export default new ProjectView();
