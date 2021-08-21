//track element by their id and set in a variable

const memoryButton1 = document.getElementById('memory-8gb');
const memoryButton2 = document.getElementById('memory-16gb');
const storageButton1 = document.getElementById('storage-256');
const storageButton2 = document.getElementById('storage-512');
const storageButton3 = document.getElementById('storage-1tb');
const deliveryButton1 = document.getElementById('free-delivery');
const deliveryButton2 = document.getElementById('premium-delivery');
const applyBtn = document.getElementById('apply-btn');
const finalTotal = document.getElementById('final-total');
const totalField = document.getElementById('total');

//update cost function
 function updateCost(extraFeature, costValue){
    const cost = document.getElementById(extraFeature + '-cost');
    cost.innerText = costValue;
    updateTotal();
}
//get extra cost value function

function getCostValue(extra){
    const cost = document.getElementById(extra + '-cost');
    const costValue = parseFloat(cost.innerText);
    return costValue;
}
// update total cost function

function updateTotal(){
    const bestPrice = getCostValue('best')
    const memoryCost = getCostValue('memory');
    const storageCost = getCostValue('storage');
    const deliveryCost = getCostValue('delivery');
    const totalCost = bestPrice + memoryCost + storageCost + deliveryCost;
    totalField.innerText = totalCost;
    finalTotal.innerText = totalCost;
}

//update extra cost by click

memoryButton1.addEventListener('click', function(){
    updateCost('memory', 0);
});
memoryButton2.addEventListener('click', function(){
    updateCost('memory', 180);
});
storageButton1.addEventListener('click', function(){
    updateCost('storage', 0);
});
storageButton2.addEventListener('click', function(){
    updateCost('storage', 100);
});
storageButton3.addEventListener('click', function(){
    updateCost('storage', 180);
});
deliveryButton1.addEventListener('click', function(){
    updateCost('delivery', 0);
});
deliveryButton2.addEventListener('click', function(){
    updateCost('delivery', 20);
});

//apply promo code
applyBtn.addEventListener('click', function(){
    const promoInput = document.getElementById('promo-input');
    const promoCode = promoInput.value;
    let total = parseFloat(totalField.innerText);
    if(promoCode == 'stevekaku'){
        total = total - (total * 0.2);
    }
    finalTotal.innerText = total;
    promoInput.value = '';
});

