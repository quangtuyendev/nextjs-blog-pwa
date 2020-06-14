export const FETCH_POSTS = `
  query {
    articles {
      Title
      createdAt
      Teaser
      _id
      Photo {
        url
      }
      article_topics {
        Topic
      }
    }
  }
`;

export const POST_DETAILS_QUERY = `
  query PostDetails($id: ID!) {
    article(id: $id) {
      Title
      Teaser
      createdAt
      Photo {
        url
      }
      article_topics {
        Topic
      }
      Items {
        ... on ComponentArticleText {
          Content
        }
        ... on ComponentArticleQuote {
          Content
        }
        ... on ComponentArticlePhotoComponent {
          Photo {
            url
          }
          Description
        }
      }
    }
  }
`;

export const FILTER_POSTS = `
  query FilterPosts($Slug: String!) {
    articles(where: { article_topics: { Slug: $Slug } }) {
      Title
      createdAt
      Teaser
      _id
      Photo {
        url
      }
      article_topics {
        Topic
      }
    }
  }
`;

export const FETCH_TOPIC = `
  query {
    articleTopics {
      Topic
      Slug
    }
  }
`;

export const COUNT_POST_QUANTITY = `
  query CountPost($Topic: String!) {
    articles(where: { article_topics: { Topic: $Topic } }) {
      Title
    }
  }
`;
