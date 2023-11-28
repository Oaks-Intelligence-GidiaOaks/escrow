/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { useTheme } from "../../../theme/useTheme";

const BigCardPost = ({ data }) => {
  const { isDarkMode } = useTheme();
  const cardStyle = {
    background: `${
      isDarkMode
        ? `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.2)) ,url(${data?.image})`
        : `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)) ,url(${data?.image})`
    }`,
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };

  const date = new Date(data?._createdAt);

  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");

  const formattedDate = `${year}-${month}-${day}`;

  return (
    <Link to={`/blog/${data?.slug}`}>
      <div
        style={cardStyle}
        className="relative m-2 my-1 rounded-[20px] min-w-[20rem] h-[20rem]"
      >
        <div className="absolute text-sm bottom-4 left-4">
          <h4 className="capitalize">{data?.tag}</h4>

          <h6>{formattedDate} · 9 min read</h6>

          <h3 className="font-[500] capitalize mt-1 text-base">
            {data?.title}
          </h3>
        </div>
      </div>
    </Link>
  );
};

export default BigCardPost;
