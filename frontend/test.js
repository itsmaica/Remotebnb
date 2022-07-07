let gameCoordinates = [
    [ 2, 1 ],
    [ 4, 3 ],
    [ 6, 5 ],
    [ 8, 7 ],
    [ 10, 9 ],
  ];

  function transposeArray(array) {
    const newArray = [];

    for (let i = 0; i < array.length; i++) {
      newArray.push([]);

    //   console.log(newArray)
      for (let j = array[i].length - 1; j >= 0; j--) {
        console.log("This is array[i]", array[i])
        // console.log("array[i].length-1", array[i].length-1)
        // console.log("newArray[i]",newArray[i])
        console.log("array[i]", array[i])
        console.log("array[j]", array[j])

        // console.log(array[i][j])
        // console.log("newArray[j]",newArray[j])
        // console.log("newArray[i][j]",newArray[i][j])
        newArray[i].push(array[i][j]);
      }
    };

    return newArray;
  }

  console.log(transposeArray(gameCoordinates));
