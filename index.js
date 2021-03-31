let Lcount = 0;
let Rcount = 0;
setInterval(() => {if(Math.random() < 0.95){
    document.querySelector('[aria-label="Like"]').click(); console.log(`Right ${Rcount}`); Rcount++;
    }else{
    document.querySelector('[aria-label="Pass"]').click(); console.log(`Left ${Lcount}`); Lcount++;
  }}, 2200)
