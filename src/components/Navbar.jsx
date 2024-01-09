import { UserAuth } from "../context/AuthContext";

const Navbar = () => {
  const { currentUser, logout } = UserAuth();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="navbar bg-base-300">
      <div className="containerWrap flex justify-between">
        <button className="btn btn-ghost text-xl">Chat-Now</button>
        {currentUser ? (
          <button onClick={handleLogout} className="font-semibold">
            Log out
          </button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Navbar;
