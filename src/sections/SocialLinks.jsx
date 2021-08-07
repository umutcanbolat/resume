import React from 'react';
import styled from 'styled-components';
import { FaEnvelope, FaGithub, FaGlobe, FaLinkedin } from 'react-icons/fa';
import { SocialItem } from '../components';

const StyledSocialLinks = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;

  .item {
    padding: 0.3rem 0.5rem;
  }
`;

const socialData = [
  {
    id: 'github',
    image: <FaGithub />,
    text: '/umutcanbolat',
    href: 'https://www.github.com/umutcanbolat',
  },
  {
    id: 'linkedin',
    image: <FaLinkedin />,
    text: '/umutcanbolat',
    href: 'https://www.linkedin.com/in/umutcanbolat',
  },
  {
    id: 'web',
    image: <FaGlobe />,
    text: 'umutcanbolat.com',
    href: 'https://www.umutcanbolat.com',
  },
  {
    id: 'email',
    image: <FaEnvelope />,
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
