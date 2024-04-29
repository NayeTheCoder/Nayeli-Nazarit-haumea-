// This is for the footer
 const today = new Date();
 const thisYear = today.getFullYear();

 const footer = document.createElement("footer");
 const copyright = document.createElement('p');
 copyright.innerHTML = '© Nayeli Nazarit ' + thisYear;

 footer.appendChild(copyright);
 document.body.appendChild(footer);

 //This is for the skills section
 let skills =["Javascript","HTML","CSS","Github"];
 let skillsSection = document.getElementById("skills");
 let skillsList = document.createElement("ul");
 skillsSection.appendChild(skillsList);

 for (let skill of skills) {
    let skillItem = document.createElement("li");
    skillItem.innerText = skill;
    skillsList.appendChild(skillItem);
 }






