'use client'
import React, { useEffect, useState } from 'react';

export default function ToDoLayout({ children }: { children: React.ReactNode }) 
{
  const [isClient, setIsClient] = useState(false);

  useEffect(() => 
  {
    setIsClient(true);
  }, []);

  if (!isClient) 
  {
    return null; 
  }

  return (
    <div>
      <header
        style={{
          backgroundColor: "white",
          textAlign: "center",
          verticalAlign: "top",
          color: "darkblue",
          fontFamily: "Trebuchet MS",
          fontSize: "150%",
        }}
      >
        <b>To-Do List 📝</b>
      </header>

      <main>{children}</main>
    </div>
  );
}
