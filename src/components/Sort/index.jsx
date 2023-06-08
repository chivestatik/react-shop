import React, { useState } from 'react';
import styles from './Sort.module.scss'

const sortList = [
  { name: 'по умолчанию', sortProperty: '' },
  { name: 'по возрастанию', sortProperty: 'asc' },
  { name: 'по убыванию', sortProperty: 'desc' },
];

function Sort() {
  const [openPopup, setOpenPopup] = useState(false);

  const changeSort = (sort) => {
    setOpenPopup(false);
    console.log(sort);
  };
  return (
    <div className={styles.root}>
      <p>
        Сортировать: <span onClick={() => setOpenPopup(true)}>по умолчанию</span>
      </p>
      {openPopup && (
        <ul>
          {sortList.map((sort, i) => (
            <li key={i} onClick={() => changeSort(sort)}>
              {sort.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Sort;
