//TIMERS TASKS//
//1//
// function printMyTimer() {
//   console.log("Timer");
// }
// setInterval(printMyTimer, 4000);
// //2//
// function myCounter() {
//   document.getElementById("h1_counter").innerHTML += "counter"+" ";
// }
// setInterval(myCounter, 6000);
//3//
// function printLove(){
// document.getElementById("h2_love").innerHTML +="i love daniel"+" ";
// }
// var intervalId= setInterval(printLove,5000)
// function stopPrint() {
//     clearInterval(intervalId)
// }
//4//
// function printHour() {
//   var mydate = new Date();
//   var nowTime =
//    mydate.getHours()+ ":" + mydate.getMinutes() + ":" + mydate.getSeconds()+"<br>";
//     var myHour=document.getElementById("h3_hour").innerHTML+=nowTime
// }

// setInterval(printHour,1000)
//5//לא הושלם
// var userNumber=document.getElementById("number_user").value;
// function stopClock() {
//   setInterval(() => {
//     document.getElementById("div_1").innerHTML = "Timer" + number_user.value--;
//   }, 1000);
// }
// var intervalId=;
// function printTime() {
//   var dateObject = new Date();
//   var secondsFromDate = dateObject.getSeconds();
//   var secondsFromInput = parseInt(time_input.value.subStr(6));
//   var minuteFromDate = dateObject.getMinutes();
//   var minuteFromInput = parseInt(time_input.value.subStr(3, 2));
//   var hourFromDate = dateObject.getHours();
//   var hourFromInput = parseInt(time_input.value.subStr(0, 2));
//   intervalId= setInterval(() => {
//     time_element.innerHTML = hourFromDate + ":";
//     minuteFromDate + ":" + secondsFromDate++;

//     if (secondsFromDate == 60) {
//       secondsFromDate = 0;
//       minuteFromDate++;
//       if (minuteFromDate == 60) {
//         minuteFromDate = 0;
//         hourFromDate++;
//       }
//       if (hourFromDate == 24) {
//         hourFromDate = 0;
//       }
//     }
//     if (dateObject.getTime()==dateObject.setHours(hourFromInput,minuteFromInput,secondsFromInput)) {
//         console.log("time is up");
//         clearInterval(intervalId);
//     }
//   }, 1000);
// }

// // function over18() {
// //   var user_name = document.getElementById("nameFromUser").value;
// //   setTimeout(refresh, 5000);
// //   var userAge =
// //     new Date().getFullYear() -
// //     document.getElementById("date_input").value.slice(0, 4);
// //   if (userAge > 18) {
// //     document.getElementById("welcome").innerText += "Welcome";
// //     document.getElementById("welcome").style.color = "blue";
// //   } else {
// //     document.getElementById("no_entery").innerText = "No Entery";
// //     document.getElementById("no_entery").style.color = "red";
// //   }
// // }
// // function greenHover() {
// //   document.getElementById("welcome").style.color = "green";
// // }
// // function refresh() {
// //   window.location.reload();
// // }
// // var firstArray = [];

// // var familyInput = document.createElement("input");
// // familyInput.placeholder = "Enter family name";
// // document.body.append(familyInput);
// // var firstName = document.createElement("input");
// // document.body.append(firstName);
// // firstName.style.display = "block";
// // firstName.placeholder = "Enter name ";

// // var btn = document.createElement("button");
// // document.body.append(btn);
// // btn.innerText = "Submit";

// // btn.addEventListener("click", () => {
// //   firstArray.push(firstName.value);
// //   firstName.value = "";
// //   if (firstArray.length == 4) {
// //     for (var i = 0; i < firstArray.length; i++) {
// //       myList.innerHTML +=
// //         "<li id='list"+i+"'>" + firstArray[i] + " " + familyInput.value + "</li>";

// //     if(firstArray[i][0]==user_name.value[0]){
// //     document.getElementById("list"+i).style.color="red";

// //     }
// //     }
// //   }
// // });
// // var myList = document.createElement("ul");
// // document.body.append(myList);
// // function familyNameList() {}
// var namesArray = [];
// var counter = 0;
// function saveFirstName() {
//   if (namesArray.length < 4 && last_input.value.length > 0) {
//     last_input.disabled = true;
//     namesArray.push(first_input.value);
//     names_list.innerHTML +=
//       "<li id='li_id_" +
//       counter++ +
//       "'>" +
//       first_input.value +
//       " " +
//       last_input.value +
//       "</li>";
//     if (
//       first_input.value[0].toLowerCase() == last_input.value[0].toLowerCase()
//     ) {
//       document.getElementById("li_id_" + (counter - 1)).style.color = "red";
//     }
//   }
//   first_input.value = "";
// }

// function createInput() {
//   search_div.innerHTML =
//     "<input oninput='searchFunc()' type='search' id='search_input'/>";
// }
// function searchFunc() {
//     results_div.innerHTML="";
//   for (var i = 0; i < namesArray.length; i++) {
//     if (namesArray[i].includes(search_input.value)) {
//       results_div.innerHTML += namesArray[i]+'\n' ;
//     }
//   }
// }
