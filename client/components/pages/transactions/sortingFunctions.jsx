const sortingFuncs = {
  name: (a, b, direction) => {
    return direction ?
      a.localeCompare(b): 
      b.localeCompare(a);
  },
  category: (a, b, direction) => {
    return direction ?
      a.localeCompare(b): 
      b.localeCompare(a);
  },
  date: (a, b, direction) => {
    return direction ?
      new Date(a) - new Date(b):
      new Date(b) - new Date(a);
  }, 
  type: (a, b, direction) => {
    return direction ?
      a.account[0].type.localeCompare(b.account[0].type) :
      b.account[0].type.localeCompare(a.account[0].type)
  },
  amount: (a, b, direction) => {
    return direction ?
      (a - b) :
      (b - a);
  }
}
export default sortingFuncs;