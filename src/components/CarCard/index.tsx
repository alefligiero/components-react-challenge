import './styles.css';
import carImg from "../../assets/car-card.png";

export default function CarCard() {
  return (
    <div className="dsc-car-card">
        <img src={carImg} alt="car" />
        <h3>Lorem ipsum dolor</h3>
    </div>
  );
}
