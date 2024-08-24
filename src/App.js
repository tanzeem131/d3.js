import "./App.css";
import { createBrowserRouter, Outlet } from "react-router-dom";
import SideBar from "./components/SideBar";
import NavBtn from "./components/NavBtn";
import Error from "./components/Error";
import Body from "./components/Body";
import Btn1 from "./components/Btn1";
import Btn2 from "./components/Btn2";
import Btn3 from "./components/Btn3";
import Btn4 from "./components/Btn4";

function App() {
  return (
    <div>
      <NavBtn />
      <Outlet />
    </div>
  );
}

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/",
        element: <SideBar />,
      },
      {
        path: "/Btn1",
        element: <Btn1 />,
      },
      {
        path: "/Btn2",
        element: <Btn2 />,
      },
      {
        path: "/Btn3",
        element: <Btn3 />,
      },
      {
        path: "/Btn4",
        element: <Btn4 />,
      },
    ],
    errorElement: <Error />,
  },
]);

export default App;
