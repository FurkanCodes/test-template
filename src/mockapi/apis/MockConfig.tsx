import jwtAxios from "src/services/axios";

import MockAdapter from "axios-mock-adapter";

export default new MockAdapter(jwtAxios, { delayResponse: 100 });
