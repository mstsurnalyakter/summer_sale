let titleCount = 1;
let totalPrice = 0;

const findElementById = id =>{
   return document.getElementById(id);
}

const cards = document.querySelectorAll(".card");

for (const card of cards) {
    card.addEventListener('click', ()=>{
        // access card title and price
        const title = card.querySelector("h2").innerText;
        const price = parseFloat(
          card.querySelector("p").innerText.split(" ")[1]
        );


        // append element
        const titleContainer = findElementById("title-container");
        const p = document.createElement("p");
        p.innerText = `${titleCount}. ${title}`;
        titleContainer.appendChild(p)
        titleCount++;

            //price calculate
            totalPrice += price;
            findElementById("totalPrice").innerText = totalPrice.toFixed(2);

    })
}

findElementById("discountBtn").addEventListener("click", ()=>{
    const couponValue = findElementById("input-field").value;
    const couponCode = couponValue.split(" ").join("").toUpperCase();

    if (totalPrice >= 200) {
        if (couponCode === "SELL200") {
            const discount = totalPrice * 0.2
            findElementById("discount").innerText = discount.toFixed(2);

            findElementById("total").innerText = (totalPrice - discount).toFixed(2);

            findElementById("input-field").value = "";
        }else{
            alert("Invalid coupon code.");
            findElementById("input-field").value = "";
        }
    }else{
        alert('The coupon code is available above or equal to $200')
        findElementById("input-field").value = "";
    }

});

findElementById("make-purchase").addEventListener("click", ()=>{
    const congratulationsMess = findElementById("congratulations-message");
    const purchaseMess = findElementById("purchase-message");
    if (totalPrice > 0) {
       congratulationsMess.innerText = "Congratulations";
       congratulationsMess.style.color = "black";

       purchaseMess.innerText = "Your are not Purchase any product";
       purchaseMess.style.color = "black";
    }else{
        congratulationsMess.innerText = "Sorry!!";
        congratulationsMess.style.color = "red";

       purchaseMess.innerText = "Your are not Purchase any product";
       purchaseMess.style.color = 'red'


    }
});

findElementById("go-home-btn").addEventListener("click",()=>{
    findElementById("header").scrollIntoView({ behavior: 'smooth' });

    setTimeout(() => {
      location.reload();
    }, 500);
    
});