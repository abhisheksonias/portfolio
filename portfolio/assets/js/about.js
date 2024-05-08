document.addEventListener('DOMContentLoaded', (event) => {
  // Select the target element
  const aboutElement = document.querySelector('.about');

  // Define the content you want to load
  const aboutContent = `
  <about style="background-color:#2b2a2a;">
    <div class="p-4">  
      <div class="container">
        <div class="form-header">
         <h6 class="display">About Me</h6>
         <p class="tag" >Hello, I'm Abhishek Soni from Udaipur, currently studying Artificial Intelligence at Marwadi University, Rajkot. I'm deeply passionate about technology and constantly explore various fields such as web development, blockchain, cybersecurity, and machine learning.
         Aside from academics, I'm also a sketch artist, finding inspiration at the intersection of art and technology. My creative pursuits complement my technical interests, giving me a unique perspective on problem-solving.
         I aspire to leverage my expertise in artificial intelligence along with my interests in web development, blockchain, and cybersecurity to create innovative solutions that improve digital experiences and ensure online security.             
         With a commitment to learning and a creative mindset, I am excited about the possibilities that lie ahead in the dynamic world of technology.</p>
       </div>
      </div>
    </div>
  </about>
  
 `;

  // Insert the content into the target element
  aboutElement.innerHTML = aboutContent;
});
// About
