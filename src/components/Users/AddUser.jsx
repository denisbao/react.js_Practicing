import { Card } from "../UI/Card"
import { Button } from '../UI/Button';
import { useState } from "react";

import style from './AddUser.module.css'


export function AddUser() {
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState('');

  function usernameChangeHandler(event) {
    setEnteredUsername(event.target.value)
  }
  function ageChangeHandler(event) {
    setEnteredAge(event.target.value)
  }

  function addUserHandler(event) {
    event.preventDefault()
    console.log(enteredAge, enteredUsername)
  }

  return (
    <Card className={style.input}>
      <form onSubmit={addUserHandler}>

        <label htmlFor="username">Username</label>
        <input id="username" type="text" onChange={usernameChangeHandler} />

        <label htmlFor="age">Age</label>
        <input id="age" type="number" onChange={ageChangeHandler}/>

        <Button type="submit">Add User</Button>
      </form>
    </Card>
  )
}
