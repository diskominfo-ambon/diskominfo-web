import React, { useState } from 'react';
import styled from 'styled-components';


const CollapseContainer = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  font-family: 'Plus Jakarta Sans', sans-serif;
`;
const CollapseItem = styled.li`
  border: 1px solid ${props => props.showable ? 'var(--primary)' : '#ddd'};
  border-radius: 4px;
  max-height: ${props => props.showable ? '500px' : '66px'};
  overflow: hidden;
  transition: all 700ms ease;
  margin-bottom: .8rem;

  &:last-child {
    margin: 0;
  }
`;
const CollapseTitle = styled.h4`
  margin: 0;
  text-align: left;
  color: var(--dark);
  font-weight: 600;
`;
const CollapseContent = styled.div`
  padding: 0 1.4rem;
  text-align: left;
  padding-bottom: 1.4rem;
  > p {
    margin: 0;
    padding: 0;
  }
`;
const CollapseHeader = styled.div`
  padding: .7rem 1.4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const CollapseButton = styled.button`
  background-color: white;
  border: 0;
  cursor: pointer;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background-color: #f2f2f2;
  }
  > svg {
    width: 20px;
    height: 20px;
  }
`;


export default function Collapse(props) {
  const initialCollapse = 0;
  const [current, setCurrent] = useState(initialCollapse);

  if (props.children.length == 0) {
    throw new Error("Collapse component must be children");
  }

  return (
    <CollapseContainer>
      {React.Children.map(props.children, (component, key) =>
        React.cloneElement(component, { key: key, onClicked: () => setCurrent(key), isShowable: current === key })
      )}
    </CollapseContainer>
  );
}



const Item = ({ title, children, onClicked, isShowable }) => {
  return (
    <CollapseItem showable={ isShowable }>
      <CollapseHeader onClick={onClicked}>
        <CollapseTitle>{ title }</CollapseTitle>
        <CollapseButton>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </CollapseButton>
      </CollapseHeader>
      <CollapseContent>
        {children}
      </CollapseContent>
    </CollapseItem>
  )
}



Collapse.Item = Item;