import React, { FC } from 'react';

import styles from './AboutPage.module.scss';

const AboutPage: FC = () => {
  return (
    <div className={styles.wrapper} data-testid="about-page">
      <h1 className={styles.title}>About us</h1>
      <p>
        The Guardian is a British daily newspaper. It was founded in 1821 as The Manchester
        Guardian, and changed its name in 1959. Along with its sister papers The Observer and The
        Guardian Weekly, The Guardian is part of the Guardian Media Group, owned by the Scott Trust.
        The trust was created in 1936 to secure the financial and editorial independence of
      </p>
      <p>
        The Guardian in perpetuity and to safeguard the journalistic freedom and liberal values of
      </p>
      <p>
        The Guardian free from commercial or political interference. The trust was converted into a
        limited company in 2008, with a constitution written so as to maintain for The Guardian the
        same protections as were built into the structure of the Scott Trust by its creators.
        Profits are reinvested in journalism rather than distributed to owners or shareholders. It
        is considered a newspaper of record in the UK.
      </p>
    </div>
  );
};

export default AboutPage;
