const box1 = document.querySelector('.color1') ; const box1Code = document.querySelector('.color_1_js')
const box2 = document.querySelector('.color2') ; const box2Code = document.querySelector('.color_2_js')
const box3 = document.querySelector('.color3') ; const box3Code = document.querySelector('.color_3_js')
const box4 = document.querySelector('.color4') ; const box4Code = document.querySelector('.color_4_js')

const lock1 = document.querySelector('.lock1')
const lock2 = document.querySelector('.lock2')
const lock3 = document.querySelector('.lock3')
const lock4 = document.querySelector('.lock4')

function next(){

    const hexValues = ['A','B','C','D','E','F',0,1,2,3,4,5,6,7,8,9]
    var L = hexValues.length

    var RN_1_1 = Math.floor(Math.random() * L ); 
    var RN_1_2 = Math.floor(Math.random() * L );
    var RN_1_3 = Math.floor(Math.random() * L ); 
    var RN_1_4 = Math.floor(Math.random() * L ); 
    var RN_1_5 = Math.floor(Math.random() * L ); 
    var RN_1_6 = Math.floor(Math.random() * L )
    var RN_2_1 = Math.floor(Math.random() * L ); 
    var RN_2_2 = Math.floor(Math.random() * L ); 
    var RN_2_3 = Math.floor(Math.random() * L ); 
    var RN_2_4 = Math.floor(Math.random() * L ); 
    var RN_2_5 = Math.floor(Math.random() * L ); 
    var RN_2_6 = Math.floor(Math.random() * L );
    var RN_3_1 = Math.floor(Math.random() * L ); 
    var RN_3_2 = Math.floor(Math.random() * L ); 
    var RN_3_3 = Math.floor(Math.random() * L ); 
    var RN_3_4 = Math.floor(Math.random() * L ); 
    var RN_3_5 = Math.floor(Math.random() * L ); 
    var RN_3_6 = Math.floor(Math.random() * L );
    var RN_4_1 = Math.floor(Math.random() * L ); 
    var RN_4_2 = Math.floor(Math.random() * L ); 
    var RN_4_3 = Math.floor(Math.random() * L ); 
    var RN_4_4 = Math.floor(Math.random() * L ); 
    var RN_4_5 = Math.floor(Math.random() * L ); 
    var RN_4_6 = Math.floor(Math.random() * L )

    hexCode_1 = '#'+ hexValues[RN_1_1]+ hexValues[RN_1_2]+ hexValues[RN_1_3]+ hexValues[RN_1_4]+ hexValues[RN_1_5]+ hexValues[RN_1_6]
    hexCode_2 = '#'+ hexValues[RN_2_1]+ hexValues[RN_2_2]+ hexValues[RN_2_3]+ hexValues[RN_2_4]+ hexValues[RN_2_5]+ hexValues[RN_2_6]
    hexCode_3 = '#'+ hexValues[RN_3_1]+ hexValues[RN_3_2]+ hexValues[RN_3_3]+ hexValues[RN_3_4]+ hexValues[RN_3_5]+ hexValues[RN_3_6]
    hexCode_4 = '#'+ hexValues[RN_4_1]+ hexValues[RN_4_2]+ hexValues[RN_4_3]+ hexValues[RN_4_4]+ hexValues[RN_4_5]+ hexValues[RN_4_6]

    if(lock1.classList.contains('locked')){
        
    }else{
    box1.style.backgroundColor = hexCode_1
    box1Code.innerText = hexCode_1
    }
       
    if(lock2.classList.contains('locked')){
        
    }else{
    box2.style.backgroundColor = hexCode_2
    box2Code.innerText = hexCode_2
    }

    if(lock3.classList.contains('locked')){
        
    }else{
    box3.style.backgroundColor = hexCode_3
    box3Code.innerText = hexCode_3
    }

    if(lock4.classList.contains('locked')){
        
    }else{
    box4.style.backgroundColor = hexCode_4
    box4Code.innerText = hexCode_4
    }

    if(lock1.classList.contains('locked') && lock2.classList.contains('locked') && lock3.classList.contains('locked') && lock4.classList.contains('locked')) {
        alert('All 4 are locked !!!')
    }



    tooltipReset()
}

function tooltipReset() {
    document.querySelector('.tooltip1').innerText = 'Click to Copy'
    document.querySelector('.tooltip2').innerText = 'Click to Copy'
    document.querySelector('.tooltip3').innerText = 'Click to Copy'
    document.querySelector('.tooltip4').innerText = 'Click to Copy'
}


function copy1() {
    navigator.clipboard.writeText(box1Code.innerText);
    tooltipReset()
    document.querySelector('.tooltip1').innerText = 'Copied to Clipboard'

    
    
}

function copy2() {
navigator.clipboard.writeText(box2Code.innerText);
    tooltipReset()
    document.querySelector('.tooltip2').innerText = 'Copied to Clipboard'

    

}

function copy3() {
navigator.clipboard.writeText(box3Code.innerText);
    tooltipReset()
    document.querySelector('.tooltip3').innerText = 'Copied to Clipboard'

}

function copy4() {
navigator.clipboard.writeText(box4Code.innerText);
    tooltipReset()
    document.querySelector('.tooltip4').innerText = 'Copied to Clipboard'
}





