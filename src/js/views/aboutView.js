import observer from "./observer";

class aboutView extends observer {
  _allSection = document.querySelectorAll(`.about__text`);
  _hat = document.querySelector(`.hat`);
  _car = document.querySelector(`.car`);
  _notebook = document.querySelector(`.notebook`);
  _boardBike = document.querySelector(`.board-bike`);

  _animate(item) {
    item.classList.add("animation");
  }
  _carAnimate(item) {
    item.classList.add("animation-car");
  }

  _revealSection(entries, observer) {
    super._revealSection(entries, observer);
    const [entry] = entries;
    if (!entry.isIntersecting) return;
    if (entry.target.classList.contains(`about__bt`)) this._animate(this._hat);
    if (entry.target.classList.contains(`about__programming`)) {
      this._carAnimate(this._car);
      setTimeout(() => {
        this._animate(this._notebook);
      }, 2500);
    }
    if (entry.target.classList.contains(`about__hobbies`))
      this._animate(this._boardBike);
  }
}
export default new aboutView();
