document.addEventListener('DOMContentLoaded', function() {
    const biddingForm = document.getElementById('biddingForm');
    const calculateBtn = document.getElementById('calculateBtn'); // Added calculation button

    // Added event listener for the calculation button
    calculateBtn.addEventListener('click', calculateFinalPrice);

    calculateFinalPrice(); // Calculate final price when the page loads
});

function calculateFinalPrice() {
    const et = parseFloat(document.getElementById('et').value) || 0;
    const material = parseFloat(document.getElementById('material').value) || 0;
    const am = parseFloat(document.getElementById('am').value) || 0;
    const others = parseFloat(document.getElementById('others').value) || 0;
    const discount = document.getElementById('discount').value;
    const permits = document.getElementById('permits');
    var financingOption = document.getElementById('financing').value;
    var finalPriceSpan = document.getElementById('finalPrice');

    var finalPrice = 0;

    finalPrice += material * 1.5;
    finalPrice += am * et * 75;
    finalPrice += others;

    if(permits.checked) {
        finalPrice += 350;
    }

    finalPrice += et * 453;
   
    if (discount === '5%') {
        finalPrice *= 0.95;
    } else if (discount === '10%') {
        finalPrice *= 0.9;
    }
    switch (financingOption) {
        case 'none':
        case '2832':
            // No change in final bidding price
            break;
        case '2611':
            // Increase final bidding price by 5%
            finalPrice *= 1.05;
            break;
        case '9998':
            // Increase final bidding price by 5.5%
            finalPrice *= 1.055;
            break;
        default:
            console.log('Invalid financing option:', financingOption);
    }

    finalPriceSpan.textContent = '$' + finalPrice.toFixed(2);
}
