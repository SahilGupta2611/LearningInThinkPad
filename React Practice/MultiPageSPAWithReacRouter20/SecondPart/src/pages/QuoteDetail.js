import React, { useEffect } from "react";
import { useParams, Route, Link, useRouteMatch } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import useHttp from "../hooks/use-http";
import { getSingleQuote } from "../lib/api";

function QuoteDetail(props) {
  const {
    sendRequest,
    status,
    data: loadedQuote,
    error,
  } = useHttp(getSingleQuote, true);

  const match = useRouteMatch();
  const params = useParams();

  const { quoteId } = params;

  useEffect(() => {
    sendRequest(quoteId);
  }, [sendRequest]);

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }
  if (error) {
    return <p className="centered"> {error}</p>;
  }
  if (!loadedQuote.text) {
    return <p className="centered">No Quote Found...</p>;
  }
  console.log(loadedQuote);
  console.log(match.path); //=> /Quotes/:quoteId
  console.log(match.url); //=> /Quotes/q2

  return (
    <>
      <HighlightedQuote text={loadedQuote.text} author={loadedQuote.author} />

      <Route path={match.path} exact>
        <div className="centered">
          <Link className="btn--flat" to={`${match.url}/Comments`}>
            Load Comments
          </Link>
        </div>
      </Route>

      {/* Below Commented will also works */}
      {/* <Route path="/Quotes/:quoteId/comments">
        <Comments />
      </Route> */}

      <Route path={`${match.path}/Comments`}>
        <Comments />
      </Route>
    </>
  );
}

export default QuoteDetail;
