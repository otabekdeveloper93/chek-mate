let chess = []

for (let i = 8; i >= 1; i--) {
  for (let j = 1; j <= 8; j++) {
    let obj = {
      y: i,
      x: j,
    }
    chess.push(obj)
  }
}

let list = document.querySelector('.ul');
chess.forEach((items) => {
  let n;
  let li = document.createElement('li');
  li.className = "li"
  n = items.x + items.y
  if (n % 2 != 1) {
    li.classList.add('black');
  } else {
    li.classList.add('white');
  }
  li.innerHTML = `
            <span class="span1">${items.y}</span>
            <span class="span2">${items.x}</span>`;

  list.appendChild(li);
})


let btnTura = document.querySelector('#btn-tura');
let btnOt = document.querySelector('#btn-ot');
let btnRuh = document.querySelector('#btn-ruh');
let btnFarzin = document.querySelector('#btn-farzin');
let btnShox = document.querySelector('#btn-shox');
let btnPiyoda = document.querySelector('#btn-piyoda');

let items = document.querySelectorAll('.li');
let span1 = document.querySelectorAll('.span1');
let span2 = document.querySelectorAll('.span2');
let yNum = document.querySelector('.y-num');
let xNum = document.querySelector('.x-num');
let x, y;
let count = 1;

function tora() {
  btnTura.addEventListener('click', () => {
    btnTura.classList.toggle('bg-red');

    items.forEach(item =>{
      if(item.childNodes[1].textContent == 1 && item.childNodes[3].textContent == 1){
          item.classList.toggle('tura');
      };
    })

    items.forEach((e) => {
      e.addEventListener('click', () => {
        items.forEach((ee) => {
          ee.classList.remove('tura')
          ee.classList.remove('ot')
          ee.classList.remove('afitser')
          ee.classList.remove('farzin')
          ee.classList.remove('shox')
          ee.classList.remove('piyoda')
          e.classList.remove('movItem')
        })
        e.classList.add('mouseMove1')
        e.classList.add('tura')
        x = e.childNodes[1].textContent;
        y = e.childNodes[3].textContent;

        btnTura.addEventListener('click', tura(x, y))
        if (count == 1) {
          count++
        } else {
          count = 1
        }
      })
      e.classList.remove('mouseMove1')
    })
  })
} tora()

function tura(x, y) {
  items.forEach((itmm) => {
    if (itmm.childNodes[1].textContent == x || itmm.childNodes[3].textContent == y) {
      itmm.classList.add('green');
      itmm.addEventListener('click', (e)=>{
        e.target.classList.add('tura');
      });
      btnTura.addEventListener('click',()=>{
        itmm.classList.remove('tura');
        itmm.classList.remove('green');
      })
    }
    else {
      itmm.classList.remove('green')
    }
  })
}

function ot() {
  btnOt.addEventListener('click', () => {

    btnOt.classList.toggle('bg-red');
    
    items.forEach(item =>{
      if(item.childNodes[1].textContent == 1 && item.childNodes[3].textContent == 2){
          item.classList.toggle('ot');
      };
    })

    items.forEach((e) => {
      e.addEventListener('click', () => {
        items.forEach((ee) => {
          ee.classList.remove('tura')
          ee.classList.remove('ot')
          ee.classList.remove('afitser')
          ee.classList.remove('farzin')
          ee.classList.remove('shox')
          ee.classList.remove('piyoda')
          e.classList.remove('movItem')
        })
        e.classList.add('mouseMove1')
        e.classList.add('ot')
        x = e.childNodes[1].textContent;
        y = e.childNodes[3].textContent;
        btnOt.addEventListener('click', otliq(x, y));
        if (count == 1) {
          count++
        } else {
          count = 1
        }
      })
      e.classList.remove('mouseMove1')
    })
  })
} ot();

