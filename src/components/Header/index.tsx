import styles from './Header.module.scss';

import { ReturnComponentType } from 'types';

export const Header = (): ReturnComponentType => (
  <header className={styles.header}>
    <div className={styles.inner}>
      <h1>Concept Club</h1>
      <div className={styles.wrapper}>
        <button type="button">Версия для слабовидящих</button>
        <button type="button">Мой профиль</button>
      </div>
    </div>
  </header>
);
