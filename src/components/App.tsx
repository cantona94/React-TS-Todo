import { FC, useState, useEffect, useRef } from 'react';

import { ITodo } from '../types/data';

export const App: FC = () => {
    const [value, setValue] = useState('');
    const [todos, setTodos] = useState<ITodo[]>([]);

    const addTodo = () => {
        setTodos([...todos, {
            id: Date.now(),
            title: value,
            complete: false,
        }])
    }
    return <div>
        <div>
            <input value={value} onChange={e => setValue(e.target.value)} />
            <button onClick={addTodo}>add</button>
        </div>
    </div>
}

