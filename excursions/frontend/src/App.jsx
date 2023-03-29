import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Form from "./pages/Form/index.jsx";
import List from "./pages/List/index.jsx";

import "inter-ui/inter.css";
import './App.css'

function App() {

  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <List />
      },
      {
        path: "form",
        element: <Form />,
      },
    ],
    {
      basename: "/app/excursions"
    }
  );

  return (
    <div className="page">
      <RouterProvider router={router} />
    </div>
  );
}

export default App
