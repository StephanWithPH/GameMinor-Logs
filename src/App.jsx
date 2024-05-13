import {Button, Description, Field, Input, Label} from "@headlessui/react";
import clsx from "clsx";
import Logs from "./components/pages/Logs";

// TODO: Split it up in components!
// TODO: Create individual log dropdown entries
// TODO: Adding new entries
// TODO: Removing entries
// TODO: Exporting log
// TODO: Clear all button

// TODO: OPTIONAL: Add multiple days of week
// TODO: OPTIONAL: Add multiple weeks

function App() {
  return (
      <div id="pageWrapper" className="min-h-screen flex flex-col w-full bg-hanwhite">
          <nav id="topbar" className="flex h-20 bg-handark items-center px-10 w-full">
              <h1 className="text-hanwhite text-xl font-bold">GAME Minor Log Helper</h1>
          </nav>
          <div id="contentArea" className="w-full flex flex-grow">
              <div id="sidebar" className="w-64 bg-handark">
                  <div className="w-full flex flex-col text-hanwhite">
                      <div className="h-20 items-center justify-center font-bold text-center w-full flex hover:bg-hanwhite hover:text-handark border-t border-gray-600 border-opacity-20">
                          <span>Fill in logs</span>
                      </div>
                      <div className="h-20 items-center justify-center font-bold text-center w-full flex hover:bg-hanwhite hover:text-handark border-t border-gray-600 border-opacity-20">
                          <span>Export logs</span>
                      </div>
                  </div>
              </div>
              <Logs/>
          </div>
      </div>
  );
}

export default App;
