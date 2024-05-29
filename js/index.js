// This is for the footer
 const today = new Date();
 const thisYear = today.getFullYear();

 const footer = document.createElement("footer");
 const copyright = document.createElement('p');
 copyright.innerHTML = '© Nayeli Nazarit ' + thisYear;

 footer.appendChild(copyright);
 document.body.appendChild(footer);

 //This is for the skills section
 let skills =["Javascript","HTML","CSS","Git","Github"];
 let skillsSection = document.getElementById("skills");
 let skillsList = document.createElement("ul");
 skillsSection.appendChild(skillsList);


 for (let skill of skills) {
    let skillItem = document.createElement("li");
    skillItem.setAttribute("class", "flex-item");
    skillItem.setAttribute("id", "skillItem");
    skillItem.innerText = skill;
    skillsList.appendChild(skillItem);
 }

 // This is the message section
var messageForm = document.forms.leave_message;

messageForm.addEventListener('submit', function(event) {

 event.preventDefault();

 var userName = event.target.usersName.value;
 var userEmail = event.target.usersEmail.value;
 var userMessage = event.target.usersMessage.value;

 console.log('Name', userName);
 console.log('Email:', userEmail);
 console.log('Message', userMessage);

var messageSection = document.getElementById('messages2');
var messageList = messageSection.querySelector("ul");
var newMessage = document.createElement("li");
newMessage.innerHTML = '<a href="mailto:' + userEmail + '">' + userName + '</a>: <span>' + userMessage + '</span>';


        // This creates a remove button for the message
        const removeBtn = document.createElement("button");
        removeBtn.innerText = "delete";
        removeBtn.type = "button";
        removeBtn.addEventListener("click", function() {
            const entry = removeBtn.parentNode;
            entry.remove();
            if (messageList.children.length === 0) {
                messageSection.style.display = "none";
            }
        });

        // This is to add the remove button to the new message
        newMessage.appendChild(removeButton);

        // This is to add the new message to the message list
        messageList.appendChild(newMessage);

        // This is to clear the form after submitting
        messageForm.reset();

        // This displays the messages section
        messageSection.style.display = "block";

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
            //added class to list items
            project.setAttribute("class", "flex-item")
            project.innerText = repo.name;
            projectsList.appendChild(project);
        });
    })
    .catch(error => {
        console.error('There was a problem:', error);
    });
});
