import { Button, Container, Group } from '@mantine/core';
import Link from 'next/link';
import Logo from './Logo.tsx';
import classes from './css/PageHeader.module.css';

const links = [
  { link: '/', label: 'Home' },
  { link: '/about', label: 'About Us' },
  { link: '/books', label: 'Books' },
]

export default function PageHeader() {
  const items = links.map((link) => {
    return (
      <Button className={classes.link} key={link.label} component={Link} href={link.link} variant='transparent'>{link.label}</Button>
    )
  })

  return (
    <header className={classes.header}>
      <Container className={classes.inner} size="lg">
        <Logo />
        <Group>
          {items}
        </Group>
      </Container>
    </header>
  )
}
