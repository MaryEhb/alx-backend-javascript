import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  const res1 = await uploadPhoto();
  const res2 = await createUser();
  if (!res1 || !res2) {
    return { photo: null, user: null };
  }
  return { photo: res1, user: res2 };
}
