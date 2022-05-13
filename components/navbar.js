import Link from 'next/link';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Container from './container';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import LinkDropdown from './link-dropdown';
import { useRouter } from 'next/router';

const ContainerFlexRow = styled(Container)`
  display: flex;
  justify-content: space-between;
`;
const Header = styled.header`
  border-bottom: 1px solid #ddd;
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


const NavbarBrand = styled.h1`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--primary);
  margin: 0;
  margin-top: 1rem;
`;
const NavbarCollapse = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;
const NavbarItem = styled.li`
  display: inline-block;
  font-family: 'Plus Jakarta Sans', sans-serif;
  padding: .7rem .9rem;
  font-size: .9rem;


  &:first-child {
    padding: .7rem .9rem .7rem 0;
  }

  > a {
    text-decoration: none;
    position: relative;

    ${
      props => props.active && `
        color: #0564A6;

        &::before {
          content: '';
          display: block;
          position: absolute;
          width: 100%;
          height: 3px;
          background-color: #0564A6;
          top: 1.75rem;
        }
      `
    }

  }

  &::after {
    content: '';
    display: inline-block;
    height: 20px;
    width: 1px;
    background-color: #ddd;
    position: relative;
    left: 12px;
    top: 4px;
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
          <NavbarBrand>
            DISKOMINFO KOTA AMBON
          </NavbarBrand>
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
                  { to: '/mengenal-kami/sejarah', text: 'Sejarah'},
                  { to: '', text: 'Struktur organisasi'},
                  { to: '/mengenal-kami/tugas', text: 'Tugas dan fungsi'},
                  { to: '/mengenal-kami/command-center', text: 'Command Center'},
                ]}
              />
            </NavbarItem>
            <NavbarItem  active={router.pathname === '/pengumuman'}>
              <Link href="/pengumuman" passHref>Pengumuman</Link>
            </NavbarItem>
            <NavbarItem active={/informasi/.test(router.pathname)}>
              <LinkDropdown
                text="Informasi"
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
                  { blank: true, to: 'http://lpse.ambon.go.id/eproc4', text: 'LPSE - Pengadaan Barang atau Jasa secara elektronik'},
                  { blank: true, to: 'http://simdatik.ambon.go.id/dataset/home', text: 'SIMDATIK - Sistem informasi data statistik'},
                  { blank: true, to: 'https://ambonaccess.id', text: 'Ambon Access'},
                  { blank: true, to: 'http://dpmptsp.ambon.go.id', text: 'DPMPTSP - Dinas Penanaman Modal dan Pelayanan Terpadu Satu Pintu'},
                  { blank: true, to: '#', text: 'SIMAK - Sistem Informasi Manajemen Administrasi Kependudukan'},
                ]}
              />
            </NavbarItem>
          </NavbarCollapse>
        </Content>
        <FormGroup>
          <Input placeholder="Telusuri informasi kegiatan..." type="search" autoComplete="off" autoFocus />
          <Submit>
            <FontAwesomeIcon icon={faSearch} />
          </Submit>
        </FormGroup>
      </ContainerFlexRow>
    </Header>
  );
}