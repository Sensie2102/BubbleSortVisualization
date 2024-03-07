// class canvas{
//     constructor(){
//         const canvas = document.createElement("canvas")
//         const doc = document.querySelector("body")
//         if(doc!=null){
//             doc.appendChild(canvas)
//         }
//     }

//     clear(){
//         if(document.querySelector("canvas")!=null){
//             $("canvas").remove()
//         }
//     }
// }

// $("#BubbleSort").click(function (){
//     const canv = new canvas()
//     $(".wrapper1").hide()
//     const back = document.createElement("button")
//     back.textContent = "Back"
//     document.querySelector("body").appendChild(back)
// })

const canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2d")

class square{
    constructor(x,y,width,height){
        this.x = x
        this.y= y
        this.width = width
        this.height = height
        this.centerX = (this.x+(this.width+this.x))/2-3
        this.centerY = (this.y+(this.height+this.y))/2+3
    }

    makeSquare(){
        ctx.strokeStyle = "#000000"
        ctx.beginPath()
        ctx.rect(this.x,this.y,this.width,this.height)
        ctx.stroke()
        ctx.closePath()
    }

    save_text(num){
        this.oldText = num
    }

    writeNum(num){
        ctx.fillStyle = "#000000"
        ctx.fillText(num,this.centerX,this.centerY)
    }

    highlight_Square(color){
        this.color = color
        ctx.strokeStyle = color
        ctx.strokeRect(this.x,this.y,this.width,this.height)
    }

}


//array creation
let sqobj = []
let arr = []

for(let i=0;i<5;i++){
    arr[i] = Math.floor(Math.random() * 100) + 1
}
let x = 100
let y = canvas.height/2
let width = 30
for(let i=0;i<5;i++){
    sqobj[i] = new square(x,y,30,25)
    sqobj[i].makeSquare()
    sqobj[i].save_text(arr[i])
    sqobj[i].writeNum(arr[i])
    x+=width
}

function arr_draw(){
    ctx.save()
    ctx.font = "20px Comic Sans MS"
    ctx.fillStyle = "#990011";
    ctx.fillText("arr",55,y)
    ctx.restore()
}



arr_draw()

x = 100
let jforx = 130

// for(let i = 0;i < 5; i++){
//     ctx.clearRect(x,y,30,25)
//     sqobj[i].highlight_Square("blue")
//     sqobj[i].writeNum(arr[i])
//     for(let j = i + 1; j < 5 ; j++){
//         ctx.clearRect(jforx,y,30,25)
//         sqobj[j].highlight_Square("red")
//         if(arr[i]>arr[j]){
//             ctx.clearRect(x,y,30,25)
//             let temp = arr[j]
//             arr[j] = arr[i]
//             arr[i] = temp
//             sqobj[i].writeNum(arr[i])
//             sqobj[j].writeNum(arr[j]) 
//         }
//         jforx += width
//     }
//     x += width
// }
let i = 0
let j = i + 1
$("#Next").click(function (){
    if(j == i+1){
        ctx.clearRect(x,y,30,25)
        sqobj[i].highlight_Square("blue")
        sqobj[i].writeNum(arr[i])
        if(i+1 != 5){
            ctx.clearRect(jforx,y,30,25)
            sqobj[j].highlight_Square("red")
            sqobj[j].writeNum(arr[j])
        }   
    }
    if(i == 4){
        ctx.clearRect(x,y,30,25)
        sqobj[i].writeNum(arr[i])
        sqobj[i].highlight_Square("black")
        alert("Reached the end")
    }
    console.log("i = "+i)
    console.log("j = "+j)
    if(arr[i]>arr[j]){
        ctx.clearRect(x,y,30,25)
        ctx.clearRect(jforx,y,30,25)
        let temp = arr[j]
        arr[j] = arr[i]
        arr[i] = temp
        sqobj[i].writeNum(arr[i])
        sqobj[j].writeNum(arr[j]) 
    } 
    if(j == 4){
        ctx.clearRect(x,y,30,25)
        sqobj[i].makeSquare()
        sqobj[i].writeNum(arr[i])
        i++
        j = i + 1 
        x += width
        ctx.clearRect(x,y,30,25)
        sqobj[i].highlight_Square("blue")
        sqobj[i].writeNum(arr[i])
        jforx = 100
        jforx+=width*j
    }
    else{
        ctx.clearRect(jforx,y,30,25)
        sqobj[j].highlight_Square("black")
        sqobj[j].writeNum(arr[j])
        j++
        jforx += width
        ctx.clearRect(jforx,y,30,25)
        sqobj[j].highlight_Square("red")
        sqobj[j].writeNum(arr[j])
    }
    console.log(jforx)
})

console.log(arr)