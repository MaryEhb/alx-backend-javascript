import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([signUpUser(firstName, firstName), uploadPhoto(fileName)])
    .then(([res1, res2]) => [
      { status: res1.status, value: res1.value },
      { status: res2.status, value: res2.reason },
    ]);
}
