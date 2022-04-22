import React from 'react';
import styled from 'styled-components';
import { FaLinkedinIn } from 'react-icons/fa';
import { VscGlobe } from 'react-icons/vsc';
import { FiMail, FiGithub } from 'react-icons/fi';

import SocialItem from './SocialItem';

const StyledSocialLinks = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;

  .item {
    padding: 0.3rem 0.44rem;
  }
`;

const socialIcons = {
  github: <FiGithub />,
  linkedin: <FaLinkedinIn />,
  web: <VscGlobe />,
  email: <FiMail />,
};

const getImageComponent = (socialId) => socialIcons[socialId] || socialIcons.web;

export default function SocialLinks({ data }) {
  const links = data.map(({ id, text, href }) => (
    <div key={id} className="item">
      <SocialItem image={getImageComponent(id)} text={text} href={href} />
    </div>
  ));
  return <StyledSocialLinks>{links}</StyledSocialLinks>;
}
