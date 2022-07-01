import styled, { keyframes } from 'styled-components';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCheck, faClock, faCircle } from "@fortawesome/free-solid-svg-icons";
import Image from '@/components/image';

const FlexRow = styled.div`
  display: flex;
  margin: 2rem 0;
  margin-bottom: 3rem;
  align-items: center;
`;

const ImageContent = styled.div`
  flex: 2;
`;

const Content = styled.div`
  flex: 1.5;
  margin-right: 1rem;

  > a {
    font-size: 1rem;
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-weight: 500;
    margin-top: .3rem;
    display: inline-block;
    text-decoration: none;
    color: var(--primary);
  }
`;
const Title = styled.h1`
  display: block;
  margin: 0;
  margin-bottom: 1rem;
  color: var(--primary);
  font-size: 1.9rem;
  font-family: 'Plus Jakarta Sans', sans-serif;
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

  }`;
const Description = styled.p`
  line-height: 29px;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-weight: 400;
  font-size: 1rem;
`;

const fadeInFadeOut = keyframes`
  from {
    opacity: 0;
    transform: scale(0.0);
  }
  to {
    opacity: 1;
    transform: scale(1,1);
  }
`;


const LiveText = styled.p`
  color: red;
  margin: 0;
  font-weight: 700;
  font-family: 'Plus Jakarta Sans', sans-serif;
  margin-bottom: .5rem;

  > svg {
    animation ${fadeInFadeOut} 900ms ease-in infinite;
    display: iniline-block;
    margin-right: .4rem;

    > path {
      color: red;
    }
  }
`;


const TagLabel = styled(Caption)`
  background-color: rgba(0%, 58%, 68%, .15);
  border-color: rgba(0%, 58%, 68%, .25);
`;

export default function PostIntroduction({title, description, date, photoUrl}) {
  return (
    <FlexRow>
      <Content>
        <LiveText>
          <FontAwesomeIcon icon={faCircle} />
          TERKINI
        </LiveText>
        <Title>{title}</Title>
        <>
          <Caption>
            <FontAwesomeIcon icon={faUserCheck} />
            Admin
          </Caption>
          <Caption>
            <FontAwesomeIcon icon={faClock} />
            {date}
          </Caption>
          <TagLabel>
            kominfo
          </TagLabel>
        </>
        <Description>
          {description}
        </Description>

        <Link href="/informasi/kegiatan/test">Baca selengkapnya</Link>
      </Content>
      <ImageContent>
        <Image
          src={photoUrl}
          alt="cover"
          height="200"
          width="300"
        />

      </ImageContent>
    </FlexRow>
  );
}