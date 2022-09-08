import { useState } from "react";

import "./App.css";
import Card from "./components/Card";

const App = () => {
  const api = "https://api.github.com/users/";
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchUser = async () => {
    setError(null);
    setUser(null);
    try {
      setLoading(true);
      const response = await fetch(`${api}${username}`);
      response.json().then((data) => {
        if (data.message === "Not Found") {
          setError("This user does not exist");
          return;
        }
        setUser(data);
      });
    } catch (error) {
      setError("There was an error");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="w-screen mt-16 h-screen flex justify-center">
      <div className="flex flex-col w-4/5 align-center">
        <form className="w-full min-w-3/5 flex justify-center rounded font-bold">
          <input
            className="p-2 w-60 mr-5 border-1 font-semibold"
            type="text"
            placeholder="username..."
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            className="p-2 bg-blue-600 text-white font-bold rounded w-16 text-center cursor-pointer hover:bg-blue-500 "
            type="button"
            value="Go"
            onClick={fetchUser}
          />
        </form>
        <hr className="w-full mt-4 mb-6" />
        {error && (
          <div className="w-full mt-32 text-center text-xl font-semibold">
            {error}
          </div>
        )}
        {loading && (
          <div className="w-full mt-32 text-center text-xl font-semibold">
            loading...
          </div>
        )}
        {user && <Card className="text-3xl" user={user} />}
      </div>
    </div>
  );
};

export default App;
