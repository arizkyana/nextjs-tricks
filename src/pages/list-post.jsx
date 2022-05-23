import { useEffect, useState } from "react";
import { HeartIcon as UnlikeIcon } from "@heroicons/react/outline";
import { HeartIcon as LikeIcon } from "@heroicons/react/solid";
import { useListPostDispatcher } from "../redux/reducers/list-post";
import { useMemo } from "react";

const LikeButtons = ({ post }) => {
  const { loadPosts } = useListPostDispatcher();
  const [isLike, setIsLike] = useState(false);

  const singlePost = useMemo(() => {
    if (post) {
      return {
        ...post,
        isLike,
      };
    }
    return {};
  }, [post, isLike]);

  const updateLike = async () => {
    setIsLike(!isLike);
    // await doUpdatePost();
    // reload new list
    await loadPosts();
  };

  return (
    <>
      <button type="button" onClick={() => updateLike()}>
        {singlePost.isLike ? (
          <UnlikeIcon className="w-6 h-6" />
        ) : (
          <LikeIcon className="w-6 h-6" />
        )}
      </button>
    </>
  );
};

const Modal = ({ post }) => {
  const { loadPosts } = useListPostDispatcher();

  const onSubmit = () => loadPosts();

  return (
    <div className="fixed w-full left-0 bottom-0">
      <div className="mx-auto max-w-lg border py-3 flex justify-between p-3 bg-white">
        <div>
          <div className="font-bold 2xl">{post.title}</div>
          <div>{post.caption}</div>
        </div>
        <div>
          <button
            onClick={() => onSubmit()}
            type="button"
            className="border border-gray-700 p-2"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

const ListPostPage = () => {
  const [singlePost, setSinglePost] = useState();

  const {
    listPost: { posts, loading },
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
          <div className="flex justify-end items-center mt-3">
            <LikeButtons post={postItem} />
          </div>
        </div>
      ))
    );
  };

  return (
    <div className="max-w-lg min-h-screen pt-6 pb-8 mx-auto">
      {loading && <div>Loading ...</div>}
      <div className="flex flex-col w-full space-y-3">{renderPostItems()}</div>
      {singlePost && singlePost.title && <Modal post={singlePost} />}
      {/* {JSON.stringify(singlePost)} */}
    </div>
  );
};

export default ListPostPage;
