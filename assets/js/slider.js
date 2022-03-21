
$(document).ready(()=>{
    $('.slider-my-work').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 686,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
    });
    
    let getSlids = fetch('http://localhost:1000/getFeedback')
let messageFeedback 
let slideItem = document.getElementById('template')
let content = document.querySelector('.slider-feedback')


let appendSlide = (index, data)=>{
  content.append(slideItem.content.cloneNode(true));
  // content.children[++index].children
  console.log(data)
  let element = content.children[index]
  let title = element.children[0].children[0]
  let email = element.children[0].children[1]
  let text = element.children[1].children[0]
  email.innerHTML = data.email
  title.innerHTML = data.name
  text.innerHTML = data.reviews
}

getSlids
      .then(response => response.json())
      .then( json => {
        messageFeedback = json
        messageFeedback.forEach((el, i)=>{
          appendSlide(i, el)
        })
      })
      .then(()=>{
        $('.slider-feedback').slick({
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          responsive: [
            {
              breakpoint: 400,
              settings: {
                arrows: false,
              }
            },
          ]
        });
      })






    
})


