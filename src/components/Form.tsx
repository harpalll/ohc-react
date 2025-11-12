import { FormEvent, ReactEventHandler, useState } from "react";

enum Type {
  Text = "text",
  Date = "date",
  Number = "number",
  Submit = "submit",
  Password = "password",
  Email = "email",
}

interface FormElement {
  id: number;
  name: string;
  type: Type;
  label: string;
  placeHolder?: string;
  value?: string;
}

const elements: FormElement[] = [
  {
    id: 1,
    name: "First Name",
    type: Type.Text,
    label: "First Name",
    placeHolder: "John",
    value: "John",
  },
  {
    id: 2,
    name: "Last Name",
    type: Type.Text,
    label: "Last Name",
    placeHolder: "Doe",
    value: "Doe",
  },
  {
    id: 3,
    name: "Email",
    type: Type.Email,
    label: "Email",
    placeHolder: "johnDoe@mail.com",
    value: "johnDoe@mail.com",
  },
  {
    id: 4,
    name: "Date of Birth",
    type: Type.Date,
    label: "Date of Birth",
    value: "11-08-2025",
  },
];

export const Form = ({ closeFormCB }: { closeFormCB: () => void }) => {
  const [formElements, setFormElements] = useState<FormElement[]>(elements);
  const [newField, setNewField] = useState<string>("");

  const addField = () => {
    setFormElements([
      ...formElements,
      {
        id: Number(new Date()),
        name: newField,
        type: Type.Text,
        label: newField,
        placeHolder: newField,
        value: newField,
      },
    ]);
    setNewField("");
  };

  const removeField = (id: number) => {
    setFormElements(formElements.filter((element) => element.id !== id));
  };

  const clearForm = () => setFormElements([]);

  const saveForm: ReactEventHandler = async (e: FormEvent) => {
    e.preventDefault();
    let forms;
    try {
      forms = await JSON.parse(localStorage.getItem("forms") || "");
    } catch (error) {
      console.log("error: ", error);
      forms = [];
    }
    // const forms = [
    //   { id: 1, title: "form1", elementsForm: [...formElements] },
    //   {
    //     id: 2,
    //     title: "form2",
    //     elementsForm: [
    //       {
    //         id: 1,
    //         name: "First Name",
    //         type: Type.Text,
    //         label: "First Name",
    //         placeHolder: "John",
    //         value: "John",
    //       },
    //       {
    //         id: 2,
    //         name: "Last Name",
    //         type: Type.Text,
    //         label: "Last Name",
    //         placeHolder: "Doe",
    //         value: "Doe",
    //       },
    //     ],
    //   },
    // ];
    const newForms = [
      ...forms,
      {
        id: Number(new Date()),
        title: "demo",
        elementsForm: formElements,
      },
    ];
    localStorage.setItem("forms", JSON.stringify(newForms));
  };

  return (
    <>
      <h1 className="text-3xl font-bold">Form Assignment</h1>
      <div className="bg-white w-[80vh] shadow-lg flex flex-col gap-4">
        <form className="p-2 ">
          {formElements.map((element) => (
            <div className="flex justify-between items-center gap-3">
              <div
                key={element.id + 1}
                className="flex flex-col gap-2 border rounded-md p-2 flex-1"
              >
                <label htmlFor={element.name}>{element.name}</label>
                <input
                  id={element.name}
                  className="border p-2"
                  type={element.type}
                  placeholder={element.placeHolder}
                  name={element.name}
                />
              </div>

              <div>
                <button
                  type="button"
                  className="bg-red-700 text-white px-3 py-2 rounded-lg text-center font-bold"
                  onClick={() => removeField(element.id)}
                >
                  Remove Field
                </button>
              </div>
            </div>
          ))}
          <hr className="mt-2" />

          <div className="flex items-center justify-between gap-3">
            <input
              placeholder="label for new field"
              type="text"
              className="border p-2 flex-1"
              value={newField}
              onChange={(e) => setNewField(e.target.value)}
            />
            <button
              type="button"
              disabled={newField === ""}
              className="bg-blue-700 text-white px-4 py-2 rounded-lg text-center font-bold disabled:bg-gray-500"
              onClick={addField}
            >
              Add Field
            </button>
          </div>

          <div className="flex gap-4 items-center">
            <button
              type="submit"
              className="bg-blue-700 text-white px-4 py-2 rounded-lg mt-4 text-center font-bold"
              onClick={saveForm}
            >
              Save Form
            </button>
            <button
              type="button"
              className="bg-red-700 text-white px-4 py-2 rounded-lg mt-4 text-center font-bold"
              onClick={clearForm}
            >
              Clear Form
            </button>
          </div>
        </form>

        <button
          className="bg-blue-700 text-white px-4 py-2 rounded-lg mt-4 text-center font-bold"
          onClick={closeFormCB}
        >
          Close Form
        </button>
      </div>
    </>
  );
};
