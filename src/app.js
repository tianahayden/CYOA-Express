import React from 'react';
import store from './rootStore'
import Page from './Components/Page';
import { Provider } from 'react-redux';

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Page />
            </Provider>
        )
    }
}

export default App;