export const sleep = async (time: number) =>
  new Promise<void>(resolve => {
    setTimeout(() => {
      resolve();
    }, time);
  });
