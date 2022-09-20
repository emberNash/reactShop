import { ShopContext } from '../context';
import { useContext } from 'react';

const GoodsItem = (props) => {
  const {
    mainId,
    displayName,
    displayDescription,
    price,
    displayAssets,
    // addToBasket,
  } = props;

  const { addToBasket } = useContext(ShopContext);
  const finalPrice = price.finalPrice;

  return (
    <div className='card' id={mainId}>
      <div className='card-image'>
        <img src={displayAssets[0].full_background} alt={displayName} />
      </div>
      <div className='card-content'>
        <span className='card-title'>{displayName}</span>
        <p>{displayDescription}</p>
      </div>
      <div className='card-action'>
        <button
          className='btn left'
          onClick={() => addToBasket({ mainId, displayName, finalPrice })}
        >
          Buy
        </button>
        <span className='right' style={{ fontSize: '1.8rem' }}>
          {finalPrice} uah
        </span>
      </div>
    </div>
  );
};
export { GoodsItem };
