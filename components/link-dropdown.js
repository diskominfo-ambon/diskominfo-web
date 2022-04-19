import { useState } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import Container from './container';
import { CSSTransition } from 'react-transition-group';


const DropdownText = styled.a`
  font-family: 'Plus Jakarta Sans', sans-serif;
  display: inline-block;
  text-decoration: none;
  cursor: pointer;

  > svg {
    display: inline-block;
    margin-left: .4rem;
  }
`;


const DropdownCollapse = styled.div`
  background-color: white;
  display: block;
  width: 100%;
  position: absolute;
  left: 0;
  z-index: 2;
  top: 5.825rem;
  right: 0;
  border-bottom: 1px solid #ddd;
`;

const DropdownMenu = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const DropdownItem = styled.li`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-weight: 500;
  &:nth-child(odd) {
    border-bottom: 1px solid #ddd;
  }

  > a {
    padding: 1rem 0;
    display: block;
    text-decoration: none;

    &:hover {
      color: #0164A6;
    }

  }
`;


function Dropdown() {
  return (
    <DropdownCollapse>
      <Container>
        <DropdownMenu>
          <DropdownItem>
            <Link href="/i">
              Struktur organisasi
            </Link>
          </DropdownItem>
          <DropdownItem>
            <Link href="/i">
              Sejarah, visi dan misi
            </Link>
          </DropdownItem>
        </DropdownMenu>
      </Container>
    </DropdownCollapse>
  );
}

export default function LinkDropdown(props) {
  const { text } = props;
  const [visible, setVisible] = useState(false);

  return (
    <>
      <style global jsx>{`
        .dropdown__menu-enter {
          opacity: 0;
          transform: translateY(-30px);
        }
        .dropdown__menu-enter-active {
          opacity: 1;
          transform: translateY(0);
          transition: all 200ms;
        }
        .dropdown__menu-exit {
          opacity: 1;
        }
        .dropdown__menu-exit-active {
          opacity: 0;
          transform: translateY(-30px);
          transition: all 200ms;
        }
      `}
      </style>
      <DropdownText onClick={() => setVisible(visible => !visible)}>
        {text}
        <FontAwesomeIcon icon={faAngleDown} />
      </DropdownText>
      <CSSTransition
        unmountOnExit
        in={visible}
        timeout={500}
        classNames="dropdown__menu"
      >
        <Dropdown />
      </CSSTransition>
    </>
  );
}