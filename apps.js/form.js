let currentStep = 1;
let selectedTemplate = '';
let profileImageData = '';

function showStep(step) {
  document.querySelectorAll('.form-step').forEach((el, i) => {
    el.classList.toggle('active', i === step - 1);
  });
}

function nextStep() {
  if (currentStep < 4) {
    currentStep++;
    showStep(currentStep);
    if (currentStep === 4) generateResume();
  }
}

function prevStep() {
  if (currentStep > 1) {
    currentStep--;
    showStep(currentStep);
  }
}

function selectTemplate(img, name) {
  document.querySelectorAll('.template img').forEach(el => el.classList.remove('selected'));
  img.classList.add('selected');
  selectedTemplate = name;
}

function previewPicture(event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(e) {
      profileImageData = e.target.result;
    };
    reader.readAsDataURL(file);
  }
}
function addSkill() {
  const skillSection = document.getElementById("skillsSection");
  const skillEntry = document.createElement("div");
  skillEntry.className = "skill-entry";
  skillEntry.innerHTML = `
    <input type="text" name="skills[]" class="skillInput" placeholder="e.g., Python" />
    <button type="button" onclick="removeSkill(this)">Remove</button>
  `;
  skillSection.appendChild(skillEntry);
}

function removeSkill(button) {
  button.parentElement.remove();
}
function addEducation() {
  const section = document.getElementById("educationSection");
  const entry = document.createElement("div");
  entry.className = "education-entry";
  entry.innerHTML = `
    <input type="text" class="eduDegree" placeholder="Degree" />
    <input type="text" class="eduInstitution" placeholder="Institution" />
    <input type="text" class="eduYear" placeholder="Year" />
    <button type="button" onclick="removeEducation(this)">Remove</button>
  `;
  section.appendChild(entry);
}

function removeEducation(button) {
  button.parentElement.remove();
}
function addWork() {
  const section = document.getElementById("workSection");
  const entry = document.createElement("div");
  entry.className = "work-entry";
  entry.innerHTML = `
    <input type="text" class="workPosition" placeholder="Job Title" />
    <input type="text" class="workCompany" placeholder="Company" />
    <input type="text" class="workYear" placeholder="Year" />
    <textarea class="workDesc" placeholder="Description"></textarea>
    <button type="button" onclick="removeWork(this)">Remove</button>
  `;
  section.appendChild(entry);
}

function removeWork(button) {
  button.parentElement.remove();
}

