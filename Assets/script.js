let date = document.querySelector("#currentDay")
let container = document.querySelector("body")
let times = [9, 10, 11, 12, 13, 14, 15, 16, 17]



// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {

  



  container.addEventListener("click", function(event){
    let element = event.target;
    if(element.matches("button")){  
      let section = element.getAttribute("data-time");
      let memoLocation = element.previousElementSibling;
      let memo = memoLocation.value;
      localStorage.setItem(section, memo);
    }
    else if (element.matches("i")){
      console.log(element);
      let section = element.parentElement.getAttribute("data-time");
      let memoLocation = element.parentElement.previousElementSibling;
      let memo = memoLocation.value;
      console.log(memoLocation);
      localStorage.setItem(section, memo);
    
    }
  })
  
  for(let i = 0; i < times.length; i++){
    console.log(dayjs().hour)
    if (dayjs().hour() < times[i]){
      let part1 = "hour-";
      let part2 = JSON.stringify(times[i]);
      let existingId = part1.concat(part2);
      document.getElementById(existingId).classList.add("future");
    }
  
    else if(dayjs().hour() === times[i]){
      let part1 = "hour-";
      let part2 = JSON.stringify(times[i]);
      let existingId = part1.concat(part2)
      document.getElementById(existingId).classList.add("present")
    }
  
    else{
      let part1 = "hour-";
      let part2 = JSON.stringify(times[i]);
      let existingId = part1.concat(part2)
      document.getElementById(existingId).classList.add("past")
    }
  }

  for(let i = 0; i < times.length; i++){
    let timeString = JSON.stringify(times[i]);
    let area = document.querySelector(`#hour-${timeString} textArea`);
    console.log(area);
    let contentOfText = localStorage.getItem(timeString);
    area.value = contentOfText;

  }
  // TODO: Add code to display the current date in the header of the page.
  date.textContent = dayjs().format("dddd, MMMM DD");
});
