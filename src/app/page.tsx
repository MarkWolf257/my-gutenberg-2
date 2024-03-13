import { Group, Text, Title } from "@mantine/core";
import NextImage from "next/image";
import { Image } from "@mantine/core";

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
          <Image component={NextImage} src="/image1.jpg" alt="Hello" width={500} height={0} />
          <Text></Text>
        </Group>
      </section>

      <section>
        <Title order={2}>.... or Search</Title>
      </section>
    </main>
  );
}
