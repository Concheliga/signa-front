import { router } from "./router/router";
import "./ui/css/reset.css";
import { RouterProvider } from "react-router-dom";


function App() {

  return <RouterProvider router={router}/>
}

export default App
