import React from "react";

function Card({ user }) {
  function formatDate(timestamp) {
    let date = new Date(timestamp);
    const month = date.getMonth() + 1;
    const nDate = date.getDate();
    return `${date.getFullYear()}-${month > 9 ? month : `0${month}`}-${
      nDate > 10 ? nDate : `0${nDate}`
    }`;
  }
  return (
    <div className="font-semibold flex justify-center">
      <div className="border-1 rounded-xl shadow-xl shadow-gray-400 py-12 px-6s relative">
        <div className="img flex justify-center">
          <div className="absolute w-full top-0 rounded-t-xl left-0 h-24 -z-10 bg-blue-600"></div>
          <img
            className="border-2 border-blue-700 rounded-full h-20 shadow-md shadow-blue-600 w-20"
            src={user.avatar_url}
            alt=""
          />
        </div>
        <div className="w-60 text-center mt-4">
          <div className="font-bold text-lg">
            {user.name || "Not provided"}{" "}
          </div>
          <div className="text-sm text-gray-500 mb-4">
            {" "}
            username: {user.login}
          </div>
          <div className="flex justify-evenly mb-4">
            <div>
              {" "}
              {user.public_repos} <br></br> repos{" "}
            </div>
            <div>
              {user.followers}
              <br></br> followers
            </div>
            <div>
              {" "}
              {user.public_gists} <br></br> gists{" "}
            </div>
          </div>

          <div>
            {" "}
            <span className="text-gray-500 text-sm">
              Member since:
            </span> <br /> {formatDate(user.created_at)}{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
