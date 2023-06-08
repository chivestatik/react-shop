import React from 'react';
import styles from './Skeleton.module.scss';
import { Oval } from 'react-loader-spinner';

function Skeleton() {
  return (
    <div className={styles.root}>
      <div>
        <Oval
          height={50}
          width={50}
          color="#fff"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel="oval-loading"
          secondaryColor="#b9b9b9"
          strokeWidth={2}
          strokeWidthSecondary={2}
        />
      </div>
    </div>
  );
}

export default Skeleton;
