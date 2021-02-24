import React, { useContext } from 'react';
import styles from '../Radio.module.css';
import RADIO_CONTEXT from '../../../Hooks/Contexts';

function RadioFooter() {
  const { state: { activeStation } } = useContext(RADIO_CONTEXT);
  return (
    <footer className={styles.footer}>
      <p className={styles.footerStatus}>Currently Playing</p>
      <h3 className={styles.footerStation}>{activeStation ? activeStation.name : 'No Station Selected'}</h3>
    </footer>
  );
}

export default RadioFooter;
