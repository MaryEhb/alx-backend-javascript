/* eslint-disable */
import Currency from './3-currency';
/* eslint-enable */

export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  get amount() {
    return this._amount;
  }

  get currency() {
    return this._currency;
  }

  set amount(value) {
    this._amount = value;
  }

  set currency(value) {
    this._currency = value;
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }
  /* eslint-disable */
  convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
  /* eslint-enable */
}
