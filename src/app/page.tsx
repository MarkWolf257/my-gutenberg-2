import { Group, Text, Title } from "@mantine/core";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Title order={1}>My Gutenberg</Title>

      <section>
        <Title order={2}>Why Us?</Title>
        <Group>
          <figure></figure>
          <figure></figure>
          <figure></figure>
        </Group>
      </section>

      <section>
        <Title order={2}>Explore</Title>
        <Group>
          <Image src="image1.jpg" alt="Hall of a big library" />
          <Text></Text>
        </Group>
      </section>

      <section>
        <Title order={2}>.... or Search</Title>
      </section>
    </main>
  );
}
