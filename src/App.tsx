import { Header } from './components/Header'
import { Task } from './components/Task'
import { ChangeEvent, FormEvent, useState } from 'react'
import { ClipboardText, PlusCircle } from '@phosphor-icons/react'
import { v4 as uuidv4 } from 'uuid'

import styles from './App.module.css'

import './global.css'

interface Tasks {
  id: string;
  content: string;
  isCompleted: boolean;
}

export function App() {
  const [tasks, setTasks] = useState<Tasks[]>([])
  const [newTaskText, setNewTaskText] = useState('')

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    setNewTaskText(event.target.value)
  }
  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault()

    const newTask: Tasks = {
      id: uuidv4(),
      content: newTaskText,
      isCompleted: false
    }

    setTasks((prevState) => (
      [...prevState, newTask]
    ))
    setNewTaskText('')
  }

  const isNewTaskEmpty = newTaskText.length == 0
  
  function deleteTask(idOfTaskToDelete: string) {
    const taskWithoutDeletedOne = tasks.filter(task => {
      return task.id != idOfTaskToDelete
    })

    setTasks(taskWithoutDeletedOne)
  }

  const totalOfCompletedTasks = tasks.reduce((counter, obj) => {
    if (obj.isCompleted === true) counter += 1
    return counter;
  }, 0);

  console.log(totalOfCompletedTasks)

  return (
    <div>
      <Header />
      <form className={styles.form} onSubmit={handleCreateNewTask}>
        <input 
          type="text" 
          placeholder='Adicione uma nova tarefa' 
          value={newTaskText}
          onChange={handleNewTaskChange}
          required
        />
        <button 
          type="submit"
          disabled={isNewTaskEmpty}
        >
          Criar 
          <PlusCircle size={16} weight="bold" />
        </button>
      </form>

      <main className={styles.main}>
        <header>
          <div className={styles.created}>
            Tarefas criadas <span>{tasks.length}</span>
          </div>
          <div className={styles.completed}>
            Concluídas 
            <span>
            {
                tasks.length === 0 ? 0 : `${totalOfCompletedTasks} de ${tasks.length}`
            }
            </span>
          </div>
        </header>

        <div className={styles.tasks}>
          {tasks.map(task => (
            <Task 
              key={task.id} 
              id={task.id} 
              content={task.content} 
              isCompleted={task.isCompleted} 
              onDeleteTask={deleteTask}
            />
          ))}

          {tasks.length === 0 && (
            <div className={styles.noTasks}>
              <ClipboardText size={56} />
              <strong>Você ainda não tem tarefas cadastradas</strong>
              <p>Crie tarefas e organize seus itens a fazer</p>
            </div>
          )}
          
        </div>
      </main>
    </div>
  )
}
