import PropTypes from "prop-types";
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { Fragment } from "react";

Breadcrumb.propTypes = {
  paths: PropTypes.array
};

const BreadcrumbList = styled.ul`
  padding: 0;
  list-style: none
  margin-top: 2rem;
  display: block;
`;

const BreadcrumbItem = styled.li`
  display: inline-block;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: .9rem;
  margin-right: .6rem;

  &:last-child {
    font-weight: 600;
    color: var(--primary);
  }
`;

export default function Breadcrumb({paths}) {

  const breadcrumbs = paths.map((path, it) => {

    if ( (it + 1) === paths.length)  {
      return <BreadcrumbItem key={path}>{path}</BreadcrumbItem>;
    }

    return (
      <Fragment key={path + it}>
        <BreadcrumbItem>{path}</BreadcrumbItem>
        <BreadcrumbItem>
          <FontAwesomeIcon icon={faAngleRight} />
        </BreadcrumbItem>
      </Fragment>

    )
  });


  return (
    <BreadcrumbList>
      {breadcrumbs}
    </BreadcrumbList>
  );
}