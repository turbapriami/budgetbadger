const billSortingFunctions = {
  description: (a, b, direction) => {
    return direction ?
      a.localeCompare(b): 
      b.localeCompare(a);
  },
  bill_category: (a, b, direction) => {
    return direction ?
      a[0].name.localeCompare(b[0].name) :
      b[0].name.localeCompare(a[0].name);
  },
  due_date: (a, b, direction) => {
    return direction ?
      new Date(a) - new Date(b):
      new Date(b) - new Date(a);
  }, 
  paid_date: (a, b, direction) => {
    return direction ?
      new Date(a) - new Date(b):
      new Date(b) - new Date(a);
  },
  amount: (a, b, direction) => {
    return direction ?
      (a - b) :
      (b - a);
  }
}
export default billSortingFunctions;