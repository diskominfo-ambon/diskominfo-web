import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMagnifyingGlass,
  faPaperPlane,
  faCaretDown,
  faScroll,
  faNewspaper,
  faCalendarDays,
  faUsers,
  faHandsPraying,
  faTimeline
} from "@fortawesome/free-solid-svg-icons";
import Container from './container';

const Header = styled.header`
  border-bottom: 1px solid #dddd;
`;
const BaseNavbar = styled.nav`
  padding: .5rem 0;
`;

const ContainerFlexRow = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const FlexRow = styled.div`
  display: flex;
  align-items: center;
`;

const NavbarPrimary = styled(BaseNavbar)`
  background-color: #0664A6;
  padding: .3rem 0;
`;
const NavbarMenu = styled.ul`
  padding: 1rem 0;
  margin: 0;
  list-style: none;
  display: flex;
  justify-content: space-evenly;

`;
const NavbarItem = styled.li`
  font-size: .8rem;
  font-weight: 500;
  cursor: pointer;
  color: var(--dark);
  font-family: 'Raleway', sans-serif;
  text-transform: uppercase;
  position: relative;

  > svg {
    margin-left: .6rem;
  }
`;

const Title = styled.h2`
  color: white;
  margin: 0;
  font-size: .9rem;
  font-weight: 500;
  margin-left: .9rem;

  `;
const Logo = styled.img`
  width: 130px;
  position: relative;
  top: -.4rem;
  display: block;
`;

const FormGroup = styled.div`
  width: 300px;
  border-radius: 2px;
  background-color: white;
  display: flex;
  flex: 1;
  align-items: center;

  > svg:first-child {
    display: block;
    margin-left: .8rem;
    margin-right: -.3rem;
    font-size: .9rem;

    path {
      color: var(--light);
    }
  }
`;
const SearchInput = styled.input`
  background: transparent;
  padding: .7rem .8rem;
  border: none;
  font-size: .9rem;
  font-family: 'Raleway', sans-serif;
  outline: none;
  flex: 2;
  font-weight: 400;
`;

const Button = styled.button`
  background-color: white;
  color: var(--dark);
  border: none;
  border-left: 1px solid #dddd;
  font-family: 'Raleway', sans-serif;
  cursor: pointer;
  padding: .5rem .8rem;
  border-radius: 0 3px 3px 0;
`;

const Dropdown = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  position: absolute;
  top: 29px;
  border-radius: 3px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.20);
  background-color: white;
  overflow: hidden;
  min-width: 220px;
`;
const DropdownItem = styled.li`
  border-top: 1px solid #eee;

  &:first-child {
    border: none;
  }
  > a {
    padding: .8rem 1rem;
    display: block;
    text-decoration: none;

    &:hover {
      background-color: #eee;
    }

    > svg {
      margin-right: .7rem;
      path {
        color: var(--primary);
      }
    }
  }
`;

function FrontNavbar() {
  return (
    <NavbarPrimary>
      <ContainerFlexRow>
        <FlexRow>
          <Logo
            src="/static/img/diskominfo-logo-2.png"
            alt="logo"
          />

          <Title>
            Bersatu, bersama manggurebe maju
          </Title>
        </FlexRow>


        <form>
          <FormGroup>
            <FontAwesomeIcon icon={faMagnifyingGlass}/>
            <SearchInput placeholder="Telusuri informasi berita" type="search"/>
            <Button>
              <FontAwesomeIcon size="1x" icon={faPaperPlane}/>
            </Button>
          </FormGroup>
        </form>
      </ContainerFlexRow>
    </NavbarPrimary>
  );
}



export default function Navbar() {
  return (
    <Header>
      <FrontNavbar/>

      <Container>
        <NavbarMenu>
          <NavbarItem>
            Mengenal kami
            <FontAwesomeIcon icon={faCaretDown}/>

            <Dropdown>
              <DropdownItem>
                <a href="#">
                  <FontAwesomeIcon icon={faUsers}/>
                  Struktur organisasi
                </a>
              </DropdownItem>
              <DropdownItem>
                <a href="#">
                  <FontAwesomeIcon icon={faTimeline}/>
                  Sejarah visi dan misi
                </a>
              </DropdownItem>
              <DropdownItem>
                <a href="#">
                  <FontAwesomeIcon icon={faHandsPraying}/>
                  Informasi tupoksi
                </a>
              </DropdownItem>
            </Dropdown>
          </NavbarItem>
          <NavbarItem>
            Program dan kegiatan
          </NavbarItem>
          <NavbarItem>
            Informasi dan Berita
            <FontAwesomeIcon icon={faCaretDown}/>

            <Dropdown>
              <DropdownItem>
                <a href="#">
                  <FontAwesomeIcon icon={faScroll}/>
                  Pengumuman
                </a>
              </DropdownItem>
              <DropdownItem>
                <a href="#">
                  <FontAwesomeIcon icon={faNewspaper}/>
                  Berita
                </a>
              </DropdownItem>
              <DropdownItem>
                <a href="#">
                  <FontAwesomeIcon icon={faCalendarDays}/>
                  Informasi agenda
                </a>
              </DropdownItem>
            </Dropdown>
          </NavbarItem>
          <NavbarItem>
            Layanan
            <FontAwesomeIcon icon={faCaretDown}/>
          </NavbarItem>
          <NavbarItem>
            Kontak
          </NavbarItem>
        </NavbarMenu>
      </Container>
    </Header>
  );
}