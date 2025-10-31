import { Form } from "./components";
import Layout from "./Layout";

function App() {
  return (
    <Layout>
      <main className="flex items-center justify-center p-2 flex-col gap-4">
        <h1 className="text-3xl font-bold">Form Assignment</h1>
        <Form />
      </main>
    </Layout>
  );
}

export default App;
