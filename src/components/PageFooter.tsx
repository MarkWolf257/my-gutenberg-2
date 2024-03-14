import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6";
import Link from 'next/link';
import Logo from './Logo';
import { Group, Container, Divider, Text } from '@mantine/core';
import classes from './css/PageFooter.module.css';

export default function PageFooter() {
  const socialMediaLinks = ['', '', ''];
  const socialMediaIcons = [FaFacebook, FaInstagram, FaTwitter].map((Component, index) => {
    return (
      <Link key={index} href={socialMediaLinks[index]}>
        <Component size={40} />
      </Link>
    )
  })

  return (
    <footer className={classes.footer}>
      <Logo />
      <Group gap={30}>
        {socialMediaIcons}
      </Group>
      <Divider style={{ width: '70%' }} />
      <Text>All rights reserved.</Text>
    </footer>
  )
}
