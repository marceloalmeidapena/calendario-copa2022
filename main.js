function createGame(player1, hour, player2) {
  return `
    <li>
        <img src="./assets/icon-${player1}.svg" alt="Logo do ${player1}">
        <strong>${hour}</strong>
        <img src="./assets/icon-${player2}.svg" alt="Logo do ${player1}">
    </li>
         `
}

let delay = -0.4;
function createCard(date, day, games) {
  delay = delay + 0.4;
  return `
    <div class="card" style="animation-delay: ${delay}s">
       <h2>${date} <span>${day}</span></h2>
       <ul>
         ${games}
      </ul>
  </div>
`
}

document.querySelector("#cards").innerHTML = `

  ${createCard(
    "24/11",
    "quinta",
    createGame("switzerland", "07:00", "camaroon") +
      createGame("uruguai", "10:00", "southkorea") +
      createGame("portugal", "13:00", "ghana") +
      createGame("brazil", "16:00", "serbia")
  )}

  ${createCard(
    "25/11",
    "Sexta",
    createGame("wales", "07:00", "iran") +
      createGame("qatar", "10:00", "senegal") +
      createGame("netherlands", "13:00", "equador") +
      createGame("england", "16:00", "usa")
  )}

  ${createCard(
    "26/11",
    "sábado",
    createGame("tunisia", "07:00", "australia") +
      createGame("poland", "10:00", "saudarabia") +
      createGame("france", "13:00", "denmark") +
      createGame("argentina", "16:00", "mexico")
  )}}
` 