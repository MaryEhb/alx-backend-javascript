export default function updateStudentGradeByCity(list, city, newGrades) {
  const newArr = list.filter((item) => item.location === city);
  return newArr.map((student) => {
    const filtered = newGrades.filter((grade) => grade.studentId === student.id);
    return { ...student, grade: (filtered.length > 0 ? filtered[0].grade : 'N/A') };
  });
}
