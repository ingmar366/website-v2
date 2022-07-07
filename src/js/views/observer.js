export default class Observer {
  _allSection = "";
  appearSection() {
    const sectionObserver = new IntersectionObserver(
      this._revealSection.bind(this),
      {
        root: null,
        threshold: 0,
        rootMargin: `10px`,
      }
    );
    this._allSection.forEach(function (section) {
      sectionObserver.observe(section);
      section.classList.add(`section--hidden`);
    });
  }

  //reveals the sections when they are intersected
  _revealSection(entries, observer) {
    const [entry] = entries;
    if (!entry.isIntersecting) return;
    entry.target.classList.remove(`section--hidden`);
    observer.unobserve(entry.target);
  }
}
