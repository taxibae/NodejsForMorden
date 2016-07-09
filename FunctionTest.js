var DB = function () {
    //Private Variable
    var storage = [];
    var count = 1;

    //Public Method 
    var innerObject = {};
    
    //Method Def by Closer
    innerObject.get = function (id) {  
        id = (typeof id =='string' ? Number(id):id);
        for (var i in storage){
            if(storage[i].id == id){
                console.log("Node found id : " + id + ' will be added');
                return storage[i];
            }
        }
        console.log("No id found. All Data will be send.");
        return storage;
    }

    innerObject.insert = function (data) {
        data.id = count++;
        storage.push(data);
        return data;
    }

    innerObject.remove = function (id) {
        id = (typeof id =='string' ? Number(id):id);
        for (var i in storage){
            if(storage[i].id == id){
                console.log("Node found id : " + id + ' will be removed');
                storage.splice(i,1);
                return true;
            }
        }
        return false;
    }

    //DB Create
    return innerObject;
}();

DB.get(1);
DB.insert({
    dream : 'comes TRUE',
    level : '99'
});
console.log(DB.count);
console.log(DB.get(1).level);
console.log(DB.remove(1));

function NumberFunction(a, b){
    this.number1 = a;
    var number2 = b;
    
    this.getNumber2 = function () {
        return number2;
    }
}
var instanced = new NumberFunction(1,2);

console.log(instanced.number1);
console.log(instanced.getNumber2());