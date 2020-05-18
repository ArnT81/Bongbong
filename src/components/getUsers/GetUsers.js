import React, { useEffect, useContext } from 'react';
import { Context } from '../../App'


const GetUsers = () => {
    const store = useContext(Context)

    useEffect(() => {
        if (!store.reloadUsers.get) {
            fetch('http://localhost:4000/users')
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    store.users.set(data)
                });
            store.reloadUsers.set(true)
        }
    })

    return <></>
};

export default GetUsers