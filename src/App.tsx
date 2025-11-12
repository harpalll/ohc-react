import { useEffect, useState } from "react";
import { Form, FormLS, Forms, Home } from "./components";
import Layout from "./Layout";

const views = {
  HOME: "HOME",
  FORM: "FORM",
  FORMS: "FORMS",
  FORMLS: "FORMLS",
} as const;

type View = (typeof views)[keyof typeof views];
let formId: number;

function App() {
  const [view, setView] = useState<View>(views.HOME);

  const openForm = () => {
    setView(views.FORM);
  };

  const openForms = () => {
    setView(views.FORMS);
  };

  const closeForm = () => {
    setView(views.HOME);
  };

  const openFormLS = (id: number) => {
    // console.log("formid", id);
    formId = id;
    setView(views.FORMLS);
  };

  return (
    <Layout>
      <main className="flex items-center justify-center p-2 flex-col gap-4">
        {view === views.HOME && (
          <Home openFormCB={openForm} openFormsCB={openForms} />
        )}
        {view === views.FORM && <Form closeFormCB={closeForm} />}
        {view === views.FORMS && (
          <Forms openFormLSCB={openFormLS} openFormCB={openForm} />
        )}
        {view === views.FORMLS && (
          <FormLS id={formId} closeFormCB={closeForm} />
        )}
      </main>
    </Layout>
  );
}

export default App;
