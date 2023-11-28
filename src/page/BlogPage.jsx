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

const BlogPage = () => {
  const { isDarkMode } = useTheme();
  const [blogPosts, setBlogPosts] = useState(null);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [sizePerPage, setSizePerPage] = useState(9);

  useEffect(() => {
    const getPosts = async () => {
      const data = await getBlogPosts(null, page, sizePerPage);
      console.log(data);
      setBlogPosts(data);
      setTotal(data?.length);
    };

    getPosts();
  }, []);

  const searchPost = async (str) => {
    try {
      const data = await getBlogPosts(str);
      console.log(data);
      setBlogPosts(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    const offset = (page - 1) * sizePerPage;
  });

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
                Showing 1-4 of {total} results
              </p>
              <div className="flex gap-3 flex-wrap items-center">
                <Input
                  Icon={FiSearch}
                  placeholderText="Search topic"
                  type="text"
                  onChange={searchPost}
                  setBlogPosts={setBlogPosts}
                />
                {/* <DateInput Icon={MdDateRange} />

                <div className="flex-1" />
                <Input
                  Icon={BiChevronDown}
                  type="dropdown"
                  placeholderText="Categories"
                /> */}
                {/* <CustomInput
              Icon={BiChevronDown}
              type="dropdown"
              placeholderText="Author"
            /> */}
                {/* <Input
                  Icon={BiChevronDown}
                  type="dropdown"
                  placeholderText="Tags"
                /> */}
              </div>

              <div className="py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-flow-row-dense">
                {blogPosts?.map((post) => {
                  return <BlogCard key={post._id} data={post} />;
                })}
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
