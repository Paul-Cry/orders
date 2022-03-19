let fields = document.querySelectorAll('.field__file');
    Array.prototype.forEach.call(fields, function (input) {
      let label = input.nextElementSibling,
        labelVal = label.querySelector('.field__file-fake__text').innerText;
  
      input.addEventListener('change', function (e) {
        let countFiles = '';
        if (this.files && this.files.length >= 1)
          countFiles = this.files.length;
        
        if (countFiles)
          label.querySelector('.field__file-fake__text').innerText = countFiles;
      });
});

let glus = document.querySelectorAll('.order-glus-obj svg')

let colors = document.querySelectorAll('.order-glus-colors-item')

colors[0].addEventListener('click', (e)=>{
  glus.forEach(el=>{
    el.classList.forEach((name)=>{ 
      el.classList.remove(name)
    })
   
    el.classList.add('one-svg')
  })
})
colors[1].addEventListener('click', (e)=>{
  glus.forEach(el=>{
    el.classList.forEach((name)=>{ 
      el.classList.remove(name)
    })
    el.classList.add('two-svg')
  })
})
colors[2].addEventListener('click', (e)=>{
  glus.forEach(el=>{
    el.classList.forEach((name)=>{ 
      el.classList.remove(name)
    })
    el.classList.add('three-svg')
  })
})
colors[3].addEventListener('click', (e)=>{
  glus.forEach(el=>{
    el.classList.forEach((name)=>{ 
      el.classList.remove(name)
    })
    el.classList.add('four-svg')
  })
})
colors[4].addEventListener('click', (e)=>{
  glus.forEach(el=>{
    el.classList.forEach((name)=>{ 
      el.classList.remove(name)
    })
    el.classList.add('five-svg')
  })
})