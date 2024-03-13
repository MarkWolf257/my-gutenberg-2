import { Group, Text, Title } from "@mantine/core";
import { FaSearch } from "react-icons/fa";
import { FaBook, FaFilePdf } from "react-icons/fa6";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Title order={1}>My Gutenberg</Title>

      <section>
        <Title order={2}>Why Us?</Title>
        <Group>
          <figure>
            <FaSearch />
            <figcaption>Search from millions of different books.</figcaption>
          </figure>
          <figure>
            <FaBook />
            <figcaption>In all different topics and languages.</figcaption>
          </figure>
          <figure>
            <FaFilePdf />
            <figcaption>Read or Download in your choice of format.</figcaption>
          </figure>
        </Group>
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
