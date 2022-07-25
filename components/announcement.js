import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo, faClock, faUserCheck } from '@fortawesome/free-solid-svg-icons';



const Layout = styled.div`
  padding: 2rem;
  border: 1px solid #ddd;
  margin-bottom: .9rem;
  border-radius: 5px;
`;
const Heading = styled.h3`
  font-family: 'Plus Jakarta Sans', sans-serif;
  line-height: 26px;
  margin: 0;
  margin-bottom: .8rem;
  font-size: 1.3rem;
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


export default function Announcement() {
  return (
    <Layout>
      <Heading>
        Halo ini judulku
      </Heading>
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
      <AttachmentTextNotice>
        <FontAwesomeIcon icon={faCircleInfo} />
        Memilki dokumen
      </AttachmentTextNotice>
    </Layout>
  );
}