const users = [{
    userId: "USR0001",
    name: "William",
    profilepicture: "./images/pro1.jpeg",
    statusMessage: "Knowledge is power.",
    presence: 1,
},
{
    userId: "USR0002",
    name: "Thomas",
    profilepicture: "./images/pro2.jpeg",
    statusMessage: "All that glitters is not gold.",
    presence: 2,
},
{
    userId: "USR0003",
    name: "David",
    profilepicture: "./images/pro3.jpeg",
    statusMessage: "Eighty percent of success is showing up.",
    presence: 3,
},
{
    userId: "USR0004",
    name: "Emma",
    profilepicture: "./images/pro4.jpeg",
    statusMessage: "May the Force be with you.",
    presence: 4,
},
{
    userId: "USR0005",
    name: "Mary",
    profilepicture: "./images/pro5.jpeg",
    statusMessage: "Frankly, my dear, I don't give a damn.",
    presence: 3,
},
{
    userId: "USR0006",
    name: "Ava",
    profilepicture: "./images/pro6.jpeg",
    statusMessage: "For those to whom much is given, much is required.",
    presence: 1,
},
{
    userId: "USR0007",
    name: "Olivia",
    profilepicture: "./images/pro7.jpeg",
    statusMessage: "Go ahead, make my day.",
    presence: 2,
},
{
    userId: "USR0008",
    name: "Michael",
    profilepicture: "./images/pro8.jpeg",
    statusMessage: "He travels the fastest who travels alone.",
    presence: 3,
},
{
    userId: "USR0009",
    name: "Oliver",
    profilepicture: "./images/pro9.jpeg",
    statusMessage: "The journey of a thousad miles begin with one step",
    presence: 2,
},
{
    userId: "USR00010",
    name: "Joseph",
    profilepicture: "./images/pro10.jpeg",
    statusMessage: "Online",
    presence: 1,
},
{
    userId: "USR00011",
    name: "Elizabeth",
    profilepicture: "./images/pro11.jpeg",
    statusMessage: "Hell has no fury like a woman scorned.",
    presence: 4,
},
{
    userId: "USR00012",
    name: "Sarah",
    profilepicture: "./images/pro12.jpeg",
    statusMessage: "The journey of a thousad miles begin with one step",
    presence: 2,
},
{
    userId: "USR00013",
    name: "Emily",
    profilepicture: "./images/pro13.jpeg",
    statusMessage: "Do it ",
    presence: 1,
},
{
    userId: "USR00014",
    name: "Andrew",
    profilepicture: "./images/pro14.jpeg",
    statusMessage: "I have always depended on the kindness of strangers.",
    presence: 1,
},
{
    userId: "USR00015",
    name: "Jack",
    profilepicture: "./images/pro15.jpeg",
    statusMessage: "Do good be good",
    presence: 1,
},

];

function getUserStatusClassName(presence) {
switch (presence) {
    case 1:
        return 'online';
    case 2:
        return 'busy';
    case 3:
        return 'idle';
    default:
        return 'not-logged-in';
}
}




function displayUsers() {
const userList = document.getElementById('userList');
userList.innerHTML = '';

users.forEach((user) => {
    const li = document.createElement('li');

    // Create the main container div for each user
    const userMainDiv = document.createElement('div');
    userMainDiv.classList.add('user-main-container');

    // Create a container div for the image and user details
    const userContainerDiv = document.createElement('div');
    userContainerDiv.classList.add('user-container');

    const img = document.createElement('img');
    const statusClassName = getUserStatusClassName(user.presence);
    const icon = document.createElement('span');
    const moreVertIcon = document.createTextNode('more_vert');
    img.src = user.profilepicture;
    img.alt = `Profile picture of ${user.name}`;
    img.classList.add('profile-picture', statusClassName);

    userContainerDiv.appendChild(img); // Add img to the user container div

    const userDiv = document.createElement('div');
    userDiv.classList.add('user-details');
    userDiv.innerHTML = `<strong>${user.name}</strong><br>${user.statusMessage}`;
    userContainerDiv.appendChild(userDiv); // Add userDiv to the user container div

    // Append the userContainerDiv to the main container div
    userMainDiv.appendChild(userContainerDiv);

    // Create a div for the span icon
    const iconDiv = document.createElement('div');
    iconDiv.classList.add('material-icons', 'more-icon', 'icon-div');
    iconDiv.appendChild(icon);
    icon.appendChild(moreVertIcon);
    icon.textContent = 'more_vert';

    // Append the iconDiv to the main container div
    userMainDiv.appendChild(iconDiv);

    // Append the main container div to the list item
    li.appendChild(userMainDiv);

    userList.appendChild(li);
});
}



function addUser(user) {
users.unshift(user);
displayUsers();
}

function removeUser(userId) {
const index = users.findIndex((user) => user.userId === userId);
if (index !== -1) {
    users.splice(index, 1);
    displayUsers();
}
}

function getEventTarget(e) {
e = e || window.event;
return e.target || e.srcElement;
}

var ul = document.getElementById('userList');

document.addEventListener('DOMContentLoaded', () => {
displayUsers();
displayChatMessages();
});