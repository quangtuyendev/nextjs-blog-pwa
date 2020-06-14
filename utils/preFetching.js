import fetch from 'isomorphic-fetch';
import md5 from 'md5';
import NodeCache from 'node-cache';

const myCache = new NodeCache();

export const preFetching = async (key, ttl) => {
  try {
    let result = {};
    const value = myCache.get(md5(key.header.body));
    if (!value) {
      const { data } = await fetch(key.api, key.header).then((res) =>
        res.json(),
      );
      result = data;
      myCache.set(md5(key.header.body), data, ttl);
    } else {
      result = value;
    }
    return result;
  } catch (error) {
    console.log(error);
  }
};
