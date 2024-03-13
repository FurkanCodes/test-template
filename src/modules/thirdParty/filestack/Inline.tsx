import { PickerInline } from "filestack-react";
import { fileStackKey } from "src/constants/AppConst";

const Inline = () => {
  return <PickerInline apikey={fileStackKey} />;
};

export default Inline;
