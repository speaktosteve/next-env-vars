import { unstable_noStore as noStore } from 'next/cache'

export const ServerComponent = () => {
    noStore()
    return (
        <section className="border p-5">
            <h2>This is a server component</h2>
            <ul className="mt-5">
                <li>RUNTIME_VARIABLE: {process.env.RUNTIME_VARIABLE}</li>
            </ul>
        </section>
    )
}