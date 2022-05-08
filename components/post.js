import styled from 'styled-components';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCheck, faClock } from "@fortawesome/free-solid-svg-icons";
import Image from '@/components/image';

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
  margin-bottom: 1rem;
  line-height: 26px;
  color: var(--primary);
  font-family: 'Plus Jakarta Sans', sans-serif;
`;
const ImageContent = styled.div`
  position: relative;
  flex: 1;
`
const Content = styled.div`
  flex: 2;
  margin-left: 1.5rem;

  > a {
    font-size: .9rem;
    font-family: 'Noto Sans', sans-serif;
    margin-top: 1rem;
    display: inline-block;
    text-decoration: none;
    color: var(--primary);
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-weight: 600;
  }
`;
const Description = styled.p`
  font-size: .9rem;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-weight: 500;
  margin: 0;
  margin-top: .8rem;
  line-height: 27px;
`;
const Caption = styled.span`
  margin-right: .4rem;
  border: 1px solid #ddd;
  display: inline-block;
  padding: .2rem .4rem;
  border-radius: 3px;
  font-size: .8rem;
  font-weight: 400;
  font-family: 'Plus Jakarta Sans', sans-serif;


  > svg  {
    margin-right: .3rem;
    display: inline-block;
  }
`;

const TagLabel = styled(Caption)`
  background-color: rgba(0%, 58%, 68%, .15);
  border-color: rgba(0%, 58%, 68%, .25);
`;



export default function Post() {
  return (
    <FlexRow>
      <ImageContent>
        <Image
          src="https://images.unsplash.com/photo-1644982652061-df82282e178d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
          alt="cover"
          height="200"
          width="300"
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
          <TagLabel>
            kominfo
          </TagLabel>
        </>
        <Description>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </Description>

        <Link href="/i">Baca selengkapnya</Link>
      </Content>
    </FlexRow>
  );
}