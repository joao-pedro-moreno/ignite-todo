import { useState } from 'react';
import { Trash } from '@phosphor-icons/react'
import styles from './Task.module.css'

interface TaskProps {
    id: string;
    content: string;
    isCompleted?: boolean;
    onDeleteTask: (task: string) => void;
}

export function Task({id, content, isCompleted = false, onDeleteTask}: TaskProps) {
    const [isTaskCompleted, setIsTaskCompleted] = useState(isCompleted)

    function handleIsTaskCompleted() {
        return isTaskCompleted ? setIsTaskCompleted(false) : setIsTaskCompleted(true)
    }

    function handleDeleteTask() {
        onDeleteTask(id)
    }

    return (
        <div className={styles.task}>
            <input type="checkbox" id={id} value={isTaskCompleted ? "yes" : "no"} onChange={handleIsTaskCompleted}/>

            <label htmlFor={id} className={isTaskCompleted ? styles.completed : ''}>{content}</label>

            <button className={styles.trash} onClick={handleDeleteTask}><Trash size={20} weight="bold" /></button>
        </div>
    )
}