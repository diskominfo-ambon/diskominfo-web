import BaseImage from 'next/image';
import styled from 'styled-components';


const ImageRounded = styled(BaseImage)`
  border-radius: 7px;
`;


const shimmer = (w, h) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#f2f2f2" offset="20%" />
      <stop stop-color="#fff" offset="50%" />
      <stop stop-color="#f2f2f2" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#ddd" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`

const toBase64 = (str) =>
  typeof window === 'undefined'
    ? Buffer.from(str).toString('base64')
    : window.btoa(str);


export default function Image(props) {


  return <ImageRounded
    {
      ...props
    }
    layout="responsive"
    placeholder="blur"
    loading="lazy"
    objectFit="cover"
    blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
  />
}