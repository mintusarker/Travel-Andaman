import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./Layout/Main";
import Home from "./Componant/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
    ],
  },
]);

function App() {
  return (
    <div className="">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
