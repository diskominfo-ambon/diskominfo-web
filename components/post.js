import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCheck, faClock, faHashtag } from "@fortawesome/free-solid-svg-icons";


const FlexRow = styled.div`
  display: flex;
  margin-bottom: 1.5rem;

  &:first-child {
    margin-top: 3rem;
  }

  &:last-child {
    margin-bottom: 3rem;
  }
`;

const Title = styled.h2`
  display: block;
  margin: 0;
  margin-bottom: .6rem;
  color: var(--primary);
`;
const ImageContent = styled.div`
  position: relative;
  flex: 1;
`
const Content = styled.div`
  flex: 2;
  margin-left: 1rem;

  > a {
    font-size: .8rem;
    font-family: 'Noto Sans', sans-serif;
    margin-top: .8rem;
    display: inline-block;
    text-decoration: none;
    background-color: var(--primary);
    color: white;
    padding: .5rem .8rem;
    border-radius: 4px;
  }
`;
const Description = styled.p`
  font-size: .85rem;
  font-family: 'Noto Sans', sans-serif;
  font-weight: 400;
  margin: 0;
  margin-top: .5rem;
  line-height: 25px;
`;
const Caption = styled.span`
  margin-right: .4rem;
  border: 1px solid #ddd;
  display: inline-block;
  padding: .2rem .4rem;
  border-radius: 3px;
  font-size: .8rem;
  font-weight: 400;

  &:nth-child(4) {
    margin-left: .4rem;
  }

  > svg  {
    margin-right: .3rem;
    display: inline-block;

    > path {
      fill: var(--light);
    }

  }
`;

const ImageCover = styled(Image)`
  object-fit: cover;
  border-radius: 3px;
`;

export default function Post() {
  return (
    <FlexRow>
      <ImageContent>
        <ImageCover
          src="https://images.unsplash.com/photo-1644982652061-df82282e178d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
          alt="cover"
          height="200"
          width="300"
          layout="responsive"
        />
      </ImageContent>
      <Content>
        <Title>Halo ini judul</Title>
        <>
          <Caption>
            <FontAwesomeIcon icon={faUserCheck} />
            Admin
          </Caption>
          <Caption>
            <FontAwesomeIcon icon={faClock} />
            12 Januari 2000
          </Caption>
          -
          <Caption>
            <FontAwesomeIcon icon={faHashtag} />
            kominfo
          </Caption>
        </>
        <Description>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </Description>

        <Link href="/i">Baca selengkapnya</Link>
      </Content>
    </FlexRow>
  );
}