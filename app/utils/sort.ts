type PropObject = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;
};

type PropObjectKeys = Extract<keyof PropObject, string>;

/**
 *  Sorts two objects given a prop that they share
 * @param a an object with properties
 * @param b an object with properties
 * @param primarySort name of prop in object (can be prefixed with a "-")
 * @param secondarySort name of prop in object (can be prefixed with  a "-")
 */
export const sortByProp = (
  a: PropObject | undefined,
  b: PropObject | undefined,
  primarySort: PropObjectKeys,
  secondarySort?: PropObjectKeys
): number => {
  /**
   * Running into situations where a and b were 0th element in array, typescript will automatically
   * type that as T | undefined. rather than checking they exist at time of function call
   * we allow undefined to be passed so that the usage of sortByProp stays simple.
   */
  if (a == null && b == null) {
    return 0;
  } else if (a == null) {
    return 1; // could be -1 if we want to flip where in list nulls go
  } else if (b == null) {
    return -1;
  }

  const isPrimaryDescending = primarySort.charAt(0) === '-';
  const isSecondaryDescending = secondarySort?.charAt(0) === '-';
  const firstProp = isPrimaryDescending ? primarySort.slice(1) : primarySort;
  const secondaryProp = isSecondaryDescending
    ? secondarySort.slice(1)
    : secondarySort;

  if (a[firstProp] < b[firstProp]) {
    return isPrimaryDescending ? 1 : -1;
  }
  if (a[firstProp] > b[firstProp]) {
    return isPrimaryDescending ? -1 : 1;
  }

  if (secondaryProp && a[secondaryProp] < b[secondaryProp]) {
    return isSecondaryDescending ? 1 : -1;
  }
  if (secondaryProp && a[secondaryProp] > b[secondaryProp]) {
    return isSecondaryDescending ? -1 : 1;
  }
  return 0;
};
