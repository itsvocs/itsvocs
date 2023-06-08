import RSS from "rss";
import getPostMetadata from "./getPostMetadata";
import fs from "fs";

export default async function generateRssFeed() {
  //  const site_url = process.env.DOMAIN;
  const site_url = process.env.DOMAIN || "itsvocs.com";

  const postMetadata = getPostMetadata();

  const feedOptions = {
    title: "Blog posts | RSS Feed",
    description: "Welcome to this blog posts!",
    site_url: site_url,
    feed_url: `${site_url}/rss.xml`,
    image_url: `${site_url}/logo.png`,
    pubDate: new Date(),
    copyright: `Tous les droits réservés ${new Date().getFullYear()}, Pouani Vocs`,
  };

  const feed = new RSS(feedOptions);

  postMetadata.map((post) => {
    feed.item({
      title: post.title,
      description: post.subtitle,
      url: `${site_url}/blog/${post.slug}`,
      date: post.date,
    });
  });

  fs.writeFileSync("./public/rss.xml", feed.xml({ indent: true }));
}
