import { Fragment, useState } from "react";
import { Combobox, Transition } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/20/solid";
import DataCards from "./DataCards";
import { v4 as uuidv4 } from "uuid";
const people = [
  { id: 1, name: "Wade Cooper" },
  { id: 2, name: "Arlene Mccoy" },
  { id: 3, name: "Devon Webb" },
  { id: 4, name: "Tom Cook" },
  { id: 5, name: "Tanya Fox" },
  { id: 6, name: "Hellen Schmidt" },
];
type DistrictStatus = {
  district: string;
  ozoneMate: number;
  online: number;
  offline: number;
  alert: number;
  id: string;
  user: string;
};
const mockDataDistrict: DistrictStatus[] = [
  {
    district: "JAURES",
    ozoneMate: 5,
    online: 6,
    offline: 7,
    alert: 1,
    id: uuidv4(),
    user: "Wade Cooper",
  },
  {
    district: "FAUBORG SAINT-GERMAIN",
    ozoneMate: 5,
    online: 6,
    offline: 7,
    alert: 0,
    id: uuidv4(),
    user: "Wade Cooper",
  },
  {
    district: "LATIN QUARTER",
    ozoneMate: 5,
    online: 6,
    offline: 7,
    alert: 0,
    id: uuidv4(),
    user: "Tom Cook",
  },
  {
    district: "PALAIS ROYAL",
    ozoneMate: 5,
    online: 6,
    offline: 7,
    alert: 4,
    id: uuidv4(),
    user: "Arlene Mccoy",
  },
  {
    district: " 43 Rue du Calvalre Nanterre, lie-deoverflow overflow",
    ozoneMate: 5,
    online: 6,
    offline: 7,
    alert: 1,
    id: uuidv4(),
    user: "Tom Cook",
  },
  {
    district: " 43 Rue du Calvalre Nanterre, lie-deoverflow overflow",
    ozoneMate: 5,
    online: 6,
    offline: 7,
    alert: 0,
    id: uuidv4(),
    user: "Arlene Mccoy",
  },
  {
    district: " 43 Rue du Calvalre Nanterre, lie-deoverflow overflow",
    ozoneMate: 5,
    online: 6,
    offline: 7,
    alert: 0,
    id: uuidv4(),
    user: "Arlene Mccoy",
  },
  {
    district: " 43 Rue du Calvalre Nanterre, lie-deoverflow overflow",
    ozoneMate: 5,
    online: 6,
    offline: 7,
    alert: 0,
    id: uuidv4(),
    user: "Arlene Mccoy",
  },
  {
    district: " 43 Rue du Calvalre Nanterre, lie-deoverflow overflow",
    ozoneMate: 5,
    online: 6,
    offline: 7,
    alert: 1,
    id: uuidv4(),
    user: "Tanya Fox",
  },
  {
    district: " 43 Rue du Calvalre Nanterre, lie-deoverflow overflow",
    ozoneMate: 5,
    online: 6,
    offline: 7,
    alert: 7,
    id: uuidv4(),
    user: "Tanya Fox",
  },
  {
    district: " 43 Rue du Calvalre Nanterre, lie-deoverflow overflow",
    ozoneMate: 5,
    online: 6,
    offline: 7,
    alert: 0,
    id: uuidv4(),
    user: "Tanya Fox",
  },
  {
    district: " 43 Rue du Calvalre Nanterre, lie-deoverflow overflow",
    ozoneMate: 5,
    online: 6,
    offline: 7,
    alert: 0,
    id: uuidv4(),
    user: "Arlene Mccoy",
  },
  {
    district: " 43 Rue du Calvalre Nanterre, lie-deoverflow overflow",
    ozoneMate: 5,
    online: 6,
    offline: 7,
    alert: 1,
    id: uuidv4(),
    user: "Arlene Mccoy",
  },
  {
    district: " 43 Rue du Calvalre Nanterre, lie-deoverflow overflow",
    ozoneMate: 5,
    online: 6,
    offline: 7,
    alert: 5,
    id: uuidv4(),
    user: "Hellen Schmidt",
  },
  {
    district: " 43 Rue du Calvalre Nanterre, lie-deoverflow overflow",
    ozoneMate: 5,
    online: 6,
    offline: 7,
    alert: 0,
    id: uuidv4(),
    user: "Hellen Schmidt",
  },
  {
    district: " 43 Rue du Calvalre Nanterre, lie-deoverflow overflow",
    ozoneMate: 5,
    online: 6,
    offline: 7,
    alert: 0,
    id: uuidv4(),
    user: "Hellen Schmidt",
  },
];
function MyCombobox() {
  const [selected, setSelected] = useState();
  const [query, setQuery] = useState("");

  const filteredPeople =
    query === ""
      ? people
      : people.filter((person) =>
          person.name
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );

  return (
    <div className=" w-[267px]">
      <Combobox value={selected} onChange={setSelected}>
        <div className="relative mt-1">
          <div className="relative w-full cursor-default   bg-[#F5F5F5] text-left  border-b-2 border-[#707070] focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300  ">
            <Combobox.Input
              className="w-full border-none py-2 pl-3 pr-10 text-[20px] font-bold leading-5 text-gray-900 focus:ring-0 bg-[#F5F5F5]"
              // @ts-ignore
              displayValue={(person) => person.name}
              onChange={(event) => setQuery(event.target.value)}
            />
            <Combobox.Button className="absolute inset-y-0 right-[-25px] flex items-start mt-[6px]">
              <img src="/images/dropdown-icon.png" alt="" />
            </Combobox.Button>
          </div>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery("")}
          >
            <Combobox.Options className=" z-10 absolute mt-1 max-h-60 w-full overflow-auto   border-[1px] border-[#707070] bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {filteredPeople.length === 0 && query !== "" ? (
                <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                  Nothing found.
                </div>
              ) : (
                filteredPeople.map((person) => (
                  <Combobox.Option
                    key={person.id}
                    className={({ active }) =>
                      `relative cursor-default select-none py-3 pl-[18px] pr-4 ${
                        active ? "bg-[#B9B9B9] text-white" : "text-black"
                      }`
                    }
                    value={person}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? "font-bold" : "font-bold"
                          }`}
                        >
                          {person.name}
                        </span>
                        {selected ? (
                          <span
                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                              active ? "text-white" : "text-teal-600"
                            }`}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
}
const DistrictList = ({ openAddDevicePopup, changeToDevicesList }) => {
  const [isSelectDistrict, setIsSelectDistrict] = useState<string>();
  return (
    <>
      <div className=" w-full flex  min-h-[104px] pt-8 pb-[18px] pl-[30px] ">
        <MyCombobox />
        <div className=" text-left flex items-start ml-[30px]">
          <p className=" text-[20px] font-bold  text-[#656565]">Client</p>
        </div>

        <button
          onClick={openAddDevicePopup}
          className=" ml-auto flex items-center justify-center w-[136px] h-[54px] space-x-3 styled"
        >
          <img src="/images/add.png" alt="" />
          <img src="/images/machine.png" className="w-[27px] h-[35px]" alt="" />
        </button>
      </div>
      <div className="overflow-scroll space-y-11 flex flex-col items-center rounded-[6px]  pl-[30px] pr-[20px]  custom-scrollbar">
        {mockDataDistrict.map((data: DistrictStatus) => {
          return (
            <DataCards
              data={data}
              isSelected={isSelectDistrict}
              setSelected={setIsSelectDistrict}
              changeView={changeToDevicesList}
            />
          );
        })}
      </div>
    </>
  );
};
export default DistrictList;
