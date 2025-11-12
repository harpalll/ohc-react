export const Home = ({
  openFormCB,
  openFormsCB,
}: {
  openFormCB: () => void;
  openFormsCB: () => void;
}) => {
  return (
    <>
      <h1 className="text-3xl font-bold p-2">Home</h1>
      <div className="bg-white w-[80vh] shadow-lg p-2">
        <p>hello world</p>
      </div>

      <div className="flex gap-2">
        <button
          className="bg-blue-700 text-white px-4 py-2 rounded-lg mt-4 text-center font-bold"
          onClick={openFormCB}
        >
          Add Form
        </button>
        <button
          className="bg-blue-700 text-white px-4 py-2 rounded-lg mt-4 text-center font-bold"
          onClick={openFormsCB}
        >
          Open Forms
        </button>
      </div>
    </>
  );
};
