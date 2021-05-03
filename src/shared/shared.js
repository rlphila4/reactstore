import { isEmpty } from "lodash";

class Shared {
  static getCartTotal = (products, cart) => {
    if (isEmpty(cart)) return 0.0;
    let total = 0.00;
    cart.forEach(item => {
       total += parseFloat((item.qty * products.find((p) => p.id === item.id).price).toFixed(2));
    })
    return parseFloat(total).toFixed(2);
   };
}

export default Shared;