function otliq(x, y) {
  items.forEach((itmm) => {
    if (itmm.childNodes[1].textContent == eval(x) - 1 && itmm.childNodes[3].textContent == eval(y) - 2 ||
      itmm.childNodes[1].textContent == eval(x) - 2 && itmm.childNodes[3].textContent == eval(y) - 1 ||
      itmm.childNodes[1].textContent == eval(x) - 2 && itmm.childNodes[3].textContent == eval(y) + 1 ||
      itmm.childNodes[1].textContent == eval(x) - 1 && itmm.childNodes[3].textContent == eval(y) + 2 ||
      itmm.childNodes[1].textContent == eval(x) + 1 && itmm.childNodes[3].textContent == eval(y) - 2 ||
      itmm.childNodes[1].textContent == eval(x) + 1 && itmm.childNodes[3].textContent == eval(y) + 2 ||
      itmm.childNodes[1].textContent == eval(x) + 2 && itmm.childNodes[3].textContent == eval(y) - 1 ||
      itmm.childNodes[1].textContent == eval(x) + 2 && itmm.childNodes[3].textContent == eval(y) + 1) {
      itmm.classList.add('green');

      itmm.addEventListener('click', (e)=>{
        e.target.classList.add('ot');
      })
      btnOt.addEventListener('click',()=>{
        itmm.classList.remove('ot');
        itmm.classList.remove('green');
      });
      
    }
    else {
      itmm.classList.remove('green');
    }
    
  })
}


function afitser() {
  btnRuh.addEventListener('click', () => {

    btnRuh.classList.toggle('bg-red');
    items.forEach(item =>{
      if(item.childNodes[1].textContent == 1 && item.childNodes[3].textContent == 3){
          item.classList.toggle('afitser');
      };
    })

    items.forEach((e) => {

      e.addEventListener('click', () => {
        items.forEach((ee) => {
          ee.classList.remove('tura')
          ee.classList.remove('ot')
          ee.classList.remove('afitser')
          ee.classList.remove('farzin')
          ee.classList.remove('shox')
          ee.classList.remove('piyoda')
          e.classList.remove('movItem')
        })
        e.classList.add('mouseMove1')
        e.classList.add('afitser')
        x = e.childNodes[1].textContent;
        y = e.childNodes[3].textContent;

        btnRuh.addEventListener('click', rux(x, y))
        if (count == 1) {
          count++
        } else {
          count = 1
        }
      })
      e.classList.remove('mouseMove1')
    })
  })
} afitser();

