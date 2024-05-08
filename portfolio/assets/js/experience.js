AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Digital Marketing Intern",
    cardImage: "assets/images/experience-page/bucketlist.png",
    place: "BucketlistX",
    time: "(June, 2023 - August, 2023)",
    desp: "<li> Content Creator: Craft engaging content for various platforms, maintaining brand consistency and tracking metrics.</li> <li>Social Media Manager: Handle social media accounts, schedule posts, engage with followers, and analyze performance.</li> <li>Community Outreach Coordinator: Connect with the community through events, partnerships, and online platforms, assisting in planning and execution.</li>",
  },
  {
    title: "Developer",
    cardImage: "assets/images/experience-page/raj.jpg",
    place: "Rajasthan Tour Advisor",
    time: "(Dec, 2022 - Present)",
    desp: "<li>Focus on creating user-facing interfaces, translating design mockups into responsive web pages using HTML, CSS, and JavaScript.</li><li>Act as a bridge between the development team and clients, understanding their needs, gathering requirements, and communicating project progress.</li><li>Provide technical support to clients, troubleshoot issues, and address their concerns promptly, ensuring a positive client experience.</li>",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

// Volunter Experience

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "IEEE Industry 4.0 Conclave",
    cardImage: "assets/images/experience-page/IEEE.png",
    description:"Responsible for handling the smooth flow of event ",
  },
  {
    title: "StudentCode-in 2020",
    cardImage: "assets/images/experience-page/mufest.jpg",
    description: "In charge of campus decoration as a core committee member.",
  },
  
];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">
      
      <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

// Hackathon Section

const hackathonsection = document.querySelector(".hackathon-section");
const mentor = [
  {
    title: "Smart India Hackathon",
    subtitle: "Participant",
    image: "assets/images/experience-page/sih.png",
    desp: "Participated in the SIH, where our team developed a Smart Borewell Rescue Robot project, successfully clearing the internal hackathon round.",
    href: "https://www.sih.gov.in/",
  },
  {
    title: "Intellify",
    subtitle: "Participant",
    image: "assets/images/experience-page/intellify.jpg",
    desp: "Participated in a hackathon, where our team developed a Smart Parking System, earning us a spot in the final round.",
    href: "https://www.intellify.marwadiuniversity.ac.in/",
  },
];

const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, subtitle, desp, href }) =>
      (output += `  
      <div class="blog-slider__item swiper-slide">
        <div class="blog-slider__img">
            <img src="${image}" alt="">
        </div>
        <div class="blog-slider__content">
          <div class="blog-slider__title">${title}</div>
          <span class="blog-slider__code">${subtitle}</span>
          <div class="blog-slider__text">${desp}</div>
          <a href="${href}" class="blog-slider__button">Read More</a>   
        </div>
      </div>
      `)
  );
  hackathonsection.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);
