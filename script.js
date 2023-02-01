const submitBtn = document.querySelector('.submitButton');
const radioBtns = document.querySelectorAll('input[name="score"]');
console.log(submitBtn);
submitBtn.addEventListener('click' , showThanksCard);

function showThanksCard(){
    document.getElementById('thanksCard').style.display= 'block';
    document.getElementById('cardContainer').style.display= 'none';

    let selectOption;

    for (const radioBtn of radioBtns){
        if (radioBtn.checked){
            selectOption = radioBtn.value;
        }
    }
    const message = document.getElementById('message');
    if(selectOption){
        message.innerText = `You selected ${selectOption} out of 5!`;
    }  
    else{ 
        message.innerText = `You didn't rate us`;
    }
}

