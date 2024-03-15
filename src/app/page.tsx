import { Group, Text, Title, Stack, Button } from "@mantine/core";
import { FaSearch } from "react-icons/fa";
import { FaBook, FaFilePdf } from "react-icons/fa6";
import Image from "next/image";
import classes from "./page.module.css";

export default function Home() {
  const captions = [
    "Search from millions of different books.",
    "In all different topics and languages.",
    "Read or Download in your choice of format.",
  ]

  const figures = [FaSearch, FaBook, FaFilePdf].map((Component, index) => {
    return (
      <figure key={index} className={classes.section}>
        <Component size={60} />
        <figcaption className="max-w-64 font-lato text-xl text-center">{captions[index]}</figcaption>
      </figure>
    )
  })

  return (
    <main>
      <Title className={classes.banner} order={1}>My Gutenberg</Title>

      <section className={classes.section}>
        <Title order={2}>Why Us?</Title>
        <Group gap={100}>{figures}</Group>
      </section>

      <section className={classes.section}>
        <Title order={2}>Explore</Title>
        <Group gap={25}>
          <Image src="/image1.jpg" alt="Hello" width={500} height={0} />
          <Stack className="max-w-[500px]" align="center">
            <Text className="font-lato text-center" size="xl">Explore books in various different formats to find a book of your liking.</Text>
            <Button className="max-w-fit">Explore</Button>
          </Stack>
        </Group>
      </section>

      <section className={classes.section}>
        <Title order={2}>.... or Search</Title>
      </section>
    </main>
  );
}
