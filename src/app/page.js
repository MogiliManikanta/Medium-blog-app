import { getBlogPostsAction } from "@/actions/blog";
import HomeComponent from "@/components/home";

async function Home() {
  const posts = await getBlogPostsAction();
  return <HomeComponent posts={posts.posts} />;
}
export default Home;
