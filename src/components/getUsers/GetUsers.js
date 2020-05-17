import React, { useEffect, useState, useContext } from 'react';
import { Context } from '../../App'


const GetUsers = () => {
    const store = useContext(Context)
    const [state, setState] = useState(false)

    useEffect(() => {
        if (!state) {
            fetch('http://localhost:4000/users')
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    store.users.set(data)
                });
            setState(true)
        }
    })

    return <></>
};

export default GetUsers