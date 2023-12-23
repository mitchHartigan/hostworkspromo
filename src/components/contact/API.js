const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const POST_CONTACT_FORM = async (name, email, phone, message) => {
  await sleep(3000);
  return true;
};
