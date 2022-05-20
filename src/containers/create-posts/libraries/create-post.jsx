import TextCreatePost from "./elements/content-types/text.create-post";
import FilesCreatePost from "./elements/content-types/files.create-post";

const CreatePost = ({ contentType = "text" }) => {
  return (
    <>
      <FilesCreatePost />
    </>
  );
};

export default CreatePost;
