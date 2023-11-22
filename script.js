let date = new Date();
let currYear = date.getFullYear(), currMonth = date.getMonth();
const currentDate = document.querySelector(".current-date");
const daysTag = document.querySelector(".days");
const listTag = document.querySelector(".days li.smallL");
const listWindow = document.querySelector(".listL");
const listWindow2 = document.querySelector(".buttonWindow");
const prevNextIcon = document.querySelectorAll(".nav button");
const margin = document.querySelectorAll(".days li");
const list = document.getElementById("list_add_feed");
const buttonCloseList = document.getElementById("close_list");
let buttonActive = 0;
let colorNum = 0;
let globalliTag = '';
let globalbutTag = '';

const months = [
  '1월',
  '2월',
  '3월',
  '4월',
  '5월',
  '6월',
  '7월',
  '8월',
  '9월',
  '10월',
  '11월',
  '12월',
];

const renderCalendar = () => {
    currentDate.innerHTML = `${months[currMonth]} ${currYear}`;
    let lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(); 
    let firstDayofMonth = new Date(currYear, currMonth, 1).getDay();
    let lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay(); 
    let lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate();
    let liTag = '';

    for (let i = firstDayofMonth; i > 0; i--) {
        liTag += `<li class = "inactive">${lastDateofLastMonth - i + 1}</li>`;
    }

    for (let i = 1; i <= lastDateofMonth; i++) {
        liTag += `<li id = "${i}">${i}
        <ul>
        <li class = "smallL" id = "${i}-1"></li>
        <li class = "smallL" id = "${i}-2"></li>
        </ul>
        </li>`;
    }

    for (let i = lastDayofMonth; i < 6; i++) {
        liTag += `<li class = "inactive">${i - lastDayofMonth + 1}</li>`;
    }
	  daysTag.innerHTML = liTag;
    colorNum = 0;
}

renderCalendar();
create_pTag3();

prevNextIcon.forEach((icon) => {
  icon.addEventListener('click', () => {
    currMonth = icon.id === 'prev' ? currMonth - 1 : currMonth + 1;
    if (currMonth < 0 || currMonth > 11) {
      date = new Date(currYear, currMonth);
      currYear = date.getFullYear(); 
      currMonth = date.getMonth(); 
    } else {
      date = new Date();
    }
    renderCalendar();
    if (buttonActive == 0){
      create_pTag3();
    }
    else if (buttonActive == 1){
      create_pTag();
    }
    else{
      create_pTag2();
    }
  });
});

daysTag.addEventListener("click", function(){
  globalliTag = '';
  globalbutTag = '';
  list.style.display = "flex";
  addList("Example", "Time", 'https://naver.com ');
  addList("Example2", "Time2", 'https://naver.com ');
});

buttonCloseList.addEventListener("click", e => {
  list.style.display = "none";

});


function clear() {
  //모든 p태그 삭제
  var paragraphs = document.querySelectorAll('p');
  paragraphs.forEach(function (paragraph) {
  paragraph.remove();
  colorNum = 0;
  });
}

function create_pTag() {
  clear();
  clearLI();
  addText(1, 1, '행사 1', 1);
  buttonActive = 1;
}

function create_pTag2() {
  clear();
  clearLI();
  addText(2, 2, '특강 1', 1);
  buttonActive = 2;
}

function create_pTag3() {
  clear();
  clearLI();
  if (currMonth == 10){
    addText(27, 27, '수업일수 3/4', 1);

    addText(27, 27, '육아, 질병, 창업휴학원 접수종료', 2);
  }
  else if (currMonth == 11){
    addText(8, 14, '보강 기간', 1);

    addText(15, 21, '기말고사 기간', 1);

    addText(22, 22, '동계방학', 1);

    addText(25, 25, '성탄절', 1);

    addText(26, 26, '겨울계절수업 개강', 1);

    addText(29, 29, '종무식', 1);
  }
  buttonActive = 0
}



function addText(start, end, name, num){
  let p = document.createElement('p');
  let li = document.getElementById(`${start}-${num}`);
  p.textContent = name;
  li.appendChild(p);
  colorLI(start, end, num);
}

function addList(content, time, link){
  globalliTag += `<li class = "listL">
  <li id = "list-content">${content}</li>
  <li id = "list-date">${time}</li>
  </li>`;
  globalbutTag += `<button class = linkButton onclick="window.open(${link})">링크</button>`;
  listWindow.innerHTML = globalliTag;
  listWindow2.innerHTML = globalbutTag;
}

function colorLI(start, end, num){
  let color = "";
  switch(colorNum){
    case 0:
      color = "#F3B0C3";
      break;
    case 1:
      color = "#FFC8A2";
      break;
    case 2:
      color = "#FFFFB5";
      break;
    case 3:
      color = "#C6DBDA";
      break;
    case 4:
      color = "#ABDEE6";
      break;
    case 5:
      color = "#ECEAE4";
      break;
    case 6:
      color = "#ECD5E3";
      break;
  }
  for (let i = start; i <= end; i++){
    let li = document.getElementById(`${i}-${num}`);
    li.style.backgroundColor = color;
  }
  colorNum++;
  colorNum = colorNum%7;
}

function clearLI(){
  for (let i = 1; i <= 30; i++){
    let li = document.getElementById(`${i}-1`);
    li.style.backgroundColor = "";
    let li2 = document.getElementById(`${i}-2`);
    li2.style.backgroundColor = "";
  }
  if (new Date(currYear, currMonth + 1, 0).getDate() == 31){
    let li = document.getElementById(`31-1`);
    li.style.backgroundColor = "";
    let li2 = document.getElementById(`31-2`);
    li2.style.backgroundColor = "";
  }
}

function printName() {
  let p = document.createElement('p');
  let li = document.getElementById('suggestion_box');
  const bar = document.getElementById('suggestion_box');
  bar.style.visibility = 'visible';
  p.textContent = '행사1';
  li.appendChild(p);
  console.log('d');
}

function blur_name() {
  const input_2 = document.getElementById('suggestion_box');
  input_2.innerText = ' ';
  const bar = document.getElementById('suggestion_box');
  bar.style.visibility = 'hidden';
}