"use client"

export const ClientComponent = () => {
    return (
        <section className="border p-5">
        <h2>This is a client component</h2>

        <ul className="mt-5">
          <li>BROWSER_VARIABLE: {process.env.NEXT_PUBLIC_BROWSER_VARIABLE}</li>
        </ul>
        </section>
        
    )
}