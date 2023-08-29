var BANNER = `
 .d8888b.  888                             d8b          888    
d88P  Y88b 888                             Y8P          888    
888    888 888                                          888    
888        88888b.   .d88b.  88888b.d88b.  888 .d8888b  888888 
888        888 "88b d8P  Y8b 888 "888 "88b 888 88K      888    
888    888 888  888 88888888 888  888  888 888 "Y8888b. 888    
Y88b  d88P 888  888 Y8b.     888  888  888 888      X88 Y88b.  
 "Y8888P"  888  888  "Y8888  888  888  888 888  88888P'  "Y888
`

var SKULL = `

                     .ed"""" """$$$$be.
                   -"           ^""**$$$e.
                 ."                   '$$$c
                /                      "4$$b
               d  3                      $$$$
               $  *                   .$$$$$$
              .$  ^c           $$$$$e$$$$$$$$.
              d$L  4.         4$$$$$$$$$$$$$$b
              $$$$b ^ceeeee.  4$$ECL.F*$$$$$$$
  e$""=.      $$$$P d$$$$F $ $$$$$$$$$- $$$$$$
 z$$b. ^c     3$$$F "$$$$b   $"$$$$$$$  $$$$*"      .=""$c
4$$$$L        $$P"  "$$b   .$ $$$$$...e$$        .=  e$$$.
^*$$$$$c  %..   *c    ..    $$ 3$$$$$$$$$$eF     zP  d$$$$$
  "**$$$ec   "   %ce""    $$$  $$$$$$$$$$*    .r" =$$$$P""
        "*$b.  "c  *$e.    *** d$$$$$"L$$    .d"  e$$***"
          ^*$$c ^$c $$$      4J$$$$$% $$$ .e*".eeP"
             "$$$$$$"'$=e....$*$$**$cz$$" "..d$*"
               "*$$$  *=%4.$ L L$ P3$$$F $$$P"
                  "$   "%*ebJLzb$e$$$$$b $P"
                    %..      4$$$$$$$$$$ "
                     $$$e   z$$$$$$$$$$%
                      "*$c  "$$$$$$$P"
                       ."""*$$$$$$$$bc
                    .-"    .$***$$$"""*e.
                 .-"    .e$"     "*$c  ^*b.
          .=*""""    .e$*"          "*bc  "*$e..
        .$"        .z*"               ^*$e.   "*****e.
        $$ee$c   .d"                     "*$.        3.
        ^*$E")$..$"                         *   .ee==d%
           $.d$$$*                           *  J$$$e*
            """""                              "$$$"
`;

var FUMES = `
                    a,  8a  a,  8a  
                     '8, '8) '8, '8)
                      8)  ]8  8)  ]8
                      ,8' ,8' ,8' ,8'
                    ,8' ,8',8' ,8'
                    8)  8) 8)  8)
                    8,  8, 8,  8,
                    '8, '8,'8, '8,
                     '8, '8, '8, '8,
`;

var EXPLOSION = `
                             ____
                     __'-~~/~    '---.
                   _/_,---(      ,    )
               __ /        <    /   )  \___
- ------===;;;'====------------------===;;;===----- -  -
                  \/  ~"~"~"~"~"~\~"~)~"/
                  (_ (   \  (     >    \)
                   \_( _ <         >_>'
                      ~ '-i' ::>|--"
                          I;|.|.|
                         <|i::|i|'.
                        (' ^'"'-' ")
`;

function print_img(str)
{
	var img = document.createElement('img');
	img.src = str;
    document.getElementById('output').appendChild(img);
}

function print_asciiart(str,mode)
{
	var pre = document.createElement('pre');
	
	if (mode == 0) {
		pre.setAttribute("class", "orange"); 
	}
	
	if (mode == 1) {
		pre.setAttribute("class", "yellow"); 
	}
	
	if (mode == 2) {
		pre.setAttribute("class", "green");
	}
	
	if (mode == 3) {
		pre.setAttribute("class", "red");
	}
	
	if (mode == 4) {
		pre.setAttribute("class", "blue");
	}
	
	if (mode == 5) {
		pre.setAttribute("class", "lightgrey");
	}
	
	// else {
		// pre.class = 'ascii_art';
    // }

	var textNode = document.createTextNode(str);
	pre.appendChild(textNode);
    document.getElementById('output').appendChild(pre);
}

function print(str)
{
    document.getElementById('output').appendChild(document.createTextNode(str));
}

function input()
{
    var input_element;
    var input_str;
    
    return new Promise(function (resolve) {
                       input_element = document.createElement("INPUT");
                       
                       print("? ");
                       input_element.setAttribute("type", "text");
                       input_element.setAttribute("length", "50");
                       document.getElementById("output").appendChild(input_element);
                       input_element.focus();
                       input_str = undefined;
                       input_element.addEventListener("keydown", function (event) {
                                                      if (event.keyCode == 13) {
                                                      input_str = input_element.value;
                                                      document.getElementById("output").removeChild(input_element);
                                                      print(input_str);
                                                      print("\n");
                                                      resolve(input_str);
                                                      }
                                                      });
                       });
}

function tab(space)
{
    var str = "";
    while (space-- > 0)
        str += " ";
    return str;
}

function clear_screen(){
    document.getElementById("output").innerHTML = "";
}
//https://images.app.goo.gl/qPJTX4ZmjrRysk4r9
// Main program
async function main()
{
	print("\n")
	print_asciiart(BANNER,2)
    print("\n");
    print("\n");
    print("\n");
    print("THE FICTITIOUS CHECMICAL KRYPTOCYANIC ACID CAN ONLY BE\n");
    print("DILUTED BY THE RATIO OF 7 PARTS WATER TO 3 PARTS ACID.\n");
    print("IF ANY OTHER RATIO IS ATTEMPTED, THE ACID BECOMES UNSTABLE\n");
    print("AND SOON EXPLODES.  GIVEN THE AMOUNT OF ACID, YOU MUST\n");
    print("DECIDE WHO MUCH WATER TO ADD FOR DILUTION.  IF YOU MISS\n");
    print("YOU FACE THE CONSEQUENCES.\n");
    print("\n");
    t = 0;
    while (1) {
        a = Math.floor(Math.random() * 50);
        w = 7 * a / 3;
        print(a + " LITERS OF KRYPTOCYANIC ACID.  HOW MUCH WATER");
        r = parseFloat(await input());
        d = Math.abs(w - r);
        if (d > w / 20) {
            print("\n");
			print(" SIZZLE!  YOU HAVE JUST BEEN DESALINATED INTO A BLOB\n");
            print(" OF QUIVERING PROTOPLASM!\n");
			print_asciiart(EXPLOSION,0);
			// print_img("https://www.picng.com/upload/nuclear_explosion/png_nuclear_explosion_81572.png")
            t++;
            if (t == 9)
                break;
			print("\n");
			print("\n");
            print(" HOWEVER, YOU MAY TRY AGAIN WITH ANOTHER LIFE.\n");
			print("\n");
        } else {
			print_asciiart(FUMES,5);
			print("\n");
            print(" GOOD JOB! YOU MAY BREATHE NOW, BUT DON'T INHALE THE FUMES!\n");
            print("\n");
        }
    }
	clear_screen();
	print_asciiart(SKULL,1);
    print(" YOUR 9 LIVES ARE USED, BUT YOU WILL BE LONG REMEMBERED FOR\n");
    print(" YOUR CONTRIBUTIONS TO THE FIELD OF COMIC BOOK CHEMISTRY.\n");
	print("\n");
	print("\n");
	print("\n");
}

main();
