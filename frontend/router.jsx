import App from "./src/App";
import { createBrowserRouter } from "react-router-dom";
import { Overall } from "./src/pages/Overall";
import { Error } from "./src/components/Error";
import { Pupils } from "./src/pages/Pupils";

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
    ],
  },
]);
