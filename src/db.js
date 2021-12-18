import AsyncStorage from "@react-native-async-storage/async-storage";

import { theme } from "./theme";

export const db = {
  categories: [
    {
      id: "5",
      title: "Food",
      color: theme.category.red,
      sorting: "added", // added, done, not, due  used to sorting/filtering

      tasks: [
        {
          id: "1",
          count: "1",
          text: "Buy Pizza",
          date: new Date("2021-11-23T03:00:00.000Z"),
          due: new Date("2022-12-28T03:00:00.000Z"),
          category: "Food",
          image:
            "https://images.unsplash.com/photo-1637004253818-d3072efc73fe?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80",
          complete: false,
          selected: false,
          created: Date.now(),
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
          text: "Buy noodle",
          date: new Date("2021-11-24T03:00:00.000Z"),
          due: new Date("2022-01-05T03:00:00.000Z"),
          category: "Food",
          image:
            "https://images.unsplash.com/photo-1582201942988-13e60e4556ee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=402&q=80",
          complete: true,
          selected: false,
          created: Date.now(),
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
          id: "5",
          count: "3",
          text: "Lunch with my friend",
          date: new Date("2021-11-23T03:00:00.000Z"),
          due: new Date("2021-12-04T03:00:00.000Z"),
          category: "Food",
          image: "",
          complete: false,
          selected: false,
          created: Date.now(),
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
          id: "7",
          count: "4",
          text: "Go to market",
          date: new Date("2021-11-23T03:00:00.000Z"),
          due: null,
          category: "Food",
          image: "",
          complete: false,
          selected: false,
          created: Date.now(),
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
          id: "8",
          count: "5",
          text: "Prepare dinner",
          date: new Date("2021-11-23T03:00:00.000Z"),
          due: null,
          category: "Food",
          image: "",
          complete: false,
          selected: false,
          created: Date.now(),
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
    {
      id: "6",
      title: "School",
      color: theme.category.yellow,
      owner: null,
      sorting: "added", // added, done, not, due  used to sorting/filtering
      tasks: [
        {
          id: "2",
          count: "1",
          text: "OpenSW Assignment",
          date: new Date("2021-11-24T03:00:00.000Z"),
          due: new Date("2021-12-15T03:00:00.000Z"),
          category: "School",
          image: "",
          complete: true,
          selected: false,
          created: Date.now(),
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
          count: "2",
          text: "Submit report",
          date: new Date("2021-11-22T03:00:00.000Z"),
          due: null,
          category: "School",
          image: "",
          complete: false,
          selected: false,
          created: Date.now(),
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
          id: "6",
          count: "3",
          text: "Start project",
          date: new Date("2021-11-24T03:00:00.000Z"),
          due: null,
          category: "School",
          image: "",
          complete: false,
          selected: false,
          created: Date.now(),
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
      text: "Buy Pizza",
      date: new Date("2021-11-23T03:00:00.000Z"),
      due: new Date("2022-12-28T03:00:00.000Z"),
      category: "Food",
      image:
        "https://images.unsplash.com/photo-1637004253818-d3072efc73fe?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80",
      complete: false,
      selected: false,
      created: Date.now(),
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
      id: "2",
      text: "OpenSW Assignment",
      date: new Date("2021-11-24T03:00:00.000Z"),
      due: new Date("2021-12-15T03:00:00.000Z"),
      category: "School",
      image: "",
      complete: true,
      selected: false,
      created: Date.now(),
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
      text: "Buy noodle",
      date: new Date("2021-11-24T03:00:00.000Z"),
      due: new Date("2022-01-05T03:00:00.000Z"),
      category: "Food",
      image:
        "https://images.unsplash.com/photo-1582201942988-13e60e4556ee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=402&q=80",
      complete: true,
      selected: false,
      created: Date.now(),
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
      text: "Submit report",
      date: new Date("2021-11-22T03:00:00.000Z"),
      due: null,
      category: "School",
      image: "",
      complete: false,
      selected: false,
      created: Date.now(),
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
      id: "5",
      text: "Lunch with my friend",
      date: new Date("2021-11-23T03:00:00.000Z"),
      due: new Date("2021-12-04T03:00:00.000Z"),
      category: "Food",
      image: "",
      complete: false,
      selected: false,
      created: Date.now(),
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
      id: "6",
      text: "Start project",
      date: new Date("2021-11-24T03:00:00.000Z"),
      due: null,
      category: "School",
      image: "",
      complete: false,
      selected: false,
      created: Date.now(),
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
      id: "7",
      text: "Go to market",
      date: new Date("2021-11-23T03:00:00.000Z"),
      due: null,
      category: "Food",
      image: "",
      complete: false,
      selected: false,
      created: Date.now(),
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
      id: "8",
      count: "5",
      text: "Prepare dinner",
      date: new Date("2021-11-23T03:00:00.000Z"),
      due: null,
      category: "Food",
      image: "",
      complete: false,
      selected: false,
      created: Date.now(),
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
          created: new Date().setDate(23),
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
          created: new Date().setDate(23),
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
          created: new Date().setDate(25),
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
      created: new Date().setDate(23),
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
      created: new Date().setDate(23),
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
      created: new Date().setDate(25),
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
    const value = await AsyncStorage.getItem(key);
    return value !== null ? JSON.parse(value) : [];
  } catch (error) {
    console.log(error);
  }
};
