import React, { useLayoutEffect, useReducer } from 'react';
import RadioHeader from './Partails/RadioHeader';
import styles from './Radio.module.css';
import RadioFooter from './Partails/RadioFooter';
import RadioList from './Partails/RadioList';
import RADIO_CONTEXT from '../../Hooks/Contexts';
import demoData from '../../Helpers/DemoData';
import RADIO_REDUCER from '../../Store/Reducer';
import { RECEIVE_STATIONS } from '../../Store/Actions';
import RADIO_STATE from '../../Store/State';

function Radio() {
  const [state, dispatch] = useReducer(RADIO_REDUCER, RADIO_STATE);
  /// /////////////////////////////////////////////////////////////////////////
  useLayoutEffect(() => {
    dispatch({
      type: RECEIVE_STATIONS,
      payload: demoData,
    });
  }, []);
  /// /////////////////////////////////////////////////////////////////////////
  return (
    <main className={styles.main}>
      <RADIO_CONTEXT.Provider value={{ state, dispatch }}>
        <RadioHeader />
        <RadioList />
        <RadioFooter />
      </RADIO_CONTEXT.Provider>
    </main>
  );
}

export default Radio;