function generateResume() {
  // Collect form data
  const fullName = document.getElementById('firstName').value + ' ' + document.getElementById('lastName').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const address = document.getElementById('address').value;
  const linkedin = document.getElementById('linkedin').value;
  const website = document.getElementById('website').value;
  const profile = document.getElementById('profile').value;
  const gender = document.getElementById('gender').value;
  const dob = document.getElementById('dob').value;
  const achievements = document.getElementById('achievements').value;

  // Collect dynamic entries
  const education = Array.from(document.querySelectorAll('.education-entry')).map(entry => ({
    degree: entry.querySelector('.eduDegree').value,
    institution: entry.querySelector('.eduInstitution').value,
    year: entry.querySelector('.eduYear').value
  }));

  const workExperience = Array.from(document.querySelectorAll('.work-entry')).map(entry => ({
    position: entry.querySelector('.workPosition').value,
    company: entry.querySelector('.workCompany').value,
    year: entry.querySelector('.workYear').value,
    description: entry.querySelector('.workDesc').value
  }));

  const skills = Array.from(document.querySelectorAll('.skillInput')).map(skill => skill.value);

  // Template generation functions
  const generateStanford = () => `
       <style>
    body {
      margin: 0;
      font-family: Arial, sans-serif;
      background: #f8f9fa;
    }
    .resume {
      display: flex;
      flex-direction: row-reverse;
      max-width: 1100px;
      margin: 40px auto;
      background: white;
      box-shadow: 0 0 10px rgba(0,0,0,0.1);
    }
    .sidebar {
      background-color: #1a3d36;
      color: white;
      width: 30%;
      padding: 40px 20px;
      box-sizing: border-box;
    }
    .sidebar img {
      width: 120px;
      height: 120px;
      object-fit: cover;
      border-radius: 50%;
      display: block;
      margin: 0 auto 20px;
      border: 4px solid #fff;
    }
    .sidebar h2 {
      text-align: center;
      margin: 20px 0 10px;
      font-size: 20px;
    }
    .sidebar p, .sidebar li {
      font-size: 14px;
      line-height: 1.6;
      color: #dfe6e9;
    }
    .sidebar ul {
      list-style: none;
      padding-left: 0;
    }
    .main {
      width: 70%;
      padding: 40px;
      box-sizing: border-box;
    }
    .main h1 {
      font-size: 30px;
      margin-bottom: 5px;
    }
    .main h3 {
      color: #555;
      font-weight: normal;
      margin-top: 0;
      margin-bottom: 30px;
    }
    .section {
      margin-bottom: 30px;
    }
    .section h2 {
      color: #1a3d36;
      border-bottom: 2px solid #1a3d36;
      padding-bottom: 5px;
      margin-bottom: 15px;
      font-size: 20px;
    }
    .item {
      margin-bottom: 15px;
    }
    .item h4 {
      margin: 0;
      font-size: 16px;
      color: #333;
    }
    .item span {
      font-size: 13px;
      color: #999;
    }
    .item p {
      font-size: 14px;
      margin: 5px 0 0;
    }
      * {
      box-sizing: border-box;
    }

    body {
      margin: 0;
      font-family: Arial, sans-serif;
      background: #f8f9fa;
    }

    .resume {
      display: flex;
      flex-direction: row-reverse;
      max-width: 1100px;
      margin: 40px auto;
      background: white;
      box-shadow: 0 0 10px rgba(0,0,0,0.1);
    }

    .sidebar {
      background-color: #1a3d36;
      color: white;
      width: 30%;
      padding: 40px 20px;
    }

    .main {
      width: 70%;
      padding: 40px;
    }

    /* Responsive Design */
    @media (max-width: 768px) {
      .resume {
        flex-direction:  row-reverse;
        margin: 20px auto;
        box-shadow: none;
      }

      .sidebar, .main {
        width: 100%;
        padding: 30px 20px;
      }

      .sidebar img {
        width: 100px;
        height: 100px;
      }

      .sidebar h2 {
        font-size: 18px;
        margin: 15px 0;
      }

      .main h1 {
        font-size: 26px;
        text-align: center;
      }

      .main h3 {
        text-align: center;
        margin-bottom: 25px;
      }
    }

   

    /* Original styles remain unchanged below */
    .sidebar img {
      width: 120px;
      height: 120px;
      object-fit: cover;
      border-radius: 50%;
      display: block;
      margin: 0 auto 20px;
      border: 4px solid #fff;
    }

    .sidebar h2 {
      text-align: center;
      margin: 20px 0 10px;
      font-size: 20px;
    }

    .sidebar p, .sidebar li {
      font-size: 14px;
      line-height: 1.6;
      color: #dfe6e9;
    }

    .sidebar ul {
      list-style: none;
      padding-left: 0;
    }

    .main h1 {
      font-size: 30px;
      margin-bottom: 5px;
    }

    .main h3 {
      color: #555;
      font-weight: normal;
      margin-top: 0;
      margin-bottom: 30px;
    }

    .section {
      margin-bottom: 30px;
    }

    .section h2 {
      color: #1a3d36;
      border-bottom: 2px solid #1a3d36;
      padding-bottom: 5px;
      margin-bottom: 15px;
      font-size: 20px;
    }

    .item {
      margin-bottom: 15px;
    }

    .item h4 {
      margin: 0;
      font-size: 16px;
      color: #333;
    }

    .item span {
      font-size: 13px;
      color: #999;
    }

    .item p {
      font-size: 14px;
      margin: 5px 0 0;
    }
@media (max-width: 480px) {
    /* Previous 480px styles */
    .resume {
        margin: 10px;
        flex-direction:row-reverse;
    }

    .sidebar, .main {
        width: 100%;
        padding: 20px 15px;
    }

    .main h1 {
        font-size: 22px;
        line-height: 1.2;
    }

    .main h3 {
        font-size: 14px;
        margin-bottom: 20px;
    }

    .section h2 {
        font-size: 18px;
        padding-bottom: 3px;
    }

    /* Enhanced mobile-first adjustments */
    .sidebar img {
        width: 90px;
        height: 90px;
        border-width: 3px;
        margin-bottom: 15px;
    }

    .sidebar h2 {
        font-size: 17px;
        margin: 15px 0 8px;
    }

    .sidebar p, .sidebar li {
        font-size: 13px;
        line-height: 1.5;
    }

    .section {
        margin-bottom: 25px;
    }

    .item {
        margin-bottom: 12px;
    }

    .item h4 {
        font-size: 15px;
    }

    .item span {
        font-size: 12px;
    }

    .item p {
        font-size: 13px;
        line-height: 1.4;
    }

    /* Extra small devices (phones, 360px and down) */
    @media (max-width: 360px) {
        .resume {
            margin: 5px;
        }

        .sidebar, .main {
            padding: 15px 10px;
        }

        .main h1 {
            font-size: 20px;
        }

        .main h3 {
            font-size: 13px;
            margin-bottom: 15px;
        }

        .sidebar img {
            width: 80px;
            height: 80px;
            margin-bottom: 10px;
        }

        .section h2 {
            font-size: 16px;
            margin-bottom: 12px;
        }

        .item h4 {
            font-size: 14px;
        }

        .item span {
            font-size: 11px;
        }

        .item p {
            font-size: 12px;
        }

        .sidebar h2 {
            font-size: 16px;
        }

        .sidebar p, .sidebar li {
            font-size: 12px;
        }
    }
}
  </style>

<div class="resume">
    <div class="sidebar">
     ${profileImageData ? `<img class="profile-pic" src="${profileImageData}" alt="Profile Picture">` : ''}
      <h2>Contact</h2>
      <p><strong>Phone:</strong><br>${phone}</p>
      <p><strong>Email:</strong><br>${email}</p>
      <p><strong>Address:</strong><br>${address}</p>

      <h2>Skills</h2>
    <ul>${skills.map(skill => `<li>${skill}</li>`).join('')}</ul>

      <h2>Languages</h2>
      <p>English, Spanish</p>

      <h2>Achievements</h2>
      ${achievements ? `<h2>Achievements</h2><p>${achievements}</p>` : ''}
    </div>

    <div class="main">
      <h1>${fullName}</h1>
      <h3>Web Development</h3>

      <div class="section">
        <h2>Profile</h2>
        <p>${profile}</p>
      </div>

      ${workExperience.length ? `
        <div class="section">
          <h2>Work Experience</h2>
          ${workExperience.map(work => `
            <div class="item">
              <h4>${work.position}</h4>
              <span>${work.company} | ${work.year}</span>
              <p>${work.description}</p>
            </div>
          `).join('')}
        </div>` : ''}

        ${education.length ? `
          <div class="section">
            <h2>Education</h2>
            ${education.map(edu => `
              <div class="item">
                <h4>${edu.degree}</h4>
                <span>${edu.institution} | ${edu.year}</span>
              </div>
            `).join('')}
          </div>` : ''}
        </div>
      </div>`;

  const generateHarvard = () => `
    <style>
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 0;
      background: #f2f2f2;
    }
    .container {
      max-width: 900px;
      margin: 30px auto;
      background: white;
      box-shadow: 0 0 10px rgba(0,0,0,0.1);
      display: flex;
    }
    .sidebar {
      width: 30%;
      background: #1aa72d;
      color: #fff;
      padding: 20px;
      text-align: center;
    }
    .sidebar img {
      width: 120px;
      height: 120px;
      border-radius: 50%;
      object-fit: cover;
      border: 4px solid white;
    }
    .sidebar h2 {
      margin: 15px 0 5px;
    }
    .section {
      margin: 20px 0;
      text-align: left;
    }
    .section h3 {
      border-bottom: 1px solid #fff;
      padding-bottom: 5px;
      margin-bottom: 10px;
    }
    .main-content {
      width: 70%;
      padding: 30px;
    }
    .main-content h1 {
      color: #008000;
    }
    .main-content .section h3 {
      color: #008000;
    }
    ul {
      padding-left: 20px;
    }
    .section p {
      margin: 5px 0;
    }
    .experience, .education {
      margin-bottom: 20px;
    }
    .achievement {
      margin-top: 10px;
    }
       body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 0;
      background: #f2f2f2;
    }
    .container {
      max-width: 900px;
      margin: 30px auto;
      background: white;
      box-shadow: 0 0 10px rgba(0,0,0,0.1);
      display: flex;
      flex-direction: row; /* Explicit row direction */
    }
    
    /* Responsive changes start here */
    @media (max-width: 768px) {
      .container {
        flex-direction: row;
        margin: 10px auto;
      }
      
      .sidebar, .main-content {
        width: 100%;
        box-sizing: border-box;
      }
      
      .sidebar {
        text-align: center;
        padding: 15px;
      }
      
      .sidebar img {
        width: 100px;
        height: 100px;
      }
      
      .main-content {
        padding: 20px;
      }
      
      h1 {
        font-size: 24px;
      }
      
      .section h3 {
        font-size: 16px;
      }
    }
    
    @media (max-width: 480px) {
      .container {
        box-shadow: none;
      }
      
      .education p, .experience p {
        margin-left: 0;
        padding-left: 0;
      }
      
      .section p {
        font-size: 14px;
      }
      
      ul {
        padding-left: 15px;
      }
    }

  </style>
  <div class="container">   

   <div class="sidebar" > <div>
   ${profileImageData ? `<img class="profile-pic" src="${profileImageData}" alt="Profile Picture">` : ''}
    <h2>${fullName}</h2>
      <div class="section">
        <h3>PERSONAL</h3>
        <p>Gender: ${gender}</p>
        <p>DOB: ${dob}</p>
        <p>Phone:${phone}</p>
        <p>Email: ${email}</p>
        <p>LinkedIn: ${linkedin}</p>
        <p>Website: ${website}</p>
      </div>
    </div>
      <div class="section">
        <h3>SKILLS</h3>
        <ul>${skills.map(skill => `<li>${skill}</li>`).join('')}</ul>
      </div>
      <div class="section">
        <h3>INTERESTS</h3>
        <p>Gaming, Singing, Reading, Cooking, Exercising, Swimming</p>
      </div>
      <div class="section">
        <h3>LANGUAGES</h3>
        <p>English, Urdu,</p>
      </div>
    </div>
    <div class="main-content">
      <h1 > Curriculum Vitae</h1>
      <div class="section">
        <h3>PROFILE</h3>
        <p>${profile}</p>
      </div>
          ${education.length ? `
      <div class="section">
        <h3>EDUCATIONAL QUALIFICATIONS</h3>
            ${education.map(edu => `
        <div class="education">
          <h4>${edu.degree}</h4>
                <span>${edu.institution} | ${edu.year}</span>
        </div>
             `).join('')}
      </div>`: ''}
        ${workExperience.length ? `
          <div class="section">
            <h2>Work Experience</h2>
            ${workExperience.map(work => `
              <div class="item">
                <h4>${work.position}</h4>
                <span>${work.company} | ${work.year}</span>
                <p>${work.description}</p>
              </div>
            `).join('')}
          </div>` : ''}
      <div class="section achievement">
        <h3>ACHIEVEMENTS</h3>
        ${achievements ? `<h2>Achievements</h2><p>${achievements}</p>` : ''}
      </div>
    </div>

  </div>
  `;

  const generateEdinburgh = () => `
   <style>
body {
  font-family: 'Segoe UI', sans-serif;
  margin: 0;
  background: #f0f2f5;
}
.resume-container {
  width: 600px;
  margin: 40px auto;
  background: #fff;
  box-shadow: 0 0 15px rgba(0,0,0,0.1);
}
.header {
  background: #0f172a;
  color: white;
  text-align: center;
  padding: 30px 20px;
}
.header img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 10px;
}
.header h1 {
  margin: 10px 0 5px;
}
.header p {
  margin: 2px;
  font-size: 14px;
}
.main {
  display: flex;
  padding: 20px;
}
.left-column {
  width: 35%;
  padding-right: 20px;
  border-right: 1px solid #ddd;
}
.right-column {
  width: 65%;
  padding-left: 20px;
}
.section {
  margin-bottom: 20px;
}
.section h2 {
  font-size: 16px;
  border-bottom: 2px solid #0f172a;
  padding-bottom: 5px;
  margin-bottom: 10px;
  color: #0f172a;
}
.section ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
.section ul li {
  padding-left: 15px;
  position: relative;
  margin-bottom: 6px;
  font-size: 14px;
}
.section ul li::before {
  content: '•';
  position: absolute;
  left: 0;
  color: #0f172a;
}
.experience p {
  font-size: 14px;
  margin-bottom: 10px;
}
.education p {
  font-size: 14px;
  margin: 4px 0;
}
  body {
  font-family: 'Segoe UI', sans-serif;
  margin: 0;
  background: #f0f2f5;
}

.resume-container {
  max-width: 600px;
  width: 100%;
  margin: 40px auto;
  background: #fff;
  box-shadow: 0 0 15px rgba(0,0,0,0.1);
}

.header {
  background: #0f172a;
  color: white;
  text-align: center;
  padding: 30px 20px;
}

.header img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 10px;
  object-fit: cover;
}

.main {
  display: flex;
flex-wrap: wrap;/* Added for mobile responsiveness */
  padding: 20px;
}

.left-column {
  width: 35%;
  padding-right: 20px;
  border-right: 1px solid #ddd;
}

.right-column {
  width: 65%;
  padding-left: 20px;
}

/* Responsive Design */
@media (max-width: 768px) {
  .resume-container {
    margin: 20px auto;
    box-shadow: none;
  }
  
  .main {
    flex-direction: column;
  }

  .left-column, .right-column {
   width: 100%;
    padding: 0;
    border-right: none;
  }

  .left-column {
    order: 2;
    margin-top: 20px;
    border-top: 1px solid #ddd;
    padding-top: 20px;
  }

  .header img {
    width: 80px;
    height: 80px;
  }

  .header h1 {
    font-size: 24px;
  }

  .section h2 {
    font-size: 18px;
  }
}

@media (max-width: 480px) {
  .resume-container {
    display: inline-table;
    margin: 10px;
  }


  .header {
    padding: 20px 15px;
  }

  .section ul li {
    font-size: 13px;
  }

  .experience p, .education p {
   font-size: 13px;
  }
}

/* Original styles remain */
.section {
  margin-bottom: 20px;
}

.section h2 {
  font-size: 16px;
  border-bottom: 2px solid #0f172a;
  padding-bottom: 5px;
  margin-bottom: 10px;
  color: #0f172a;
}

.section ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.section ul li {
  padding-left: 15px;
  position: relative;
  margin-bottom: 6px;
  font-size: 14px;
}

.section ul li::before {
  content: '•';
  position: absolute;
  left: 0;
  color: #0f172a;
}

.experience p {
  font-size: 14px;
  margin-bottom: 10px;
}

.education p {
  font-size: 14px;
  margin: 4px 0;
}
</style>

<div class="resume-container">
<div class="header">
  ${profileImageData ? `<img src="${profileImageData}">` : ''}
  <h1>${fullName}</h1>
  <p>DOB: ${dob}</p>
  <p>Gender: ${gender}</p>
</div>
<div class="main">
  <div class="left-column">
    <div class="section">
      <h2>Contact</h2>
      <ul>
        <li>${phone}</li>
        <li>${email}</li>
        <li>${address}</li>
      </ul>
    </div>
    <div class="section">
      <h2>My Skills</h2>
   <ul>${skills.map(skill => `<li>${skill}</li>`).join('')}</ul>
    </div>
    <div class="section">
      <h2>Languages</h2>
      <ul>
        <li>Urdu</li>
        <li>English</li>
        
      </ul>
    </div>
    <div class="section">
      <h2>Interest</h2>
      <ul>
        <li>Gaming</li>
        <li>Reading</li>
        <li>Cooking</li>
        <li>Exercising</li>
        <li>Swimming</li>
      </ul>
    </div>
  </div>
  <div class="right-column">
    <div class="section">
      <h2>Objective</h2>
      <p>${profile}</p>
    </div>
    ${workExperience.length ? `
    <div class="section experience">
      <h2>Experience</h2>
          ${workExperience.map(work => `
         <h4>${work.position}</h4>
                <span>${work.company} | ${work.year}</span>
                <p>${work.description}</p>
                  `).join('')}
    </div>` : ''}
       ${education.length ? `
    <div class="section education">
      <h2>Education</h2>
         ${education.map(edu => `
   <div class="item">
                <h4>${edu.degree}</h4>
                <span>${edu.institution} | ${edu.year}</span>
              </div>
     `).join('')} 
    </div>`: ''}
  </div>
</div>
</div>
`
  ;

  // Select template
  let previewHTML = '';
  switch(selectedTemplate) {
    case 'Stanford':
      previewHTML = generateStanford();
      break;
    case 'Harvard':
      previewHTML = generateHarvard();
      break;
    case 'Edinburgh':
      previewHTML = generateEdinburgh();
      break;
    default:
      previewHTML = `<p>Select a template first</p>`;
  }

  document.getElementById('resumePreview').innerHTML = previewHTML;
}
// function download() {
//   const resume = document.getElementById('resumePreview');
//   const opt = {
//       margin: 0.5,
//       filename: 'My_Resume.pdf',
//       image: { type: 'jpeg', quality: 0.98 },
//       html2canvas: { scale: 2 },
//       jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
//   };

