import Head from "next/head";
import Link from "next/link";

export default function FirstPost() {
    return (
        <>
            <Head>
                <title>JayMy45</title>
            </Head>
            <h1>Welcome to Jeremy's Page...!</h1>
            <Link href="/">Back to Home Page</Link>
        </>
    )
}