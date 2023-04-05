import { FC } from 'react';

import { TodoItem } from './TodoItem';
import { useAppSelector } from '../hooks/hook';

export const TodoList: FC = () => {
    const todos = useAppSelector(state => state.todos.list);

    return <div>
        {
            todos.map(todo => (
                <TodoItem
                    key={todo.id}
                    {...todo}
                />
            ))
        }
    </div>
}