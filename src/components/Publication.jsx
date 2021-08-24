import React from 'react';
import styled from 'styled-components';

import Highlighter from './Highlighter';
import { getFormattedDate } from '../utils/dateUtils';

const StyledPublication = styled.div`
  .heading {
    display: flex;
    justify-content: space-between;
  }

  header {
    display: flex;
    flex-flow: column;
  }

  h4 {
    margin: 0;
    font-size: 0.95rem;
    width: 80%;
  }

  .date {
    font-style: italic;
    color: dimgray;
  }

  .description {
    margin-top: 0.17rem;
  }
`;

export default function Publication({ name, descriptions, date, publisher, link }) {
  return (
    <StyledPublication>
      <header>
        <div className="heading">
          <h4 className="role-title">
            <span>{name} • </span>
            <a href={link} target="_blank" rel="noopener noreferrer">
              {publisher}
            </a>
          </h4>
          <span className="date">{getFormattedDate(date)}</span>
        </div>
      </header>

      <div className="description">
        {descriptions.map((desc) => (
          <Highlighter key={desc} text={desc} />
        ))}
      </div>
    </StyledPublication>
  );
}
