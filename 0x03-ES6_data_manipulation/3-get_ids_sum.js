export default function getStudentIdsSum(list) {
  return list.reduce((tot, item) => tot + item.id, 0);
}
