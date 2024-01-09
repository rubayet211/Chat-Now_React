import { useState } from "react";

const SendMessage = () => {
  const [value, setvalue] = useState("");

  const handleValueChange = (e) => {
    setvalue(e.target.value);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    console.log(value);
    setvalue("");
  };

  return (
    <div className="bg-gray-300 fixed bottom-0 w-full py-10 shadow-lg">
      <form onSubmit={handleSendMessage} className="px-2 containerWrap flex">
        <input
          type="text"
          className="input w-full focus:outline-none bg-gray-100 rounded-r-none"
          value={value}
          onChange={handleValueChange}
        />
        <button
          type="submit"
          className="w-auto bg-gray-500 text-white rounded-r-lg px-5 text-sm"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default SendMessage;
