import React, { ReactElement, useEffect } from 'react'
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import RootNavigation from './src/navigation';
import store, { persistor } from './src/store/store';
import TrackPlayer from 'react-native-track-player';

const App = (): ReactElement => {

  useEffect(() => {
    (async () => await TrackPlayer.setupPlayer({}))()
  }, [])

  //init redux, navigation
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <RootNavigation />
      </PersistGate>
    </Provider>
  )
}

export default App;