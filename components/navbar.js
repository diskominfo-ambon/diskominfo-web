import Link from 'next/link';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Container from './container';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import LinkDropdown from './link-dropdown';
import { useRouter } from 'next/router';
import Image from 'next/image';

const ContainerFlexRow = styled(Container)`
  display: flex;
  justify-content: space-between;
`;
const Header = styled.header`
  // border-bottom: 1px solid #ddd;
  padding: 1rem 0;
  background-color: var(--primary);
`;
const FormGroup = styled.div`
  border: 1px solid #ddd;
  align-self: center;
  flex: 1;
  overflow: hidden;
  display: flex;
  border-radius: 5px;
`;
const Content = styled.div`
  flex: 1.5;
  display: flex;
  align-items: center;
`;
const Input = styled.input`
  width: 100%;
  padding: .6rem .8rem;
  font-family: 'Plus Jakarta Sans', sans-serif;
  border: none;
  outline: none;
  font-size: .9rem;

  &::placeholder {
    color: #B7B7B7;
  }
`;
const Submit = styled.button`
  border: none;
  border-left: 1px solid #ddd;
  width: 40px;
  cursor: pointer;

  &:hover {
    opacity: .8;
  }
  > svg path {
    color: var(--light);
  }
`;


const NavbarBrand = styled(Image)`
  margin: 0;
  display: block;
  filter: saturate(0) brightness(100);
`;
const NavbarCollapse = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  margin-left: 2rem;
`;
const NavbarItem = styled.li`
  display: inline-block;
  font-family: 'Plus Jakarta Sans', sans-serif;
  // padding: .7rem ;
  font-size: .9rem;


  &:first-child {
    // padding: .7rem .9rem .7rem 0;
  }

  > a {
    text-decoration: none;
    position: relative;
    color: white;
    padding: .6rem 1rem;
    border-radius: 4px;

    svg  path {
      fill: white;
    }

    ${
      props => props.active && `
        color: white;
        background-color: dodgerblue;
        // &::before {
        //   content: '';
        //   display: block;
        //   position: absolute;
        //   width: 100%;
        //   height: 3px;
        //   background-color: white;
        //   top: 1.75rem;
        // }
      `
    }

  }

  &::after {
    // content: '';
    // display: inline-block;
    // height: 20px;
    // width: 1px;
    // background-color: #ddd;
    // position: relative;
    // left: 12px;
    // top: 4px;
  }

  &:last-child::after {
    display: none;
  }
`;

export default function Navbar() {

  const router = useRouter();

  return (
    <Header>
      <ContainerFlexRow>
        <Content>
          <NavbarBrand src="/static/img/kominfo.png" height={40} width={40} alt="logo kominfo"/>
          <NavbarCollapse>
            <NavbarItem active={router.pathname === '/'}>
              <Link href="/" passHref>
                Beranda
              </Link>
            </NavbarItem>
            <NavbarItem
              active={/mengenal-kami/.test(router.pathname)}
            >
              <LinkDropdown
                text="Mengenal kami"
                menus={[
                  { to: '/mengenal-kami/tentang', text: 'Tentang'},
                  { to: '/mengenal-kami/tugas', text: 'Tugas dan fungsi'},
                  { to: '/mengenal-kami/pegawai', text: 'Pegawai'},
                 
                ]}
              />
            </NavbarItem>
            <NavbarItem
              active={/perencanaan/.test(router.pathname)}
            >
              <LinkDropdown
                text="Perencanaan"
                menus={[
                  { to: '/static/RENSTRA-2017-2023.pdf', text: 'Rencana Strategis'},
                  { to: '/perencanaan/RENJA KOMINFO 2022.pdf', text: 'Rencana Kerja'},
                  { to: '/static/LAKIP DISKOMINFO 2021.pdf', text: 'Laporan Kinerja Akuntabilitas Pemerintah'},
                  { to: '/static/', text: 'Laporan Pertanggungjawaban Pemerintah Daerah'},
                  // { to: '/perencanaan/lakip', text: 'LAKIP'},
                  { to: '/perencanaan/lkpj', text: 'LKPJ'},
                ]}
              />
            </NavbarItem>
            <NavbarItem  active={router.pathname === '/pengumuman'}>
              <Link href="/pengumuman" passHref>Pengumuman</Link>
            </NavbarItem>
            <NavbarItem active={/informasi/.test(router.pathname)}>
              <LinkDropdown
                text="Kegiatan & Informasi"
                menus={[
                  { to: '/informasi/kegiatan', text: 'Kegiatan' },
                  { to: '/informasi/agenda', text: 'Informasi agenda' }
                ]}
              />
            </NavbarItem>
            <NavbarItem>
              <LinkDropdown
                text="Layanan"
                menus={[
                  { blank: true, to: 'http://www.lapor.go.id', text: 'E-Lapor - Layanan lapor pengaduan masyarakat'},
                  { blank: true, to: 'https://ambonaccess.id', text: 'Ambon Access'},
                  { blank: true, to: '/static/img/SOP-PENGADUAN-melalui-LaporSPAN-dan-MEdia-Lain-KOTA-AMBON (2)_page-0001.jpg', text: 'SOP Pengaduan Melalui LAPOR-SPAN dan Media Lain'},
                  { blank: true, to: 'https://ambon.go.id/wp-content/uploads/2020/12/SOP-PENGADUAN-SMS.jpg', text: 'SOP SMS BROADCAST'},
                  { blank: true, to: '/static/img/SOP-PENGADUAN-LAYANAN-INTERNET-DAN-APLIKASI.jpg', text: 'SOP LAYANAN INTERNET DAN APLIKASI'},
                  { blank: true, to: '#', text: 'SIMAK - Sistem Informasi Manajemen Administrasi Kependudukan'},
                  { to: '/mengenal-kami/command-center', text: 'Layanan Command Center'},
                ]}
              />
            </NavbarItem>
          </NavbarCollapse>
        </Content>
      </ContainerFlexRow>
    </Header>
  );
}