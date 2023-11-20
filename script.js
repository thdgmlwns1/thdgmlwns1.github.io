let date = new Date();
let currYear = date.getFullYear(),
  currMonth = date.getMonth();
const currentDate = document.querySelector('.current-date');
const daysTag = document.querySelector('.days');
const prevNextIcon = document.querySelectorAll('.nav button');
const margin = document.querySelector('.days li');
const list = document.getElementById('list_add_feed');
const buttonCloseList = document.getElementById('close_list');

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
    liTag += `<li id = "${i}">${i}</li>`;
  }

  for (let i = lastDayofMonth; i < 6; i++) {
    liTag += `<li class = "inactive">${i - lastDayofMonth + 1}</li>`;
  }

  daysTag.innerHTML = liTag;
};

renderCalendar();

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
  });
});

daysTag.addEventListener('click', function () {
  list.style.display = 'flex';
  document.body.style.overflowY = 'hidden';
});

buttonCloseList.addEventListener('click', (e) => {
  list.style.display = 'none';
  document.body.style.overflowY = 'visible';
});

function clear() {
  //모든 p태그 삭제
  var paragraphs = document.querySelectorAll('p');
  paragraphs.forEach(function (paragraph) {
    paragraph.remove();
  });
}

function create_pTag() {
  // clear();
  let p = document.createElement('p');
  let li = document.getElementById('1');
  p.textContent = '행사1';
  li.appendChild(p);
}

function create_pTag2() {
  clear();
  let p = document.createElement('p');
  let li = document.getElementById('2');
  p.textContent = '행사1';
  li.appendChild(p);
}