function rux(x, y) {
  items.forEach((itmm) => {
    if (
      itmm.childNodes[1].textContent == x - 1 && itmm.childNodes[3].textContent == y - 1 ||
      itmm.childNodes[1].textContent == x - 2 && itmm.childNodes[3].textContent == y - 2 ||
      itmm.childNodes[1].textContent == x - 3 && itmm.childNodes[3].textContent == y - 3 ||
      itmm.childNodes[1].textContent == x - 4 && itmm.childNodes[3].textContent == y - 4 ||
      itmm.childNodes[1].textContent == x - 5 && itmm.childNodes[3].textContent == y - 5 ||
      itmm.childNodes[1].textContent == x - 6 && itmm.childNodes[3].textContent == y - 6 ||
      itmm.childNodes[1].textContent == x - 7 && itmm.childNodes[3].textContent == y - 7 ||
      itmm.childNodes[1].textContent == x - 8 && itmm.childNodes[3].textContent == y - 8) {
      itmm.classList.add('green');
      itmm.addEventListener('click', (e)=>{
        e.target.classList.add('afitser');
      });
      btnRuh.addEventListener('click',()=>{
        itmm.classList.remove('afitser');
        itmm.classList.remove('green');
      })
    }
    else if (itmm.childNodes[1].textContent == eval(x) + 1 && itmm.childNodes[3].textContent == eval(y) + 1 ||
      itmm.childNodes[1].textContent == eval(x) + 2 && itmm.childNodes[3].textContent == eval(y) + 2 ||
      itmm.childNodes[1].textContent == eval(x) + 3 && itmm.childNodes[3].textContent == eval(y) + 3 ||
      itmm.childNodes[1].textContent == eval(x) + 4 && itmm.childNodes[3].textContent == eval(y) + 4 ||
      itmm.childNodes[1].textContent == eval(x) + 5 && itmm.childNodes[3].textContent == eval(y) + 5 ||
      itmm.childNodes[1].textContent == eval(x) + 6 && itmm.childNodes[3].textContent == eval(y) + 6 ||
      itmm.childNodes[1].textContent == eval(x) + 7 && itmm.childNodes[3].textContent == eval(y) + 7 ||
      itmm.childNodes[1].textContent == eval(x) + 8 && itmm.childNodes[3].textContent == eval(y) + 8) {
      itmm.classList.add('green');
      itmm.addEventListener('click', (e)=>{
        e.target.classList.add('afitser');
        btnRuh.addEventListener('click',()=>{
          itmm.classList.remove('afitser');
          itmm.classList.remove('green');
        })
      })
    }
    else if (itmm.childNodes[1].textContent == eval(x) + 1 && itmm.childNodes[3].textContent == eval(y) - 1 ||
      itmm.childNodes[1].textContent == eval(x) + 2 && itmm.childNodes[3].textContent == eval(y) - 2 ||
      itmm.childNodes[1].textContent == eval(x) + 3 && itmm.childNodes[3].textContent == eval(y) - 3 ||
      itmm.childNodes[1].textContent == eval(x) + 4 && itmm.childNodes[3].textContent == eval(y) - 4 ||
      itmm.childNodes[1].textContent == eval(x) + 5 && itmm.childNodes[3].textContent == eval(y) - 5 ||
      itmm.childNodes[1].textContent == eval(x) + 6 && itmm.childNodes[3].textContent == eval(y) - 6 ||
      itmm.childNodes[1].textContent == eval(x) + 7 && itmm.childNodes[3].textContent == eval(y) - 7 ||
      itmm.childNodes[1].textContent == eval(x) + 8 && itmm.childNodes[3].textContent == eval(y) - 8) {
      itmm.classList.add('green');
      itmm.addEventListener('click', (e)=>{
        e.target.classList.add('afitser');
        btnRuh.addEventListener('click',()=>{
          itmm.classList.remove('afitser');
          itmm.classList.remove('green');
        })
      })
    }
    else if (itmm.childNodes[1].textContent == eval(x) - 1 && itmm.childNodes[3].textContent == eval(y) + 1 ||
      itmm.childNodes[1].textContent == eval(x) - 2 && itmm.childNodes[3].textContent == eval(y) + 2 ||
      itmm.childNodes[1].textContent == eval(x) - 3 && itmm.childNodes[3].textContent == eval(y) + 3 ||
      itmm.childNodes[1].textContent == eval(x) - 4 && itmm.childNodes[3].textContent == eval(y) + 4 ||
      itmm.childNodes[1].textContent == eval(x) - 5 && itmm.childNodes[3].textContent == eval(y) + 5 ||
      itmm.childNodes[1].textContent == eval(x) - 6 && itmm.childNodes[3].textContent == eval(y) + 6 ||
      itmm.childNodes[1].textContent == eval(x) - 7 && itmm.childNodes[3].textContent == eval(y) + 7 ||
      itmm.childNodes[1].textContent == eval(x) - 8 && itmm.childNodes[3].textContent == eval(y) + 8) {
      itmm.classList.add('green');
      itmm.addEventListener('click', (e)=>{
        e.target.classList.add('afitser');
      })
      btnRuh.addEventListener('click',()=>{
        itmm.classList.remove('afitser');
        itmm.classList.remove('green');
      })
    }
    else {
      itmm.classList.remove('green')
    }
  })
}


