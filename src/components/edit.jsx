import { Modal } from "@mui/material"
import { useState } from "react"
import EditNoteOutlinedIcon from '@mui/icons-material/EditNoteOutlined';
const Edit = ({GetData,Api,name,id}) => {
    const [openEdit,setOpenEdit] = useState(false)
    const [editName,setEditName] = useState(name)
    const editIt = async(e) => {
      e.preventDefault()
        try {
        await fetch(Api,{
            method:"PUT",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({id,name:editName})
        })
        setOpenEdit(false)
        GetData()
        } catch (error) {
            console.error(error);
        }
    }

  return (
   <>
     <button onClick={() => setOpenEdit(true)}><EditNoteOutlinedIcon className="text-amber-700 hover:text-amber-800"/></button>
     <Modal open={openEdit} >
        <div className="fixed top-0 bottom-0 left-0 right-0 flex flex-col justify-center items-center w-[300px] h-[200px] text-black bg-white m-auto rounded-2xl">
          <h2 className="font-bold mb-3 text-[20px] text-left">Editing</h2>
          <form onSubmit={editIt}>
          <input
            type="text"
            placeholder="add new name"
            value={editName}
            onChange={(e) => setEditName(e.target.value)}
            className=" mb-3 p-2 border border-gray-400 rounded-md outline-none hover:"
          />
          <div className="flex justify-center gap-0.5">
            <button
            type="submit"
            onSubmit={editIt}   
            className="bg-amber-700 font-bold text-white p-2 rounded-md hover:bg-amber-800"
            >
              Save
            </button>
            <button
              onClick={() => setOpenEdit(false)}
              className="bg-amber-700 font-bold text-white p-2 rounded-md hover:bg-amber-800"
            >
              Close
            </button>
          </div>
          </form>
        </div>
      </Modal>
   </>
  )
}

export default Edit