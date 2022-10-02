import type { NextPage } from "next";
import Head from "next/head";

const Success: NextPage = () => {
  return (
    <div>
      <Head>
        <title>wisp Frontend Interview</title>
        <meta name="description" content="Frontend interview starter" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="text-3xl font-bold text-customMingo-200">
          Your account is now active.
        </h1>
      </main>
    </div>
  );
};

export default Success;
