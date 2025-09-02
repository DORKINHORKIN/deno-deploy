export function fetchPosts() {
  return [
    {
      id: 1,
      title: "First Post",
      content: "This is the content of the first post.",
    },
    {
      id: 2,
      title: "Second Post",
      content: "This is the content of the second post.",
    },
  ];
}

// import matter from "https://esm.sh/gray-matter@4.0.3";

// export async function fetchPosts() {
//   const res = await fetch(
//     "https://api.github.com/repos/dorkinhorkin/deno-deploy/shared/posts/"
//   );
//   const files : any[] = await res.json();

//   const posts = await Promise.all(
//     files.map(async (file: any) => {
//       try {
//         const contentRes = await fetch(file.download_url);
//         const markdown = await contentRes.text();
//         const { data, content } = matter(markdown);
//         return { ...data, content };
//       } catch (error) {
//         console.error("Error fetching or parsing markdown:", error);
//         return null;
//       }
//     })
//   );

//   return posts.filter(Boolean);
// }
