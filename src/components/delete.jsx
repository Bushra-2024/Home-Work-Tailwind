import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";
const DeleteIt = ({ GetData, Api, id }) => {
  const deleteUser = async () => {
    try {
      await fetch(`${Api}?id=${id}`, { method: "DELETE" });
      GetData();
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <button onClick={deleteUser}>
      <DeleteOutlineRoundedIcon className="text-amber-700  hover:text-amber-800" />
      </button>
    </div>
  );
};

export default DeleteIt;
