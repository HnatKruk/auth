import React, { useContext, useEffect, useState } from 'react'
import { LoginFrom } from './components/LoginFrom'
import { Context } from '.'
import { observer } from 'mobx-react-lite'
import { IUser } from './models/IUser'
import UserService from './services/UserService'

export const App = observer(() => {
  const [users, setUsers] = useState<IUser[]>([])
  const {store} = useContext(Context)
  useEffect(() => {
    if(localStorage.getItem('token')) {
      store.checkAuth()
    }
  }, [])

  const getUsers = async () => {
    try {
      const response = await UserService.fetchUsers()
      setUsers(response.data)
    } catch (e) {
      console.log(e)
    }
  }

  if (store.isLoading) {
    return (
      <div>Loading...</div>
    )
  }

  if (!store.isAuth) {
    return  (
      <div>
        <LoginFrom />
        <div>
        <button onClick={() => getUsers()}>Get Users</button> *allowed only for authorize users
        {store.isAuth && users.map((user, index) => <div key={index}>{user.email}</div>)}
      </div>
      </div>
    )
  }

  return  (
    <div>
      <h1>{store.isAuth ? `User is Authorize ${store.user.email}` : 'Login'}</h1>
      <h1>{store.user.isActivated ? 'Account is activated' : 'Activate ACCOUNT'}</h1>
      <button onClick={() => store.logout()}>Logout</button>

      <div>
        <button onClick={() => getUsers()}>Get Users</button>
        {store.isAuth && users.map((user, index) => <div key={index}>{user.email}</div>)}
      </div>
    </div>
  )
})
