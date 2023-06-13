function stringToIntHash (
  str: string,
  upperBound: number,
  lowerBound: number,
): number {
  let result = 0;
  for (let i = 0; i < str.length; i++) {
    result = result + str.charCodeAt(i);
  }
  return (result % (upperBound - lowerBound)) + lowerBound;
};

export default stringToIntHash;