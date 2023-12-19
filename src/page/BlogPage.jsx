/* eslint-disable no-unused-vars */
import { Container, Footer, Hero, Input } from "../components";
import { useTheme } from "../theme/useTheme";
import { servicehero, servicehero_light } from "../assets";
import { useEffect, useState } from "react";
import { BlogCard, DateInput } from "../components";
import { getBlogPosts } from "../sanity/sanity-queries";
import { FiSearch } from "react-icons/fi";
import { MdDateRange } from "react-icons/md";
import { BiChevronDown } from "react-icons/bi";
import ReactGA from "react-ga";
import BigCardPost from "../components/premitives/blog-card/BlogCard";

const BlogPage = () => {
  const { isDarkMode } = useTheme();

  const [blogPosts, setBlogPosts] = useState(null);
  const [skip, setSkip] = useState(0);
  let pageSize = 9;

  let totalCount = blogPosts?.totalCount;

  // mine
  useEffect(() => {
    const getPostsQuery = async () => {
      const data = await getBlogPosts(skip, pageSize);
      setBlogPosts(data);
      console.log(data);
    };

    getPostsQuery();
  }, [skip, pageSize]);

  let prevCondition = skip >= pageSize;
  let nextCondition = skip < totalCount && pageSize + skip <= totalCount;

  // mine
  const searchPost = async (str) => {
    try {
      const data = await getBlogPosts(skip, pageSize, str);
      setBlogPosts(data);
    } catch (err) {
      console.error(err);
    }
  };

  // mine
  const handlePagination = (direction) => {
    if (direction === "prev" && prevCondition) {
      setSkip(skip - pageSize);
    } else if (direction === "next" && nextCondition) {
      setSkip(skip + pageSize);
    } else {
      return null;
    }
  };

  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  }, []);

  return (
    <div className="landing-page-sections">
      <Hero
        title="Our Blog"
        text="Stay up to date with our latest updates all in one place"
        image={isDarkMode ? servicehero : servicehero_light}
      />
      <Container>
        <section id="main-blog" className="py-24">
          <div className="container mx-auto">
            <div className="flex flex-col gap-3">
              <p className="text-sm text-hero">
                Showing {`${skip}`}-{blogPosts?.results.length} of {totalCount}{" "}
                results
              </p>
              <div className="flex gap-3 flex-wrap items-center">
                <Input
                  Icon={FiSearch}
                  placeholderText="Search topic"
                  type="text"
                  onChange={searchPost}
                  setBlogPosts={setBlogPosts}
                />
              </div>

              <div className="py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-flow-row-dense">
                {blogPosts?.results?.map((post, index) => {
                  return (
                    <BigCardPost key={post._id} data={post} img={post.image} />
                    // <p>gggg</p>
                  );
                })}
              </div>

              <div className="mt-6 flex items-center gap-8 justify-center ">
                <button
                  disabled={!prevCondition}
                  className={`p-2 px-6 border ${
                    !prevCondition &&
                    "cursor-not-allowed border-gray-600 text-gray-600"
                  } rounded`}
                  onClick={() => handlePagination("prev")}
                >
                  Prev
                </button>

                <button
                  className={`p-2 
             ${
               !nextCondition &&
               "cursor-not-allowed border-gray-600 text-gray-600"
             }
              px-6 border  rounded`}
                  onClick={() => handlePagination("next")}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </Container>
    </div>
  );
};

export default BlogPage;
