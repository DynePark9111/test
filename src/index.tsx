import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.scss";
import App from "./App";
import { BookmarkContextProvider } from "./context/bookmarkContext";
import { LvContextProvider } from "./context/lvContext";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import { SidebarContextProvider } from "./context/sidebarContext";
import { DarkmodeContextProvider } from "./context/darkmodeContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BookmarkContextProvider>
      <LvContextProvider>
        <SidebarContextProvider>
          <DarkmodeContextProvider>
            <App />
          </DarkmodeContextProvider>
        </SidebarContextProvider>
      </LvContextProvider>
    </BookmarkContextProvider>
  </React.StrictMode>
);

serviceWorkerRegistration.register();
