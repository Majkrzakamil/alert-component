import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck, faCircleExclamation, faCircleXmark, faCircleInfo } from '@fortawesome/free-solid-svg-icons'

const StyledWrapper = styled.div`
  display: grid;
  grid-template-columns: 2rem 1fr;
  column-gap: 1rem;
  max-width: 20rem;
  margin: 0 auto;
  padding: 1.25rem;
  border: 0.0625rem solid #EBECF0;
  border-radius: 1rem;
  line-height: 20px;
  letter-spacing: 0.005em;
  color: #05060A;
  font-family: Helvetica;
`

const StyledIcon = styled.div`
  ${({type}) => {
    if(type === 'success') {
      return `
        background-color: #25A77B;
    `
    } else if(type === 'warning') {
      return `
        background-color: #FBAD37;
    `
    } else if(type === 'error') {
      return `
        background-color: #EE1C38;
    `
    } else {
      return `
        background-color: #223AD3;
    `
    }
  }}

  width: 2rem;
  height: 2rem;
  border-radius: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;

  & svg {
    max-width: 1rem;

    & path {
      fill: #fff;
    }
  }
`

const StyledContent = styled.div`
  & h3 {
    margin: 0 0 0.5rem;
    font-size: 1em;
    font-weight: bold;
  }

  & p {
    margin: 0;
    font-size: 0.875em;
    grid-column-start: 2;
  }
`

const getIcon = (type) => {
  if(type === 'success') {
    return faCircleCheck
  } else if(type === 'warning') {
    return faCircleExclamation
  } else if(type === 'error') {
    return faCircleXmark
  } else {
    return faCircleInfo
  }
}

const Alert = ({header, caption, type}) => {
  return (
    <StyledWrapper>
      <StyledIcon type={type}>
        <FontAwesomeIcon icon={getIcon(type)} />
      </StyledIcon>
      <StyledContent>
        <h3>{header}</h3>
        <p>
          {caption}
        </p>
      </StyledContent>
    </StyledWrapper>
  );
}

export default Alert;
