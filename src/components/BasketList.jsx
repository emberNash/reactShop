import { useContext } from 'react';
import { ShopContext } from '../context';
import { BusketItem } from './BasketItem';

const BasketList = () => {
  const { order = [], handleBasketShow } = useContext(ShopContext);

  const totalPrice = order.reduce((sum, el) => {
    return sum + el.finalPrice * el.quantity;
  }, 0);

  return (
    <ul className='collection basket-list '>
      <li className='collection-item active amber darken-2'>
        Basket
        <span className='secondary-content'>
          <i className='material-icons close' onClick={handleBasketShow}>
            close
          </i>
        </span>
      </li>

      {order.length ? (
        order.map((item) => <BusketItem key={item.id} {...item}></BusketItem>)
      ) : (
        <li className='collection-item '>Empty</li>
      )}

      <li className='collection-item active amber darken-2'>
        Summary: {totalPrice} uah
        <button className='secondary-content btn-small deep-purple darken-3 order-btn'>
          Order
        </button>
      </li>
    </ul>
  );
};

export { BasketList };
