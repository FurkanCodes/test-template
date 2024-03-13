import AppCard from "src/components/AppCard";
import AppScrollbar from "src/components/AppScrollbar";
import AppList from "src/components/AppList";
import TodoCell from "./TodoCell";
import { TodoListType } from "src/types/models/dashboards/CRM";
import IntlMessages from "src/helpers/IntlMessages";

type Props = {
  data: TodoListType[];
};
const ToDoLists = ({ data }: Props) => {
  return (
    <AppCard
      sxStyle={{ height: 1 }}
      title={<IntlMessages id="dashboard.crm.toDoLists" />}
      contentStyle={{ paddingLeft: 0, paddingRight: 0 }}
      action={<IntlMessages id="common.viewAll" />}
    >
      <AppScrollbar style={{ paddingLeft: 20, paddingRight: 20 }}>
        <AppList
          data={data}
          renderRow={(todo) => <TodoCell key={todo.id} todo={todo} />}
        />
      </AppScrollbar>
    </AppCard>
  );
};

export default ToDoLists;
