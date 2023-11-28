import { createClient } from "@sanity/client";

const clientConfig = {
  projectId: "uismb98i",
  dataset: "production",
  apiVersion: "2023-11-02",
  useCdn: false,
};

export const getBlogPosts = async (searchTitle, page = 1, sizePerPage = 9) => {
  const client = createClient(clientConfig);

  let query = `*[_type=="post"] | order(_createdAt)`;

  if (searchTitle) {
    query = `*[_type=="post" && title match "${searchTitle}"] | order(_createdAt)`;
  }

  const offset = (page - 1) * sizePerPage;

  query += `[${offset}..${offset + sizePerPage - 1}]`;

  return client.fetch(`${query} {
    _id,
    title,
    content,
    "image": image.asset->url,
    "slug": slug.current,
    tag,
    _createdAt,
    author,
    "authorImg": authorImg.asset->url,
    position,
  }`);
};

export const getBlogPost = async (slug) => {
  const client = createClient(clientConfig);

  console.log("slug", slug);

  const query = `*[_type=="post" && slug.current == $slug ] [0] {
    _id,
    title,
    content,
    "image": image.asset->url,
    "slug": slug.current,
    tag,
    _createdAt,
    author,
    "authorImg": authorImg.asset->url,
    position,
  }`;

  return client.fetch(query, { slug });
};

export const getTestimonials = async () => {
  const client = createClient(clientConfig);

  const query = `*[_type=="testimonials"] |order(_createdAt desc) {
    _id,
    name,
    content,
    "userImage": userImage.asset->url,
    testPosition,
  }`;

  return client.fetch(query);
};

export const addFormData = async (data) => {
  const client = createClient(clientConfig);
  try {
    const res = await client.create(data);

    console.log(res, "data created succesfully...");
  } catch (err) {
    console.error(`Error occurred: `, err);
  }
};
