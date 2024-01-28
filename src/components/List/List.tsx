import type { FC, MouseEvent } from "react"
import type { Todo } from "../../global.types"

import styles from './List.module.css'

type ListProps = {
    todos: Todo[]
    removeTodo: (id: number) => void
}

export const List: FC<ListProps> = ({ todos, removeTodo }) => {

    const handleRemoveTodo = (event: MouseEvent<HTMLButtonElement>) => {
        // removeTodo(id)
    }

    return (
        <ul className={styles.container}>
            {todos.map(({ id, title }) => (
                <li key={id} className={styles.row}>
                    <span>
                        {id}.
                    </span>
                    <p className={styles.title}>
                        {title}
                    </p>
                    <button onClick={handleRemoveTodo}>
                        x
                    </button>
                </li>
            ))}
        </ul>
    )
}