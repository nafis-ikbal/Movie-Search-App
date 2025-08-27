import Card_Container from "../../components/card_container/Card_Container";
import { useParams } from "react-router-dom";

export default function Category() {
  const { category } = useParams();

  return(
    <>
      <Card_Container category={category}/>
    </>
  );
}

//this is used for 'card_container' component 