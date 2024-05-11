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

 // This is tthe message section
var messageForm = document.forms.leave_message;

messageForm.addEventListener('submit', function(event) {

 event.preventDefault();

 var userName = event.target.usersName.value;
 var userEmail = event.target.usersEmail.value;
 var userMessage = event.target.usersMessage.value;

 console.log('Name', userName);
 console.log('Email:', userEmail);
 console.log('Message', userMessage);

var messageSection = document.getElementById('messages');
var messageList = messageSection.querySelector("ul");
var newMessage = document.createElement("li");
newMessage.innerHTML = '<a href="mailto:' + userEmail + '">' + userName + '</a>: <span>' + userMessage + '</span>';

var removeButton = document.createElement("button");
removeButton.innerText = "remove";
removeButton.type = "button";

removeButton.addEventListener('click', function() {
    var entry = removeButton.parentNode;
    entry.remove();
});

newMessage.appendChild(removeButton);

messageList.appendChild(newMessage);

 messageForm.reset();

 return false;
});

document.addEventListener('DOMContentLoaded', function() {
    // Fetch GitHub repositories
    fetch("https://api.github.com/users/NayeTheCoder/repos")
    .then(response => {
        if(!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data =>  {
        // Get the projects section
        console.log(data);
        let projectsSection = document.getElementById('projects');
        console.log('projectsSection:', projectsSection); // Log projectsSection
        
        let projectsList = document.getElementById("pros");
        console.log('projectsList:', projectsList); // Log projectsList

        // Loop through repositories and create list items for each project
        data.forEach(repo => {
            var project = document.createElement("li");
            project.innerText = repo.name;
            projectsList.appendChild(project);
        });
    })
    .catch(error => {
        console.error('There was a problem:', error);
    });
});
