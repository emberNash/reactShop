import { useEffect, useContext } from 'react';
// import { API_KEY, API_URL } from '../config';
import { Preloader } from './Preloader';
import { GoodsList } from './GoodsList';
import { Cart } from './Cart';
import { BasketList } from './BasketList';
import { Alert } from './Alert';
import { ShopContext } from '../context';

// const API_KEY = process.env.REACT_APP_API_KEY;
const API_KEY = 'd45d6965-5bb4d045-0c56ac63-5f323898';
const API_URL = 'https://fortniteapi.io/v2/shop?lang=ru';

const Shop = () => {
  const { goods, setGoods, loading, order, isBasketShow, alertName } =
    useContext(ShopContext);

  useEffect(function getGoods() {
    fetch(API_URL, {
      headers: {
        Authorization: API_KEY,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setGoods(data.shop);
      });
  }, []);

  return (
    <main className='container content'>
      <Cart quantity={order.length}></Cart>
      {loading ? <Preloader></Preloader> : <GoodsList></GoodsList>}
      {isBasketShow && <BasketList></BasketList>}
      {alertName && <Alert></Alert>}
    </main>
  );
};

export { Shop };
