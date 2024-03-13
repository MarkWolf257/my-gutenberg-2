import { Button, Container, Group } from '@mantine/core';
import Link from 'next/link';
import Logo from './Logo.tsx';

const links = [
  { link: '/', label: 'Home' },
  { link: '/about', label: 'About Us' },
  { link: '/books', label: 'Books' },
]

export default function PageHeader() {
  const items = links.map((link) => {
    return (
      <Button key={link.label} component={Link} href={link.link} variant='subtle'>{link.label}</Button>
    )
  })

  return (
    <header>
      <Container>
        <Logo />
        <Group>
          {items}
        </Group>
      </Container>
    </header>
  )
}
