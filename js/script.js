//hour variable
var currentTime = moment();
var container = $('#container')
var hour = [
    '9',
    '10',
    '11',
    '12',
    '13',
    '14',
    '15',
    '16',
    '17',
  ];

var currentHour = currentTime.format('hA')

function displayCurrentDate() {
    var currentDay = $('#currentDay')
    currentDay.text(currentTime.format('MMMM Do YYYY, h:mm:ss a'));
}

function makeTimeBlocks() {
    for (var i = 0; i < 9; i++) {
        createRows(i);
        createHour(i);
        //var hours = createHour()
        //var texts = createText()
        //var btns = createBtn()
        //container.append(hours, texts, btns);
    }
}

function createRows() {
    var timeRow = $('<div>');
    timeRow.attr('class', 'row justify-content-md-center"');
    container.append(timeRow)
}

function createHour() {
    var hourSpace = $('<div>')
    hourSpace.attr('class', 'hour');
    hourSpace.addClass('col')
    hourText()
    function hourText (){
        for (var i = 0; i < hour.length; i++) {
            hourSpace.text(hour[i])
        }
    };
}

function createText () {
    var textArea = $('<div>')
    textArea.attr('class', 'col');
    textArea.addClass(pastOrPresent())
    return textArea;
    function pastOrPresent () {
        if (hour < currentHour) {
            textArea.attr('class', 'past');
        }
        else if (hour === currentHour) {
            textArea.attr('class', 'present');
        }
        else if (hour > currentHour) {
            textArea.attr('class', 'future');
        }
    }
}


function createBtn () {
    var saveBtn = $('<button>');
    saveBtn.attr('class', 'saveBtn');
    saveBtn.addClass('col');
    saveBtn.innerHTML = '<i class="fas fa-save"></i>';
    container.appendChild(saveBtn)
}

displayCurrentDate();

createBtn();

//things to do:
//use the css provided to you!!! that helps a lot, all of the rows are figured out for you.
// just attach with jquery
// moment is also super easy to use
//the hardest part is putting it all together, but you can look at that one website for hints
// DO NOT just copy, you can figure it out
