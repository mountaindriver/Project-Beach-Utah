import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function aboutUs() {
  return (
    <>
      <Header />
      <section className="content-section">
        <h1 className="title title-large">About Us</h1>

        <div className="container container-blue">
          <h2>About Us</h2>
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            ex aut alias temporibus. Dolorum dicta ipsa asperiores cum similique
            quidem quae maxime ex, magnam nam nostrum incidunt et itaque libero
            quam animi voluptatum. Porro exercitationem ipsa blanditiis dolor,
            quos ducimus est quae ullam numquam odit labore dicta repellat
            doloremque iste?
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            ex aut alias temporibus. Dolorum dicta ipsa asperiores cum similique
            quidem quae maxime ex, magnam nam nostrum incidunt et itaque libero
            quam animi voluptatum.
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            ex aut alias temporibus. Dolorum dicta ipsa asperiores cum similique
            quidem quae maxime ex, magnam nam nostrum incidunt et itaque libero
            quam animi voluptatum. Porro exercitationem ipsa blanditiis dolor,
            quos.
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
}
