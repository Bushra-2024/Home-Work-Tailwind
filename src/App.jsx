import { useEffect, useState } from "react";
import "./App.css";
import NightlightRoundOutlinedIcon from "@mui/icons-material/NightlightRoundOutlined";
import DeleteIt from "./components/delete";
import Add from "./components/add";
import Edit from "./components/edit";
import GetByid from "./components/getByid";

function App() {
  const Api = "https://to-dos-api.softclub.tj/api/categories";
  const [data, setData] = useState([]);

  const GetData = async () => {
    try {
      const response = await fetch(Api);
      const res = await response.json();
      setData(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  function handleClick() {
    if (localStorage.theme === "dark" || !("theme" in localStorage)) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    if (localStorage.theme === "dark") {
      localStorage.theme = "light";
    } else {
      localStorage.theme = "dark";
    }
  }

  useEffect(() => {
    handleClick();
    GetData();
  }, []);

  return (
    <div className="bg-white dark:bg-black h-auto p-5">
      <h1 className="font-bold text-[32px] text-center text-black dark:text-white">
        TODO LIST
      </h1>
      <div className="flex justify-center gap-5 my-5">
        <button
          className="bg-amber-700 text-white p-2 rounded-md font-bold"
          onClick={handleClick }
        >
          Dark Mode <NightlightRoundOutlinedIcon />
        </button>
        <Add GetData={GetData} Api={Api} />
      </div>
      <table className="sm:w-[600px]  mx-auto">
        <thead className="bg-gray-100 dark:bg-gray-800 text-white ">
          <tr>
            <th className="bg-amber-700 rounded-l-lg px-4 py-2 text-start">
              #
            </th>
            <th className="bg-amber-700 px-4 py-2 text-start">Name</th>
            <th className="bg-amber-700 rounded-r-lg px-4 py-2 teext-center">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((e) => (
            <tr
              key={e.id}
              className="bg-amber-100 text-black dark:bg-black dark:text-white"
            >
              <td className="border-b border-gray-200 px-4 py-2">{e.id}</td>
              <td className="border-b border-gray-200 px-4 py-2">{e.name}</td>
              <td className="border-b border-gray-200 px-4 py-2 flex justify-evenly items-center">
                <DeleteIt GetData={GetData} Api={Api} id={e.id} />
                <Edit GetData={GetData} Api={Api} id={e.id} name={e.name} />
                <GetByid id={e.id} Api={Api} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
