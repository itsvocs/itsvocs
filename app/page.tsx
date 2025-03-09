import Container from "./ui/container";
import Latestpost from "./ui/home/latest-post";
import PopularPosts from "./ui/home/popular-posts";
import TopCatogories from "./ui/home/top-category";

export default function Home() {
  return (
    <Container>
      <main className="flex flex-col items-start justify-evenly mt-16 md:flex-row">
        <div>
          <Latestpost />
        </div>
        <div className="h-screen">
          <div>
            <h1 className="font-bold mb-4">TOP CATEGORIES</h1>
            <TopCatogories />
          </div>
          <div className="mt-10 sticky top-0">
            <h1 className="font-bold mb-4">POPULAR POSTS</h1>
            <PopularPosts />
          </div>
        </div>
      </main>
    </Container>
  );
}
