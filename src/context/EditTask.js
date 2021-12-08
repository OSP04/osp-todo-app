import { createContext } from "react";

const EditTaskContext = createContext({
  editingTask: {},
  editingTitle: "",
  editingImage: "",
  editingDate: new Date(),
  editingDue: new Date(),
  editingLocation: {},
  editingMemo: "",
  isAddPressed: false,
  editingId: "",
  editingCategory: {},
  categoryArr: [],
  updateTask: () => {},
  updateTitle: () => {},
  updateImage: () => {},
  updateDate: () => {},
  updateDue: () => {},
  updateLocation: () => {},
  updateMemo: () => {},
  updateCategoryData: () => {},
  updateCategory: () => {},
});

export default EditTaskContext;
