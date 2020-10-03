import React, { useEffect } from "react";
import "../App.css";

import Menu from "../components/Navigation/Menu";
import Header from "../components/Header/Header";
import CurrentCourse from "../components/Course/CurrentCourse";
import CoursesList from "../components/Course/CoursesList";
import Navbar from "../components/Navigation/Navbar";
import ProgressCard from "../components/Course/ProgressCard";
import Statistics from "../components/Statistics/Graph";
import FilledButton from "../components/Buttons/FilledButton";
import ArrowButton from "../components/Buttons/ArrowButton";

//icons
import premium from "../assets/icons/premium.svg";

const Dashboard = () => {
  useEffect(() => {
    if (!("Notification" in window)) {
      alert("This browser does not support desktop notification");
    } else {
      Notification.requestPermission().then(() => {
        var options = {
          body: "Check out the new course for Analog Photography",
          icon:
            "https://images.pexels.com/photos/853168/pexels-photo-853168.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        };
        new Notification("New Course Added", options);
      });
    }
  }, []);

  return (
    <div class="flex flex-row justify-between">
      <Menu />

      <div class="flex flex-col">
        <Header />

        <div class="flex justify-between items-center">
          <CurrentCourse />
          <ArrowButton text="&#xf060;" />
          <ArrowButton text="&#xf061;" />
        </div>

        <div class="courses">
          <h2 class="heading"> Courses</h2>
          <nav class="flex justify-between">
            <h3 class="active name">All Courses </h3>
            <h3 class="name">The Newest </h3>
            <h3 class="name">Top Rated </h3>
            <h3 class="name"> Most Popular</h3>
          </nav>
          <CoursesList />
        </div>
      </div>

      <div class="flex flex-col">
        <Navbar />
        <br />

        <div class="flex justify-between">
          <ProgressCard num="11" text="completed" />
          <ProgressCard num="4" text="in progress" />
        </div>
        <br />

        <h2 class="heading"> Courses</h2>
        <br />
        <Statistics />
        <br />

        <div class="rect">
          <div>
            <h2 class="heading"> Learn even more!</h2>
            <p class="txt">Unlock premium features only for $9.99 per month.</p>
            <FilledButton to={"/"} text="Go Premium" />
          </div>
          <img src={premium} alt="premium" />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
