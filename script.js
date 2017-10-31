$(document).ready(function() {

  // starting point: 16 x 16 grid.
  let gridBase = 16; // temp value

  // Clear the grid and build a new one
  $("#clearGrid").click(clearGrid);
  
  buildGrid(gridBase);

  function buildGrid(base) {
    let totalDivs = base * base;
    let divSize = 900 / base + 'px';
    let divBasic = "<div class='divBasic'></div>";
    let divSource = $('#mainDiv');
    // this loop generates the divs
    for (var i = 0; i < totalDivs; i++) {
      divSource.append(divBasic);
    }
    // then size the individual divs
    $('.divBasic').css({
      "width": divSize,
      "height": divSize
    });
    mousePaint();
  }

  function clearGrid() {
    $(".divBasic").remove();
    squares = prompt("How many squares per side do you want the grid to be?");
    if (squares > 100) buildGrid(100);
    else buildGrid(squares);
  }

  function mousePaint() {
    $('.divBasic').mouseenter(fillDiv);
    $('.divBasic').mouseenter(darken);
  }

  function fillDiv() {
    $(this).addClass('divFill');
  }
  
  function darken () {
    let currentOpacity = +$(this).css("opacity");
    currentOpacity += 0.1;
    $(this).css("opacity", currentOpacity);
  }

  
});
