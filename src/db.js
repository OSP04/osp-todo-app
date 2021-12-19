import AsyncStorage from "@react-native-async-storage/async-storage";

import { theme } from "./theme";

// Structure of fake data
export const db = {
  categories: [
    {
      id: "5",
      title: "General",
      color: theme.category.red,
      sorting: "added", // added, done, not, due  used to sorting/filtering

      tasks: [
        {
          id: "1",
          count: "1",
          text: "Welcome to 4TODO 🎉",
          date: new Date(),
          due: null,
          category: "General",
          image: "",
          complete: false,
          selected: false,
          location: {
            text: "",
            region: {},
            locationData: {
              mainText: "",
              address: "",
            },
          },
          memo: "",
        },
        {
          id: "3",
          count: "2",
          text: "Add your category in the Category menu",
          date: new Date(),
          due: null,
          category: "General",
          image: "",
          complete: false,
          selected: false,
          location: {
            text: "",
            region: {},
            locationData: {
              mainText: "",
              address: "",
            },
          },
          memo: "",
        },
        {
          id: "4",
          count: "3",
          text: "Toggle your tasks",
          date: new Date(),
          due: null,
          category: "General",
          image: "",
          complete: true,
          selected: false,
          location: {
            text: "",
            region: {},
            locationData: {
              mainText: "",
              address: "",
            },
          },
          memo: "",
        },
      ],
    },
  ],

  tasks: [
    {
      id: "1",
      count: "1",
      text: "Welcome to 4TODO 🎉",
      date: new Date(),
      due: null,
      category: "General",
      image: "",
      complete: false,
      selected: false,
      location: {
        text: "",
        region: {},
        locationData: {
          mainText: "",
          address: "",
        },
      },
      memo: "",
    },
    {
      id: "3",
      count: "2",
      text: "Add your category in the Category menu",
      date: new Date(),
      due: null,
      category: "General",
      image: "",
      complete: false,
      selected: false,
      location: {
        text: "",
        region: {},
        locationData: {
          mainText: "",
          address: "",
        },
      },
      memo: "",
    },
    {
      id: "4",
      count: "3",
      text: "Toggle your tasks",
      date: new Date(),
      due: null,
      category: "General",
      image: "",
      complete: true,
      selected: false,
      location: {
        text: "",
        region: {},
        locationData: {
          mainText: "",
          address: "",
        },
      },
      memo: "",
    },
  ],

  users: [
    {
      id: "7",
      email: "michael.lawson@reqres.in",
      first_name: "Michael",
      last_name: "Lawson",
      avatar: "https://reqres.in/img/faces/7-image.jpg",
      comments: [
        {
          id: "1",
          text: "Awesome! you are very deligent.",
          created: new Date().setDate(8),
          owner: {
            id: "10",
            email: "byron.fields@reqres.in",
            first_name: "Byron",
            last_name: "Fields",
            avatar: "https://reqres.in/img/faces/10-image.jpg",
            comments: null,
          },
        },
        {
          id: "2",
          text: "Thanks :)",
          created: new Date().setDate(8),
          owner: {
            id: "7",
            email: "michael.lawson@reqres.in",
            first_name: "Michael",
            last_name: "Lawson",
            avatar: "https://reqres.in/img/faces/7-image.jpg",
            comments: null,
          },
        },
        {
          id: "3",
          text: "How was your day today?",
          created: new Date().setDate(15),
          owner: {
            id: "9",
            email: "tobias.funke@reqres.in",
            first_name: "Tobias",
            last_name: "Funke",
            avatar: "https://reqres.in/img/faces/9-image.jpg",
            comments: null,
          },
        },
        {
          id: "4",
          text: "If you don't have a schedule today, let's have dinner later with me.",
          created: Date.now(),
          owner: {
            id: "8",
            email: "lindsay.ferguson@reqres.in",
            first_name: "Lindsay",
            last_name: "Ferguson",
            avatar: "https://reqres.in/img/faces/8-image.jpg",
            comments: null,
          },
        },
      ],
    },
    {
      id: "8",
      email: "lindsay.ferguson@reqres.in",
      first_name: "Lindsay",
      last_name: "Ferguson",
      avatar: "https://reqres.in/img/faces/8-image.jpg",
      comments: null,
    },
    {
      id: "9",
      email: "tobias.funke@reqres.in",
      first_name: "Tobias",
      last_name: "Funke",
      avatar: "https://reqres.in/img/faces/9-image.jpg",
      comments: null,
    },
    {
      id: "10",
      email: "byron.fields@reqres.in",
      first_name: "Byron",
      last_name: "Fields",
      avatar: "https://reqres.in/img/faces/10-image.jpg",
      comments: null,
    },
  ],

  comments: [
    {
      id: "1",
      text: "Awesome! you are very deligent.",
      created: new Date().setDate(8),
      owner: {
        id: "10",
        email: "byron.fields@reqres.in",
        first_name: "Byron",
        last_name: "Fields",
        avatar: "https://reqres.in/img/faces/10-image.jpg",
        comments: null,
      },
    },
    {
      id: "2",
      text: "Thanks :)",
      created: new Date().setDate(8),
      owner: {
        id: "7",
        email: "michael.lawson@reqres.in",
        first_name: "Michael",
        last_name: "Lawson",
        avatar: "https://reqres.in/img/faces/7-image.jpg",
        comments: null,
      },
    },
    {
      id: "3",
      text: "How was your day today?",
      created: new Date().setDate(15),
      owner: {
        id: "9",
        email: "tobias.funke@reqres.in",
        first_name: "Tobias",
        last_name: "Funke",
        avatar: "https://reqres.in/img/faces/9-image.jpg",
        comments: null,
      },
    },
    {
      id: "4",
      text: "If you don't have a schedule today, let's have dinner later with me.",
      created: Date.now(),
      owner: {
        id: "8",
        email: "lindsay.ferguson@reqres.in",
        first_name: "Lindsay",
        last_name: "Ferguson",
        avatar: "https://reqres.in/img/faces/8-image.jpg",
        comments: null,
      },
    },
  ],
};

export const storeData = async (key, value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (error) {
    console.log(error);
  }
};

export const getData = async (key) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue !== null ? JSON.parse(jsonValue) : [];
  } catch (error) {
    console.log(error);
  }
};
