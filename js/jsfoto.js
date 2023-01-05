window.onload = function() { //скрипт выполнился после загрузки страницы
    var fotos = new Array(15);
        fotos[0]="./img/heand.jpg";
        fotos[1]="./img/room.jpg";
        fotos[2]="./img/girl.jpg";
        fotos[3]="./img/house.jpg";
        fotos[4]="./img/book.jpg";
        fotos[5]="./img/rain.jpg";
        fotos[6]="./img/window.jpg";
        fotos[7]="./img/dog.jpg";
        fotos[8]="./img/sheep.jpg";
        fotos[9]="./img/dour.jpg";
        fotos[10]="./img/cow.jpg";
        fotos[11]="./img/grass.jpg";
        fotos[12]="./img/milka.jpg"; 
        fotos[13]="./img/wilage.jpg";
        fotos[14]="./img/pirs.jpg";
    
    var titles = new Array(15);
        titles[0]="какие-то руки";
        titles[1]="комната, выходящая на солнечную сторону";
        titles[2]="бежит куда-то";
        titles[3]="ну прям голден ауер";
        titles[4]="хотела бы я прочитать столько книг";
        titles[5]="а ведь кто-то только что помыл машину";
        titles[6]="у меня вид на детскую площадку";
        titles[7]="пёсель";
        titles[8]="интересно, о чем думает овечка";
        titles[9]="кажется тут нужен капитальный ремонт";
        titles[10]="вы коровок видете? а они есть";
        titles[11]="просто травка";
        titles[12]="в день корова может давать до 20 литров молока";
        titles[13]="неплохое место для отдыха";
        titles[14]="я не умею плавать";

    var text = new Array(15);
        text[0]="Руки";
        text[1]="Комната";
        text[2]="Девушка";
        text[3]="Дом";
        text[4]="Книги";
        text[5]="Дождь";
        text[6]="Окно";
        text[7]="Собака";
        text[8]="Овечки";
        text[9]="Дверь";
        text[10]="Коровки";
        text[11]="Луг";
        text[12]="Милка";
        text[13]="Деревня";
        text[14]="Пирс";


    var all = document.createElement("div");
        for (var i = 0; i < 15; i++) 
        {
            var d = document.createElement("div");
            var img = document.createElement("img");
            img.id = 'myImg';
            var word = document.createElement("h3");
            
            var elemText = document.createTextNode(text[i]);
            
            d.classList.add('foto');
            img.src = fotos[i];
            img.title = titles[i];
            
        // console.log(text[i] +"p");
            img.onclick = function(){
                modal.style.display = "block";
                modalContent.src = this.src;
                write = document.createTextNode("poooppoo");
            }

            word.appendChild(elemText);
            d.appendChild(img); //добавляет новые html элементы к существующим
            d.appendChild(word);
            all.appendChild(d);

        }
        
    all.classList.add('col-md-4');
    document.body.appendChild(all); 


    var m = document.createElement("div");
    for (var i = 0; i < 15; i++) 
    {

        var modal = document.createElement("div");
        modal.id = 'myModal';
        modal.classList.add('modal');

        var close = document.createElement("span");
        close.classList.add('close');
        close.innerHTML = "&times";

        var modalContent = document.createElement("img");
        modalContent.id ="img01";
        modalContent.classList.add('modal-content');

        var write = document.createElement("div");
        write.id = 'caption';
        write.classList.add('caption');


        close.onclick = function() {
        modal.style.display = "none";
        }
        

        modal.appendChild(modalContent);
        modal.appendChild(write);
        modal.appendChild(close);
        m.appendChild(modal);

    }
    document.body.appendChild(m); 

};


