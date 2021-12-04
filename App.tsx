import React, { ReactElement } from 'react'
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import RootNavigation from './src/navigation';
import store, { persistor } from './src/store/store';

const App = (): ReactElement => {

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