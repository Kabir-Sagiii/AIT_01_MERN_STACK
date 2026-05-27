import "./CardContainer.css";
import Card from "../card/Card";
function CardContainer() {
  return (
    <div className="card-container">
      <div>
        <h1>Trending Cloth's</h1>
      </div>
      <div className="cards">
        <Card
          image={
            "https://thf.bing.com/th/id/OIP.GU-gRNeR9CKEluaTq4iahQHaJr?o=7&cb=thfc1falconrm=3&rs=1&pid=ImgDetMain&o=7&rm=3"
          }
          title={"30 % off"}
        />
        <Card
          image={
            "https://nypost.com/wp-content/uploads/sites/2/2023/12/primary-copy.jpg"
          }
          title={"50 % off"}
        />
        <Card
          image={
            "https://hips.hearstapps.com/hmg-prod/images/best-kids-clothes-67d16d8e3e597.jpg"
          }
          title={"70 % off"}
        />
        <Card
          image={
            "https://thumbs.dreamstime.com/b/kids-clothes-set-11847554.jpg"
          }
          title={"30 % off"}
        />
        <Card
          image={
            "https://thf.bing.com/th/id/OIP.GU-gRNeR9CKEluaTq4iahQHaJr?o=7&cb=thfc1falconrm=3&rs=1&pid=ImgDetMain&o=7&rm=3"
          }
          title={"30 % off"}
        />
      </div>
    </div>
  );
}

export default CardContainer;
