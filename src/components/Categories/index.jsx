import React from 'react';
import styles from './Categories.module.scss';

const categories = ['electronics', 'jewelery', "men's clothing", "women's clothing"];

function Categories() {
  return (
    <div className={styles.root}>
      {categories.map((c, i) => (
        <div key={i}>{c}</div>
      ))}
    </div>
  );
}

export default Categories;
