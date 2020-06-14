import { GRAPHCMS_API } from '../constants';
import {
  FETCH_POSTS,
  FETCH_TOPIC,
  FILTER_POSTS,
  POST_DETAILS_QUERY,
} from './posts';

export const ARTICLES_KEY = {
  api: GRAPHCMS_API,
  header: {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: FETCH_POSTS,
    }),
  },
};

export const articleKey = (variables) => ({
  api: GRAPHCMS_API,
  header: {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: POST_DETAILS_QUERY,
      variables,
    }),
  },
});

export const ARTICLES_TOPIC_KEY = {
  api: GRAPHCMS_API,
  header: {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: FETCH_TOPIC,
    }),
  },
};

export const filterPost = (variables) => ({
  api: GRAPHCMS_API,
  header: {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: FILTER_POSTS,
      variables,
    }),
  },
});
