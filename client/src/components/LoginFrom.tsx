import { FC, useContext, useState } from 'react'
import { Context } from '..'
import { observer } from 'mobx-react-lite'

export const LoginFrom: FC = observer(() => {
  const [email, setEmail] = useState<string>('hnatkivtaras@gmail.com')
  const [password, setPassword] = useState<string>('1234')
  const { store } = useContext(Context)

  return (
    <div>
      <input
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        type='text'
        placeholder='Email'
      />
      <input
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        type='password'
        placeholder='Password'
      />
      <button onClick={() => store.login(email, password)}>Login</button>
      <button onClick={() => store.registration(email, password)}>Registration</button>
    </div>
  )
})
