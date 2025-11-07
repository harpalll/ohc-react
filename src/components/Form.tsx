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
}

const elements: FormElement[] = [
  {
    id: 1,
    name: "First Name",
    type: Type.Text,
    label: "First Name",
    placeHolder: "John",
  },
  {
    id: 2,
    name: "Last Name",
    type: Type.Text,
    label: "Last Name",
    placeHolder: "Doe",
  },
  {
    id: 3,
    name: "Email",
    type: Type.Email,
    label: "Email",
    placeHolder: "johnDoe@mail.com",
  },
  {
    id: 4,
    name: "Date of Birth",
    type: Type.Date,
    label: "Date of Birth",
  },
];

export const Form = ({ closeFormCB }: { closeFormCB: () => void }) => {
  return (
    <>
      <h1 className="text-3xl font-bold">Form Assignment</h1>
      <div className="bg-white w-[80vh] shadow-lg flex flex-col gap-4">
        <form className="p-2">
          {elements.map((element) => (
            <div
              key={element.id}
              className="flex flex-col gap-2 border rounded-md p-2"
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
          ))}
          <button
            type="submit"
            className="bg-blue-700 text-white px-4 py-2 rounded-lg mt-4 text-center font-bold"
          >
            Submit
          </button>
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
