import React from "react";
import s from "./TodoList.module.scss";
import { Todo } from "../../model";
import SingleTodo from "../SingleTodo/SingleTodo";
import cx from "classnames";
import { Droppable } from "react-beautiful-dnd";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  completedTodos: Todo[];
  setCompletedTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList = ({
  todos,
  setTodos,
  completedTodos,
  setCompletedTodos,
}: Props) => {
  return (
    <div className={s.container}>
      <Droppable droppableId="TodosList">
        {(provided, snapshot) => (
          <div
            className={`${s.todos}${
              snapshot.isDraggingOver ? s.dragactive : ""
            }`}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <span className={s.todosHeading}>Active Tasks</span>
            {todos.map((todo, index) => (
              <SingleTodo
                index={index}
                todo={todo}
                todos={todos}
                key={todo.id}
                setTodos={setTodos}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>

      <Droppable droppableId="TodosRemove">
        {(provided, snapshot) => (
          <div
            className={`${s.todos} ${s.todosRemove}${
              snapshot.isDraggingOver ? s.dragcomplete : ""
            }`}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <span className={s.todosHeading}>Completed Tasks</span>
            {completedTodos.map((todo, index) => (
              <SingleTodo
                index={index}
                todo={todo}
                todos={completedTodos}
                key={todo.id}
                setTodos={setCompletedTodos}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default TodoList;
