import { createContext } from "react";

const EditTaskContext = createContext({
  editingTask: {},
  editingText: "",
  editingImage: "",
  editingDate: null,
  editingDue: null,
  editingLocation: {
    text: "",
    region: {},
    locationData: {
      mainText: "",
      address: "",
    },
  },
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
