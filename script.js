
window.addEventListener("load", () => {
    Load();
});


let f = false;

function Load(f,thickness,color){

    const canvas = document.querySelector("canvas");
    const c = canvas.getContext("2d");
    
    
    if(f == true){
        c.lineWidth = thickness;
        c.strokeStyle = color;
    }else{
        let painting = false;

        

        canvas.height = window.innerHeight -50; //1143
        canvas.width = window.innerWidth -40;//2370
    
        

        function start(e){
            painting = true;
            Draw(e);
        }

        function stop(){
            painting = false;
            c.beginPath()
        }

        function Draw(e){
            if (painting == false) return;
            c.strokeStyle = color;
            
            c.lineCap = "round";
            c.lineTo(e.clientX,e.clientY);
            c.stroke();
            moveTo(e.clientX,e.clientY); 
        }

        canvas.addEventListener("mousedown",start);
        canvas.addEventListener("mouseup",stop);
        canvas.addEventListener("mousemove",Draw);
    }

};

function Changer(){
    let f = true;
    let thickness = document.getElementById("range").value;
    
    

    let color = document.getElementById("color").value;
    console.log(color)


    Load(f,thickness,color);
};