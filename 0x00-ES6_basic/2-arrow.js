const getNeighborhoodsList = () => {
  const sanFranciscoNeighborhoods = ['SOMA', 'Union Square'];

  const self = this;
  this.addNeighborhood = (newNeighborhood) => {
    [...sanFranciscoNeighborhoods].push(newNeighborhood);
    return self.sanFranciscoNeighborhoods;
  };
}

export default getNeighborhoodsList;
