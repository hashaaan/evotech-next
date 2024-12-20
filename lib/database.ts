export function getUserFromDb(email: unknown, pwHash: unknown) {
  return new Promise((resolve) => {
    resolve({ email, pwHash });
  });
}
