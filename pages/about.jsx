import Header from '../components/Header';

function About() {
  return (
    <>
      <Header>
        <title>About</title>
      </Header>

      <section className="hero">
        <div className="container">
          <div className="text-wrapper w-full">
            <h1 data-cy="pageTitle" className="title">
              About
            </h1>
            <p className="description">
              Charmaine Garcia born and raised in Vienna. Currently learning how
              to code and switch my career.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
