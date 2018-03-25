export const testGeneratorStep = (generator, step: number = 1, datas = {}) => {
  let stepResult;
  for (let i = 0; i < step; i++) {
    stepResult = datas[i + 1] ? generator.next(datas[i + 1]) : generator.next();
  }
  return stepResult;
};
