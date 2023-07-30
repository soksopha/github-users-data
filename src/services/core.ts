const host = process.env.REACT_APP_API_HOST;

export function getHeaders() {
  return {
    "Content-Type": "application/json",
    Authorization: `Bearer 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`,
  };
}

export function getURl() {
  return `${host}`;
}
