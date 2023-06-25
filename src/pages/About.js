import React from "react";
import IcecreamBackground from "../assets/icecreambackground.jpg";
import "../styles/About.css";

function About() {
  return (
    <div className="about">
      <div className="aboutTop"
        style={{backgroundImage: `url(${IcecreamBackground})`}}>
      </div>
      <div className="aboutBottom">
        <h1>ABOUT US</h1>
        <p>Welcome to Scoop Troop Ice Creams!</p>

        <p>At Scoop Troop Ice Creams, we believe that indulging in a delicious ice cream treat is one of life's simple pleasures. Our passion for creating delectable frozen delights has led us to curate a collection of ten irresistible flavors that are sure to tantalize your taste buds.

We take pride in handcrafting each batch of ice cream with the finest ingredients and a whole lot of love. Our flavors are carefully chosen to cater to a diverse range of preferences, ensuring there's something for everyone. Whether you crave the classic richness of chocolate or the refreshing zing of mint and chocolate, we have you covered. Our other delightful options include the tropical goodness of tender coconut, the crunch of Oreo chips, the nutty perfection of pista, the fruity bliss of strawberry and mango, the nostalgic sweetness of cotton candy, the tangy allure of blackcurrant, and the traditional essence of kulfi.

But Scoop Troop Ice Creams is more than just a place to satisfy your sweet tooth. It's a community of ice cream enthusiasts who appreciate the joy that comes with every lick. We strive to create an inviting and fun environment for ice cream lovers to connect and share their passion for frozen delights.

Customer satisfaction is our top priority. We aim to deliver an exceptional online shopping experience, ensuring that your Scoop Troop Ice Creams journey is as smooth as our delectable creations. From easy navigation on our user-friendly website to prompt delivery right to your doorstep, we go the extra mile to make your ice cream experience unforgettable.

Whether you're celebrating a special occasion, treating yourself, or simply seeking a moment of pure indulgence, Scoop Troop Ice Creams is here to make it extra special. Join us on this frozen adventure and let us delight your senses, one scoop at a time.

Indulge. </p>
         <p>Savor.Enjoy the sweet life with Scoop Troop Ice Creams!</p>
         


      </div>
      
    </div>
  )
}

export default About;
