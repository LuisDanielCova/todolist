import React, { useEffect, useState } from "react";
import { TodoItem } from "../TodoItems/TodoItem";

export const TodoItemsList = ({ data }) => {
  const [render, setRender] = useState(<p>There are no tasks</p>);

  useEffect(() => {
    if (data.length > 0) {
      setRender(
        <ul>
          {data.map((item) => {
            return <TodoItem todoItem={item} key={item.id} />;
          })}
        </ul>
      );
    }
  }, []);

  return <>{render}</>;
};
