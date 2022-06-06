import { useEffect, useState } from "react";

import { useRouter } from "next/router";

const UserDetailPage = () => {
  const { query } = useRouter();
  const { userId } = query;

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

  const [userDetail, setUserDetail] = useState();

  useEffect(() => {
    if (userId) {
      // hit API terjadi di sini
      // Contoh aja
      const getUser = users.find((userItem) => userItem.userId === userId);
      if (getUser) {
        setUserDetail(getUser);
      }
    }
  }, [userId]);

  return (
    <div className="max-w-lg mx-auto min-h-screen ">
      {userDetail && userDetail.userId && (
        <div className="p-3 flex flex-col">
          <div className="border p-3">
            <div>Name : {userDetail.name}</div>
            UserId : {userDetail.userId}
          </div>
        </div>
      )}
    </div>
  );
};

export default UserDetailPage;
