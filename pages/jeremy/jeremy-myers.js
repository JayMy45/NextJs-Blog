import Head from "next/head";
import Link from "next/link";
import Layout from '../../components/layout';


export default function FirstPost() {
    return (
        <>
            <Layout>
                <Head>
                    <title>JayMy45</title>
                </Head>
                <h1>Welcome to Jeremy's Page...!</h1>
                <h2>
                    <Link href="/">Back to Home Page</Link>
                </h2>
            </Layout>
        </>
    )
}