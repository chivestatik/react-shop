import React from 'react';
import styles from './CartButton.module.scss';
import { Link } from 'react-router-dom';

function CartButton() {
  return (
    <div className={styles.root}>
      <Link to="/cart">
        <p>Корзина</p>
      </Link>
    </div>
  );
}

export default CartButton;
