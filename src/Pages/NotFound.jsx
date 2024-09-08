import { Link } from "react-router-dom";
import notfound from "../assets/undraw_page_not_found_re_e9o6.svg";

const NotFound = () => {
  return (
    <div className="my-10 h-[80vh] flex flex-col items-center justify-center px-4 gap-5">
      <img
        src={notfound}
        alt="not-found-img"
        className="w-full max-w-[300px]"
      />
      <h1 className="heading2">Page not found!</h1>
      <Link to="/">
        <button className="btn-primary h-[40px]">Go to Home</button>
      </Link>
    </div>
  );
};

export default NotFound;
