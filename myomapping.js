Myo.connect();

var myoelement = $("#myo-display");

var myoleftdiv = $("<div/>");
myoleftdiv.attr("id", "#myo-left").text("left").appendTo("#myo-display");
var myoleftorientation = $("<div/>");
myoleftorientation.attr("id", "myo-left-orientation").appendTo(myoleftdiv);
var myoleftpose = $("<div/>");
myoleftpose.attr("id", "myo-left-pose").appendTo(myoleftdiv);

var myorightdiv = $("<div/>");
myorightdiv.attr("id", "#myo-right").text("right").appendTo("#myo-display");
var myorightorientation = $("<div/>");
myorightorientation.attr("id", "myo-right-orientation").appendTo(myorightdiv);
var myorightpose = $("<div/>");
myorightpose.attr("id", "myo-right-pose").appendTo(myorightdiv);


var myoleftx = $("<input/>");
var myolefty = $("<input/>");
var myoleftz = $("<input/>");
myoleftx.attr("id", "myo-left-orientation-x-vis").attr("type", "range").attr("max", 1000).appendTo(myoleftdiv);
myolefty.attr("id", "myo-left-orientation-y-vis").attr("type", "range").attr("max", 1000).appendTo(myoleftdiv);
myoleftz.attr("id", "myo-left-orientation-z-vis").attr("type", "range").attr("max", 1000).appendTo(myoleftdiv);

var myorightx = $("<input/>");
var myorighty = $("<input/>");
var myorightz = $("<input/>");
myorightx.attr("id", "myo-right-orientation-x-vis").attr("type", "range").attr("max", 1000).appendTo(myorightdiv);
myorighty.attr("id", "myo-right-orientation-y-vis").attr("type", "range").attr("max", 1000).appendTo(myorightdiv);
myorightz.attr("id", "myo-right-orientation-z-vis").attr("type", "range").attr("max", 1000).appendTo(myorightdiv);

myoleftpose = undefined;
myorightpose = undefined;

Myo.on('orientation', function(data){
    //$("#myo-" + this.arm + "-orientation").text(fluid.prettyPrintJSON(data));
    $("#myo-" + this.arm + "-orientation-x-vis").val(data.x*1000);
    $("#myo-" + this.arm + "-orientation-y-vis").val(data.y*1000);
    $("#myo-" + this.arm + "-orientation-z-vis").val(data.z*1000);
    //console.log(fluid.prettyPrintJSON(data));
    //console.log(this.arm);
    if(sc !== undefined){
        if(this.arm === "left"){
            sc.set("cr.source.phase", data.x);
        }
    }
});

Myo.on('pose', function(data){
    //console.log(this.arm + data);
    if (this.arm === "left"){
        myoleftpose = data;
        $("#myo-left-pose").text(myoleftpose);

        if(data === "wave_out"){
            sc.set("cr.source.mul", 0);
        }

    }else{
        myorightpose = data;
        $("#myo-right-pose").text(myorightpose);
    }
});

Myo.on('pose_off', function(data){
    //console.log(this.arm + data + "_off");
    if (this.arm === "left"){
        myoleftpose = data + "_off";
        $("#myo-left-pose").text(myoleftpose);
    }else{
        myorightpose = data + "_off";
        $("#myo-right-pose").text(myorightpose);
    }

        if(data === "wave_out"){
            sc.set("cr.source.mul", 1);
        }
});

Myo.on('unlocked', function(){
        Myo.setLockingPolicy('none');
});
