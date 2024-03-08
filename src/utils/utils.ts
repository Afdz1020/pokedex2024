export const getIdPokemon = (url: string) => {
  const urlSplit = url.split('/').filter((p) => p);
  return urlSplit.pop();
};
