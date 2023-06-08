import React from 'react';
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className={styles.root}>
      <Link to='https://github.com/chivestatik/react-shop'>
        <p>репозиторий</p>
      </Link>
      <Link to='/admin'>
        <p>панель администратора</p>
      </Link>
    </div>
  );
}

export default Header;
