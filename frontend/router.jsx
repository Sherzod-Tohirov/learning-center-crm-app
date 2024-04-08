import { createBrowserRouter } from "react-router-dom";
import App from "./src/App";
import { Overall } from "./src/pages/Overall";
import { Error } from "./src/components/Error";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <Error />,
        children: [
            {
                index: true,
                element: <Overall />
            }
        ],

    }
])