function farzin() {
  btnFarzin.addEventListener('click', () => {
    btnFarzin.classList.toggle('bg-red');
    items.forEach(item =>{
      if(item.childNodes[1].textContent == 1 && item.childNodes[3].textContent == 4){
          item.classList.toggle('farzin');
      };
    })

    items.forEach((e) => {
      e.addEventListener('click', () => {
        items.forEach((ee) => {
          ee.classList.remove('tura')
          ee.classList.remove('ot')
          ee.classList.remove('afitser')
          ee.classList.remove('farzin')
          ee.classList.remove('shox')
          ee.classList.remove('piyoda')
          e.classList.remove('movItem')
        })
        e.classList.add('mouseMove1')
        e.classList.add('farzin')
        x = e.childNodes[1].textContent;
        y = e.childNodes[3].textContent;

        btnFarzin.addEventListener('click', feruz(x, y))
        if (count == 1) {
          count++
        } else {
          count = 1
        }
      })
      e.classList.remove('mouseMove1')
    })
  })
} farzin();

function feruz(x, y) {
  items.forEach((itmm) => {
    if (itmm.childNodes[1].textContent == x || itmm.childNodes[3].textContent == y) {
      itmm.classList.add('green');
      itmm.addEventListener('click', (e)=>{
        e.target.classList.add('farzin');
      });
      btnFarzin.addEventListener('click',()=>{
        itmm.classList.remove('farzin');
        itmm.classList.remove('green');
      })
    }
    else if (
      itmm.childNodes[1].textContent == x - 1 && itmm.childNodes[3].textContent == y - 1 ||
      itmm.childNodes[1].textContent == x - 2 && itmm.childNodes[3].textContent == y - 2 ||
      itmm.childNodes[1].textContent == x - 3 && itmm.childNodes[3].textContent == y - 3 ||
      itmm.childNodes[1].textContent == x - 4 && itmm.childNodes[3].textContent == y - 4 ||
      itmm.childNodes[1].textContent == x - 5 && itmm.childNodes[3].textContent == y - 5 ||
      itmm.childNodes[1].textContent == x - 6 && itmm.childNodes[3].textContent == y - 6 ||
      itmm.childNodes[1].textContent == x - 7 && itmm.childNodes[3].textContent == y - 7 ||
      itmm.childNodes[1].textContent == x - 8 && itmm.childNodes[3].textContent == y - 8) {
      itmm.classList.add('green');
      itmm.addEventListener('click', (e)=>{
        e.target.classList.add('farzin');
      });
      btnFarzin.addEventListener('click',()=>{
        itmm.classList.remove('farzin');
        itmm.classList.remove('green');
      })
    }
    else if (itmm.childNodes[1].textContent == eval(x) + 1 && itmm.childNodes[3].textContent == eval(y) + 1 ||
      itmm.childNodes[1].textContent == eval(x) + 2 && itmm.childNodes[3].textContent == eval(y) + 2 ||
      itmm.childNodes[1].textContent == eval(x) + 3 && itmm.childNodes[3].textContent == eval(y) + 3 ||
      itmm.childNodes[1].textContent == eval(x) + 4 && itmm.childNodes[3].textContent == eval(y) + 4 ||
      itmm.childNodes[1].textContent == eval(x) + 5 && itmm.childNodes[3].textContent == eval(y) + 5 ||
      itmm.childNodes[1].textContent == eval(x) + 6 && itmm.childNodes[3].textContent == eval(y) + 6 ||
      itmm.childNodes[1].textContent == eval(x) + 7 && itmm.childNodes[3].textContent == eval(y) + 7 ||
      itmm.childNodes[1].textContent == eval(x) + 8 && itmm.childNodes[3].textContent == eval(y) + 8) {
      itmm.classList.add('green');
      itmm.addEventListener('click', (e)=>{
        e.target.classList.add('farzin');
      });
      btnFarzin.addEventListener('click',()=>{
        itmm.classList.remove('farzin');
        itmm.classList.remove('green');
      })
    }
    else if (itmm.childNodes[1].textContent == eval(x) + 1 && itmm.childNodes[3].textContent == eval(y) - 1 ||
      itmm.childNodes[1].textContent == eval(x) + 2 && itmm.childNodes[3].textContent == eval(y) - 2 ||
      itmm.childNodes[1].textContent == eval(x) + 3 && itmm.childNodes[3].textContent == eval(y) - 3 ||
      itmm.childNodes[1].textContent == eval(x) + 4 && itmm.childNodes[3].textContent == eval(y) - 4 ||
      itmm.childNodes[1].textContent == eval(x) + 5 && itmm.childNodes[3].textContent == eval(y) - 5 ||
      itmm.childNodes[1].textContent == eval(x) + 6 && itmm.childNodes[3].textContent == eval(y) - 6 ||
      itmm.childNodes[1].textContent == eval(x) + 7 && itmm.childNodes[3].textContent == eval(y) - 7 ||
      itmm.childNodes[1].textContent == eval(x) + 8 && itmm.childNodes[3].textContent == eval(y) - 8) {
      itmm.classList.add('green');
      itmm.addEventListener('click', (e)=>{
        e.target.classList.add('farzin');
      });
      btnFarzin.addEventListener('click',()=>{
        itmm.classList.remove('farzin');
        itmm.classList.remove('green');
      })
    }
    else if (itmm.childNodes[1].textContent == eval(x) - 1 && itmm.childNodes[3].textContent == eval(y) + 1 ||
      itmm.childNodes[1].textContent == eval(x) - 2 && itmm.childNodes[3].textContent == eval(y) + 2 ||
      itmm.childNodes[1].textContent == eval(x) - 3 && itmm.childNodes[3].textContent == eval(y) + 3 ||
      itmm.childNodes[1].textContent == eval(x) - 4 && itmm.childNodes[3].textContent == eval(y) + 4 ||
      itmm.childNodes[1].textContent == eval(x) - 5 && itmm.childNodes[3].textContent == eval(y) + 5 ||
      itmm.childNodes[1].textContent == eval(x) - 6 && itmm.childNodes[3].textContent == eval(y) + 6 ||
      itmm.childNodes[1].textContent == eval(x) - 7 && itmm.childNodes[3].textContent == eval(y) + 7 ||
      itmm.childNodes[1].textContent == eval(x) - 8 && itmm.childNodes[3].textContent == eval(y) + 8) {
      itmm.classList.add('green');
      itmm.addEventListener('click', (e)=>{
        e.target.classList.add('farzin');
      });
      btnFarzin.addEventListener('click',()=>{
        itmm.classList.remove('farzin');
        itmm.classList.remove('green');
      })
    }
    else {
      itmm.classList.remove('green')
    }
  })
}


