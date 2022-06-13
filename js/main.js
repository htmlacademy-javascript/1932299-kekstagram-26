  const getRandomIntInclusive = (min, max) => {
    return(Math.round(Math.random() * (max - min + 1)) + min);
  }
  getRandomIntInclusive(0, 10);

  const checkStringLength = (string, maxLength) => string.length <= maxLength;

  checkStringLength(140);
