/////////////////////////////////////////////
//  Controller Mappings
/////////////////////////////////////////////

fluid.defaults("adam.midi.quneo.january2018", {
    //gradeNames: ["adam.midi.quneo", "adam.midi.console", "adam.midi.domlog"],
    gradeNames: ["adam.midi.quneo", "adam.midi.domlog"],
    listeners:{ 
        noteOn: function (msg) {
            if (msg.note >= 68 && msg.note <= 83){
                clish.set("bop.freq.add", flock.midiFreq(msg.note));        
                clish.set("bop.mul.gate", 1);
            }
        },
        noteOff: function (msg) {
            clish.set("bop.mul.gate", 0);
        },
        control: function (msg) {
            if((msg.number - 23) % 3 === 0){
                console.log(msg);
                clish.set("bop.freq.freq", msg.value/ 10);
                clish.set("bop.freq.mul", msg.value/ 10);
            }
        }
    }
});

fluid.defaults("adam.midi.push.january2018", {
    gradeNames: ["adam.midi.push", "adam.midi.domlog", "adam.midi.console"],
    listeners: {
        noteOn: function(msg){
            if(msg.note > 20){
                clish.set("bop.freq.add", flock.midiFreq(msg.note));        
                clish.set("env.gate", 1);
            }
        },
        noteOff: function(msg){
            clish.set("env.gate", 0);
        },
        aftertouch: function(msg){
            //console.log(msg);             
            //clish.set("bop.freq.freq", msg.note / 30);
            //clish.set("bop.freq.mul", msg.note / 30);
        }
    }
});

fluid.defaults("adam.midi.bcr2000.january2018", {
    gradeNames: ["adam.midi.bcr2000", "adam.midi.domlog"],
    listeners: {
        control: function (msg) {
            if(msg.number ===81){
                octopus.set("f1.mul", msg.value / 127);
            }
            if(msg.number ===82){
                octopus.set("f2.mul", msg.value / 127);
            }
            if(msg.number ===83){
                octopus.set("f3.mul", msg.value / 127);
            }
            if(msg.number ===84){
                octopus.set("f4.mul", msg.value / 127);
            }
            if(msg.number ===85){
                octopus.set("f5.mul", msg.value / 127);
            }
            if(msg.number ===86){
                octopus.set("f6.mul", msg.value / 127);
            }
            if(msg.number ===87){
                octopus.set("f7.mul", msg.value / 127);
            }
            if(msg.number ===88){
                octopus.set("f8.mul", msg.value / 127);
            }
            if(msg.number === 89){
                octopus.scatter();
            }
            if(msg.number === 90){
                octopus.scatterratio(300,1.06,30);
            }
            if(msg.number === 91){
                octopus.scatterratio(305,1.06* 1.06,30);
            }
            if(msg.number === 92){
                octopus.scatterratio(299,1.04,30);
            }
        }
    }
});

/*
 * // the future!!!
fluid.defaults("adam.midi.bcr2000", {
    gradeNames: "flock.midi.connection",
    listeners: {
        "noteOn.domoreimportantthing": "{synth}.set(awesome.ugen, 440)",
        "noteOn.logNoteValue" : {
            priority: "after:domoreimportantthing",
        }
    }
});
*/


/////////////////////////////////////////////
//  Performance Mappings
/////////////////////////////////////////////

function january2018(){
    if(window !== undefined){
        window.octopus = adam.octopus();
        window.quneo = adam.midi.quneo.january2018();
        window.push = adam.midi.push.january2018();
    }

}


function pushknobstooctopus(msg){
    if(msg.number === 1){
        octopus.set('f1.mul', msg.value / 127 );
    }   
}
