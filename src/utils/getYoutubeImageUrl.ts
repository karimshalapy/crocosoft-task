export const getYoutubeImageUrl = (youtubeUrl: string) =>
  `https://i.ytimg.com/vi/${new URL(youtubeUrl).searchParams.get("v")}/0.jpg`;
