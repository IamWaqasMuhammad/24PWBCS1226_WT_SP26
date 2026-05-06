

fetch("users.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok.");
    }
    return response.json();
  })
  .then((users) => {
    let html = "";
    users.forEach((user) => {
      let htmlSegment = `<div class="user">
                            <img src="${user.profileURL}" >
                            <h2>${user.firstName} ${user.lastName}</h2>
                            <div class="email"><a href="email:${user.email}">${user.email}</a></div>
                        </div>`;

      html += htmlSegment;
    });

    let container = document.querySelector(".container");
    container.innerHTML = html;
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });
