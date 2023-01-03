import React from "react";
import vg from "../assets/8.jpg";
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";

const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>Rahul Paswan</h1>
          <p>I have Knowledge Of Reactjs Technology</p>
        </main>
      </div>

      <div className="home2">
        <img src={vg} alt="Graphics" />

        <div>
          <p>
            I'am A student Of B.Tech And I Have Good Knowledge In Reactjs Technology,
            I Have Made Several Project On Reactjs. 
          </p>
        </div>
      </div>

      <div className="home3" id="about">
        <div>
          <h1>Who we are?</h1>
          <p>
            Currently I'm Pursuing Bachelor Of Technology(B.Tech) From Madan Mohan Malaviya University Of Technology Gorakhpur,
            I Have Completed Intermediate From Shree Shingeshwari Inter College Siddharth Nagar And I Have Completed My High 
            School From Ram Rati Girls Inter College Siddharth Nagar.
            I have Keep Interest In Object Oriented Programming, Data Base Management System, Data Structure And Algorithms,
            Operating System And FrontEnd Developer In Reactjs Technology.
            My Strength Is: Quick Learning New Things, Hard Worker, Self Motivated, Adapt In Any Situations.
            My Weakness Is I'am Not Satisfied Untill i Have Not Completed My Work.
            My Hobbies Are Sketching, Photography, VideoEditing, Playing VollyBall, Cricket, Badminton.
          </p>
        </div>
      </div>

      <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>

          <article>
            <div
              style={{
                animationDelay: "0.3s",
              }}
            >
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>

            <div
              style={{
                animationDelay: "0.5s",
              }}
            >
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>

            <div
              style={{
                animationDelay: "0.7s",
              }}
            >
              <AiFillYoutube />
              <p>Youtube</p>
            </div>

            <div
              style={{
                animationDelay: "1s",
              }}
            >
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;