import React from "react";

import GlobalStyled from "assets/styles/globalStyled";

import Routes from "./routes";
import {Provider} from "react-redux";
import store from "./store";

function App() {
    return (
        <Provider store={store}>
            <GlobalStyled />
            <Routes />
        </Provider>
    );
}

export default App;
