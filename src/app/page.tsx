"use client";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { Container } from "@/components/Container";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Toggle } from "@/components/Toggle";
import { useState } from "react";

export default function Home() {
  // State to track the toggle switch status
  const [isChecked, setIsChecked] = useState(false);

  // Function to toggle the switch state
  const toggleSwitch = () => {
    setIsChecked(!isChecked);
  };

  // Data representing different pricing options
  const options = [
    {
      title: "Basic",
      price: isChecked ? 19.99 : 199.99,
      storage: "500 GB",
      userAllowed: 2,
      sendUp: 3,
    },
    {
      title: "Professional",
      price: isChecked ? 24.99 : 249.99,
      storage: "1 TB",
      userAllowed: 5,
      sendUp: 10,
    },
    {
      title: "Master",
      price: isChecked ? 39.99 : 399.99,
      storage: "2 TB",
      userAllowed: 10,
      sendUp: 20,
    },
  ];
  return (
    <Container className="mt-16 min-h-screen md:mt-0">
      <Header>
        <Toggle isChecked={isChecked} toggleSwitch={toggleSwitch} />
      </Header>
      <main className="flex w-full flex-col gap-7 text-center md:grid md:grid-cols-3  md:gap-0">
        {options.map(({ title, ...rest }, index) => (
          <Card
            key={index}
            title={title}
            {...rest}
            isProfessional={title === "Professional"}
          >
            <Button
              text="Learn More"
              className="mt-8"
              isProfessional={title === "Professional"}
            />
          </Card>
        ))}
      </main>
      <Footer />
    </Container>
  );
}
