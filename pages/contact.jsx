import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../components/Navbar';

function Contact() {
  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>

      <Navbar />

      <section className="hero">
        <div className="container">
          <div className="text-wrapper w-full">
            <h1 data-cy="pageTitle" className="title">
              Contact
            </h1>
            <p className="description">Charmaine Garcia</p>
            <ul className="contact-links">
              <li className="contact-item">
                Email: garciacharmaine95@gmail.com
              </li>
              <li className="contact-item">Phone: +436603611553</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
