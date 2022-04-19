import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faUserCheck, faHashtag, faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import yesterday from '@/utils/yesterday';

const Title = styled.h2`
  color: var(--primary);
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-weight: 600;

  &::after {
    content: '';
    display: block;
    background: url('/static/img/underline.svg');
    background-repeat: no-repeat;
    background-size: 100%;
    height: 10px;
    margin-top: .3rem;
  }
`;
const FlexRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const CalendarDay = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;
const DayItem = styled.li`
  display: inline-block;
  padding: .6rem 1rem;
  font-family: 'Plus Jakarta Sans', sans-serif;
  cursor: pointer;
  font-size: .9rem;

  &:hover {
    color: var(--primary);
    font-weight: 600;
  }

  &::after {
    content: '';
    display: inline-block;
    height: 18px;
    width: 1px;
    background-color: #ddd;
    position: relative;
    top: 3px;
    left: .9rem;
  }

  &:last-child::after {
    display: none;
  }
`;

const Content = styled.div`
  display: flex;
  align-items: center;

  > svg path {
    color: var(--primary);
  }
`;

const CalendarText = styled.p`
  font-family: 'Plus Jakarta Sans', sans-serif;
  margin: 0;
  margin-left: .5rem;
  font-weight: 500;
  color: var(--primary);
  font-size: .9rem;
`;

const ListGroup = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  margin-bottom: 2rem;
`;

const ListItem = styled.li`
  border-bottom: 1px dashed #ddd;
  padding: 1.4rem 0;

  &:last-child {
    border-bottom: 0;
  }
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

const calendars = yesterday(5);

export default function Announcement() {
  return (
    <>
      <FlexRow>
        <Title>Pengumuman</Title>
        <Content>
          <FontAwesomeIcon icon={faClock} />
          <CalendarText>Pilih waktu :</CalendarText>
          <CalendarDay>
            { calendars.map((day, i) =>
              <DayItem key={i}>{day}</DayItem>
            ) }
          </CalendarDay>
        </Content>
      </FlexRow>
      <ListGroup>
        {[1,2,3,4].map(val =>
          <ListItem key={val}>
            <AnnouncementCard/>
          </ListItem>
        )}
      </ListGroup>
    </>
  );
}

function AnnouncementCard() {
  return (
    <>
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
        <Caption>
          <FontAwesomeIcon icon={faHashtag} />
          kominfo
        </Caption>
      </>
      <Description>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
      </Description>
      <AttachmentTextNotice>
        <FontAwesomeIcon icon={faCircleInfo} />
        Memilki dokumen
      </AttachmentTextNotice>
    </>
  );
}