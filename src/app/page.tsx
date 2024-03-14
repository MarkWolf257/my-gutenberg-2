import { Group, Text, Title } from "@mantine/core";
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
      <figure key={index}>
        <Component size={60} />
        <figcaption>{captions[index]}</figcaption>
      </figure>
    )
  })

  return (
    <main>
      <Title className={classes.banner} order={1}>My Gutenberg</Title>

      <section className={classes.section}>
        <Title className={classes.title2} order={2}>Why Us?</Title>
        <Group>{figures}</Group>
      </section>

      <section>
        <Title order={2}>Explore</Title>
        <Group>
          <Image src="/image1.jpg" alt="Hello" width={500} height={0} />
          <Text>Explore books in various different formats to find a book of your liking.</Text>
        </Group>
      </section>

      <section>
        <Title order={2}>.... or Search</Title>
      </section>
    </main>
  );
}
