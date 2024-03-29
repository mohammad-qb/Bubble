import React, { useState, useEffect } from "react";
import Article from "../Article/index";
import AXIOS from "../../utils/axios";

export interface HomeYourFeedInterface {
  children: React.ReactNode;
  image: string;
  title: string;
  body: string;
  tagList: string;
  createdAt: string;
  favorited: boolean;
  favoritesCount: number;
  username: string;
  slug: string;
}

const HomeYourFeed: React.FC = () => {
  const [article, setArticle]: any = useState([]);

  useEffect(() => {
    console.log("bbb");

    AXIOS.get("articles")
      .then((res: any) => {
        setArticle(res.data.articles);
        console.log(res.data.articles);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);

  const articleEL = article.map((el: any) => (
    <Article
      key={el}
      slug={el.slug}
      image={el.author.image}
      title={el.title}
      body={el.body}
      tagList={el.tagList}
      createdAt={el.createdAt}
      favorited={el.favorited}
      favoritesCount={el.favoritesCount}
      username={el.author.username}
    />
  ));

  return <div>{articleEL}</div>;
};

export default HomeYourFeed;