function shox() {
  btnShox.addEventListener('click', () => {
    btnShox.classList.toggle('bg-red');
    items.forEach(item =>{
      if(item.childNodes[1].textContent == 1 && item.childNodes[3].textContent == 5){
          item.classList.toggle('shox');
      };
    })

    items.forEach((e) => {
      e.addEventListener('click', () => {
        items.forEach((ee) => {
          ee.classList.remove('tura')
          ee.classList.remove('ot')
          ee.classList.remove('afitser')
          ee.classList.remove('farzin')
          ee.classList.remove('shox')
          ee.classList.remove('piyoda')
          e.classList.remove('movItem')
        })
        e.classList.add('mouseMove1')
        e.classList.add('shox')
        x = e.childNodes[1].textContent;
        y = e.childNodes[3].textContent;

        btnShox.addEventListener('click', shoh(x, y))
        if (count == 1) {
          count++
        } else {
          count = 1
        }
      })
      e.classList.remove('mouseMove1')
    })
  })
} shox();

function shoh(x, y) {
  items.forEach((itmm) => {
    if (itmm.childNodes[1].textContent == x - 1 && itmm.childNodes[3].textContent == y - 1 ||
      itmm.childNodes[1].textContent == eval(x) - 1 && itmm.childNodes[3].textContent == eval(y) + 1 ||
      itmm.childNodes[1].textContent == eval(x) && itmm.childNodes[3].textContent == eval(y) + 1 ||
      itmm.childNodes[1].textContent == eval(x) + 1 && itmm.childNodes[3].textContent == eval(y) + 1 ||
      itmm.childNodes[1].textContent == eval(x) + 1 && itmm.childNodes[3].textContent == eval(y) ||
      itmm.childNodes[1].textContent == eval(x) - 1 && itmm.childNodes[3].textContent == eval(y) ||
      itmm.childNodes[1].textContent == eval(x) && itmm.childNodes[3].textContent == eval(y) - 1 ||
      itmm.childNodes[1].textContent == eval(x) + 1 && itmm.childNodes[3].textContent == eval(y) - 1
    ) {
      itmm.classList.add('green');
      itmm.addEventListener('click', (e)=>{
        e.target.classList.add('shox');
      });
      btnShox.addEventListener('click',()=>{
        itmm.classList.remove('shox');
        itmm.classList.remove('green');
      })
    }
    else {
      itmm.classList.remove('green')
    }
  })
}

