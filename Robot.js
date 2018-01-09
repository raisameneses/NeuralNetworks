//Prevents calculation bias. 
const LEARNING_CAPACITY = 0.01;


//a Vector directs the Robot's movements and direction 
//as well as the target's location .. 
var Vector = function(x, y, z){
    this.x = x,
    this.y = y, 
    this.z = z
}
Vector.prototype.addVector = function(v2){
   this.x += v2.x;
   this.y += v2.y;
   this.z += v2.z;
}
Vector.prototype.subtractVector = function(v2){
   this.x -= v2.x;
   this.y -= v2.y;
   this.z -= v2.z;
}
Vector.prototype.distance = function(v2){ 
   var pow1 = Math.pow((this.x - v2.x), 2);
   var pow2 = Math.pow((this.y - v2.y), 2);
   var pow3 = Math.pow((this.z - v2.z), 2);
   return Math.sqrt(pow1 + pow2 + pow3);   
}

//Neuron Function represents a Neural Network's Perceptron  

//Start weights on random. 
//Weights will be tweaked based on learning reinforcent technique.  (gradient descent)
var Neuron = function(numInputs){
  var weight = [];   
  for(let i = 0; i < numInputs; i++){      
      weight[i] = Math.random();
  }
}

//Multiply each input by the weight
//Add all inputs
//Feedforward, accumulative sum: weights * input
Neuron.prototype.think = function(inputs){
    var sum = 0;
    for(let i = 0; i < inputs.length; i++){      
        sum += this.weight[i] * inputs[i];
    }
    return sum;
    //return Activate(sum)?  
}

//**** Talk to Chris about this.
//Is this really binary? .. *Advice on the activation function 
Neuron.prototype.Activate = function(sum){
    //what to do in the activation function?? 

}
//Readjust weights depending on the accuracy of the prediction 
//Pre: error rate calculated by robot
Neuron.prototype.learn = function(errorValue){   
    for(let i = 0; i < inputs.length; i++){      
       this.weight[i] += LEARNING_CAPACITY * error * input[i];
    }
}

//Robot function. It will use Vectos and 
//One neuron to travel from a start vector
//to the location of the light 
//We will pass the target as a parameter
//In order to use supervised learning
//Pass the robot's position.
//Pass the target position in its own method. 
var Robot = function(inputNum, x, y){
    //increment on each iteration to know
    //how long it took the system to evolve. 
    var lifeCycle = 0;     
    var brain = new Neuron(inputNum); 

    var maxSpeed = 4; //Fastest the vector can go?. We'll play with this concept to see what difference controlling the speed makes
    var maxForce = 0.1 //Same as above. 

    var direction = new Vector(0, 0, 0); //Where is the robot going?
    var location = new Vector(x, y, 0); //Where is the robot right now?
    var acceleration = new Vector(0, 0, 0); //How fast should it go?   
}

//Pre: Target's x,y coordinates
//post: which way should the robot steer?
//Based upon error rate (Light intensity)  == reinforcement learning
//?Question for Chris: Should we stick with light intensity or also
//use the target location to train ? 

Robot.prototype.findTarget = function(x, y){
   let targetPosition = new Vector(x, y, 0);
   let distance = this.distance(targetPosition); 
   let lightIntensity =  (1/distance); //Light intensity is inversely proportional to target distance if small, the robot is farther from the light, if closer to distance, 
   //the robot is closer. 
   //Update the weights so it gets closer to the distance 
}

//this is another option, calculate how the robot is doing based on the 
//Position of the robot, then adjust the weights of the vector to get closer to the location of the light 
Robot.prototype.calculateError = function(robotPosition, targetPosition){
    var errorRate = targetPosition - robotPosition;
    return errorRate; 
}
//update the variables to be able to draw them 
Robot.prototype.updateVariables = function(){
    direction.addVector(acceleration); 
    location.addVector(direction); 
}

//where to go next.. ? 
Robot.prototype.steer = function(){

}



 