function lockBTN1() {
    if(lock1.classList.contains('unlocked')){
        lock1.classList.add('locked')
        lock1.classList.remove('unlocked')
        lock1.innerHTML = ' <i class="fa-regular fa-lock fa-lg fa-shake" style="--fa-animation-iteration-count: 1 ; color:white"></i>'
    }else {
        lock1.classList.add('unlocked')
        lock1.classList.remove('locked')
        lock1.innerHTML = ' <i class="fa-regular fa-unlock fa-lg fa-shake" style="--fa-animation-iteration-count: 1 ; color:white"></i>'
    }
}
function lockBTN2() {
    if(lock2.classList.contains('unlocked')){
        lock2.classList.add('locked')
        lock2.classList.remove('unlocked')
        lock2.innerHTML = ' <i class="fa-regular fa-lock fa-lg fa-shake" style="--fa-animation-iteration-count: 1 ; color:white"></i>'
    }else {
        lock2.classList.add('unlocked')
        lock2.classList.remove('locked')
        lock2.innerHTML = ' <i class="fa-regular fa-unlock fa-lg fa-shake" style="--fa-animation-iteration-count: 1 ; color:white"></i>'
    }
}
function lockBTN3() {
    if(lock3.classList.contains('unlocked')){
        lock3.classList.add('locked')
        lock3.classList.remove('unlocked')
        lock3.innerHTML = ' <i class="fa-regular fa-lock fa-lg fa-shake" style="--fa-animation-iteration-count: 1 ; color:white"></i>'
    }else {
        lock3.classList.add('unlocked')
        lock3.classList.remove('locked')
        lock3.innerHTML = ' <i class="fa-regular fa-unlock fa-lg fa-shake" style="--fa-animation-iteration-count: 1 ; color:white"></i>'
    }
}
function lockBTN4() {
    if(lock4.classList.contains('unlocked')){
        lock4.classList.add('locked')
        lock4.classList.remove('unlocked')
        lock4.innerHTML = ' <i class="fa-regular fa-lock fa-lg fa-shake" style="--fa-animation-iteration-count: 1 ; color:white"></i>'
    }else {
        lock4.classList.add('unlocked')
        lock4.classList.remove('locked')
        lock4.innerHTML = ' <i class="fa-regular fa-unlock fa-lg fa-shake" style="--fa-animation-iteration-count: 1 ; color:white"></i>'
    }
}


// CHATGPT OPTIMISATION 


// const hexValues = ['A','B','C','D','E','F',0,1,2,3,4,5,6,7,8,9];

// const boxes = [
//   {
//     box: document.querySelector('.color1'),
//     code: document.querySelector('.color_1_js'),
//     lock: document.querySelector('.lock1'),
//     tooltip: document.querySelector('.tooltip1')
//   },
//   {
//     box: document.querySelector('.color2'),
//     code: document.querySelector('.color_2_js'),
//     lock: document.querySelector('.lock2'),
//     tooltip: document.querySelector('.tooltip2')
//   },
//   {
//     box: document.querySelector('.color3'),
//     code: document.querySelector('.color_3_js'),
//     lock: document.querySelector('.lock3'),
//     tooltip: document.querySelector('.tooltip3')
//   },
//   {
//     box: document.querySelector('.color4'),
//     code: document.querySelector('.color_4_js'),
//     lock: document.querySelector('.lock4'),
//     tooltip: document.querySelector('.tooltip4')
//   }
// ];

// function generateRandomHexCode() {
//   let hexCode = '#';
//   for (let i = 0; i < 6; i++) {
//     const randomIndex = Math.floor(Math.random() * hexValues.length);
//     hexCode += hexValues[randomIndex];
//   }
//   return hexCode;
// }

// function next() {
//   let allLocked = true;

//   for (const { box, code, lock } of boxes) {
//     if (lock.classList.contains('locked')) {
//       allLocked = false;
//     } else {
//       const hexCode = generateRandomHexCode();
//       box.style.backgroundColor = hexCode;
//       code.innerText = hexCode;
//     }
//   }

//   if (allLocked) {
//     alert('All 4 are locked !!!');
//   }

//   tooltipReset();
// }

// function tooltipReset() {
//   for (const { tooltip } of boxes) {
//     tooltip.innerText = 'Click to Copy';
//   }
// }

// function copy(index) {
//   const { code, tooltip } = boxes[index];
//   navigator.clipboard.writeText(code.innerText);
//   tooltipReset();
//   tooltip.innerText = 'Copied to Clipboard';
// }

// function lock(index) {
//   const { lock } = boxes[index];
//   lock.classList.toggle('locked');
//   lock.classList.toggle('unlocked');

//   const isLocked = lock.classList.contains('locked');
//   const lockIcon = isLocked ? 'fa-lock' : 'fa-unlock';
//   lock.innerHTML = `<i class="fa-regular ${lockIcon} fa-lg fa-shake" style="--fa-animation-iteration-count: 1 ; color:white"></i>`;
// }

// document.addEventListener('click', (event) => {
//   const target = event.target;

//   if (target.classList.contains('copy-btn')) {
//     const index = parseInt(target.dataset.index);
//     copy(index);
//   } else if (target.classList.contains('lock-btn')) {
//     const index = parseInt(target.dataset.index);
//     lock(index);
//   }
// });
