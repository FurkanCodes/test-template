import React, { useEffect } from 'react';
import { useGetDataApi } from 'src/hooks/APIHooks';
import AppLoader from 'src/components/AppLoader';
import BlogDetail from './BlogDetail';
import { useParams } from 'react-router-dom';
import { isEmptyObject } from 'src/helpers/ApiHelper';
import type {
  BlogDetailType,
  BlogSidebarType,
} from 'src/types/models/extrapages/Blog';

const BlogDetailPage = () => {
  const { id } = useParams();
  const [{ apiData, loading }, { setQueryParams }] = useGetDataApi<
    | {
        blogDetail: BlogDetailType;
        blogSidebar: BlogSidebarType;
      }
    | undefined
  >('/pages/blogs/detail', undefined, { id: id }, false);

  useEffect(() => {
    setQueryParams({ id: id });
  }, [id]);

  return loading ? (
    <AppLoader />
  ) : (
    (!isEmptyObject(apiData?.blogDetail) && (
      <BlogDetail
        blogSidebar={apiData?.blogSidebar}
        blogDetail={apiData?.blogDetail}
      />
    )) ||
      null
  );
};
export default BlogDetailPage;
