import { Button, Container, Group } from '@mantine/core';
import Link from 'next/link';
import Logo from './Logo';
import classes from './css/PageHeader.module.css';

const links = [
  { link: '/', label: 'Home' },
  { link: '/books', label: 'Books' },
  { link: '/about', label: 'About Us' },
]

export default function PageHeader() {
  const items = links.map((link) => {
    return (
      <Link className={classes.link} key={link.label} href={link.link}>{link.label}</Link>
    )
  })

  return (
    <header className={classes.header}>
      <Container className={classes.inner} size="lg">
        <Logo />
        <Group gap={25}>
          {items}
        </Group>
      </Container>
    </header>
  )
}
