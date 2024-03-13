import AppList from "src/components/AppList";

import AppLoader from "src/components/AppLoader";
import { useGetDataApi } from "src/hooks/APIHooks";
import ListItem from "./ListItem";
import { UserListProps } from "src/types/models/Apps";

const Modern = () => {
  const [{ apiData: usersList, loading }] =
    useGetDataApi<UserListProps[]>("/api/user/list");
  return (
    <>
      {loading ? (
        <AppLoader />
      ) : (
        <AppList
          data={usersList}
          renderRow={(user) => {
            return <ListItem user={user} key={user.id} />;
          }}
        />
      )}
    </>
  );
};

export default Modern;
