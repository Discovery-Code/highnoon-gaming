import { LatestNewsContainer, NewsContainer } from "./latestNewsStyles";
import Image from "next/image";

const LatestNews = () => {
  return (
    <LatestNewsContainer>
      <NewsContainer>
        <div className="latest-news--heading">
          <p>latest news</p>
        </div>
        <div className="news-grid">
          <div className="grid-box-1 grid-box">
            <Image
              className="image"
              src="/imgs/fnatic.jpg"
              alt=""
              layout="fill"
            ></Image>
            <div className="grid-box-1--readmore"></div>
          </div>
          <div className="grid-box-2 grid-box">
            <Image
              className="image"
              src="/imgs/news-1.jpg"
              alt=""
              layout="fill"
            ></Image>
          </div>
          <div className="grid-box-3 grid-box">
            <Image
              className="image"
              src="/imgs/news-2.jpg"
              alt=""
              layout="fill"
            ></Image>
          </div>
          <div className="grid-box-4 grid-box">
            <Image
              className="image"
              src="/imgs/news-3.jpg"
              alt=""
              layout="fill"
            ></Image>
          </div>
          <div className="grid-box-5 grid-box">
            <Image
              className="image"
              src="/imgs/news-4.jpg"
              alt=""
              layout="fill"
            ></Image>
          </div>
        </div>
      </NewsContainer>
    </LatestNewsContainer>
  );
};

export default LatestNews;
