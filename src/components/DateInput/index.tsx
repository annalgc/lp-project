import { ChangeEventHandler } from 'react'
import styles from './styles.module.css'

interface IDateInput {
  value: string
  onChange: ChangeEventHandler<HTMLInputElement>
}

export const DateInput = ({ value, onChange }: IDateInput): JSX.Element => {
  return <input type="date"  className={styles['date-input']} onChange={onChange} value={value} />
}