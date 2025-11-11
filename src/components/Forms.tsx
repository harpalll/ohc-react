import { useEffect, useState } from "react";

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

interface Form {
  id: number;
  title: string;
  elementsForm: FormElement[];
}

const Forms = ({ openFormCB }: { openFormCB: () => void }) => {
  const [forms, setForms] = useState<Form[]>([]);
  useEffect(() => {
    try {
      const fetchFormsFromLocalStorage = (): void => {
        const forms = JSON.parse(localStorage.getItem("forms") || "");
        setForms(forms);
      };
      fetchFormsFromLocalStorage();
    } catch (error) {
      console.log("error: ", error);
      setForms([]);
    }
  }, []);
  return (
    <div className="p-2 w-full">
      <h1 className="font-sans font-bold text-3xl p-2">Forms</h1>
      {forms.length === 0 ? (
        <div className="flex flex-col items-center justify-center  h-[50vh]">
          <h1 className="font-sans font-normal text-2xl p-2">
            No Forms Available.
          </h1>
          <button
            className="bg-blue-700 text-white px-4 py-2 rounded-lg mt-4 text-center font-bold"
            onClick={openFormCB}
          >
            Add New Form
          </button>
        </div>
      ) : (
        <table className="md:table-fixed table-auto p-2 w-full">
          <thead>
            <tr>
              <th>Id</th>
              <th>Title</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {forms.map((form) => (
              <tr key={form.id}>
                <td>{form.id}</td>
                <td>{form.title}</td>
                <td>
                  <div className="flex items-center justify-center gap-2">
                    <button
                      type="submit"
                      className="bg-blue-700 text-white px-2 py-2 rounded-lg text-center font-bold text-xs"
                      onClick={openFormCB}
                    >
                      View Form
                    </button>
                    <button
                      type="submit"
                      className="bg-red-700 text-white px-2 py-2 rounded-lg text-center font-bold text-xs"
                    >
                      Delete Form
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Forms;
