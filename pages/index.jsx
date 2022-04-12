import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <div>
      <Layout>
        <Head>
          <title>Home</title>
        </Head>
        <div className="speechBubble">
          <img src="/speech-bubble.png" alt="speech bubble" />
          <div className="introText">
            Hi, I'm Charmaine. Graduated a full stack web development bootcamp
            at <Link href="https://upleveled.io/">Upleveled</Link> and I am now
            aspiring to become a frontend developer.
          </div>
        </div>
        <div className="openPeep">
          <img src="/openpeep.png" alt="icon" />
        </div>
      </Layout>
    </div>
  );
}
