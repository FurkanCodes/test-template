import AppList from "src/components/AppList";
import ListItem from "./ListItem";
import AppLoader from "src/components/AppLoader";
import { useGetDataApi } from "src/hooks/APIHooks";

const Flat = () => {
  const [{ apiData: usersList, loading }] = useGetDataApi("/api/user/list", []);
  return (
    <>
      {loading ? (
        <AppLoader />
      ) : (
        <AppList
          onEndReached={() => console.log("onEndReached")}
          data={usersList}
          renderRow={(user) => {
            return <ListItem user={user} key={user.id} />;
          }}
        />
      )}
    </>
  );
};

export default Flat;
