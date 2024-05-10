import { getYoutubeImageUrl } from "@/utils/getYoutubeImageUrl";
import { FC } from "react";
import "./styles.css";

interface Props {
  url: string;
  alt: string;
}

export const YoutubeImage: FC<Props> = ({ url, alt }) => {
  return (
    <a className="thumbnail" href={url} target="_blank" rel="noreferrer">
      <img src={getYoutubeImageUrl(url)} alt={alt} />
    </a>
  );
};

export default YoutubeImage;
