import { useRouter } from "next/router";

function Blog() {
  const router = useRouter();

  console.log(router.pathname, router.query);

  return <div>blog</div>;
}

export default Blog;
