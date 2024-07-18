import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import soupImage from "../assets/soup.jpg";

const RecipeCard = ({ title, content, imageSrc, onClick }) => {
  return (
    <Card className="w-96 bg-white rounded-xl m-10">
      <Card.Img variant="top" src={soupImage} className=" rounded-t-xl" />
      <Card.Body>
        <Card.Title className=" text-3xl mt-4">{title}</Card.Title>
        <Card.Text className="text-gray-600 p-6">{content}</Card.Text>
        <Button
          className="w-36 h-12 rounded-xl mb-7 border-2 border-red-400 text-red-600 bg-red-200 hover:bg-red-300"
          onClick={onClick}
        >
          Read More
        </Button>
      </Card.Body>
    </Card>
  );
};

export default RecipeCard;
