import { FC } from 'react';

import { useAppDispatch } from '../hooks/hook';
import { toggleComplete, removeTodo } from '../store/todoSlice';
import { ITodo } from '../types/data';

export const TodoItem: FC<ITodo> = (props) => {
    const { id, title, complete } = props;
    const dispatch = useAppDispatch();

    return <div className='Todos'>
        <input type="checkbox" checked={complete} onChange={() => dispatch(toggleComplete(id))} />
        <span className='Title' >
            {title}
        </span>
        <button
            className='ButtonRemove'
            onClick={() => dispatch(removeTodo(id))}
        >
            x
        </button>
    </div>
}