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
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 1.3rem;
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
  font-weight: 400;
  margin: 0;
  margin-top: .8rem;
  line-height: 27px;
`;
const Caption = styled.span`
  margin-right: .4rem;
  display: inline-block;
  font-size: .8rem;
  font-weight: 400;
  font-family: 'Plus Jakarta Sans', sans-serif;
  color: gray;


  > svg  {
    margin-right: .3rem;
    display: inline-block;
    > path {
      color: gray;
    }
  }
`;

const TagLabel = styled(Caption)`
  background-color: rgba(0%, 58%, 68%, .15);
  border-color: rgba(0%, 58%, 68%, .25);
`;



export default function Post(props) {
  return (
    <FlexRow>
      <ImageContent>
        <Image
          src={props.data.picture_url}
          alt="cover"
          height="200"
          width="300"
        />
      </ImageContent>
      <Content>
        <Title>{props.data.title}</Title>
        <>
          <Caption>
            <FontAwesomeIcon icon={faClock} />
            {props.data.created_at}
          </Caption>
        </>
        <Description>
          {props.data.desc_short}
        </Description>

        <Link href="/i">Baca selengkapnya</Link>
      </Content>
    </FlexRow>
  );
}