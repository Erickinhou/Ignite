//Media resize

export const smallImage = (imagePath, size) => {
  if (!imagePath) return;
  const image = imagePath.match(/media\/screenshot/)
    ? imagePath.replace(
        "media/screenshots",
        `media/resize/${size}/-/screenshots`
      )
    : imagePath.replace("media/games", `media/resize/${size}/-/games`);
  return image;
};
