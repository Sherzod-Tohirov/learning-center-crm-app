
import { Cap, CreditCard, Directory, Home, People } from "./svg";

export const sidebar = [
  {
    id: 1,
    title: "Xisobot",
    svg: <Home />,
    route: "/",
  },
  {
    id: 2,
    title: "O'quvchilar",
    svg: <Cap />,
    route: "/pupils",
  },
  {
    id: 3,
    title: "Guruhlar",
    svg: <People />,
    route: "/groups",
  },

  {
    id: 4,
    title: "O'qtuvchilar",
    svg: <CreditCard />,
    route: "/teachers",
  },

  {
    id: 5,
    title: "Fanlar",
    svg: <Directory />,
    route: "/subjects",
  },
];

export const headerTitles = [
  {
    id: 1,
    title: "Xisobot",
    route: "/",
  },
  {
    id: 2,
    title: "O'quvchilar",
    route: "/pupils",
  },
  {
    id: 3,
    title: "Guruhlar",
    route: "/groups",
  },
  {
    id: 4,
    title: "O'qtuvchilar",
    route: "/teachers",
  },
  {
    id: 5,
    title: "Fanlar",
    route: "/subjects",
  },
];

export const overallCard = [
  {
    id: 1,
    title: "Jami o'quvchilar soni:",
    amount: 255,
  },
  {
    id: 2,
    title: "O'qituvchilar soni:",
    amount: 10,
  },
  {
    id: 3,
    title: "Jami fanlar soni:",
    amount: 6,
  },
  {
    id: 4,
    title: "Jami guruhlar soni",
    amount: 26,
  },
];