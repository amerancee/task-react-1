import type { Todo } from "../global.types"

import { useEffect, useState } from "react"

import { getTodos } from "../api/todos"

export const useTodos = (): [
    Todo[],
    (title: string) => void,
    (id: number) => void
] => {
    const [todos, setTodos] = useState<Todo[]>([])

    const addTodo = (title: string) => {
        setTodos(prev => {
            const maxId = Number(prev[prev.length - 1].id)

            return [
                ...prev,
                {
                    id: maxId + 1,
                    title
                }
            ]
        })
    }

    const removeTodo = () => {
        console.log('remove todo')
    }

    useEffect(() => {
        getTodos(10).then(todos => setTodos(todos))
    }, [])

    return [todos, addTodo, removeTodo]
}