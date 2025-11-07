import { useEffect, useState } from "react";
import { Form, Home } from "./components";
import Layout from "./Layout";

const views = {
  HOME: "HOME",
  FORM: "FORM",
} as const;

type View = (typeof views)[keyof typeof views];

function App() {
  const [view, setView] = useState<View>(views.HOME);

  const openForm = () => {
    setView(views.FORM);
  };
  const closeForm = () => {
    setView(views.HOME);
  };

  useEffect(() => {
    console.log("rerender - App");
  }, []);

  return (
    <Layout>
      <main className="flex items-center justify-center p-2 flex-col gap-4">
        {view === views.HOME && <Home openFormCB={openForm} />}
        {view === views.FORM && <Form closeFormCB={closeForm} />}
      </main>
    </Layout>
  );
}

export default App;
