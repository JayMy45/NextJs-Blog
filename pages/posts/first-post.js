import Head from "next/head";
import Link from "next/link";
import Layout from '../../components/layout';

export default function FirstPost() {
    return (
        <>
            <Layout>
                <Head>
                    <title>First Post</title>
                </Head>
                <h1>First Post</h1>
                <h2>
                    <div>
                        <Link href="/">Back to Home</Link>
                    </div>
                    <div>
                        <Link href="/jeremy/jeremy-myers">To Jeremy's Link</Link>
                    </div>
                </h2>
            </Layout>
        </>
    )
}