import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "image" ]

  initialize() {
    this.showSlide(0)
  }

  next() {
    if (this.index !== this.imageTargets.length -1) {
      this.showSlide(this.index + 1)
    } else {
      this.showSlide(0)
    }
  }

  previous() {
    if (this.index > 0) {
      this.showSlide(this.index - 1)
    } else {
      this.showSlide(this.imageTargets.length - 1)
    }
  }

  showSlide(index) {
    this.index = index;
    this.imageTargets.forEach((el, i) => {
      if (index == i) {
        el.classList.toggle("hidden");
      } else {
        if (!el.classList.contains("hidden")) {
          el.classList.toggle("hidden");
        }
      }
    })
  }
}
