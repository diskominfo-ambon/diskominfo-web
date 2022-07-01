import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo, faClock, faUserCheck } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';



const Layout = styled.div`
  padding: 2rem 0;
  border-bottom: 1px solid #ddd;

  &:last-child {
    border-bottom: none;
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
      <Link href="/pengumuman/test" passHref>
        <Heading>
        Pengumuman Seleksi Pengadaan Pegawai Kontrak dalam Jabatan Pranata Komputer Pemerintah Kota Ambon Tahun Anggaran 2021
        </Heading>
      </Link>
      <>
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
      </>
      <Description>
      Dalam rangka upaya peningkatkan pelayanan di Kota Ambon, maka bersama ini diberitahukan bahwa Pemerintah Kota Ambon akan melaksanakan Seleksi Pengadaan Pegawai Kontrak Dalam Jabatan Pranata Komputer yang akan di tempatkan pada Dinas Komunikasi, Informatika dan Persandian Kota Ambon Tahun Anggaran 2021.
      </Description>
      <AttachmentTextNotice>
        <FontAwesomeIcon icon={faCircleInfo} />
        Memilki dokumen
      </AttachmentTextNotice>
    </Layout>
  );
}