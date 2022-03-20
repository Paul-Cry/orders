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

if(colors.length > 0){
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
  
}

let burger = document.querySelector('.burger')
if(burger){

  let content = document.querySelector('.back-main')
  let windows = document.querySelector('.content')
  let exit = document.querySelector('.burger-hide')
  let body = document.body
  burger.addEventListener('click', (ev)=>{
    content.classList.add('active')
    windows.classList.add('active')
    burger.classList.add('hide')
    body.classList.add('over')
  })
  exit.addEventListener('click', (ev)=>{
    content.classList.remove('active')
    burger.classList.remove('hide')
    body.classList.remove('over')
  
  })
  
  
}





//https://orderapi1.herokuapp.com/

var sendFeedback = async ()=>{
      let input = document.querySelectorAll('.wrapper-entry__input')
      var obj = {}
      obj.name = input[0].value
      obj.email = input[1].value
      obj.feedback = input[2].value
      input[0].value = ''
      input[1].value = ''
      input[2].value = ''
      console.log(obj);
      
      let response = fetch('http://localhost:1000/send/feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(obj)
      });
    
}


if(document.querySelector('.feedback-forms')){

  var FormFeedback = document.querySelector('.feedback-forms')

  FormFeedback.addEventListener('submit', function(evt){
    evt.preventDefault();
    sendFeedback()
  })
  
 
}


if(document.querySelector('.master-forms')){

   
  var sendMater = async ()=>{
    let input = document.querySelectorAll('.wrapper-entry__input')
    var obj = {}
    obj.name = input[0].value
    obj.email = input[1].value
    input[0].value = ''
    input[1].value = ''
    console.log(obj);
    console.log('1111');
    let response = fetch('http://localhost:1000/send/master', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(obj)
    });
  
  }

  var masterClass = document.querySelector('.master-forms')

  masterClass.addEventListener('submit', function(evt){
    sendMater()
    console.log('13434');
    
  })
  
  
}




// .content
// .back-main
// transform: translateX(-100vw);
// transform: translateX(-50vw) scale(0.8);