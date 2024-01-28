import type { FC, SyntheticEvent } from 'react'

import { useRef } from 'react'

import { validateTodo } from './Form.helper'

import styles from './Form.module.css'

const FORM_FIELD_TODO = 'todo'

type FormProps = {
    addTodo: (title: string) => void
}

export const Form: FC<FormProps> = ({
    addTodo
}) => {
    const formRef = useRef(null)

    const handleSubmit = (event: SyntheticEvent<HTMLFormElement, SubmitEvent>) => {
        if (formRef.current) {
            const formData = new FormData(formRef.current)
            const newTodo = formData.get(FORM_FIELD_TODO)

            const isValid = validateTodo(newTodo)

            if (isValid) {
                // addTodo(newTodo)
                addTodo('test')
            }
        }
    }


    return (
        <form
            ref={formRef}
            className={styles.form}
            onSubmit={handleSubmit}
        >
            <input
                id={FORM_FIELD_TODO}
                name={FORM_FIELD_TODO}
                placeholder='Type a new todo ...'
            />
            <button
                type='submit'
            >
                +
            </button>
        </form>
    )
}