//sorting steps array based on state & its data type
const sortSteps = (data, sortValue, isAsc) => {

  return data.steps.sort((a, b) => {

    //for strings
    if (typeof a[sortValue] === 'string') {
      let aSortField = a[sortValue].toLowerCase();
      let bSortField = b[sortValue].toLowerCase();

      if (aSortField > bSortField) {
        return isAsc ? 1 : -1;
      }
      if (aSortField < bSortField) {
        return isAsc ? -1 : 1;
      }
      return 0;

    //for numbers and possible booleans
    } else {
      
      if (isAsc) {
        return Number(a[sortValue]) - Number(b[sortValue]);
      }
      return Number(b[sortValue]) - Number(a[sortValue]);
    }
  });

};

export default sortSteps;