import "./Pages css/404.css";
import fof from "./images/404.png";
const Fourofour = () => {
  return (
    <div className="container">
      <br />
      <h1>404</h1>
      <br />
      <h4>What you are looking for is</h4>
      <h4>not found</h4>
      <img src={fof} alt="404" />
      <div className="h-[4000px]"></div>
    </div>
  );
};
export default Fourofour;
