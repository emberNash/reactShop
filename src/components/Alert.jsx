import { useContext, useEffect } from 'react';
import { ShopContext } from '../context';
const Alert = () => {
  const { alertName: displayName, closeAlert } = useContext(ShopContext);

  useEffect(() => {
    const timerId = setTimeout(closeAlert, 1000);
    return () => {
      clearTimeout(timerId);
    };
  }, [displayName]);
  return (
    <div id='toast-container'>
      <div className='toast'>{displayName} add to cart</div>
    </div>
  );
};
export { Alert };
