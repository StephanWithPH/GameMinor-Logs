import {Button, Description, Field, Input, Label} from "@headlessui/react";

function Logs() {
    return (
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
                                className="
                                      mt-3 block w-full bg-hanwhite py-1.5 px-3 text-sm/6 text-handark
                                      focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-hanlightgray"
                                placeholder="Your name"
                                required
                            />
                        </Field>

                        <Button className="
                              inline-flex items-center gap-2 bg-hanred py-1.5
                              px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10
                              focus:outline-none data-[hover]:bg-hanredhover data-[focus]:outline-1
                              data-[focus]:outline-white">
                            Save changes
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Logs;
