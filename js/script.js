// Copyright (c) 2024 Kai Nguyen All rights reserved
//
// Created by: Kai Nguyen
// Created on: Mar 2024
// This file contains the JS functions for index.html
function doMathClicked() {
  var w = 5
  var l = 3
  document.getElementById("button-area").innerHTML += w*l + " cm<sup>2</sup>"
  document.getElementById("button-perimeter").innerHTML += 2 * (w+l) + " cm"
}
