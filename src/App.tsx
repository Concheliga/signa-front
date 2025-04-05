import { router } from "./router/router";
import "./ui/css/reset.css";
import { RouterProvider } from "react-router-dom";
import { observer } from "mobx-react-lite";

function App() {
  return <RouterProvider router={router}/>
}

export default observer(App);
