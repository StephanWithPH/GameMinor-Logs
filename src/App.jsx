import {Button, Description, Field, Input, Label} from "@headlessui/react";
import clsx from "clsx";

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
              <div id="mainContent" className="w-full flex justify-center">
                  <div className="w-3/4 bg-hanlight">
                      <div className="w-full p-3 bg-hanred bg-opacity-10 border-hanred text-hanred">
                          <strong>WARNING:</strong> Warning: Risk of losing the logs is your own responsibility! So be wise and export the logs regularly.
                      </div>
                      <div className="p-12">
                          <h2 className="text-2xl font-bold text-handark mb-2">Fill in logs</h2>
                          <p className="w-1/2 text-hanlightgray">
                              Create your markdown logbook for the GAME Minor here in an easy and clear way.
                              This log can then be downloaded or copied as a markdown export.
                          </p>
                          <form className="w-full mt-5">
                              <Field className="mb-5">
                                  <Label className="text-sm/6 font-medium text-handark">Name <span className="text-hanred">*</span></Label>
                                  <Description className="text-sm/6 text-hanlightgray">Use your real name so people will recognize you.</Description>
                                  <Input
                                      className={clsx(
                                          'mt-3 block w-full bg-hanwhite py-1.5 px-3 text-sm/6 text-handark',
                                          'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-hanlightgray'
                                      )}
                                      placeholder="Your name"
                                      required
                                  />
                              </Field>

                              <Button className="
                          inline-flex items-center gap-2 bg-hanred py-1.5
                          px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10
                          focus:outline-none data-[hover]:bg-hanredhover data-[focus]:outline-1
                          data-[focus]:outline-white
                          ">
                                  Save changes
                              </Button>
                          </form>
                      </div>

                  </div>
              </div>
          </div>
      </div>
  );
}

export default App;
