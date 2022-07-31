import { useState, useEffect } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import Container from './container';
import { CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types';

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
  // background-color: white;
  display: block;
  width: 100%;
  position: absolute;
  left: 0;
  z-index: 100;
  top: 4.5rem;
  right: 0;
  // border-bottom: 1px solid #ddd;
`;

const DropdownMenu = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
`;

const DropdownItem = styled.li`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-weight: 500;
  border-bottom: 1px dashed #ddd;

  &:last-child {
    border-bottom: none;
  }

  > a {
    padding: 1rem;
    display: block;
    text-decoration: none;

    &:hover {
      color: #0164A6;
    }

  }
`;

const ArrowDownIcon = styled(FontAwesomeIcon)`
  transition: 300ms ease;
  transform: rotate(${props => props.rotate ? '180deg' : '0deg'});

`;


function Dropdown(props) {

  const { items } = props;

  return (
    <DropdownCollapse>
      <Container>
        <DropdownMenu>
          {items.map((item, i) =>
            <DropdownItem key={i}>
              {
                item?.blank
                ? (
                  <a href={item.to} target="__blank">
                    {item.text}
                  </a>
                ) : (
                  <Link href={item.to} passHref>
                    {item.text}
                  </Link>
                )
              }
            </DropdownItem>
          )}
        </DropdownMenu>
      </Container>
    </DropdownCollapse>
  );
}


LinkDropdown.propTypes = {
  text: PropTypes.string,
  menus: PropTypes.array
}

export default function LinkDropdown(props) {
  const { text, menus } = props;
  const [visible, setVisible] = useState(false);


  useEffect(() => {

    function invisibleDropdown(e) {
      const el = e.target;
      const isDrodownCollapse = /link-dropdown/.test(el.getAttribute('class'));

      if (!isDrodownCollapse) setVisible(false);
    }

    document.addEventListener('click', invisibleDropdown);

    return () => {
      document.removeEventListener('click', invisibleDropdown);
    }
  }, []);

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
        <ArrowDownIcon rotate={visible} icon={faCaretDown} />
      </DropdownText>

      <CSSTransition
        unmountOnExit
        in={visible}
        timeout={500}
        classNames="dropdown__menu"
      >
        <Dropdown items={menus} />
      </CSSTransition>
    </>
  );
}