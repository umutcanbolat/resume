import React from 'react';
import styled from 'styled-components';
import Highlighter from 'react-highlight-words';
import { FiGithub, FiChrome, FiGlobe } from 'react-icons/fi';
import { ImNpm } from 'react-icons/im';

import TechKeywords from '../static/techKeywords.json';

const StyledDescribedItem = styled.div`
  ul {
    display: flex;
    align-items: center;
    list-style-type: none;
    padding: unset;
    margin: 0;
    margin-left: 0.6rem;
  }

  li {
    font-size: 1.1rem;
  }

  li:not(:last-child) {
    margin-right: 0.4em;
  }

  a {
    color: black;
  }

  header {
    display: flex;
    align-items: center;
    margin-bottom: 0.2rem;
  }

  h3 {
    margin: 0;
  }
`;

const icons = {
  github: <FiGithub />,
  web: <FiGlobe />,
  chromeWebStore: <FiChrome />,
  npm: <ImNpm />,
};

export default function DescribedItem({ name, descriptions, links }) {
  return (
    <StyledDescribedItem>
      <header>
        <h3>{name}</h3>
        <ul>
          {Object.entries(links).map(([platform, url]) => (
            <li key={platform}>
              <a href={url} target="_blank" rel="noopener noreferrer">
                {icons[platform]}
              </a>
            </li>
          ))}
        </ul>
      </header>
      {descriptions.map((desc) => (
        <p key={desc}>
          <Highlighter searchWords={TechKeywords} textToHighlight={desc} />
        </p>
      ))}
    </StyledDescribedItem>
  );
}
