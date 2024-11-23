import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import Store from "./store/store.ts";
import { State } from "./interfaces/interfaces.ts";
import { createContext } from "react";

const store = new Store();

export const Context = createContext<State>({
    store
})

createRoot(document.getElementById('root')!).render(
    <Context.Provider value={{ store }}>
        <App />
    </Context.Provider>
)
