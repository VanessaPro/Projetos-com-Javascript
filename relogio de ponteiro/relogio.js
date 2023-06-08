const horaHand = document.querySelector('.hora-hand');
const minHand = document.querySelector('.min-hand');
const segHand = document.querySelector('.seg-hand');

const getMoment = () => {
    const date = new Date();

    return {
        hora: date.getHours(),
        min: date.getMinutes(),
        seg: date.getSeconds(),
    }
}

setInterval(() => {
    const { hora, min, seg } = getMoment();
    
    segHand.style.transform = `translate(0, -50%) rotate(${seg * 6}deg)`;
    minHand.style.transform = `translate(0, -50%) rotate(${min * 6}deg)`;
    horaHand.style.transform = `translate(0, -50%) rotate(${hora * 30}deg)`;
}, 1000);
