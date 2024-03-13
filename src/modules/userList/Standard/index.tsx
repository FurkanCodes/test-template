import AppList from "src/components/AppList";
import ListItem from "./ListItem";
import AppLoader from "src/components/AppLoader";
import { useGetDataApi } from "src/hooks/APIHooks";
import { UserListProps } from "src/types/models/Apps";

const Standard = () => {
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

export default Standard;
