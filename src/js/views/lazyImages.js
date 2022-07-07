class LazyImages {
  _imgTargets = document.querySelectorAll("img[data-src]");

  _loadImg(entries, observer) {
    const [entry] = entries;
    if (!entry.isIntersecting) return;
    // Replace src with data-src
    entry.target.src = entry.target.dataset.src;
    console.log(entry.target.src);
    entry.target.addEventListener("load", function () {
      entry.target.classList.remove("lazy-img");
    });

    observer.unobserve(entry.target);
  }

  intersectImg() {
    const imgObserver = new IntersectionObserver(this._loadImg, {
      root: null,
      threshold: 0,
      rootMargin: "200px",
    });
    this._imgTargets.forEach((img) => imgObserver.observe(img));
  }
}
export default new LazyImages();
