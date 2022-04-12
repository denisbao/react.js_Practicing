import style from './Button.module.css'

export function Button(props) {
  return (
    <button 
      className={style.button} 
      type={props.type || 'button'}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  )
}