//   html2pdf().set(opt).from(resume).save();
// }

// function printResume() {
//   const printWindow = window.open('', '_blank');
//   const resumeContent = document.getElementById('resumePreview').innerHTML;

//   printWindow.document.write(`
//       <html>
//           <head>
//               <title>Print Resume</title>
//               <style>
//                   body { font-family: Arial, sans-serif; padding: 10px; }
//                   .resume-preview { width: 100%; }
//               </style>
//           </head>
//           <body onload="window.print(); window.close();">
//               <div class="resume-preview">${resumeContent}</div>
//           </body>
//       </html>
//   `);
//   printWindow.document.close();
// }

// Universal Download Function
async function download() {
  try {
    // Show loading state
    const btn = event.target;
    const originalHTML = btn.innerHTML;
    btn.innerHTML = '<div class="loader"></div> Generating...';
    btn.disabled = true;

    const element = document.getElementById('resumePreview');
    const timestamp = new Date().toISOString().slice(0, 10).replace(/-/g, '');
    
    // Device-adaptive settings
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    const scale = isMobile ? 3 : 2;
    const format = isMobile ? 'letter' : 'a4';

    // PDF Configuration
    const options = {
      margin: [0.5, 0.5],
      filename: `resume_${timestamp}.pdf`,
      image: { type: 'jpeg', quality: 0.95 },
      html2canvas: { 
        scale: scale,
        useCORS: true,
        logging: false,
        scrollX: 0,
        scrollY: 0
      },
      jsPDF: {
        unit: 'in',
        format: format,
        orientation: 'portrait'
      }
    };

    // Generate PDF with timeout
    await Promise.race([
      html2pdf().set(options).from(element).save(),
      new Promise((_, reject) => 
        setTimeout(() => reject(new Error('PDF generation timeout'))), 1000)
    ]);
    // Success feedback
    showToast('Resume downloaded successfully!', 'success');
  } catch (error) {
    console.error('Download error:', error);
    showToast('Download failed. Please try again.', 'error');
  } finally {
    // Restore button state
    btn.innerHTML = originalHTML;
    btn.disabled = false;
  }
}

