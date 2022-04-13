import React, { useState } from "react";

export const TodoListItem = ({ todoItem }) => {
  const { id, title, check } = todoItem;
  const [checked, setChecked] = useState(check);

  return (
    <>
      <li data-testid="list-item-li" className="list-item" key={id}>
        <input
          type="checkbox"
          name="itemCheckbox"
          id="itemCheckbox"
          checked={checked}
          onChange={() => {
            setChecked(!checked);
          }}
        />
        <label htmlFor="itemCheckbox">{title}</label>
        <a href="/">Edit</a>
        <a href="/">Delete</a>
      </li>
    </>
  );
};
