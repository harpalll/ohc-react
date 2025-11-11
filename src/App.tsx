import { useEffect, useState } from "react";
import { Form, Forms, Home } from "./components";
import Layout from "./Layout";

const views = {
  HOME: "HOME",
  FORM: "FORM",
  FORMS: "FORMS",
} as const;

type View = (typeof views)[keyof typeof views];

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

  return (
    <Layout>
      <main className="flex items-center justify-center p-2 flex-col gap-4">
        {view === views.HOME && <Home openFormsCB={openForms} />}
        {view === views.FORM && <Form closeFormCB={closeForm} />}
        {view === views.FORMS && <Forms openFormCB={openForm} />}
      </main>
    </Layout>
  );
}

export default App;
