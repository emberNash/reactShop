import { useContext } from 'react';
import { ShopContext } from '../context';

import { GoodsItem } from './GoodsItem';
const GoodsList = () => {
  const { goods = [] } = useContext(ShopContext);
  if (!goods.length) {
    return <h3>Nothing here</h3>;
  }

  return (
    <div className='goods'>
      {goods.slice(0, 10).map((item) => {
        return <GoodsItem key={item.mainId} {...item}></GoodsItem>;
      })}
    </div>
  );
};

export { GoodsList };
