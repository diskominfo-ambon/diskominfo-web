import styled from 'styled-components';
import Container from '@/components/container';
import Breadcrumb from '@/components/breadcrumb';
import Announcement from '@/components/announcement';
import AnnouncementToolbar from '@/components/announcement-toolbar';


const Title = styled.h2`
  font-family: 'Plus Jakarta Sans', sans-serif;
  margin: 0;
  padding: 0;
`;
const Subtitle = styled.p`
  font-family: 'Plus Jakarta Sans', sans-serif;
  margin: 0;
  padding: 0;
  margin-top: .5rem;
`;
const Content = styled.div`
  margin: 5rem 0;
  margin-top: 2rem;
`;


const Announcements = styled.ul`
  padding: 0;
  margin: 0;
  margin-top: 4rem;
  list-style: none;
`;

const AnnouncementItem = styled.li``;

export default function Index() {
  return (
    <Container>
      <Breadcrumb
        paths={[
          'Beranda',
          'Pengumuman'
        ]}
      />

      <Content>
        <center>
          <Title>Informasi pengumuman</Title>
          <Subtitle>
            Semua informasi pengumuman yang diterbitkan oleh Dinas komunikasi, informatika dan persandian kota Ambon
          </Subtitle>
        </center>
        <AnnouncementToolbar>
          <Announcements>
            <AnnouncementItem>
            <Announcement />
            </AnnouncementItem>
          </Announcements>
        </AnnouncementToolbar>
      </Content>
    </Container>
  );
}