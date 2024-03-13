import { portfolioData } from "src/mockapi/fakedb/extraPages";
import PortfolioDetail from "./PortfolioDetail";

const PortFolioPage = () => {
  return <PortfolioDetail portfolioData={portfolioData} />;
};

export default PortFolioPage;
