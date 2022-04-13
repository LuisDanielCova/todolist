import React, { useState } from "react";

export const ListItemInput = () => {
  const [taskName, setTaskName] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <input
        type="text"
        name="taskInput"
        id="taskInput"
        placeholder="New Task"
        value={taskName}
        onChange={(e) => {
          const { value } = e.target;
          setTaskName(value);
        }}
      />
      <button type="submit" disabled={taskName.trim().length <= 0}>
        Add
      </button>
    </form>
  );
};
