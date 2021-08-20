const memoryButton1 = document.getElementById('memory-8gb');
const memoryButton2 = document.getElementById('memory-16gb');
const storageButton1 = document.getElementById('storage-256');
const storageButton2 = document.getElementById('storage-512');
const storageButton3 = document.getElementById('storage-1tb');
const deliveryButton1 = document.getElementById('free-delivery');
const deliveryButton2 = document.getElementById('delivery-charge');
const memoryCost = document.getElementById('memory-cost');
// function updateCost(){
//     cost.innerText = costValue;
// }
//extra memory cost
memoryButton1.addEventListener('click', function(){
    memoryCost.innerText = '0';
});
memoryButton2.addEventListener('click', function(){
    memoryCost.innerText = '180';
});
storageButton1.addEventListener('click', function(){
    const storageCost = document.getElementById('storage-cost');
    storageCost.innerText = '0';
})
storageButton2.addEventListener('click', function(){
    const storageCost = document.getElementById('storage-cost');
    storageCost.innerText = '100';
})
storageButton3.addEventListener('click', function(){
    const storageCost = document.getElementById('storage-cost');
    storageCost.innerText = '180';
})
deliveryButton1.addEventListener('click', function(){
    const deliveryCost = document.getElementById('delivery-cost');
    deliveryCost.innerText = '0';
})
deliveryButton2.addEventListener('click', function(){
    const deliveryCost = document.getElementById('delivery-cost');
    deliveryCost.innerText = '20';
})
