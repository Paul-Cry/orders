
$(document).ready(()=>{
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

    
    
})