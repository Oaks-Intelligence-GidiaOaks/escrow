import { useEffect, useState } from "react";
import { BlogBanner, BlogCard, BlogPost, Footer } from "../components";
import { useParams } from "react-router-dom";
import { getBlogPost, getBlogPosts } from "../sanity/sanity-queries";
import ReactGA from "react-ga";

const SingleBlogPage = () => {
  const [blogPost, setBlogPost] = useState(null);
  const [blogPosts, setBlogPosts] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const getPostQuery = async () => {
      const data = await getBlogPost(id);
      const ddata = await getBlogPosts();

      setBlogPost(data);
      setBlogPosts(ddata);
    };

    getPostQuery();
  }, [id]);

  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  }, []);

  return (
    <div>
      {/* banner  */}
      <BlogBanner data={blogPost} />

      {/* main content container */}
      <BlogPost data={blogPost} />

      {/* other blog posts  */}
      <div className="py-24 container mx-auto flex flex-col md:flex-row items-center justify-center gap-3">
        {blogPosts.length > 0 &&
          blogPosts
            ?.slice(0, 4)
            .map((post) => <BlogCard key={post._id} data={post} />)}
      </div>
      <Footer />
    </div>
  );
};

export default SingleBlogPage;
