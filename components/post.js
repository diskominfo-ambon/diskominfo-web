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



export default function Post({photoUrl, title, description, date}) {
  return (
    <FlexRow>
      <ImageContent>
        <Image
          src={photoUrl}
          alt="cover"
          height="200"
          width="300"
        />
      </ImageContent>
      <Content>
        <Link href="/informasi/kegiatan/test" passHref>
        <Title>{title}</Title>
        </Link>

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

        <Description>
          {description}
        </Description>

        <Link href="/informasi/kegiatan/test">Baca selengkapnya</Link>
      </Content>
    </FlexRow>
  );
}