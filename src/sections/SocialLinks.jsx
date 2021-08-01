import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { SocialItem } from '../components';

export default function SocialLinks() {
  return (
    <>
      <SocialItem
        image={<FaGithub />}
        text="umutcanbolat"
        link="https://www.github.com/umutcanbolat"
      />
    </>
  );
}
