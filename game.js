
const imgContainer = document.getElementById('user-choice-img');
const result = document.getElementById("result-text");
const compimgContainer = document.getElementById('computer-choice-img');
const playButtons=document.getElementsByClassName("play");
const defaultImages=document.getElementsByClassName("default-images");
const actionBlock = document.getElementById('action-block');
const defaultBlock = document.getElementById('default-block');
let mainHeading = document.getElementById('main-heading');
const refreshBtn = document.getElementById('refresh-btn');

for (let i = 0; i < playButtons.length; i++) {
  playButtons[i].addEventListener('click', play);
}

function play(){
  for (let i = 0; i < defaultImages.length; i++) {
    defaultImages[i].style.display = 'none'; 
  }
  let userChoice = this.innerHTML.trim();
  if(userChoice=="Rock"){
    imgContainer.innerHTML = '<img src="media/rock-left.png" class="img-fluid"  alt="Image">';

  }else if(userChoice=="Paper"){
    imgContainer.innerHTML = '<img src="media/paper-left.png" class="img-fluid" alt="Image">';
  }else{
    imgContainer.innerHTML = '<img src="media/scissors-left.png" class="img-fluid" alt="Image">';
  }

  let computerChoice = Math.floor(Math.random() * 3);

  if(computerChoice==0){
    compimgContainer.innerHTML = '<img src="media/rock-right.png" class="img-fluid"  alt="Image">';

  }else if(computerChoice==1){
    compimgContainer.innerHTML = '<img src="media/paper-right.png" class="img-fluid" alt="Image">';
  }else{
    compimgContainer.innerHTML = '<img src="media/scissors-right.png" class="img-fluid" alt="Image">';
  }
   
  if (userChoice == "Rock" && computerChoice == 2 ||
      userChoice == "Paper" && computerChoice == 0 ||
      userChoice == "Scissors" && computerChoice == 1) {
    // User wins
    result.innerText = "You win!";
  } else if (userChoice == "Rock" && computerChoice == 1 ||
             userChoice == "Paper" && computerChoice == 2 ||
             userChoice == "Scissors" && computerChoice == 0) {
    // Computer wins
    result.innerText = "You lose!";
  } else {
    // It's a draw
    result.innerText = "It's a draw!";
  }

  mainHeading.innerText="Play again? Choose again!"
  refreshBtn.style.display = 'block';
}