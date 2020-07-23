export const labDarken = (
  lab: [number, number, number],
  amount = 1
): [number, number, number] => {
  return [lab[0] - 18 * amount, lab[1], lab[2]];
};

export const labBrighten = (
  lab: [number, number, number],
  amount = 1
): [number, number, number] => {
  return labDarken(lab, -amount);
};
