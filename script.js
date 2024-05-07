$("#div-Q").on("click", function(){
    console.log("Q was pressed.");
    let audio = document.getElementById("Q");
    audio.play();
    $("#display").text("Q was pressed.");
});

$("#div-W").on("click", function(){
    console.log("W was pressed.");
    let audio = document.getElementById("W");
    audio.play();
    $("#display").text("W was pressed.");
});

$("#div-E").on("click", function(){
    console.log("E was pressed.");
    let audio = document.getElementById("E");
    audio.play();
    $("#display").text("E was pressed.");
});

$("#div-A").on("click", function(){
    console.log("A was pressed.");
    let audio = document.getElementById("A");
    audio.play();
    $("#display").text("A was pressed.");
});

$("#div-S").on("click", function(){
    console.log("S was pressed.");
    let audio = document.getElementById("S");
    audio.play();
    $("#display").text("S was pressed.");
});

$("#div-D").on("click", function(){
    console.log("D was pressed.");
    let audio = document.getElementById("D");
    audio.play();
    $("#display").text("D was pressed.");
});

$("#div-Z").on("click", function(){
    console.log("Z was pressed.");
    let audio = document.getElementById("Z");
    audio.play();
    $("#display").text("Z was pressed.");
});

$("#div-X").on("click", function(){
    console.log("X was pressed.");
    let audio = document.getElementById("X");
    audio.play();
    $("#display").text("X was pressed.");
});

$("#div-C").on("click", function(){
    console.log("C was pressed.");
    let audio = document.getElementById("C");
    audio.play();
    $("#display").text("C was pressed.");
});

$(document).on("keydown", function(e){
    let eventKey=e.originalEvent.key;
    const keylist=["Q","W","E","A","S","D","Z","X","C"];
    if(keylist.includes(eventKey.toUpperCase())){
        $(`#div-${eventKey.toUpperCase()}`).click();
    }
})
