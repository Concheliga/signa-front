import { router } from "./router/router";
import "./ui/css/reset.css";
import { RouterProvider } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { useEffect, useContext } from "react";
import { Context } from "./main";

function App() {
  const {store} = useContext(Context);

  useEffect(() => {
    if (localStorage.getItem('token')) {
      store.setAuthorization(true);
      store.getUser();
    }
  }, [])

  return <RouterProvider router={router}/>
}

export default observer(App);
