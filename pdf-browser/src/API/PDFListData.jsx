export const getPDFListData = async () => {
  try {
    const response = await fetch(`https://api.npoint.io/dee51ea017d20efdfcc8`);
    const data = response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};
