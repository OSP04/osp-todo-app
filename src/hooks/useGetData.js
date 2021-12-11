import React, {  useState } from "react";

import { getData } from "../db";

const useGetData = () => {
    const [categories, setCategories] = useState(null);
  const [tasks, setTasks] = useState(null);

    const getDataFirst = async () => {
        try {
            const categoryObjs = await getData("categories");
            const taskObjs = await getData("tasks");
            setCategories(categoryObjs);
            setTasks(taskObjs);
          } catch (error) {
            console.log(error);
          }
    }
    return {categories, tasks, setCategories, setTasks, getDataFirst}
}

export default useGetData;