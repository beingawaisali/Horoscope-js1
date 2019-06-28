function showFortune(){

    let name = document.getElementById('name').value;
    let date = document.getElementById('date').value;
    let month = document.getElementById('month').value;
    let zodiacSign = document.getElementById('zodiac-sign');
    let fortune = document.getElementById('para');

    if ((month == 1 && date >= 21 || month == 2 && date <= 19)){
        zodiacSign.innerHTML = (name + " YOU ARE AQUARIUS");
    } else if((month == 2 && date >= 20 || month == 3 && date <= 20)){
        zodiacSign.innerHTML = (name + " YOU ARE PISCES")
    } else if((month == 3 && date >= 21) || (month == 4 && date <= 20)){
        zodiacSign.innerHTML = (name + " YOU ARE ARIES")
    } else if((month == 4 && date >= 21) || (month == 5 && date <= 20)){
        zodiacSign.innerHTML = (name + " YOU ARE TAURUS")
    } else if((month == 5 && date >= 21) || (month == 6 && date <= 20)){
        zodiacSign.innerHTML = (name + " YOU ARE GEMINI")
    } else if((month == 6 && date >= 21) || (month == 7 && date <= 20)){
        zodiacSign.innerHTML = (name + " YOU ARE CANCER")
    } else if((month == 7 && date >= 21) || (month == 8 && date <= 20)){
        zodiacSign.innerHTML = (name + " YOU ARE LEO")
    } else if((month == 8 && date >= 21) || (month == 9 && date <= 20)){
        zodiacSign.innerHTML = (name + " YOU ARE VIRGO")
    } else if((month == 9 && date >= 21) || (month == 10 && date <= 20)){
        zodiacSign.innerHTML = (name + " YOU ARE LIBRA")
    } else if((month == 10 && date >= 21) || (month == 11 && date <= 20)){
        zodiacSign.innerHTML = (name + " YOU ARE SCORPIO")
    } else if((month == 11 && date >= 21) || (month == 12 && date <= 20)){
        zodiacSign.innerHTML = (name + " YOU ARE SAGITTARUIS")
    } else if((month == 12 && date >= 21) || (month == 1 && date <= 20)){
        zodiacSign.innerHTML = (name + " YOU ARE CAPRICORN")
    }


    //CONDITIONS FOR MONTHS AND DATE LIMIT

}