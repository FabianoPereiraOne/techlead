import { ButtonPrimary } from '@/components/blocks/ButtonPrimary'
import { kanit } from '@/fonts'
import styles from '@/styles/hero.module.css'
export const Hero = () => {
 return (
  <section className={styles.hero}>
   <div className={styles.boxTitle}>
    <strong>Transforme seu Negócio</strong>
    <h1 className={kanit.className}>Fature alto no <span className={styles.textBorder}>Marketing</span> Digital</h1>
    <p>Conquiste o Mundo Digital e Alcance Seu Público-Alvo de Forma Efetiva.</p>
    <ButtonPrimary text="Conhecer agora" />
   </div>
   <div className={styles.boxEbook}>
    <img src="/static/images/ebook.webp" alt="Imagem do ebook fature alto no marketing digital." />
   </div>
  </section>
 )
}