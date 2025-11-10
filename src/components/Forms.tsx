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
    const fetchFormsFromLocalStorage = (): void => {
      const forms = JSON.parse(localStorage.getItem("forms") || "");
      setForms(forms);
    };
    fetchFormsFromLocalStorage();
  }, []);
  return (
    <div className="p-2 w-full">
      <h1 className="font-sans font-bold text-3xl p-2">Forms</h1>
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
    </div>
  );
};

export default Forms;
