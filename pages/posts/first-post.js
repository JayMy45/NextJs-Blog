import Link from "next/link";

export default function FirstPost() {
    return (
        <>
            <h1>First Post</h1>
            <h2>
                <div>
                    <Link href="/">Back to Home</Link>
                </div>
                <div>
                    <Link href="/jeremy/jeremy-myers">To Jeremy's Link</Link>
                </div>
            </h2>
        </>
    )
}