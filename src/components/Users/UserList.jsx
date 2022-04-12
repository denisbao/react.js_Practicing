import { Card } from '../UI/Card'

import style from './UserList.module.css'


export function UserList(props) {
  return (
    <Card className={style.users}>
      {props.users.length === 0 ? <p className={style.empty}>No users added yet...</p> : ''}
      <ul>
        {props.users.map(user => (
          <li key={user.id}>
            {user.name} ({user.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  )
}
