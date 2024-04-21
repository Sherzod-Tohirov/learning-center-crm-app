import App from "./src/App";
import { createBrowserRouter } from "react-router-dom";
import { Overall } from "./src/pages/Overall";
import { Error } from "./src/components/Error";
import { Pupils } from "./src/pages/Pupils";
import { Groups } from "./src/pages/Groups";
import { Teachers } from "./src/pages/Teachers";
import { Subjects } from "./src/pages/Subjects";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Overall />,
      },
      {
        path: "/pupils",
        element: <Pupils />,
      },
      {
        path: "/groups",
        element: <Groups />,
      },
      {
        path: "/teachers",
        element: <Teachers />,
      },
      {
        path: "/subjects",
        element: <Subjects />,
      },
    ],
  },
]);
