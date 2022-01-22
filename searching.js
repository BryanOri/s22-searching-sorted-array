let numbers = [ 20, 9, 3, 41, 8, 1, 56 ];

// STEP 1: Sort the "numbers" array from smallest number to largest
//         number and ensure the "numbers" array is sorted afterwards
//         in the console

function algorithms(_array2){
    for (i = 0; i < _array2.length; i++){
      let smallest = i    
      for ( indx = i + 1; indx < _array2.length; indx++){
        if( _array2[smallest] > _array2[indx]){
          smallest = indx;
        } 
      }
      let substitute = _array2[i]
      _array2[i] = _array2[smallest];
      _array2[smallest] = substitute;
    }
   return _array2;
  } 
algorithms(numbers);
console.log(numbers)

// STEP 2: Write an algorithm that searches through the sorted array
//         for a supplied number, as if it were a word in a dictionary.
//
//         Example: Check the value in the center of the unchecked
//                  values. If it is the value you're looking for,
//                  return that value. If it is greater than the value
//                  you're looking for, forget the current value and
//                  all values greater than the current value, use the
//                  remaining set of unchecked values, and start over.
//                  If there are no values remaining in the set of
//                  unchecked values, consider the value you're
//                  searching for to be not in the array.

function search( _array, find){
  let found = 0;
    for (i of _array){
        if (i === find){
            found = i;
            return _array.indexOf(found);
        }else{
          continue;
        }
    }
}   

// STEP 3: Ensure the algorithm gives expected results for numbers
//         that are in the array and numbers that are not in the array.
//
//         Example: 100 and 0 should NOT be found, but 41 and any
//                  number in the "numbers" array should be found.

console.log(search(numbers, 41));
