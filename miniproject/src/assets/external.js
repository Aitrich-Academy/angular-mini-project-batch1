function validateform(){
    var val=document.forms["myform"]["fname"].value
    if(val == ""){
      alert("The field must be filled out");
      return false;
    }
    var val=document.forms["myform"]["pname"].value
    if(val == ""){
      alert("phone number must be filled out");
      return false;
    }
    if(function() {validateform()=true}){
        alert("BOOKED SUCCESSFULLY");
    }
  }