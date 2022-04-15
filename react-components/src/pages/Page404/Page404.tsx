import React, { FC } from 'react';

import styles from './Page404.module.scss';

const Page404: FC = () => {
  return (
    <div className={styles.wrapper} data-testid="error-page">
      <p>Page not found</p>
      <img src="/img/sad.png" width="341" height="311" alt="" />
    </div>
  );
};

export default Page404;
