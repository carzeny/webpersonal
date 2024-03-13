let pos=0, errores=0;
let tema=["aguascalientes","baja california","baja california sur","campeche","chiapas","chihuahua","coahuila","colima","durango","guanajuato","guerrero","hidalgo","jalisco","mexico","michoacan","morelos","nayarit","nuevo leon","oaxaca","puebla","queretaro","quintana roo","san luis potosi","sinaloa","sonora","tabasco","tamaulipas","tlaxcala","veracruz","yucatan","zacatecas"];
    let  guiones=[], palabraFinal="", padiv="", letrasArray=[];
    for(;;)
    {
        pos= Math.round(Math.random()*31)-1;
        if(pos>=0 && pos<=5)
        break;
    }
    
    
    console.log(pos);
    padiv=tema[pos];
    
    function deshabilitar()
    {
        document.getElementById("btn").disabled=true;
        document.getElementById("txt1").disabled=true;
    }
    
    function cargar()
    { for(let i=0;i<padiv.length;i++)
        {
        guiones[i]="_";
        letrasArray[i]=padiv.charAt(i);
        }
        for(let i in padiv)
        {
            palabraFinal+="_ "
        }
        document.getElementById("adi").innerHTML=palabraFinal;
        let texh4="Tu palabra a adivinar tiene "+ tema[pos].length+ " caracteres"
        document.getElementById("txtadi").innerHTML=texh4;
    }
    cargar();

    const encontrarLetra= ()=>{  
        let letra="";         
        letra=document.getElementById("txt1").value;
        let cc=0, ban=0;
        palabraFinal="";
        while (cc<padiv.length)
        {
            if(letra===padiv.charAt(cc))
            {guiones[cc]=letra;
                ban=1;
            }
            cc++;
        }
        let pf=0;
        while(pf<guiones.length)
        { 
            palabraFinal+=guiones[pf]+" "
            pf++;
        }
        //alert(padiv+"\n letras acertadas "+guiones);
        document.getElementById("adi").innerHTML=palabraFinal;
        document.getElementById("txt1").value="";
        document.getElementById("txt1").focus();
        if (ban==0)
        errores++;
        
        if(errores==1)
            document.getElementById("img0").src="/2.png";
        if(errores==2)
            document.getElementById("img0").src="/3.png";
        if(errores==3)
        {   
            deshabilitar(); 
            document.getElementById("img0").src="/4.png";
            document.getElementById("perdio").innerHTML="P E R D I S T E"; 
            document.getElementById("btn").hidden=true;
            document.getElementById("btnvj").hidden=false;
        }
            
        if(errores<3 && guiones.indexOf("_")<0)
        {
        document.getElementById("img0").src="/genio.png";
        document.getElementById("perdio").innerHTML="G A N A S T E";
        deshabilitar();
        document.getElementById("btn").hidden=true;
        document.getElementById("btnvj").hidden=false;

        }    
    }


const dioclic=document.getElementById("btn");
dioclic.addEventListener("click",encontrarLetra);

