import React, { FC, useEffect } from 'react';
import { convertDate } from '../../utils/convertDate';
import { scrollToTop } from '../../utils/scrollToTop';
import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../../hooks/redux';

import styles from './ArticlePage.module.scss';

const ArticlePage: FC = () => {
  const { articleData } = useAppSelector((state) => state.search);

  useEffect(() => {
    scrollToTop();
  }, []);

  if (!articleData) return <Navigate replace to="/" />;

  const { body, thumbnail, standfirst, webPublicationDate, shortUrl } = articleData;

  return (
    <div className="container" data-testid="article-page">
      <div className={styles.wrapper}>
        <header>
          <p dangerouslySetInnerHTML={{ __html: standfirst }} className={styles.standfirst}></p>
          <div className={styles.headerInner}>
            <p className={styles.date}>{convertDate(webPublicationDate)}</p>
            <a className={styles.link} href={shortUrl} target="_blank" rel="noreferrer">
              read on Guardian
            </a>
          </div>
        </header>
        <div className={styles.content}>
          <img
            src={thumbnail ? thumbnail : '/img/no-image.png'}
            className={styles.image}
            width="500"
            height="300"
            alt=""
          />
          <div dangerouslySetInnerHTML={{ __html: body }}></div>
        </div>
      </div>
    </div>
  );
};

export default ArticlePage;
