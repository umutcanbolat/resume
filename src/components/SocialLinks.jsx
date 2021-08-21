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

const socialData = [
  {
    id: 'github',
    image: <FiGithub />,
    text: '/umutcanbolat',
    href: 'https://www.github.com/umutcanbolat',
  },
  {
    id: 'linkedin',
    image: <FaLinkedinIn />,
    text: '/umutcanbolat',
    href: 'https://www.linkedin.com/in/umutcanbolat',
  },
  {
    id: 'web',
    image: <VscGlobe />,
    text: 'umutcanbolat.com',
    href: 'https://www.umutcanbolat.com',
  },
  {
    id: 'email',
    image: <FiMail />,
    text: 'hello@umutcanbolat.com',
    href: 'mailto:hello@umutcanbolat.com',
  },
];

export default function SocialLinks() {
  const links = socialData.map(({ id, image, text, href }) => (
    <div key={id} className="item">
      <SocialItem image={image} text={text} href={href} />
    </div>
  ));
  return <StyledSocialLinks>{links}</StyledSocialLinks>;
}
