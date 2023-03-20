/*
Description:
Write a function that removes the spaces from the string, then return the resultant string.
*/

function noSpace(x){
    let allSpacesRemoved;
    allSpacesRemoved = x.replaceAll(' ', '');
    return allSpacesRemoved
  }