import { useContext, useEffect } from "react";
import { router } from "./router/router";
import "./ui/css/reset.css";
import { RouterProvider } from "react-router-dom";
import { Context } from "./main";
import { observer } from "mobx-react-lite";


function App() {
  const {store} = useContext(Context);

  useEffect(() => {
    if (localStorage.getItem('token')) {
      store.checkAuthorization();
    }
  }, [])

  return <RouterProvider router={router}/>
}

export default observer(App);
