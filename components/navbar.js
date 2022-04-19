import Link from 'next/link';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Container from './container';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import LinkDropdown from './link-dropdown';



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
  return (
    <Header>
      <ContainerFlexRow>
        <Content>
          <NavbarBrand>
            DISKOMINFO KOTA AMBON
          </NavbarBrand>
          <NavbarCollapse>
            <NavbarItem>Beranda</NavbarItem>
            <NavbarItem>
              <LinkDropdown text="Mengenal kami" />
            </NavbarItem>
            <NavbarItem>Pengumuman</NavbarItem>
            <NavbarItem>Informasi agenda</NavbarItem>
            <NavbarItem>Layanan</NavbarItem>
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