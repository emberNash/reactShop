import { useContext } from 'react';
import { ShopContext } from '../context';
const BusketItem = (props) => {
  const { mainId, displayName, finalPrice, quantity } = props;

  const { removeFromBasket, increment, decrement } = useContext(ShopContext);

  return (
    <li className='collection-item '>
      {displayName}{' '}
      <span
        className='quantity indigo accent-1'
        onClick={() => increment(mainId)}
      >
        +
      </span>{' '}
      x{quantity}{' '}
      <span
        className='quantity amber lighten-1'
        onClick={() => decrement(mainId)}
      >
        -
      </span>{' '}
      = {finalPrice * quantity}
      uah
      <span
        className='secondary-content'
        onClick={() => removeFromBasket(mainId)}
      >
        <i className='material-icons close'>remove_shopping_cart</i>
      </span>
    </li>
  );
};

export { BusketItem };
