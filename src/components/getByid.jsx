import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import { Modal } from "@mui/material";
import { useEffect, useState } from "react";

const GetByid = ({ id, Api }) => {
  const [data, setData] = useState({});
  const [open, setOpen] = useState(false);
  const getById = async () => {
    try {
      const data = await fetch(`${Api}/${id}`, { method: "GET" });
      const res = await data.json();
      setData(res.data);
      console.log(res.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getById();
  }, [id]);

  return (
    <div>
      <button
        onClick={() => {
          setOpen(true), getById();
        }}
      >
        <VisibilityOutlinedIcon className="text-amber-700" />
      </button>
      <Modal open={open} className="flex items-center justify-center">
        <div className="fixed top-0 bottom-0 left-0 right-0 flex flex-col items-start m-auto w-[420px] h-[220px] bg-white shadow-lg rounded-2xl p-6">
          <div className="flex items-start gap-4 text-xl w-full mt-5">
            <span className="font-bold text-black">Name:</span>
            <h3 className="font-semibold text-gray-800">{data.name}</h3>
          </div>
          <div className="flex items-start gap-4 text-xl w-full">
            <span className="font-bold text-black">Id:</span>
            <p className="text-gray-800">{data.id}</p>
          </div>
          <button
            onClick={() => setOpen(false)}
            className="mt-4 bg-amber-700 font-bold text-white px-4 py-2 rounded-md hover:bg-amber-800 transition"
          >
            Close
          </button>
        </div>
      </Modal>
    </div>
  );
};
export default GetByid;
