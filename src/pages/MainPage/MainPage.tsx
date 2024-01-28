import { useTodos } from "../../hooks/useTodos"
import { List } from "../../components/List/List"
import { Form } from "../../components/Form/Form"

import styles from './MainPage.module.css'


const MainPage = () => {
    const [todos, addTodo, removeTodo] = useTodos()

    return (
        <main className={styles.container}>
            <Form
                addTodo={addTodo}
            />
            <List
                todos={todos}
                removeTodo={removeTodo}
            />
        </main>
    )
}

export default MainPage