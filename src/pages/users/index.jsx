// const { useRouter } = require("next/router");
import { useRouter } from "next/router";

const UserPage = () => {
  const { push } = useRouter();
  const users = [
    {
      userId: "1",
      name: "Rafly",
    },
    {
      userId: "2",
      name: "Dekka",
    },
  ];

  const goToDetail = (userId) => push(`/users/${userId}`);

  return (
    <div className="max-w-lg mx-auto min-h-screen ">
      <div className="p-3 flex flex-col">
        {users &&
          users.length > 0 &&
          users.map((userItem) => (
            <button
              type="button"
              className="border p-3 rounded-full mb-3"
              onClick={() => goToDetail(userItem.userId)}
            >
              Name : {userItem.name}
            </button>
          ))}
      </div>
    </div>
  );
};

export default UserPage;
