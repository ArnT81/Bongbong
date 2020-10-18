import React, { useState } from 'react';
import Sidebar from './components/sidebar'
import Item from './components/item'
import MainContentWindow from './components/mainContentWindow'
import background from './media/summer-sun-warmth-field-9568.jpg'
import GetUsers from './components/getUsers'
import './App.css';

export const Context = React.createContext({})

function App() {
  const [users, setUsers] = useState([]);
  const [reloadUsers, setReloadUsers] = useState(true)
  const [disabled, setDisabled] = useState(false)

  const store = {
    users: { get: users, set: setUsers },
    reloadUsers: { get: reloadUsers, set: setReloadUsers },
    buttonDisabled: { get: disabled, set: setDisabled }
  }

  return (
    <div className="App">
      <img src={background} alt="By Skitterphoto from Pexels" />
      <Context.Provider value={store}>
        <Sidebar />
        <GetUsers />
        <MainContentWindow>
          {store.users.get.map((user, index) =>
            <Item key={index} user={user}>
              {user}
            </Item>
          )}
        </MainContentWindow>
      </Context.Provider>
    </div>
  );
}

export default App;
