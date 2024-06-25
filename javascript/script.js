document.getElementById("date").innerHTML=setInterval(() => {
    
    // let now=new Date()
    // console.log(now);
    
let day=""
let mont=""
let din = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thrusday", "Friday", "Saturday"]
let month = ["January", "Feburary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
// let time=[1,2,3,4,5,6,7,8,9,10,11,12]
let isdayfound=false;
let noon="Pm"

for(let i=0;i<din.length;i++){
    if(i==new Date().getDay()){

        isdayfound=true;
        day=din[i]
        // console.log(day)
    }
}
if(isdayfound===false){
    console.log("False wa Pai")
}

for(let i=0;i<month.length;i++){
    if(i===new Date().getMonth()){
        isdayfound=true;
        mont=month[i]
        // console.log(mont);
    }
    
}
if(isdayfound===false){
    console.log("jdf");

}
let hours=new Date().getHours()
if(hours>=12){
    hours=noon
}
else{
    hours="Am"
}

let time=new Date().getHours()
let hour=""
if(time===13){
    hour=1
}
if(time===14){
    hour=2
}
if(time===15){
    hour=3
}
if(time===16){
    hour=4
}
if(time===17){
    hour=5
}
if(time===18){
    hour=6
}
if(time===19){
    hour=7
}
if(time===20){
    hour=8
}
if(time===21){
    hour=9
}
if(time===22){
    hour=10
}
if(time===23){
    hour=11
}
if(time===24){
    hour=12
}
// console.log(time);
let full=day+","+mont+","+new Date().getDate()+","+new Date().getFullYear()+" "+new Date().getHours()+":"+new Date().getMinutes()+":"+new Date().getSeconds()+" "+hours
document.getElementById("date").innerHTML=full

}, 1000);




let users=[{id:1,title:'Title 1', date:new Date(), iscomplete:'false'},{id:2,title:'Title 2', date:new Date(), iscomplete:'false'},{id:3,title:'Title 3', date:new Date(), iscomplete:'false'}
]

const create=()=>{
    const todo={id:4,title:"Title 4", date:new Date(),iscomplete:"false"}
    users.push(todo)
    console.log(users);
}

const read=()=>{
    console.log(users);
    showtable()
}

const update=()=>{
    let complete="true"
    let user=users.map((check,i)=>{
        if(check.id===3){
            return{...check,iscomplete:complete}

        }
        else{
            return check
        }
    })

    users=user
    console.log(users);
    showtable()
}

const showtable=()=>{
    let tableStarting='<div class="responsive-table"><table class="table"><thead>'
    let tablehead='<thead><th scope="col">Id</th><th scope="col">Title</th><th scope="col">Date</th><th scope="col">Status</th></tr></thead>'
    let tablebody=""
    let tableEnding='</table></div>'
    for(i=0;i<users.length;i++){
        tablebody+= '<tbody><tr>'+'<th scope="row">'+(i+1)+'</th><td>'+users[i].title+'</td><td>'+users[i].date+'</td><td>'+users[i].iscomplete+'</td></tr></tbody>'
    }
    let table=tableStarting+tablehead+tablebody
    document.getElementById("output").innerHTML=table

}