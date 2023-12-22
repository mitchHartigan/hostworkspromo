const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const POST_CONTACT_FORM = async () => {
  await sleep(1000);
  return true;
};
