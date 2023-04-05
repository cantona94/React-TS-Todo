import { FC, useState, useEffect, useRef } from 'react';
import { TodoList } from './TodoList';

import { useAppDispatch } from '../hooks/hook'
import { addTodo } from '../store/todoSlice';

import '../App.css';

export const App: FC = () => {
    const [value, setValue] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);
    const dispatch = useAppDispatch();

    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setValue(e.target.value);
    }

    const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
        if (e.key === 'Enter') {
            handleAction();
        }
    }

    const handleAction = () => {
        if (value) {
            dispatch(addTodo(value));
            setValue('');
        }
    }

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, [])

    return (
        <div className='App'>
            <div>
                <input className='Input' value={value} onChange={handleChange} onKeyDown={handleKeyDown} ref={inputRef} />
                <button className='ButtonAdd' onClick={handleAction}>add</button>
            </div>
            <TodoList />
        </div>
    )
}

