import { Card } from '../UI/Card'
import { Button } from '../UI/Button'
import { ErrorModal } from '../UI/ErrorModal'
import { useState } from 'react'
import { useRef } from 'react'

import style from './AddUser.module.css'

export function AddUser(props) {
  const nameInputRef = useRef()
  const ageInputRef = useRef()

  const [error, setError] = useState()

  function closeModalHandler() {
    setError(null)
  }

  function addUserHandler(event) {
    event.preventDefault()
    const enteredName = nameInputRef.current.value
    const enteredUserAge = ageInputRef.current.value

    if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age. Non-empty values!',
      })
      return
    }

    if (+enteredUserAge < 1) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age (> 0)',
      })
      return
    }
    
    props.onAddUser(enteredName, enteredUserAge)
    nameInputRef.current.value = ''
    ageInputRef.current.value = ''
  }

  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={closeModalHandler}
        />
      )}
      <Card className={style.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            ref={nameInputRef}
          />

          <label htmlFor="age">Age</label>
          <input
            id="age"
            type="number"
            ref={ageInputRef}
          />

          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  )
}
