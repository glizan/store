import './App.css';
import Card from "./Card";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAirbnb } from '@fortawesome/free-brands-svg-icons';
import { faHandHoldingDollar } from '@fortawesome/free-solid-svg-icons';

import Navigation from "./Navigation";

import lacrosseBall from "./images/lacrosse2.jpg"
import basketBall from "./images/basketball2.jpg"
import glassBall from "./images/glass2.jpg"
import golfBall from "./images/golf2.jpg"
import medicineBall from "./images/medecine1.jpg"
import tennisBall from "./images/tennis2.jpg"
import baseBall from "./images/baseball2.jpg"

const car = { type: "Fiat", model: "500", color: "white" };


export default function Store() {
  const storeData = [
    { title: "Lacrosse Ball", image: lacrosseBall, price: 12.34, description: "A lacrosse ball is the solid rubber ball that is used, with a lacrosse stick, to play the sport of lacrosse. It is typically white for men's lacrosse, or yellow for women's Lacrosse; but is also produced in a wide variety of colours."},
    { title: "Tennis Ball", image: tennisBall, price: 23.45, description: "A tennis ball is a ball designed for the sport of tennis. Tennis balls are fluorescent yellow in organised competitions, but in recreational play can be virtually any color. Tennis balls are covered in a fibrous felt which modifies their aerodynamic properties, and each has a white curvilinear oval covering it. "},
    { title: "Golf Ball", image: golfBall, price: 34.56, description: "A golf ball is a special ball designed to be used in the game of golf. Under the rules of golf, a golf ball has a mass no more than 1.620 oz (45.9 g), has a diameter not less than 1.680 inches (42.7 mm), and performs within specified velocity, distance, and symmetry limits. " },
    { title: "Glass Ball", image: glassBall, price: 78.90, description: "A crystal ball, also known as an orbuculum or crystal sphere, is  used for creative photography with the term lensball commonly used to describe a crystal ball used as a photography prop." },
    { title: "Baseball", image: baseBall, price: 67.89, description: "A baseball is a ball used in the sport of the same name. The ball consists of a rubber or cork center wrapped in yarn and covered with white natural horsehide or cowhide, or a synthetic composite leather." },
    { title: "Basket Ball", image: basketBall, price: 45.67, description: "A basketball ball is a spherical ball used in basketball games. Basketballs usually range in size from very small promotional items that are only a few inches (some centimeters) in diameter to extra large balls nearly 2 feet (60 cm) in diameter used in training exercises." },
    { title: "Medicine Ball", image: medicineBall, price: 56.78, description: "A medicine ball (also known as an exercise ball, a med ball, or a fitness ball) is a weighted ball whose diameter is about a shoulder-width, (approx. 13.7 inches (350 mm)), often used for rehabilitation and strength training."},
  ];




  return (

    <div className="Store max-w-7xl  mx-auto ">

      <header className="">
      </header>
      <div className="flex flex-row flex-wrap content-center border-solid px-4 bg-slate-200" >

        {storeData.map(d => <Card saleItem={d} />)}
      </div>

    </div>
  );
}


