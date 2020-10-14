import React, { useState } from 'react';
import Sidebar from './components/sidebar/Sidebar'
import Item from './components/item/item'
import MainContentWindow from './components/mainContentWindow/MainContentWindow'
import background from './media/summer-sun-warmth-field-9568.jpg'
import GetUsers from './components/getUsers/GetUsers'
import './App.css';

export const Context = React.createContext({})

function App() {
  const [users, setUsers] = useState([]);
  const [reloadUsers, setReloadUsers] = useState(false)

  const store = {
    users: { get: users, set: setUsers },
    reloadUsers: { get: reloadUsers, set: setReloadUsers }
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
