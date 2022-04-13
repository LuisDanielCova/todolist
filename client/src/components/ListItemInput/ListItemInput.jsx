import React from "react";

export const ListItemInput = () => {
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
      />
      <button type="submit">Add</button>
    </form>
  );
};
