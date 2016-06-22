exports.abs = function(number){
    if(number > 0){
        return number;
    }
    else{
        return -number;
    }
};

exports.circleArea = function(radius){
    return radius* radius * 3.14;
};
