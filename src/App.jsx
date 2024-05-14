import { useState, useEffect, useRef } from "react";
import Dialog from "./components/Dialog";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [userData, setUserData] = useState({});
  const [page, setPage] = useState(1);
  const [size, setSize] = useState(10);

  const dialogRef = useRef(null);

  async function fetchData() {
    const response = await fetch(
      `https://hiring-api.simbuka.workers.dev/?page=${page}&size=${size}`
    );
    const data = await response.json();
    setData(data);
  }

  useEffect(() => {
    fetchData();
  }, [size, page]);

  function toggleDialog() {
    if (!dialogRef.current) return;
    dialogRef.current.hasAttribute("open")
      ? dialogRef.current.close()
      : dialogRef.current.show();
  }

  return (
    <main className="flex flex-col items-start min-h-screen max-w-[1400px] w-full gap-4">
      <table className="w-1/2 shadow-xl mx-auto">
        <thead>
          <tr className=" bg-gray-100 text-[#6c2369]">
            <th scope="col" className="p-3 rounded-l-lg font-medium">
              First name
            </th>
            <th scope="col" className="p-3 font-medium">
              Last name
            </th>
            <th className="p-3 rounded-r-lg"></th>
          </tr>
        </thead>
        <tbody>
          {data.map((el, i) => (
            <tr className="" key={i}>
              <td className="slimBorder rounded-t-lg p-2 rounded-xl">
                {el.firstName}
              </td>
              <td className="slimBorder p-2">{el.lastName}</td>
              <td className="slimBorder rounded-t-lg p-2 rounded-xl">
                <button
                  className="p-1 active:scale-95"
                  onClick={() => {
                    setUserData(el);
                    toggleDialog();
                  }}
                >
                  More information
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex items-center justify-center gap-2 mx-auto">
        <button
          className="slimBorder pageButton active:scale-95"
          onClick={() => {
            if (page === 1) return;
            setPage((page) => (page -= 1));
          }}
        >
          Previous
        </button>
        <button
          className="slimBorder pageButton active:scale-95"
          onClick={() => {
            setPage((page) => (page += 1));
          }}
        >
          Next
        </button>
        <select
          defaultValue={size}
          className="slimBorder pageButton"
          name=""
          id=""
          onChange={(e) => {
            // sets the selected option value to state
            setSize(e.target.value);
          }}
        >
          <option value={15}>15</option>
          <option value={10}>10</option>
          <option value={5}>5</option>
        </select>
      </div>
      <Dialog
        dialogData={userData}
        toggleDialog={toggleDialog}
        ref={dialogRef}
      />
    </main>
  );
}

export default App;
