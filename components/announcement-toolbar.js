import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faUserCheck, faCircleInfo } from '@fortawesome/free-solid-svg-icons';
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


const calendars = yesterday(5);

export default function AnnouncementToolbar(props) {
  const { children, onClicked } = props;

  return (
    <>
      <FlexRow>
        <Title>Pengumuman</Title>
        <Content>
          <FontAwesomeIcon icon={faClock} />
          <CalendarText>Pilih waktu :</CalendarText>
          <CalendarDay>
            { calendars.map((day, i) =>
              <DayItem onClick={() => onClicked(day)} key={i}>{day.label}</DayItem>
            ) }
          </CalendarDay>
        </Content>
      </FlexRow>
      <ListGroup>
        { children }
      </ListGroup>
    </>
  );
}
