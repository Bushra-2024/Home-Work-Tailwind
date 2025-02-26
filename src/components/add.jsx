import { Modal } from "@mui/material";
import { useState } from "react";

const Add = ({ GetData, Api }) => {
  const [name, setName] = useState("");
  const [open, setOpen] = useState(false);

  const addIt = async (e) => {
    e.preventDefault()
    try {
      await fetch(Api, {
        method: "POST", 
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name }), 
      });
      GetData();
      setName("")
      setOpen(false); 
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <button
        onClick={() => setOpen(true)}
        className="bg-amber-700 text-white p-2 rounded-md font-bold hover:bg-amber-800"
      >
        Add +
      </button>

      <Modal open={open}>
        <div className="fixed top-0 bottom-0  left-0 right-0 flex flex-col justify-center items-center w-[300px] h-[200px] m-auto rounded-2xl text-black bg-white">
          <h2 className="font-bold mb-3">Add</h2>
          <form onSubmit={addIt}>
          <input
            type="text"
            placeholder="add new name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className=" mb-3 p-2 border border-gray-400 rounded-md outline-none"
          />
          <div className="flex justify-center gap-0.5">
            <button
              onSubmit={addIt}
              type="submit"
              className="bg-amber-700 font-bold text-white p-2 rounded-md hover:bg-amber-800"
            >
              Save
            </button>
            <button
              onClick={() => setOpen(false)}
              className="bg-amber-700 font-bold text-white p-2 rounded-md hover:bg-amber-800"
            >
              Close
            </button>
          </div>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default Add;
