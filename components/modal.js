import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { CSSTransition } from 'react-transition-group';


const ModalContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 3;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(4%, 29%, 47%, 0.60);
  position: fixed;
  backdrop-filter: blur(2px);
`;
const ModalHeader = styled.div`
  border-bottom: 1px solid #ddd;
  padding: .7rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const ModalBody = styled.div`
  padding: .7rem 1rem;
`;
const ModalContent = styled.div`
  background-color: white;
  position: fixed;
  top: 100px;
  z-index: 3;
  width: 600px;
  border-radius: 4px;
`;

const Button = styled.button`
  font-size: 1.2rem;
  border: none;
  background: transparent;
  cursor: pointer;
  padding: .2rem .5rem;
  border-radius: 4px;

  &:hover {
    background-color: #f1f1f1;
  }
`;
const ModalHeading = styled.h3`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-weight: 600;
  margin: 0;
`;


export default function Modal(props) {

  const { children, show, heading, onDismiss } = props;

  useEffect(() => {

    function onBackdropClick(e) {
      const el = e.target;
      const pattern = /modal__ModalContainer/;
      const isModalContainer = pattern.test(el.getAttribute('class'));

      if (isModalContainer) onDismiss();

    }

    document.addEventListener('click', onBackdropClick);


    return () => {
      document.removeEventListener('click', onBackdropClick);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return createPortal(
    <>
      <style global jsx>{`
        .modal__container-enter {
          opacity: 0;
        }
        .modal__container-enter-active {
          opacity: 1;
          transition: opacity 300ms;
        }
        .modal__container-exit {
          opacity: 1;
        }
        .modal__container-exit-active {
          opacity: 0;
          transition: opacity 300ms;
        }

        .modal__container-enter .modal__content {
          opacity: 0;
          transform: translateY(50px) scale(.8);
        }
        .modal__container-enter-active .modal__content {
          opacity: 1;
          transition: all 200ms;
          transform: translateY(0px) scale(1);
        }
        .modal__container-exit .modal__content {
          opacity: 1;
        }
        .modal__container-exit-active .modal__content {
          opacity: 0;
          transition: all 200ms;
          transform: translateY(50px) scale(.8);
        }
      `}
      </style>
      <CSSTransition
        in={show}
        unmountOnExit
        timeout={400}
        classNames="modal__container"
      >
        <ModalContainer>
          <ModalContent className="modal__content">
            <ModalHeader>
              <ModalHeading>
                {heading}
              </ModalHeading>
              <Button onClick={onDismiss}>
                <FontAwesomeIcon icon={faXmark} />
              </Button>
            </ModalHeader>
            <ModalBody>
              { children }
            </ModalBody>
          </ModalContent>
        </ModalContainer>
      </CSSTransition>
    </>
  , document.getElementById('portal'));
}