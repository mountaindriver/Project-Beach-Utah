import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function privateLessons() {
  return (
    <>
      <Header />
      <section className="content-section">
        <h1 className="title title-large">Private Lessons</h1>
      </section>
      <Footer />
    </>
  );
}