// Universal Print Function
function printResume() {
  const originalBody = document.body.innerHTML;
  const resumeContent = document.getElementById('resumePreview').outerHTML;

  try {
    // Create print document
    const printWindow = window.open('', '_blank');
    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Resume - Print</title>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <style>
            ${getPrintStyles()}
          </style>
        </head>
        <body>
          ${resumeContent}
          <script>
            setTimeout(() => {
              window.print();
              window.onafterprint = () => window.close();
            }, 500);
          <\/script>
        </body>
      </html>
    `);
    
    printWindow.document.close();
    
    // Focus handling for iOS
    if (printWindow.document.readyState === 'complete') {
      printWindow.focus();
    }
  } catch (e) {
    // Fallback for popup-blocked scenarios
    document.body.innerHTML = resumeContent;
    window.print();
    document.body.innerHTML = originalBody;
  }
}

// Shared Styles and Utilities
function getPrintStyles() {
  return `
    * {
      -webkit-print-color-adjust: exact !important;
      color-adjust: exact !important;
    }
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 
                   Oxygen-Sans, Ubuntu, Cantarell, sans-serif;
      line-height: 1.6;
      padding: 20px !important;
    }
    .resume-preview {
      width: 100% !important;
      margin: 0 !important;
      padding: 0 !important;
      box-shadow: none !important;
    }
    .no-print { display: none !important; }
    @media print {
      @page { margin: 15mm 10mm; }
      body { padding: 0 !important; }
    }
  `;
}

function showToast(message, type = 'info') {
  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.textContent = message;
  document.body.appendChild(toast);
  
  setTimeout(() => {
    toast.style.opacity = '0';
    setTimeout(() => toast.remove(), 300);
  }, 2500);
}

// Required CSS
