import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  const onSubmit = () => {
    // your code here
  };

  return (
    <div>
      <Head>
        <title>wisp Frontend Interview</title>
        <meta name="description" content="Frontend interview starter" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div>Create Account</div>

        <div>
          <div>
            <input placeholder="First name" />
          </div>
          <div>
            <input placeholder="Last name" />
          </div>
          <div>
            <input placeholder="Email" />
          </div>
          <div>
            <input placeholder="Password" />
          </div>
          <div>
            <input placeholder="Phone" />
          </div>

          <button onClick={onSubmit}>Submit</button>
        </div>
      </main>
    </div>
  );
};

export default Home;
