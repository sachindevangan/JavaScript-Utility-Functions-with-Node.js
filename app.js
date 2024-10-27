/* TODO: Import the functions from your three modules here and write two test cases for each function.. You should have a total of 18 test cases. 
do not forget that you need to create the package.json and add the start command to run app.js as the starting script*/



import * as lab2a from './arrayUtils.js';

try{
    let people = [ 
        {name: 'Ryan', age: '22', location: 'Hoboken', role: 'Student'}, 
        {name: 'Matt', age: '21', location: 'New York', role: 'Student'},
        {name: 'Matt', age: '25', location: 'New Jersey', role: 'Student'}, 
        {name: 'Greg', age: '22', location: 'New York', role: 'Student'}, 
        {name: 'Mike', age: '21', location: 'Chicago', role: 'Teacher'}]; 
        
        console.log(lab2a.sortAndFilter(people, ['name', 'asc'], ['location', 'asc'], 'role', 'Student')); 
} catch(e){
    console.log(e)
}

try{
    console.log(lab2a.sortAndFilter(['string', {}], ['location', 'asc'], ['name', 'asc'], 'age', '22'));
} catch(e){
    console.log(e)
}

try{
    console.log(lab2a.merge(["sachin", 0, 1, [[[5, "in"]]]], [7, "bar", ["enjoying", 8]]));
} catch(e){
    console.log(e)
}

try{
    console.log(lab2a.merge([3,0,1,2,NaN], [1,2,8,15], [6,3,10,25,29]));
} catch(e){
    console.log(e)
}

try{
    console.log(lab2a.matrixMultiply([ [1,9] ], [ [6], [9] ]));
} catch(e){
    console.log(e)
}

try{
    console.log(lab2a.matrixMultiply([ [NaN,5] ], [ [4], [NaN] ]));
} catch(e){
    console.log(e)
}


import * as lab2s from './stringUtils.js';

try{
    console.log(lab2s.palindromes(["Nitin", "tooth", "Was it a cat I saw?", "null", "111", "69" ]));
} catch(e){
    console.log(e)
}


try{
    console.log(lab2s.palindromes(9));
} catch(e){
    console.log(e)
}

try{
    let badWords = ["sachin","devangan","is"];
    console.log(lab2s.censorWords("Hi how are you my name is sachin devangan", badWords));
} catch(e){
    console.log(e)
}

try{
    let badWords = ["sachin","devangan","is"];
    console.log(lab2s.censorWords("Hi how are you I'm abcd", badWords));
} catch(e){
    console.log(e)
}

try{
    console.log(lab2s.distance("I really hope it will snow soon because I like snow", "I", "snow"));
} catch(e){
    console.log(e)
}

try{
    console.log(lab2s.distance([],true));
} catch(e){
    console.log(e)
}




import * as lab2o from './objectUtils.js';

try{
    const first = {a: 7, b: 6};
    const second = {a: 7, b: 6};

    console.log(lab2o.areObjectsEqual(first,second));
} catch(e){
    console.log(e)
}

try{
    const first = {a: 12, b: 3};
    const second = {a: 22, b: 4};
    const third = {a: 2, b: 3};

    console.log(lab2o.areObjectsEqual());
} catch(e){
    console.log(e)
}

try{
    console.log(lab2o.calculateObject({ a: 33, b: 17, c: 65 }, [(n => n * 6), (n => Math.sqrt(n))]));
} catch(e){
    console.log(e)
}

try{
    console.log(lab2o.calculateObject(({ a: 'Sachin', b: 9, c: false }, [(n => n * n)])));
} catch(e){
    console.log(e)
}

try{
    console.log(lab2o.combineObjects(
        { a: 3, b: 7, c: 5 },
        { d: 4, e: 9 },
        { a: 8, d: 2 }
      ));
} catch(e){
    console.log(e)
}

try{
    console.log(lab2o.combineObjects(
        { wow: 'crazy', super: 'duper' },
        false
      ));
} catch(e){
    console.log(e)
}


