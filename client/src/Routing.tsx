import React from 'react';
import MainPage from './page/main/MainPage';
import { Route, Switch } from 'react-router-dom';
import LoginPage from './page/auth/LoginPage';
import ChatPage from './page/chat/ChatPage';
const Routing = () => {
    return (
        <Switch>
            <Route exact path="/" component={MainPage} />
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/chat/:room" component={ChatPage} />
        </Switch>
    );
};
export default Routing;
