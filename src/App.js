import React, { useState } from 'react';
import Sidebar from './components/sidebar/Sidebar'
import Item from './components/item/item'
import background from './media/summer-sun-warmth-field-9568.jpg'
import './App.css';

export const Context = React.createContext({})

function App() {
  const [users, setUsers] = useState([
    {
      userId: 1,
      name: 'Anders',
      email: 'anders_soderberg@hotmail.com',
      city: 'Vislanda',
      street: 'Movägen 8',
      zip: '34250'
    },
    {
      userId: 2,
      name: 'Anna',
      email: 'annanas_soderberg@hotmail.com',
      city: 'Vislanda',
      street: 'Movägen 8',
      zip: '34250'
    },
    {
      userId: 3,
      name: 'Alice',
      email: 'allan_soderberg@hotmail.com',
      city: 'Vislanda',
      street: 'Movägen 8',
      zip: '34250'
    }
  ]);

  const store = {
    users: { get: users, set: setUsers }
  }

  return (
    <div className="App">
      <img src={background} alt="By Skitterphoto from Pexels" />
      <Context.Provider value={store}>
        <Sidebar />
        {store.users.get.map((user, index) =>
          <Item key={index}>
            {user}
          </Item>
        )}
      </Context.Provider>
    </div>
  );
}

export default App;
