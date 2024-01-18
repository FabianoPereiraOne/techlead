import { kanit } from '@/fonts'
import { ButtonPrimaryProps } from '@/types/ButtonPrimaryProps'
import styles from './styles.module.css'


export const ButtonPrimary = ({ text }: ButtonPrimaryProps) => {
 return (
  <button className={`${styles.buttonPrimary} ${kanit.className}`}>{text}</button>
 )
}