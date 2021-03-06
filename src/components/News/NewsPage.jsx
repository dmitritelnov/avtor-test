import React from "react";
import Layout from "../_General/Layout";
import NewsList from "./List/NewsList";
import { Button, Loading } from "../_General/UI";
import useNews from "./useNews";
import Error from "../_General/Error";

/**
 * @name NewsPage
 * @description Renders /news page
 */
const NewsPage = () => {
  const { newsList, loading, setCurrentPage, gettingMore, error } = useNews();

  const getMoreAction = () => {
    setCurrentPage((prev) => ++prev);
  };

  return (
    <Layout>
      {newsList.length > 0 ? (
        <>
          <NewsList list={newsList} />
          {gettingMore ? (
            loading ? (
              <Loading />
            ) : (
              <Button onClick={getMoreAction}>More</Button>
            )
          ) : null}
        </>
      ) : error ? (
        <Error />
      ) : (
        <Loading />
      )}
    </Layout>
  );
};

export default NewsPage;
