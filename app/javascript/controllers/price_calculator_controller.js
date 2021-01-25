import { Controller } from "stimulus"

export default class extends Controller {
  static targets = ["totalPrice"]
  static values = { perOz: Number }
  connect() {
    let price = this.perOzValue * 16;
    this.totalPriceTarget.innerHTML = "$" + price.toFixed(2);
  }
  calculatePrice(event) {
    console.log("calculating...")
    let weight = event.target.value
    let price = weight * this.perOzValue;
    this.totalPriceTarget.innerHTML = "$" + price.toFixed(2);
  }
}
