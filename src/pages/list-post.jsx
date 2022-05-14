import { useEffect, useState } from "react";
import { useListPostDispatcher } from "../redux/reducers/list-post";

const Modal = ({ post }) => {
  return (
    <div className="fixed w-full left-0 bottom-0">
      <div className="mx-auto max-w-lg border py-3">
        <div className="font-bold 2xl">{post.title}</div>
        <div>{post.caption}</div>
      </div>
    </div>
  );
};

const ListPostPage = () => {
  const [singlePost, setSinglePost] = useState();

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
              <button
                type="button"
                onClick={() => setSinglePost(postItem.attributes)}
              >
                edit
              </button>
            </div>
          </div>
        </div>
      ))
    );
  };

  return (
    <div className="max-w-lg min-h-screen pt-6 pb-8 mx-auto">
      <div className="flex flex-col w-full space-y-3">{renderPostItems()}</div>
      {singlePost && singlePost.title && <Modal post={singlePost} />}
      {/* {JSON.stringify(singlePost)} */}
    </div>
  );
};

export default ListPostPage;
