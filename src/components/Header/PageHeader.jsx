import SelectedHotels from "./SelectedHotels";
import "./styleHeader.scss";

const PageHeader = () => {
  return (
    <div className="header">
      <h1 className="header__heading">Find hotel</h1>
      <SelectedHotels />
    </div>
  );
};

export default PageHeader;
