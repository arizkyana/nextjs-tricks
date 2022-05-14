import { useEffect } from "react";
import { useListPostDispatcher } from "../redux/reducers/list-post";

const ListPostPage = () => {
  const {
    listPost: { posts },
    loadPosts,
  } = useListPostDispatcher();

  useEffect(() => {
    loadPosts();
  }, []);

  const renderPostItems = () => {
    return (
      posts &&
      posts.length > 0 &&
      posts.map((postItem) => (
        <div className="border p-3">
          <div className="flex justify-between w-full">
            <div className="font-bold">{postItem.attributes.title}</div>
            <div className="">
              <button type="button">edit</button>
            </div>
          </div>
        </div>
      ))
    );
  };

  return (
    <div className="max-w-lg min-h-screen pt-6 pb-8 mx-auto">
      <div className="flex flex-col w-full space-y-3">{renderPostItems()}</div>
    </div>
  );
};

export default ListPostPage;
