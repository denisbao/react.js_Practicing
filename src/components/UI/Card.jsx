import style from './Card.module.css'


export function Card(props) {
  return (
    <div className={`${style.card} ${props.className}`}>
      {props.children}
    </div>
  )
}