import React from 'react';
import styles from '../Radio.module.css';
import arrowImg from '../../../Assets/Images/back-arrow.png';
import switchImg from '../../../Assets/Images/switch.png';
import ButtonIcon from '../../../Components/ButtonIcon';

function RadioHeader() {
  /// /////////////////////////////////////////////
  const BACK_ACTION = (): void => console.log('You Have Clicked On Back Button');
  /// /////////////////////////////////////////////
  const SWITCH_ACTION = (): void => console.log('You Have Clicked On Switch Button');
  /// /////////////////////////////////////////////
  return (
    <header className={styles.header}>
      <ButtonIcon IMAGE_URL={arrowImg} IMAGE_ALT="Back" CLICK_ACTION={BACK_ACTION} />
      <h3 className={styles.headerTitle}>Stations</h3>
      <ButtonIcon IMAGE_URL={switchImg} IMAGE_ALT="switch" CLICK_ACTION={SWITCH_ACTION} />
    </header>
  );
}

export default RadioHeader;
