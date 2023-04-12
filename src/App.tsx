import { Header } from './components/Header'
import { ClipboardText, PlusCircle } from '@phosphor-icons/react'

import styles from './App.module.css'

import './global.css'

export function App() {

  return (
    <div>
      <Header />
      <form className={styles.form}>
        <input type="text" placeholder='Adicione uma nova tarefa'/>
        <button type="submit">Criar <PlusCircle size={16} weight="bold" /></button>
      </form>

      <main className={styles.main}>
        <header>
          <div className={styles.created}>
            Tarefas criadas <span>0</span>
          </div>
          <div className={styles.completed}>
            Concluídas <span>0</span>
          </div>
        </header>

        <div className={styles.tasks}>
          <div className={styles.noTasks}>
            <ClipboardText size={56} />
            <strong>Você ainda não tem tarefas cadastradas</strong>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </div>
        </div>
      </main>
    </div>
  )
}
