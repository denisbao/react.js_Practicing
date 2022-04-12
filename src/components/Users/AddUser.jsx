import { Card } from "../UI/Card"
import { Button } from '../UI/Button';

import style from './AddUser.module.css'


export function AddUser() {

  function addUserHandler(event) {
    event.preventDefault()
  }

  return (
    <Card className={style.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" />

        <label htmlFor="age">Age</label>
        <input id="age" type="number" />

        <Button type="submit">Add User</Button>
      </form>
    </Card>
  )
}
