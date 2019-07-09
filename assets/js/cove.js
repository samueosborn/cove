

function next_feild(){
    $('#email').toggleClass("slideI--inpu-L  slideO--inpu-L"); 
    $('#phone').toggleClass("slideO--inpu-R slideI--inpu-R"); 
}
        function show_slide_modal(){
            // let carduser ;
            // // let carduser_info = carduser.data("info");
            // let temp =$.trim($('#li_emp').html());
            // let ina = "";
            // let obf  = jQuery.parseJSON(carduser_info.interest);
            // $.each(obf, function (i, item)  {
            //   ina = ina + ' <span class="badge badge-pill badge-m badge-light text-primary">'+item+'</span>';
            // });
  
            // var x = temp.replace(/{{name}}/ig, carduser_info.name).replace(/{{age}}/ig, carduser_info.userAge).replace(/{{interest}}/ig, ina).replace(/{{occupation}}/ig, carduser_info.occupation).replace(/{{image}}/ig, carduser_info.profile_pic).replace(/{{bio}}/ig, carduser_info.user_intro);
            // $('#profile_emp').html(x);
            $(".SlideWrapper").animate({
              width: "toggle"
            });
            
            $('.SlideWrapper').toggleClass("SlideWrapper--close  SlideWrapper--open"); 
            $('.SlideModal').toggleClass("SlideModal--close  SlideModal--open"); 
            
        }


        function close_slide_modal(){
            // let carduser ;
            // // let carduser_info = carduser.data("info");
            // let temp =$.trim($('#li_emp').html());
            // let ina = "";
            // let obf  = jQuery.parseJSON(carduser_info.interest);
            // $.each(obf, function (i, item)  {
            //   ina = ina + ' <span class="badge badge-pill badge-m badge-light text-primary">'+item+'</span>';
            // });
  
            // var x = temp.replace(/{{name}}/ig, carduser_info.name).replace(/{{age}}/ig, carduser_info.userAge).replace(/{{interest}}/ig, ina).replace(/{{occupation}}/ig, carduser_info.occupation).replace(/{{image}}/ig, carduser_info.profile_pic).replace(/{{bio}}/ig, carduser_info.user_intro);
            // $('#profile_emp').html(x);
            $(".SlideWrapper").animate({
              width: "toggle"
            });
            
            $('.SlideWrapper').toggleClass("SlideWrapper--close  SlideWrapper--open"); 
            $('.SlideModal').toggleClass("SlideModal--close  SlideModal--open"); 

            $("#email").val('');
            $("#phone").val('');
            next_feild();
            $("#sucess").hide();
                       
        }
        

        function send_data(){
           
            let email             = $("#email").val();
            let phone             = $("#phone").val();

            $.ajax({
                url: "https://kvstore.p.rapidapi.com/users",
                headers: {                    
                    'X-RapidAPI-Key': 'e9415aeea8mshcfc165fb03cc042p1dd8eajsn6c3563cbaa1e',
                    'X-RapidAPI-Host': 'kvstore.p.rapidapi.com'
                },
                type: "POST",
                dataType: 'json',
                contentType: 'application/json',                           
                data: {
                        "email"              : email,
                        "password"           : phone                      

                },
                beforeSend: function() {
                    // setting a timeout
                    $('#sucess').slideDown()
                },
                success: function(data){
                //    aler("done")
                //   
                }
            });

        }

     


        $(document).ready(function(){
            $('#nextfeild').attr('disabled',true);
            $('#email').keyup(function(){
                 if($(this).val().length > 4)
                    $('#nextfeild').attr('disabled', false);            
                else
                    $('#nextfeild').attr('disabled',true);
            })

            $('#phone').keyup(function(){
                if($(this).val().length > 4)
                    $('.add-me').show();            
                else
                    $('.add-me').hide();
            })

             // initialization of text animation (typing)
             var typed = new Typed(".u-text-animation--typing", {
                strings: ["more professional.", "perfect.", "astonishing."],
                typeSpeed: 60,
                loop: true,
                backSpeed: 25,
                backDelay: 1500
              });
        });

