import Message from "./Message";

const Chatbox = () => {
  const messages = [
    {
      id: 1,
      text: "Hello",
      name: "Obi-Wan Kenobi",
    },
    {
      id: 2,
      text: "Hello There",
      name: "General Kenobi",
    },
    {
      id: 3,
      text: "General Kenobi",
      name: "Obi-Wan Kenobi",
    },
  ];

  return (
    <div className="pb-44 pt-20 containerWrap">
      {messages.map((message) => (
        <Message key={message.id} message={message} />
      ))}
    </div>
  );
};

export default Chatbox;
