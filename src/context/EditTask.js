import { createContext } from "react";

const EditTaskContext = createContext({
  selectedTask: {},
  isAddPressed: false,
  selectedId: "",
  selectedCategory: {},
  updateTodo: () => {},
  updateCategory: () => {},
});

export default EditTaskContext;
