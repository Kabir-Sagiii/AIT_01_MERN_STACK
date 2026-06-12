import "./Card.css";
function Card({ image, title }) {
  return (
    <div className="card">
      <img src={image} width={200} height={200} alt="" />
      <h3>{title}</h3>
    </div>
  );
}

export default Card;
