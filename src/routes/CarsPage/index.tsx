import CarCard from "../../components/CarCard";
import CommentCard from "../../components/CommentCard";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import "./styles.css";

export default function CarsPage() {
  return (
    <>
      <Header />
      <main>
        <section className="dsc-cars-section">
          <h2>Venha nos visitar</h2>
          <div className="dsc-cars-cards">
            <CarCard />
            <CarCard />
          </div>
        </section>
        <section className="dsc-comments-section">
          <h2>O que estão dizendo</h2>
          <div className="dsc-comments-cards">
            <CommentCard />
            <CommentCard />
            <CommentCard />
            <CommentCard />
            <CommentCard />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
