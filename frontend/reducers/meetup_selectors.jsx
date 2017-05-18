
export const meetupDataSelector = (response) => {
  const unique = [];
  const check = new Set();
  response.forEach((el) => {
    if(!check.has(el)){
      check.add(el);
      unique.push(el);
    }
  });
  return unique;
};
