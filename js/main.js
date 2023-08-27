$(`.duration h3`).click(function () { 
    $(this).siblings().slideToggle(1000);
    $(this).parent().siblings().find(`p`).slideUp(1000);
});

function displayRemainCharcters(number) {
    document.querySelector(`.counter`).innerHTML= 100-number;
}

document.querySelector(`textarea`).addEventListener(`keyup`,function() {
    let characterWritten= document.querySelector(`textarea`).value.length;
    console.log(characterWritten)
    displayRemainCharcters(characterWritten)
    }  );



    setInterval(() => {
        let endDate= new Date(`oct 25 2023`);
        let currentDate = new Date();
        let diffDate = endDate-currentDate;
        let days = Math.floor(diffDate/ (1000*60*60*24));
        console.log(days);
        document.querySelector(`.days`).innerHTML = days;
        let hours= Math.floor(diffDate %(1000*60*60*24)/(1000*60*60));
        console.log(hours);
        document.querySelector(`.hours`).innerHTML = hours;
        let minutes= Math.floor(diffDate %(1000*60*60)/ (1000*60));
        console.log(minutes);
        document.querySelector(`.minutes`).innerHTML = minutes;
        let seconds = Math.floor(diffDate %(1000*60)/1000);
        console.log(seconds);
        document.querySelector(`.seconds`).innerHTML = seconds <10 ? `0${seconds}` :seconds  ;
        if (diffDate < 0) {
            clearInterval()
            document.querySelector(`.details .logo`).innerHTML =`<h1 class="text-white"> The Event had begun </h1>`;
        }
        
    }, 1000);


    $(`.menu`).click(function () { 
        $(`.navbar`).animate({ width: "toggle"}, 1000);
        $(`.navbar li`).animate({ width: "toggle"}, 500);
        
     });

    

    
