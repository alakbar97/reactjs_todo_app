import { sorting, priorityArray, statusArray } from "services/constants";

export const mapOrder = (array, order, key) => {
  array.sort(function (a, b) {
    var A = a[key],
      B = b[key];

    if (order.indexOf(A) > order.indexOf(B)) {
      return 1;
    } else {
      return -1;
    }
  });

  return array;
};

export const sortArray = (sort, array) => {
  let orderedArray = [];
  if (sort === sorting.PRIORITY)
    orderedArray = mapOrder(array, priorityArray, "priority");
  else if (sort === sorting.STATUS)
    orderedArray = mapOrder(array, statusArray, "status");
  else
    orderedArray = array.sort((a, b) => new Date(b.start) - new Date(a.start));

  return orderedArray;
};
