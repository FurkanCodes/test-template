import { Box, Typography } from "@mui/material";
import { Fonts } from "src/constants/AppEnums";
import { CardDetailType } from "src/types/models/dashboards/Crypto";

type Props = {
  cardDetail: CardDetailType;
};
const CardDetailItem = ({ cardDetail }: Props) => {
  return (
    <Box
      sx={{
        position: "relative",
      }}
    >
      <Typography
        component="h5"
        sx={{
          color: "text.secondary",
        }}
      >
        {cardDetail.title}
      </Typography>
      <Typography
        sx={{
          fontWeight: Fonts.MEDIUM,
        }}
      >
        {cardDetail.name}
      </Typography>
    </Box>
  );
};

export default CardDetailItem;
