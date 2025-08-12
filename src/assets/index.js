import team_1 from "./team-1.png";
import logo from "./logo.svg";
import schedule_bg from "./schedule_bg.jpg";
import counter_bg from "./counter_bg.jpg";
import about from "./about.jpg";
import testimonial_bg from "./testimonial_bg.jpg";
import slider1 from "./slider-1.jpg";
import course1 from "./courses-1.jpg";
import course2 from "./courses-2.jpg";
import course3 from "./courses-3.jpg";

export const assets = {
    courses1,
    courses2,
    courses3,
    team_1,
}

export const coursesData = [
    {
        image: courses1,
        title:"Fitness",
        descreption:"Lorem ipsum dolor sit amet, consetetur thedn bsadipscing elitr, sedsd diam nonumy eirmod tempor invidunt ut labore."
    },
    {
        image: courses2,
        title:"Body Building",
        descreption:"Lorem ipsum dolor sit amet, consetetur thedn bsadipscing elitr, sedsd diam nonumy eirmod tempor invidunt ut labore."
    },
    {
        image: courses3,
        title:"Yoga & Meditation",
        descreption:"Lorem ipsum dolor sit amet, consetetur thedn bsadipscing elitr, sedsd diam nonumy eirmod tempor invidunt ut labore."
    },
]

export const team = [
    {
        image:team_1,
        name:"Aman Yadav",
        post:"Fitness Trainer & CEO"
    },
    {
        image:team_1,
        name:"Rounak Gupta",
        post:"Fitness Trainer"
    },
    {
        image:team_1,
        name:"Satyam Singh",
        post:"Fitness"
    },
    {
        image:team_1,
        name:"Pranjul Jaiswal",
        post:"Fitness Trainer"
    },
]

const classSchedule = [
  {
    id: "01",
    day: "Mon, 12:00 AM",
    class: "Fitness Class",
    trainer: "Rounak Gupta",
  },
  {
    id: "02",
    day: "Mon, 12:00 AM",
    class: "Yoga Fitness Class",
    trainer: "Aman Yadav",
  },
  {
    id: "03",
    day: "Mon, 12:00 AM",
    class: "Gym Class",
    trainer: "Nitish Gupta",
  },
  {
    id: "04",
    day: "Mon, 12:00 AM",
    class: "Yoga Fitness Class",
    trainer: "Nikhilesh Gupta",
  },
  {
    id: "05",
    day: "Mon, 12:00 AM",
    class: "Classic Fitness",
    trainer: "Ritesh Giri",
  },
  {
    id: "06",
    day: "Mon, 12:00 AM",
    class: "Yoga Fitness Class",
    trainer: "Vinay Yadav",
  },
  {
    id: "07",
    day: "Mon, 12:00 AM",
    class: "Gym Class",
    trainer: "Sajal Singh",
  },
  {
    id: "08",
    day: "Mon, 12:00 AM",
    class: "Fitness Class",
    trainer: "Sahil Barnwal",
  },
];

const pricingPlan = [
  {
    type: "Basic",
    price: "199",
    duration: 3,
  },
  {
    type: "Standard",
    price: "299",
    duration: 5,
  },
  {
    type: "Premium",
    price: "499",
    duration: 7,
  },
];

const trainer = [
  {
    img: course1,
    name: "Rounak Gupta",
    role: "Trainee",
    about:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum voluptatibus excepturi dolorum ducimus. Quam neque explicabo aperiam ipsam blanditiis id temporibus consectetur perferendis aspernatur fugit quo dolores ullam pariatur illum, aliquid qui a consequatur magni itaque ipsa asperiores! Sed, iste.",
  },
  {
    img: course2,
    name: "Aman Yadav",
    role: "Trainee",
    about:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum voluptatibus excepturi dolorum ducimus. Quam neque explicabo aperiam ipsam blanditiis id temporibus consectetur perferendis aspernatur fugit quo dolores ullam pariatur illum, aliquid qui a consequatur magni itaque ipsa asperiores! Sed, iste.",
  },
  {
    img: course3,
    name: "Ritesh Giri",
    role: "Trainee",
    about:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum voluptatibus excepturi dolorum ducimus. Quam neque explicabo aperiam ipsam blanditiis id temporibus consectetur perferendis aspernatur fugit quo dolores ullam pariatur illum, aliquid qui a consequatur magni itaque ipsa asperiores! Sed, iste.",
  },
];

export {
  logo,
  schedule_bg,
  counter_bg,
  about,
  testimonial_bg,
  slider1,
  course1,
  course2,
  course3,
  classSchedule,
  pricingPlan,
  trainer,
};
