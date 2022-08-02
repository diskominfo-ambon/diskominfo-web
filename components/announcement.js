import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo, faClock, faUserCheck } from '@fortawesome/free-solid-svg-icons';



const Layout = styled.div`
  padding: 1.3rem 0;
  border-bottom: 1px dashed #ddd;
  margin-bottom: .9rem;
  border-radius: 5px;
`;
const Heading = styled.h3`
  font-family: 'Plus Jakarta Sans', sans-serif;
  line-height: 26px;
  margin: 0;
  margin-bottom: .8rem;
  font-size: 1.2rem;
`;

const Caption = styled.span`
  margin-right: .3rem;
  display: inline-block;
  padding: .2rem .4rem;
  font-size: .8rem;
  font-weight: 400;
  font-family: 'Plus Jakarta Sans', sans-serif;

  > svg  {
    margin-right: .3rem;
    display: inline-block;

    > path {
      fill: var(--light);
    }

  }
`;

const TagLabel = styled(Caption)`
  background-color: rgba(0%, 58%, 68%, .15);
  border-color: rgba(0%, 58%, 68%, .25);
`;


const Description = styled.p`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: .9rem;
  line-height: 27px;
  margin: 0;
  margin-top: .9rem;
`;

const AttachmentTextNotice = styled(Caption)`
  background-color: var(--primary);
  color: white;
  border-color:  var(--primary);
  margin-top: .8rem;

  > svg path {
    fill: white;
  }
`;


export default function Announcement(props) {
  return (
    <Layout>
      <Heading>
        {props.data.title}
      </Heading>
      <>
        <Caption>
          <FontAwesomeIcon icon={faClock} />
          {props.data.created_at}
        </Caption>
      </>
      <Description>
        {props.data.desc_short}
      </Description>
    </Layout>
  );
}