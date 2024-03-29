import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image'
import useSWR from 'swr'
import PhotoAlbum from "react-photo-album";
import type { RenderPhotoProps } from "react-photo-album";


const NextJsImage: React.FC<RenderPhotoProps> = ({
    imageProps: { src, alt, title, sizes, className, onClick },
    wrapperStyle,
}) => (
    <div style={wrapperStyle}>
        <div style={{ display: "block", position: "relative", width: "100%", height: "100%" }}>
            <Image fill src={src} alt={alt} title={title} sizes={sizes} className={className} onClick={onClick} />
        </div>
    </div>
);


export default function ImageView({ data, error, isLoading }) {
  const [index, setIndex] = useState(-1);
  if (error) {
    console.log('Failed to get images');
    return <div>failed to load</div>
  }
  if (isLoading) return <div>loading...</div>
  return (
    <div>
      <PhotoAlbum layout="rows" photos={data} renderPhoto={NextJsImage} onClick={({ index }) => setIndex(index)} />
    </div>
  );
}
