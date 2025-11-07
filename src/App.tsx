import { useState } from "react";
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

  // const renderView = () => {
  //   switch (view) {
  //     case views.HOME:
  //       return (
  //         <>
  //           <Home />
  //           <button
  //             className="bg-blue-700 text-white px-4 py-2 rounded-lg mt-4 text-center font-bold"
  //             onClick={() => setView(views.FORM)}
  //           >
  //             Open Form
  //           </button>
  //         </>
  //       );

  //     case views.FORM:
  //       return (
  //         <>
  //           <Form />
  //           <button
  //             onClick={() => setView(views.HOME)}
  //             className="bg-blue-700 text-white px-4 py-2 rounded-lg mt-4 text-center font-bold"
  //           >
  //             Close Form
  //           </button>
  //         </>
  //       );

  //     default:
  //       <div>Hello world</div>;
  //   }
  // };

  return (
    <Layout>
      <main className="flex items-center justify-center p-2 flex-col gap-4">
        {/* {renderView()} */}

        {view === views.HOME && <Home openFormCB={openForm} />}
        {view === views.FORM && <Form closeFormCB={closeForm} />}
      </main>
    </Layout>
  );
}

export default App;
