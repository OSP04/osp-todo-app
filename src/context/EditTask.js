import { createContext } from "react";

const EditTaskContext = createContext({
  editingTask: {},
  editingText: "",
  editingImage: "",
  editingDate: null,
  editingDue: null,
  editingLocation: {},
  editingMemo: "",
  isAddPressed: false,
  editingId: "",
  editingCategory: {},
  categoryArr: [],
  updateTask: () => {},
  updateText: () => {},
  updateImage: () => {},
  updateDate: () => {},
  updateDue: () => {},
  updateLocation: () => {},
  updateMemo: () => {},
  updateCategoryData: () => {},
  updateCategory: () => {},
});

export default EditTaskContext;
