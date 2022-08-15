// our-domain.com

import { Fragment } from "react";
import Link from "next/link";

const NewsHome = () => {
  return (
    <Fragment>
      <ul>
        <li>
          <Link href="/news/testing">hello</Link>
        </li>
        <li>
          <Link href="/news/testtest">hello again</Link>
        </li>
      </ul>
    </Fragment>
  );
};

export default NewsHome;
