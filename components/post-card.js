import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCheck, faClock, faCircle } from "@fortawesome/free-solid-svg-icons";
import Image from './image';

const Paragraph = styled.p`
  margin: 0;
  padding: 0;
  font-family: 'Plus Jakarta Sans', sans-serif;
  color: white;
  font-size: .9rem;
  line-height: 26px;
`;
const Content = styled.div`
  margin-top: .7rem;
`;
const Title = styled.h4`
  font-family: 'Plus Jakarta Sans', sans-serif;
  color: white;
  font-size: 1.2rem;
  margin: 0;
  margin-top: .9rem;
`;

const Caption = styled.ul`
  padding: 0;
  margin: .7rem 0;
  list-style: none;
  display: flex;
`;

const CaptionItem = styled.li`
  font-family: 'Plus Jakarta Sans', sans-serif;
  color: white;
  margin-right: .6rem;
  font-size: .8rem;

  &:last-child {
    margin: 0;
  }
  svg {

    path {
      fill: white;
    }
    margin-right: .3rem;
    display: inline-block;
  }
`;


export default function PostCard(props) {
  return (
    <div>
      <Image alt={props.data.title} src={props.data.picture_url} height={100} width={100} />
      <Title>{props.data.title}</Title>
      <Caption>
        <CaptionItem><FontAwesomeIcon icon={faClock} />Ditambahkan pada {props.data.created_at}</CaptionItem>
      </Caption>
      <Content>
        <Paragraph>{props.data.desc_short}</Paragraph>
      </Content>
    </div>
  );
}