const users = [
  {
    name: "Marc Demo",
    skillsOffered: ["JavaScript", "NodeJS"],
    skillsWanted: ["MongoDB", "Graphic Designer"],
    rating: "3.9/5"
  },
  {
    name: "Michell",
    skillsOffered: ["NodeJS"],
    skillsWanted: ["JavaScript", "Graphic Designer"],
    rating: "2.5/5"
  },
  {
    name: "Joe Wills",
    skillsOffered: ["JavaScript", "NodeJS"],
    skillsWanted: ["MongoDB", "Graphic Designer"],
    rating: "4.0/5"
  }
];

function createUserCard(user) {
  return `
    <div class="user-card">
      <div class="profile-photo">Profile Photo</div>
      <div class="card-info">
        <h3>${user.name}</h3>
        <div class="skills">
          <strong>Skill offered =></strong>
          ${user.skillsOffered.map(skill => `<span>${skill}</span>`).join("")}
        </div>
        <div class="skills">
          <strong>Skill wanted =></strong>
          ${user.skillsWanted.map(skill => `<span>${skill}</span>`).join("")}
        </div>
        <div class="rating">Rating: ${user.rating}</div>
      </div>
      <button class="request-btn">Request</button>
    </div>
  `;
}

function loadUsers() {
  const container = document.getElementById("userCards");
  container.innerHTML = users.map(user => createUserCard(user)).join("");
}

function searchUsers() {
  const query = document.getElementById("searchBox").value.toLowerCase();
  const filtered = users.filter(user =>
    user.name.toLowerCase().includes(query) ||
    user.skillsOffered.some(skill => skill.toLowerCase().includes(query)) ||
    user.skillsWanted.some(skill => skill.toLowerCase().includes(query))
  );
  document.getElementById("userCards").innerHTML =
    filtered.map(user => createUserCard(user)).join("");
}

window.onload = loadUsers;
