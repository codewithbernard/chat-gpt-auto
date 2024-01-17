import client from "./lib/sanity";

const run = async () => {
  const res = await client.fetch(
    `
    *[_type == "blogPost" && slug.current == $slug][0] {
      slug,
      category
    }
  `,
    { slug: "chat-gpt-prompts-for-course-creation" }
  );

  console.log(res);
};

run();
