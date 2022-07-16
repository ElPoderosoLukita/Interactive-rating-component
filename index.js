let feedback = 1;

const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const button3 = document.getElementById('button3');
const button4 = document.getElementById('button4');
const button5 = document.getElementById('button5');
const submitButton = document.getElementById('submit-button')

const main = document.querySelector('main');    


button5.addEventListener('click', (event) => {
    feedback = 5;
    console.log(feedback);
})
button4.addEventListener('click', (event) => {
    feedback = 4;
    console.log(feedback);
})
button3.addEventListener('click', (event) => {
    feedback = 3;
    console.log(feedback);
})
button2.addEventListener('click', (event) => {
    feedback = 2;
    console.log(feedback);
})
button1.addEventListener('click', (event) => {
    feedback = 1;
    console.log(feedback);
})


const accion1 = () => {  
    main.removeChild(document.getElementById("image-star"));
    main.removeChild(submitButton);
    main.removeChild(document.getElementById("clasification"))
}

const accion2 = () =>{
    const div = document.createElement('div');
    div.className = "hola";
    
    const img = document.createElement('img');
    img.src = './images/illustration-thank-you.svg'

    div.appendChild(img);

    const divCalification = document.createElement('div');
    divCalification.className = "div-clasification";
    divCalification.innerHTML = `You selected ${feedback} out of 5`

    div.insertAdjacentElement('beforeend', divCalification);

    const h1 = document.getElementById('h1');
    h1.innerHTML = "Thank you!"
    h1.style.textAlign = 'center'
    h1.style.marginTop = "30px"

    main.insertAdjacentElement('afterbegin', div);

    const p = document.getElementById('p');
    p.innerHTML = "We appreciate you taking the time to give a rating.<br>If you ever need more support, don't hesitate to<br>get in touch!";
    p.style.textAlign = "center"; 
    p.style.fontSize = "1.3rem";
}

submitButton.addEventListener('click', accion1);
submitButton.addEventListener('click', accion2);