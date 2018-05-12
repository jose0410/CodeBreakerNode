module.exports={

    isTheSecretNumber:function(num) { 
        var secretNumber = "9831";
        var secretNumberLength = secretNumber.length;
        var result="";
        var x="";
        var score="";
        if(isNaN(num)){return "Fake number";}
        if(num.length!=4){return "Invalid size";}
        if(!this.validate(num)){return "number with digits repeated";}
        for (i = 0;i<secretNumberLength;i++) {
            for (var j = 0;j<num.length;j++) {    
                if(num[j]==secretNumber[i]){
                    if(i==j){
                        x += "X";
                    }
                    else{
                        score += "-";
                    }
                    
                }
            }
        }
        
        result = x + score;
        return result;
      },
      validate:function(num){
        for (i = 0;i<num.length;i++) {
            for (var j = i+1;j<num.length;j++) {    
                if(num[i]==num[j]){
                    return false;
                }
            }
        }
        return true;
      }
}