import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./Layouts/Main";
import Home from "./components/Home/Home";
import Orders from "./components/Orders/Orders";
import GrandPa from "./components/GrandPa/GrandPa";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          loader: () => {
            return fetch("t-shirt.json");
          },
          element: <Home></Home>,
        },
        {
          path: "/orders",
          element: <Orders></Orders>,
        },
        {
          path: "/grandpa",
          element: <GrandPa></GrandPa>,
        },
      ],
    },
    {
      path: "*",
      element: <h2>404 Not Found</h2>,
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
