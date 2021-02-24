import React, { useContext } from 'react';
import styles from '../Radio.module.css';
import RADIO_CONTEXT from '../../../Hooks/Contexts';
import plusImage from '../../../Assets/Images/plus.png';
import minusImage from '../../../Assets/Images/minus.png';
import ButtonIcon from '../../../Components/ButtonIcon';
import { STATION_INTERFACE } from '../../../Helpers/Types/Interfaces';
import { TOGGLE_ID } from '../../../Store/Actions';

function RadioList() {
  const { state: { stations, activeStation }, dispatch } = useContext(RADIO_CONTEXT);
  /// //////////////////////////////////////////////////////////
  const LIST_ACTION = (id: number) => dispatch({
    type: TOGGLE_ID,
    payload: stations.find((station: STATION_INTERFACE) => station.id === id),
  });
  /// //////////////////////////////////////////////////////////
  const PLUS_ACTION = () :void => console.log('You Have Clicked On Plus Button');
  /// //////////////////////////////////////////////////////////
  const MINUS_ACTION = () :void => console.log('You Have Clicked On Minus Button');
  /// //////////////////////////////////////////////////////////
  return (
    <ul className={styles.list}>
      {stations && stations.map((station: STATION_INTERFACE) => (
        <li key={station.id} className={styles.listItem}>
          <button
            className={styles.listItemButton}
            type="button"
            onClick={():void => LIST_ACTION(station.id)}
          >
            <p>{station.name}</p>
            <p>{station.number}</p>
          </button>
          <div className={styles.listCoverContainer}>
            <div className={`${styles.listCoverItem} 
            ${activeStation && activeStation.id === station.id && styles.active}`}
            >
              <ButtonIcon IMAGE_URL={minusImage} IMAGE_ALT="minus" CLICK_ACTION={MINUS_ACTION} />
              <img className={styles.coverImage} src={station.image} alt={station.name} />
              <ButtonIcon IMAGE_URL={plusImage} IMAGE_ALT="plus" CLICK_ACTION={PLUS_ACTION} />
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
export default RadioList;
