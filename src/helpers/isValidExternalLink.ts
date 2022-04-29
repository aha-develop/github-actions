export const isValidExternalLink = (urlString: string) => {
  try {
    const url = new URL(urlString);
    return url.protocol === 'https:';
  } catch (e) {
    return false;
  }
};
