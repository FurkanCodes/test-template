import { PickerDropPane } from "filestack-react";
import { fileStackKey } from "src/constants/AppConst";
import { PickerFileMetadata } from "filestack-js";

const DNDPicker = () => {
  return (
    <PickerDropPane
      apikey={fileStackKey as string}
      onSuccess={(res: PickerFileMetadata) => console.log(res)}
      onUploadDone={(res: PickerFileMetadata) => console.log(res)}
    />
  );
};

export default DNDPicker;
