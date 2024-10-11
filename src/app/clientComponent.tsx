"use client"

import { useState } from "react";

export const ClientComponent = () => {
    const [name, setName] = useState<string>();
    return (
        <section className="border p-5">
        <h2>This is a client component</h2>
        <p>its using state see? Name is {name}</p>
        <input type="text" onChange={(e) => setName(e.target.value)} />
        <ul className="mt-5">
          <li>BROWSER_VARIABLE: {process.env.NEXT_PUBLIC_BROWSER_VARIABLE}</li>
        </ul>
        </section>
        
    )
}