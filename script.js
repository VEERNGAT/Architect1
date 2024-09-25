function daysLeftNewYear() {  
    today = new Date()
    
    nextDate = new Date("01,01,2025")
    
    msPerDay = 24*60*60*1000;
    
    daysLeft = Math.round((nextDate.getTime() - today.getTime())/msPerDay);
    dayname = ""
    ds = "" + daysLeft
    
    dd=parseInt(ds.substr(ds.length-1))
    
    if(daysLeft>4&&daysLeft<21)
        dayname=" дней"
    else if(dd==1)
        dayname=" день"
    else if(dd==2||dd==3||dd==4)
        dayname=" дня"
    else dayname=" дней"
    
    if(daysLeft<0) 
        {console.log("С новым годом!!!")}
    else {
        if(daysLeft==0) 
            {console.log("Завтра новый год!")} 
        else {
            console.log("До нового года осталось "+daysLeft+dayname+"!")}
    }

}
daysLeftNewYear();