import ReactDOM from "react-dom/client";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Styles/index.css';
import { Provider } from "react-redux";
import AppRouter from "@routes/AppRouter";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "@store/store";


ReactDOM.createRoot(document.getElementById("root")!).render(
    <Provider store={store}><PersistGate
     loading={null} persistor={persistor}><AppRouter/></PersistGate ></Provider>
);
