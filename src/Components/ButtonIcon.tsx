import React from 'react';
import styles from './Components.module.css';

interface props {
    IMAGE_URL: string
    IMAGE_ALT: string
    CLICK_ACTION: () => void
}

function ButtonIcon({ IMAGE_URL, IMAGE_ALT, CLICK_ACTION }: props) {
  return (
    <button
      type="button"
      onClick={CLICK_ACTION}
    >
      <img
        className={styles.iconSize}
        src={IMAGE_URL}
        alt={IMAGE_ALT}
      />
    </button>
  );
}

export default ButtonIcon;
