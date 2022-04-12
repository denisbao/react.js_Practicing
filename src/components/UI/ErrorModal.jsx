import ReactDOM from 'react-dom'
import { Card } from './Card'
import { Button } from './Button'

import style from './ErrorModal.module.css'

export function Backdrop(props) {
  return <div className={style.backdrop} onClick={props.onConfirm} />
}

export function ModalOverlay(props) {
  return (
    <Card className={style.modal}>
      <header className={style.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={style.content}>
        <p>{props.message}</p>
      </div>
      <footer className={style.actions}>
        <Button onClick={props.onConfirm}>Ok</Button>
      </footer>
    </Card>
  )
}

export function ErrorModal(props) {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById('backdrop-root')
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          onConfirm={props.onConfirm}
        />,
        document.getElementById('overlay-root')
      )}
    </>
  )
}
