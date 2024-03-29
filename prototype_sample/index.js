let totalDonation = 0; // 얻은 토큰 수
let donatedTokens = 0; // 기부된 토큰 수
const donationGoal = 10000; // 기부 목표
let currentAction = ''; // 현재 선택된 액션

document.getElementById('button1').addEventListener('click', function() {
    showPopup("MB");
    currentAction = 'email';
});

document.getElementById('button2').addEventListener('click', function() {
    showPopup("km");
    currentAction = 'walking';
});

document.getElementById('button3').addEventListener('click', function() {
    showPopup("장수");
    currentAction = 'paper';
});

document.getElementById('submitNumber').addEventListener('click', function() {
    const numberInput = parseFloat(document.getElementById('numberInput').value);
    if (!isNaN(numberInput)) {
        calculateDonation(numberInput);
        updateDonationDisplay();
    } else {
        alert("유효한 숫자를 입력해주세요.");
    }
    document.getElementById('popup').style.display = 'none';
    document.getElementById('numberInput').value = '';
});

document.getElementById('donateButton').addEventListener('click', function() {
    donatedTokens += totalDonation;
    totalDonation = 0; // 토큰 사용 후 초기화
    updateDonationDisplay();
    updateDonatedTokensDisplay();
    updateAchievementRate();
});

function calculateDonation(number) {
    switch(currentAction) {
        case 'email':
            totalDonation += number / 1000 * 14.9;
            break;
        case 'walking':
            totalDonation += number * 1.4;
            break;
        case 'paper':
            totalDonation += number / 1000 * 0.85;
            break;
    }
}

function showPopup(unit) {
    document.getElementById('popup').style.display = 'block';
    document.getElementById('unitLabel').innerText = unit;
}

function updateDonationDisplay() {
    document.getElementById('donationCount').innerText = `얻은 토큰 수: ${Math.round(totalDonation)}`;
}

function updateDonatedTokensDisplay() {
    document.getElementById('donatedTokens').innerText = `기부한 토큰 수: ${Math.round(donatedTokens)}/10000`;
}

function updateAchievementRate() {
    const percentage = (donatedTokens / donationGoal * 100).toFixed(2);
    document.getElementById('percentage').innerText = `달성률: ${percentage}%`;
}
