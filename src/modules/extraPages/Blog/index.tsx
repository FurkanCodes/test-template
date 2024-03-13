import { useGetDataApi } from "src/hooks/APIHooks";
import AppLoader from "src/components/AppLoader";
import BlogContent from "./BlogContent";

import { BlogType } from "src/types/models/extrapages/Blog";

const Blogs = () => {
  const [{ apiData, loading }] = useGetDataApi<BlogType>("/pages/blogs");

  return (
    <>
      {loading ? (
        <AppLoader />
      ) : (
        <BlogContent
          blogSidebar={apiData.blogSidebar}
          blogContent={apiData.blogContent}
        />
      )}
    </>
  );
};
export default Blogs;
