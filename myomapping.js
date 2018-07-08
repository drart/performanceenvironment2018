Myo.connect();

var myoelement = $("#myo-display");
var myoleftdiv = $("<div/>");
myoleftdiv.attr("id", "#myo-left").text("left").appendTo("#myo-display");
var myoleftorientation = $("<div/>");
myoleftorientation.attr("id", "myo-left-orientation").appendTo(myoleftdiv);

var myorightdiv = $("<div/>");
myorightdiv.attr("id", "#myo-right").text("right").appendTo("#myo-display");
var myorightorientation = $("<div/>");
myorightorientation.attr("id", "myo-right-orientation").appendTo(myorightdiv);

Myo.on('orientation', function(data){
    $("#myo-" + this.arm + "-orientation").text(fluid.prettyPrintJSON(data));
    //console.log(fluid.prettyPrintJSON(data));
    //console.log(this.arm);
});

Myo.on('pose', function(data){
    //console.log(this.arm + data);
});

Myo.on('pose_off', function(data){
    //console.log(this.arm + data + "_off");
});

Myo.on('unlocked', function(){
        Myo.setLockingPolicy('none');
});
