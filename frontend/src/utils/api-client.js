// This fetch wrapper is based in: https://github.com/kentcdodds/bookshelf

async function client(endpoint, { body, ...customConfig } = {}) {
  const headers = { "Content-Type": "application/json" };

  const config = {
    method: body ? "POST" : "GET",
    ...customConfig,
    headers: {
      ...headers,
      ...customConfig.headers,
    },
  };
  if (body) {
    config.body = JSON.stringify(body);
  }

  return window
    .fetch(`${process.env.PREACT_APP_API_URL}/${endpoint}`, config)
    .then(async (r) => {
      if (r.status === 204) {
        // avoid an exception trying to parse an empty response
        return {};
      }

      const data = await r.json();
      if (r.ok) {
        return data;
      } else {
        return Promise.reject(data);
      }
    });
}

const getFAQ = () => {
  return client("frequent-questions");
};

const postFeedback = (answerId, feedback) => {
  return client("feedback/", { body: { feedback, answer_id: answerId } });
};

const search = (question) => {
  return client("question/", { body: { question } });
};

export { getFAQ, postFeedback, search };