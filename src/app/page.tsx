"use client";

import { useEffect } from "react";
import Image from "next/image";

export default function Home() {
  const handleSubmit = async (ip: string) => {
    try {
      const response = await fetch('/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ip }),
      });

      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const getIPAddress = async () => {
    try {
      const response = await fetch("https://api64.ipify.org?format=json");
      const data = await response.json();
      return data.ip;
    } catch (error) {
      console.error("Error fetching IP address:", error);
      return null;
    }
  };

  useEffect(() => {
    const fetchAndSubmitIP = async () => {
      const ipAddress = await getIPAddress();
      if (ipAddress) {
        console.log(ipAddress);
        await handleSubmit(ipAddress);
      }
    };

    fetchAndSubmitIP();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-extrabold font-mono underline mb-4 absolute top-5">
        Share Images Anonymously
      </h1>
      <Image width={250}
        height={500} src="/image.png" alt="image" className="rounded-xl" />
    </div>
  );
}
