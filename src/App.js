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
import { Provider } from "react-redux";
import store from "./utils/store";
import HighLightBar from "./components/HighLightBar";

function App() {
  return (
    <Provider store={store}>
      <div className="grid grid-cols-12 w-full items-center">
        <div className="col-span-2 border-r-2 border-gray-800">
          <SideBar />
        </div>
        <div className="col-span-6 flex flex-col justify-center items-center gap-20 bg-black h-screen">
          <Outlet />
          <NavBtn />
        </div>
        <div className="col-span-4 border-l-2 border-gray-800">
          <HighLightBar />
        </div>
      </div>
    </Provider>
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
