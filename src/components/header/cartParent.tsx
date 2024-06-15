import React, { FC, JSX } from 'react';

export interface ICartItem {
  trumb: string,
  link: string,
  title: string,
  price: number,
  quantity: number,
}

const cartItems: ICartItem[] = [{
  trumb: '/assets/img/shop/cartContainer.png',
  link: '#',
  title: 'Hoodie T.Brothers',
  price: 15.99,
  quantity: 1,
}, {
  trumb: '/assets/img/shop/cartContainer.png',
  link: '#',
  title: 'Hoodie T.Brothers',
  price: 15.99,
  quantity: 1,
}]

const CartParent: FC = (): JSX.Element => {
  return (
    <div className="cartParent">
      <div className="cartItems">
        <ul>
          {cartItems.map(item => (
            <li>
              <div className="priceCart">
                <img src={item.trumb} alt={item.title}/>
                <a href={item.link}>{item.title}</a>
                <p>Price:&nbsp;<span>£{item.price}</span></p>
                <p className="quantity">Quantity: <span>{item.quantity}</span></p>
              </div>
            </li>
          ))}
          <li>
            <div className="total">
              <a href="#">Sub Total<span>31,98£</span></a>
            </div>
          </li>
        </ul>
        <button type="submit" className="single_add_to_cart_button button alt buttonView">
          View Cart
        </button>
        <button type="submit" className="single_add_to_cart_button button alt buttonCheck">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default CartParent;