import AsyncStorage from "@react-native-async-storage/async-storage";
import { theme } from "./theme";

const latitudeDelta = 0.004;
const longitudeDelta = 0.004;

export const db = {
  // memo 추가해주세요
  categories: [
    {
      id: "5",
      title: "Food",
      color: theme.category.red,
      isAdding: false, // 삭제
      sorting: "added",
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
            latitude: 37.559285765296,
            longitude: 126.94568079431,
            latitudeDelta,
            longitudeDelta,
          },
        },
        {
          id: "3",
          text: "Buy noodle",
          date: new Date("2021-11-24T03:00:00.000Z"),
          due: new Date("2022-01-05T03:00:00.000Z"),
          category: "Food",
          image: null,
          complete: true,
          selected: false,
          created: Date.now(),
          location: {
            latitude: 37.559285765296,
            longitude: 126.94568079431,
            latitudeDelta: 0.004,
            longitudeDelta: 0.004,
          },
        },
        {
          id: "5",
          text: "Lunch with my friend",
          date: new Date("2021-11-23T03:00:00.000Z"),
          due: new Date("2021-12-04T03:00:00.000Z"),
          category: "Food",
          image: null,
          complete: false,
          selected: false,
          created: Date.now(),
          location: {
            latitude: 37.559285765296,
            longitude: 126.94568079431,
            latitudeDelta: 0.004,
            longitudeDelta: 0.004,
          },
        },
        {
          id: "7",
          text: "Go to market",
          date: new Date("2021-11-23T03:00:00.000Z"),
          due: null,
          category: "Food",
          image: null,
          complete: false,
          selected: false,
          created: Date.now(),
          location: {
            latitude: 37.559285765296,
            longitude: 126.94568079431,
            latitudeDelta,
            longitudeDelta,
          },
        },
        {
          id: "8",
          count: "5",
          text: "Prepare dinner",
          date: new Date("2021-11-23T03:00:00.000Z"),
          due: null,
          category: "Food",
          image: null,
          complete: false,
          selected: false,
          created: Date.now(),
          location: {
            latitude: 37.559285765296,
            longitude: 126.94568079431,
            latitudeDelta,
            longitudeDelta,
          },
        },
      ],
    },
    {
      id: "6",
      title: "School",
      color: theme.category.yellow,
      owner: null,
      isAdding: false,
      sorting: "added",
      tasks: [
        {
          id: "2",
          text: "OpenSW Assignment",
          date: new Date("2021-11-24T03:00:00.000Z"),
          due: new Date("2021-12-15T03:00:00.000Z"),
          category: "School",
          image: null,
          complete: true,
          selected: false,
          created: Date.now(),
          location: {
            latitude: 37.559285765296,
            longitude: 126.94568079431,
            latitudeDelta,
            longitudeDelta,
          },
        },
        {
          id: "4",
          text: "Submit report",
          date: new Date("2021-11-22T03:00:00.000Z"),
          due: null,
          category: "School",
          image: null,
          complete: false,
          selected: false,
          created: Date.now(),
          location: {
            latitude: 37.559285765296,
            longitude: 126.94568079431,
            latitudeDelta,
            longitudeDelta,
          },
        },
        {
          id: "6",
          text: "Start project",
          date: new Date("2021-11-24T03:00:00.000Z"),
          due: null,
          category: "School",
          image: null,
          complete: false,
          selected: false,
          created: Date.now(),
          location: {
            latitude: 37.559285765296,
            longitude: 126.94568079431,
            latitudeDelta,
            longitudeDelta,
          },
        },
      ],
    },
  ],

  // memo 추가해주세요
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
        latitude: 37.559285765296,
        longitude: 126.94568079431,
        latitudeDelta,
        longitudeDelta,
      },
    },
    {
      id: "2",
      text: "OpenSW Assignment",
      date: new Date("2021-11-24T03:00:00.000Z"),
      due: new Date("2021-12-15T03:00:00.000Z"),
      category: "School",
      image: null,
      complete: true,
      selected: false,
      created: Date.now(),
      location: {
        latitude: 37.559285765296,
        longitude: 126.94568079431,
        latitudeDelta: 0.004,
        longitudeDelta: 0.004,
      },
    },
    {
      id: "3",
      text: "Buy noodle",
      date: new Date("2021-11-24T03:00:00.000Z"),
      due: new Date("2022-01-05T03:00:00.000Z"),
      category: "Food",
      image: null,
      complete: true,
      selected: false,
      created: Date.now(),
      location: {
        latitude: 37.559285765296,
        longitude: 126.94568079431,
        latitudeDelta: 0.004,
        longitudeDelta: 0.004,
      },
    },
    {
      id: "4",
      text: "Submit report",
      date: new Date("2021-11-22T03:00:00.000Z"),
      due: null,
      category: "School",
      image: null,
      complete: false,
      selected: false,
      created: Date.now(),
      location: {
        latitude: 37.559285765296,
        longitude: 126.94568079431,
        latitudeDelta: 0.004,
        longitudeDelta: 0.004,
      },
    },
    {
      id: "5",
      text: "Lunch with my friend",
      date: new Date("2021-11-23T03:00:00.000Z"),
      due: new Date("2021-12-04T03:00:00.000Z"),
      category: "Food",
      image: null,
      complete: false,
      selected: false,
      created: Date.now(),
      location: {
        latitude: 37.559285765296,
        longitude: 126.94568079431,
        latitudeDelta: 0.004,
        longitudeDelta: 0.004,
      },
    },
    {
      id: "6",
      text: "Start project",
      date: new Date("2021-11-24T03:00:00.000Z"),
      due: null,
      category: "School",
      image: null,
      complete: false,
      selected: false,
      created: Date.now(),
      location: {
        latitude: 37.559285765296,
        longitude: 126.94568079431,
        latitudeDelta: 0.004,
        longitudeDelta: 0.004,
      },
    },
    {
      id: "7",
      text: "Go to market",
      date: new Date("2021-11-23T03:00:00.000Z"),
      due: null,
      category: "Food",
      image: null,
      complete: false,
      selected: false,
      created: Date.now(),
      location: {
        latitude: 37.559285765296,
        longitude: 126.94568079431,
        latitudeDelta,
        longitudeDelta,
      },
    },
    {
      id: "8",
      count: "5",
      text: "Prepare dinner",
      date: new Date("2021-11-23T03:00:00.000Z"),
      due: null,
      category: "Food",
      image: null,
      complete: false,
      selected: false,
      created: Date.now(),
      location: {
        latitude: 37.559285765296,
        longitude: 126.94568079431,
        latitudeDelta,
        longitudeDelta,
      },
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
    return value !== null ? JSON.parse(value) : null;
  } catch (error) {
    console.log(error);
  }
};
