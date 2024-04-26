
const Delete = ({closeW}) => {

   

    return (
        <button onClick={closeW}  className="text-[20px] border border-black text-red-500 rounded-lg py-2 px-4 bg-slate-200 hover:opacity-70 ">
            <i className="fa-solid fa-trash-can text-[20px] text-red-500 pr-2 "></i>
            Delete
        </button>
    );
};

export default Delete;
