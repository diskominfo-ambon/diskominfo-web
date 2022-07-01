import { useState } from 'react';
import Container from '@/components/container';
import Breadcrumb from '@/components/breadcrumb';
import styled from 'styled-components';
import { InlineShareButtons } from 'sharethis-reactjs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faUserCheck } from '@fortawesome/free-solid-svg-icons';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'



const Title = styled.h2`
  font-family: 'Plus Jakarta Sans', sans-serif;
  text-align: center;
  margin: 0;
`;
const Content = styled.div`
  width: 900px;
  margin: 2rem auto;
  margin-bottom: 3rem;
`;

const Caption = styled.span`
  display: inline-block;
  font-size: .8rem;
  border: 1px solid #ddd;
  padding: .3rem .4rem;
  border-radius: 3px;
  font-family: 'Plus Jakarta Sans', sans-serif;
  margin-right: .5rem;

  &:last-child {
    margin-right: 0;
  }

  > svg {
    display: inline-block;
    margin-right: .4rem;
  }

`;

const TagLabel = styled(Caption)`
  background-color: rgba(0%, 58%, 68%, .20);
  border-color: rgba(0%, 58%, 68%, .20);
`;

const Paragraph = styled.p`
  font-family: 'Plus Jakarta Sans', sans-serif;
  line-height: 28px;
`;

const Captions = styled.div`
  margin: .7rem 0;
  margin-bottom: .9rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Header = styled.div`
  margin-bottom: 2rem;
`;

const Iframe = styled.iframe`
  border-radius: 5px;
  width: 100%;
  min-height: 800px;
  margin-top: 1.3rem;
`;



export default function Announcement() {


  return (
    <Container>
      <Breadcrumb
        paths={[
          'Beranda',
          'Pengumuman',
          'Ambon'
        ]}
      />

      <Content>
        <Header>
          <Title>
          Pengumuman Seleksi Pengadaan Pegawai Kontrak dalam Jabatan Pranata Komputer Pemerintah Kota Ambon Tahun Anggaran 2021
          </Title>
          <Captions>
            <Caption>
              <FontAwesomeIcon icon={faUserCheck} />
              Admin
            </Caption>
            <Caption>
              <FontAwesomeIcon icon={faClock} />
              Maret 2021
            </Caption>
            <TagLabel>
              kominfo
            </TagLabel>
          </Captions>
          <InlineShareButtons
            config={{
              radius: 5,
              show_total: true,
              enabled: true,
              alignment: 'center',
              networks: [
                'whatsapp',
                'email',
                'messenger',
                'facebook',
                'messenger',
                'blogger'
              ]
              }}
          />
        </Header>

        <Paragraph>
        Dalam rangka upaya peningkatkan pelayanan di Kota Ambon, maka bersama ini diberitahukan bahwa Pemerintah Kota Ambon akan melaksanakan Seleksi Pengadaan Pegawai Kontrak Dalam Jabatan Pranata Komputer yang akan di tempatkan pada Dinas Komunikasi, Informatika dan Persandian Kota Ambon Tahun Anggaran 2021.
        </Paragraph>

        <Iframe
          src="https://www.ambon.go.id/wp-content/uploads/2020/03/SELEKSI%20PEGAWAI%20KONTRAK%20JABATAN%20PRANATA%20KOMPUTER.pdf"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
        />


      </Content>
    </Container>
  );
}