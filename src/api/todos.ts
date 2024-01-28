import { Todo } from "../global.types"

export const getTodos = async (length = 10) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos')
    const data: Todo[] = await response.json()

    return data.slice(0, length)
}