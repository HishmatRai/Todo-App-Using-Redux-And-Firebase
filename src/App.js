import React from 'react';
import {Provider} from 'react-redux';
import {store,persistor} from './Store';
import BasicRouter from './Config/router'
import { PersistGate } from 'redux-persist/integration/react'
class App extends React.Component{
  render(){
    return(
      <div>
      <Provider store= {store}>
        
<PersistGate loading={null} persistor={persistor} >
<BasicRouter />
</PersistGate>
      </Provider>
      </div>
    )
  }
}

export default App