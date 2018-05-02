//immediately invoke a function expression

(function () {
    //create the hotel object
    //write the offer details
    
    //use the literal syntax
    var hotel= {
        name:'Park',
        roomRate:240, // in USD
        discount:15, //percentages
        offerPrice: function (){
        var offerRate = this.roomRate * ((100 - this.discount) /100);
                return offerRate;
        }    
    };
    
    //create variables
    var hotelName, roomRate, specialRate;
    
    hotelName = document.getElementById('hotelName');
    roomRate = document.getElementById('roomRate');
    specialRate = document.getElementById('specialRate');
    
    hotelName.textContent = hotel.name;
    roomRate.textContent = '$' + hotel.roomRate.toFixed(2);
    specialRate.textContent = '$' + hotel.offerRate();
    
    //calculate the expiry offer details
    var expiryMsg;
    var today;
    var elEnds;
    
    function offerExpires(today){
        //local scope vars to the function
        var weekFromToday, day, date, month, year, dayNames, monthNames;
        
        //add 7 days from current time - in mils
        weekFromToday = new Date(today.getTime() + 7 * 24 * 60 *60 * 1000);
        
        dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        monthNames = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug', 'Sep', 'Oct','Nov','Dec'];
        
        day = dayName[weekFromToday.getDate()];   
        date = weekFromToday.getDate();
        month = monthNames[weekFromToday.getMonth()];
        year = weekFromToday.getFullYear();
        
        
        //create the message
        expiryMsg= 'Offer expires less';
        expiryMsg += day + '<br>' + date + '' + '' + month + '' + year;
        return expiryMsg;
    }
    //get todays date to get the function
        today = new Date();
        elEnds = document.getElementById('offerEnds');
    el.End.innerHTML = offerExpires(today);

}());