function piyoda() {
  btnPiyoda.addEventListener('click', () => {

    btnPiyoda.classList.toggle('bg-red');
    items.forEach(item =>{
     
      if(item.childNodes[1].textContent == 2 && item.childNodes[3].textContent == 1){
          item.classList.toggle('piyoda');

      };
      if(item.childNodes[1].textContent == 2 && item.childNodes[3].textContent == 3){
        item.classList.toggle('piyoda');

      };
      if(item.childNodes[1].textContent == 2 && item.childNodes[3].textContent == 5){
        item.classList.toggle('piyoda');
      };
      if(item.childNodes[1].textContent == 2 && item.childNodes[3].textContent == 7){
        item.classList.toggle('piyoda');
      };
    })

    items.forEach((e) => {
      e.addEventListener('click', () => {
        items.forEach((ee) => {
          ee.classList.remove('tura')
          ee.classList.remove('ot')
          ee.classList.remove('afitser')
          ee.classList.remove('farzin')
          ee.classList.remove('shox')
          ee.classList.remove('piyoda')
          e.classList.remove('movItem')
        })
        e.classList.add('mouseMove1')
        e.classList.add('piyoda')
        x = e.childNodes[1].textContent;
        y = e.childNodes[3].textContent;

        btnPiyoda.addEventListener('click', pishka(x, y))
        if (count == 1) {
          count++
        } else {
          count = 1
        }
      })
      e.classList.remove('piyoda')
    })
  })
} piyoda();

function pishka(x, y) {
  items.forEach((itmm) => {
    if (itmm.childNodes[1].textContent == eval(x) + 1 && itmm.childNodes[3].textContent == eval(y) && itmm.childNodes[1].textContent != x && x != 1 ||
      x == 2 && itmm.childNodes[1].textContent == eval(x) + 2 && itmm.childNodes[3].textContent == eval(y)) {
      itmm.classList.add('green');
      itmm.addEventListener('click', (e)=>{
        e.target.classList.add('piyoda');
      });
      btnPiyoda.addEventListener('click',()=>{
        itmm.classList.remove('piyoda');
        itmm.classList.remove('green');
      })
    }
    else {
      itmm.classList.remove('green')
    }
  })
}

function itemsFun() {
  items.forEach((e) => {
    e.addEventListener('toggle', () => {
      e.classList.remove('mouseMove2')
    })
    e.addEventListener('click', () => {
      items.forEach((ee) => {
        ee.classList.remove('mouseMove2')
        ee.classList.remove('mouseMove1')
      })
      xNum.innerHTML = e.childNodes[1].textContent;
      yNum.innerHTML = e.childNodes[3].textContent;
    })
    e.classList.remove('mouseMove2')
    e.classList.remove('mouseMove1')
  })
} itemsFun()


let anim3D = document.querySelector('.anim-3d');
let cou = 1
anim3D.addEventListener('click', () => {
  list.classList.toggle('animation3D')
  if (cou == 1) {
    anim3D.textContent = '2D'
    cou++
  }
  else {
    anim3D.textContent = '3D'
    cou = 1
  }
});
