import ReviewItem from "./ReviewItem";
import AppList from "src/components/AppList";
import AppCard from "src/components/AppCard";
import { useIntl } from "react-intl";
import AppScrollbar from "src/components/AppScrollbar";
import { ReviewsListType } from "src/types/models/dashboards/Widgets";

type ReviewsProps = {
  data: ReviewsListType[];
};

const Reviews: React.FC<ReviewsProps> = ({ data }) => {
  const { messages } = useIntl();

  return (
    <AppCard
      sxStyle={{ height: 1 }}
      title={messages["common.reviews"] as string}
      contentStyle={{ px: 0 }}
    >
      <AppScrollbar
        sx={{
          height: { xs: 362, xl: 316 },
        }}
      >
        <AppList
          data={data}
          renderRow={(item) => {
            return <ReviewItem key={item.id} item={item} />;
          }}
        />
      </AppScrollbar>
    </AppCard>
  );
};

export default Reviews;
