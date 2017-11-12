  const modalsecondHand = document.querySelector('.m-second-hand');
  const modalminsHand = document.querySelector('.m-min-hand');
  const modalhourHand = document.querySelector('.m-hour-hand');
  
function setDate() {
    const now = new Date();
    
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    modalsecondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    
    const mins = now.getMinutes();
    const minsDegrees = ((mins / 60) * 360) + ((seconds/60)*6) + 90;
    modalminsHand.style.transform = `rotate(${minsDegrees}deg)`;
    
    const hour = now.getHours();
    const hourDegrees = ((hour / 12) * 360) + ((mins/60)*30) + 90;
    modalhourHand.style.transform = `rotate(${hourDegrees}deg)`;
  
        
    if(secondsDegrees >= 360){
      modalsecondHand.style.transition='none';
    }
  }
  
    setInterval(setDate, 1000);
    
    setDate();
