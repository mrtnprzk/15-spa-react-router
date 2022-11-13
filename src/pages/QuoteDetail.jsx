import { useEffect } from "react";
import {
  Outlet,
  useParams,
  // Link,
  // Route,
  // Routes,
} from "react-router-dom";
// import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import useHttp from "../hooks/use-http";
import { getSingleQuote } from "../lib/api";

const QuoteDetail = () => {
  const {
    sendRequest,
    status,
    data: loadedQuote,
    error,
  } = useHttp(getSingleQuote, true);
  const { quoteId } = useParams();

  useEffect(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

  if (status === "pending") {
    <div className="centered">
      <LoadingSpinner />
    </div>;
  }

  if (error) {
    <p className="centered focused">{error}</p>;
  }

  if (!loadedQuote?.text) {
    return <p className="centered">No quote Found!</p>;
  }

  return (
    <>
      <HighlightedQuote text={loadedQuote.text} author={loadedQuote.author} />
      <Outlet/>
      {/* <Routes>
        <Route
          path=""
          element={
            <div className="centered">
              <Link className="btn--flat" to="comments">
                Load Comments
              </Link>
            </div>
          }
        />

        <Route path="comments" element={<Comments />} />
      </Routes> */}
    </>
  );
};

export default QuoteDetail;
