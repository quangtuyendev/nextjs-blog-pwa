import { useEffect, useState } from 'react';
import { GRAPHCMS_API } from '../../constants';
import { COUNT_POST_QUANTITY } from '../../queries/posts';
import { preFetching } from '../../utils/preFetching';

const countPostQuantity = (variables) => ({
  api: GRAPHCMS_API,
  header: {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: COUNT_POST_QUANTITY,
      variables,
    }),
  },
});

function CountQuanTity({ Topic }) {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    const resultPostQuantity = async () => {
      const { articles } = await preFetching(
        countPostQuantity({ Topic }),
        3600,
      );
      setArticles(articles);
    };
    resultPostQuantity();
  }, []);
  return articles ? articles.length : null;
}
export default CountQuanTity;
