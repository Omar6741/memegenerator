function update_upper_text(){
    var upper_user_text = document.getElementById("upper_user_text");
      var upper_meme_text = document.getElementById("upper_meme_text");
  upper_meme_text.innerHTML = upper_user_text.value;
  }
  
  function update_lower_text(){
    var lower_user_text = document.getElementById("lower_user_text");
      var lower_meme_text = document.getElementById("lower_meme_text");
  lower_meme_text.innerHTML = lower_user_text.value;
  }
  
  
  
  //See Meme Image
  document.getElementById("b").onclick = function(){
           let imageInput = document.getElementById("image-input");
           let image = document.getElementById("image");
   if (imageInput.value) image.src = imageInput.value;
    document.getElementById("save_btn").checked = false;
  document.getElementById("delete_btn").checked = false; 
         }; 
  
  //Save Meme Image
  document.getElementById('save_btn').addEventListener('click', function () {
   var img = document.getElementById('image');
        var fontSize = (img.height)/15;
        let topTextInput = document.getElementById("upper_user_text").value;
        var topText = topTextInput;
    let bottomTextInput = document.getElementById("lower_user_text").value;
        var bottomText = bottomTextInput;
  var canvas = document.createElement('canvas');
    canvas.id = "meme-canvas";
    canvas.width = 0;
    canvas.height = 0;
        // var canvas = document.getElementById('meme-canvas');
         var ctx = canvas.getContext('2d');
    document.body.appendChild(canvas);
         // canvas.width = 0;
         // canvas.height = 0;
    
        canvas.width = img.width;
        canvas.height = img.height;
    
         
          // Draw image onto canvas;
    
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0);
    
     
         // Set measurements for letters
      ctx.fillStyle = 'white';
      ctx.strokeStyle = 'black';
      ctx.textAlign = 'center'; 
      ctx.font = fontSize + 'px Impact';
      ctx.lineWidth = fontSize / 20;
  
      // Draw top text
      ctx.textBaseline = 'top';
          ctx.fillText(topText, canvas.width / 2, fontSize, canvas.width);
          ctx.strokeText(topText, canvas.width / 2, fontSize, canvas.width);
      
  
  
      // Draw bottom text
      ctx.textBaseline = 'bottom';
          ctx.fillText(bottomText, canvas.width / 2, canvas.height - 3*fontSize, canvas.width);
          ctx.strokeText(bottomText, canvas.width / 2, canvas.height - 3*fontSize, canvas.width);
    alert("Thanks! To see our saved version of your meme, please scroll down to the bottom of the page. To keep your own version, please take a screenshot.");
    document.getElementById("save_btn").checked = false;
  document.getElementById("delete_btn").checked = false; 
     
   });
  
  //Delete Meme Image
  document.getElementById('delete_btn').addEventListener('click', function () {
  document.getElementById("upper_user_text").value = "";
  document.getElementById("lower_user_text").value = "";  
  document.getElementById("image-input").value = "";
  document.getElementById("image").src = "";
  document.getElementById("upper_meme_text").innerHTML = "";
  document.getElementById("lower_meme_text").innerHTML = "";  
  document.getElementById("save_btn").checked = false;
  document.getElementById("delete_btn").checked = false;  
  alert("No worries! Want to try again?");
  });
                                                         
                                                       