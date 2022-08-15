//our-domain.com/news/news-id

import { useRouter } from "next/router";

const ReadMore = () => {
  const router = useRouter();

  const newsId = router.query.newsId;

  // send a request to the backend API
  // to fetcg the news item  with newsId

  return <div>{newsId}</div>;
};

export default ReadMore;
