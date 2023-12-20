import { createClient } from "@sanity/client";

const clientConfig = {
  projectId: "xymdbyrp",
  dataset: "production",
  apiVersion: "2023-11-02",
  useCdn: false,
};

// export const getBlogPosts = async (searchTitle, page = 1, pageSize = 9) => {
//   const client = createClient(clientConfig);

//   let query = `*[_type=="post"] | order(_createdAt)`;

//   if (searchTitle) {
//     query = `*[_type=="post" && title match "${searchTitle}"] | order(_createdAt)`;
//   }

//   const offset = (page - 1) * pageSize;

//   query += `[${offset}..${offset + pageSize - 1}]`;

//   return client.fetch(`${query} {
//     _id,
//     title,
//     content,
//     "image": image.asset->url,
//     "slug": slug.current,
//     tag,
//     _createdAt,
//     author,
//     "authorImg": authorImg.asset->url,
//     position,
//   }`);
// };

// mine
export const getBlogPosts = async (skip, pageSize) => {
  const client = createClient(clientConfig);

  const query = `{
    "results": *[_type=="post"] [${skip}...${
    skip + pageSize
  }] | order(_createdAt) {
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
  },
  "totalCount": count(*[_type =="post"])
}`;

  return client.fetch(query);
};

// mine
export const searchBlogPosts = async (searchTerm) => {
  const query = `
  {"results": *[_type=="post" && title match "${searchTerm}"] | order(_createdAt),
  "totalCount": count(*[_type =="post" && title match "${searchTerm}"])
}`;
  return client.fetch(query);
};

export const getBlogPost = async (slug) => {
  const client = createClient(clientConfig);

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
