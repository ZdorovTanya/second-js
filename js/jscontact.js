
function validate_form()
{
    if (!fio()) return false;

    if (!phone()) return false;

    if (!post()) return false;

    if (!check_radio()) return false;

    var word = document.contact_form.comment;
    if (!text_area(word)) return false;

    var brth = document.contact_form.daybirn;
    if (!bData(brth)) return false;



    return true;
}

    



function fio (){
    var uname = document.contact_form.contact_name.value;
    var valid = true;
    var id = document.querySelector('#Username');

    let mistake = document.getElementsByClassName("error");
  
    var i, d, text1;
  
    d = document.createElement("div");
    i = document.createElement("h3");
    text1 = document.createTextNode("Пожалуйста заполните поле 'Фамилия Имя Отчество'.");
    i.appendChild(text1);
    d.appendChild(i);
  
    var j, b, text2;
  
    b = document.createElement("div");
    j = document.createElement("h3");
    text2 = document.createTextNode("Пожалуйста введите ФИО как в паспорте");
    j.appendChild(text2);
    b.appendChild(j);

    if ((uname == "")){
        mistake[0].appendChild(d);
        b.remove();
        valid = false;
        id.style.border="1px solid red";
        id.style.borderRadius = "10px";
        // id.focus();
        
    };

    if (uname != ""){
        if (uname.match(/^[A-Я][а-я]+\s[A-Я][а-я]+\s[A-Я][а-я]+$/)){
            var del = mistake[0].childNodes.length;
            id.style.border="1px solid green";
            id.style.borderRadius = "10px";
            for(var i=del-1; i>=0; i--){
                mistake[0].childNodes[i].remove();
            }
            valid=true;
        }
        else {
            d.remove();
            mistake[0].appendChild(b);
            valid = false;
            id.style.border="1px solid red";
            id.style.borderRadius = "10px";
            // id.focus();
        }

    };

    button();

    return valid;
  
}


let numberInput = document.getElementById("phone");
numberInput.addEventListener("blur", phone);


function phone (){
    var tel = document.contact_form.phone_num.value;
    var valid = true;
    var id = document.querySelector('#phone');

    let mistake = document.getElementsByClassName("error");
    
    var i, d, text1;
    
    d = document.createElement("div");
    i = document.createElement("h3");
    text1 = document.createTextNode("Пожалуйста введите номер.");
    i.appendChild(text1);
    d.appendChild(i);
    
    var j, b, text2;
    
    b = document.createElement("div");
    j = document.createElement("h3");
    text2 = document.createTextNode("Пожалуйста проверте номер");
    j.appendChild(text2);
    b.appendChild(j);

    if ((tel == "")){
        mistake[1].appendChild(d);
        b.remove();
        valid = false;
        id.style.border="1px solid red";
        id.style.borderRadius = "10px";
        // id.focus();
        
    };

    if (tel != ""){
        if (tel.match(/^\+[73][0-9]{9,11}$/)){
            var del = mistake[1].childNodes.length;
            id.style.border="1px solid green";
            id.style.borderRadius = "10px";
            for(var i=del-1; i>=0; i--){
                mistake[1].childNodes[i].remove();
            }
            valid=true;
        }
        else {
            d.remove();
            mistake[1].appendChild(b);
            valid = false;
            id.style.border="1px solid red";
            id.style.borderRadius = "10px";
            // id.focus();
        }

    };

    button();

    return valid;

}


let postInput = document.getElementById("UserEmail");
postInput.addEventListener("blur", post);


function post (){
    var email = document.contact_form.email_name.value;
    var valid = true;
    var id = document.querySelector('#UserEmail');

    let mistake = document.getElementsByClassName("error");
    
    var i, d, text1;
    
    d = document.createElement("div");
    i = document.createElement("h3");
    text1 = document.createTextNode("Пожалуйста заполните поле 'Email'");
    i.appendChild(text1);
    d.appendChild(i);
    
    var j, b, text2;
    
    b = document.createElement("div");
    j = document.createElement("h3");
    text2 = document.createTextNode("Пожалуйста проверте почту");
    j.appendChild(text2);
    b.appendChild(j);

    if ((email == "")){
        mistake[2].appendChild(d);
        b.remove();
        valid = false;
        id.style.border="1px solid red";
        id.style.borderRadius = "10px";
    };

    if (email != ""){
        if (email.match(/^[_a-z0-9-\+-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,})$/i)){
            var del = mistake[2].childNodes.length;
            id.style.border="1px solid green";
            id.style.borderRadius = "10px";
            for(var i=del-1; i>=0; i--){
                mistake[2].childNodes[i].remove();
            }
            valid=true;
        }
        else {
            d.remove();
            mistake[2].appendChild(b);
            valid = false;
            id.style.border="1px solid red";
            id.style.borderRadius = "10px";
        }

    };

    button();
    
    return valid;

    

}



// function fio (){
//     var uname = document.contact_form.contact_name.value;
//     var valid = true;
//     var id = document.querySelector('#Username');

//     if ( uname == "" )
//     {
//         alert ( "Пожалуйста заполните поле 'Фамилия Имя Отчество'." );
//         id.focus();
//         valid = false;
//     }

//     if (!uname.match(/^[A-Я][а-я]+\s[A-Я][а-я]+\s[A-Я][а-я]+$/)){
//         alert ( "Пожалуйста введите ФИО как в паспорте" );
//         id.focus();
//         valid = false;
//     }

//     return valid;
// }


// function phone (tel){
//     var valid = true;
//     var id = document.querySelector('#phone');

//     if ( tel == "" )
//     {
//             alert ( "Пожалуйста введите номер." );
//             id.focus();
//             valid = false;
//     }

//     if (!tel.match(/^\+[73][0-9]{9,11}$/)) {
//         alert ( "Пожалуйста проверте номер" );
//         id.focus();
//         valid = false;
//     }

//     return valid;
// }

// function post (email){
//     var valid = true;
//     var id = document.querySelector('#UserEmail');

//     if ( email == "" )
//     {
//         alert ( "Пожалуйста заполните поле 'Email'." );
//         id.focus();
//         valid = false;
//     }

//     return valid;
// }

function check_radio (){
    var valid = false;
    
    if(document.getElementById("w").checked || document.getElementById("m").checked){
        valid = true;
    }

    if(valid){

    }
    else{
        alert ("Укажите пол.");
    }

    return valid;
}


function text_area (word){
    var valid = true;

    if ( word.value == "" )
    {
            alert ( "Пожалуйста заполните текстовое поле." );
            word.focus();
            valid = false;
    }

    return valid;
}

function bData (brth){
    var valid = true;

    if ( brth.value == "" )
    {
            alert ( "Пожалуйста укажите дату рождения." );
            brth.focus();
            valid = false;
    }

    return valid;
}


function button (){
    var uname = document.contact_form.contact_name.value;
    var email = document.contact_form.email_name.value;
    var tel = document.contact_form.phone_num.value;

    if ((email.match(/^[_a-z0-9-\+-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,})$/i)) && (tel.match(/^\+[73][0-9]{9,11}$/)) && (uname.match(/^[A-Я][а-я]+\s[A-Я][а-я]+\s[A-Я][а-я]+$/))) {document.getElementById("btn").disabled = false} else {document.getElementById("btn").disabled = true};
    
}

