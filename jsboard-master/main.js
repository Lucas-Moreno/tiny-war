// create board
var b = jsboard.board({attach:"game", size:"11x13"});
b.cell("each").style({width:"70px", height:"65px"});

// Couleur tableau 
b.cell("each").style({  
    background: "white",
  });

// setup pieces

var piece_gb = jsboard.piece({text:"gb", textIndent:"-9999px", background:"url('images/generalbleu.png') no-repeat",   width:"70px", height:"65px", margin:"0 auto" });
var piece_fb = jsboard.piece({text:"fb", textIndent:"-9999px", background:"url('images/fantassinbleu.png') no-repeat",   width:"70px", height:"65px", margin:"0 auto" });
var piece_lb = jsboard.piece({text:"lb", textIndent:"-9999px", background:"url('images/lancierbleu.png') no-repeat",   width:"70px", height:"65px", margin:"0 auto" });
var piece_cb = jsboard.piece({text:"cb", textIndent:"-9999px", background:"url('images/cavalierbleu.png') no-repeat",   width:"70px", height:"65px", margin:"0 auto" });
var piece_gr = jsboard.piece({text:"gr", textIndent:"-9999px", background:"url('images/generalrouge.png') no-repeat",   width:"70px", height:"65px", margin:"0 auto" });
var piece_fr = jsboard.piece({text:"fr", textIndent:"-9999px", background:"url('images/fantassinrouge.png') no-repeat",   width:"70px", height:"65px", margin:"0 auto" });
var piece_lr = jsboard.piece({text:"lr", textIndent:"-9999px", background:"url('images/lancierrouge.png') no-repeat",   width:"70px", height:"65px", margin:"0 auto" });
var piece_cr = jsboard.piece({text:"cr", textIndent:"-9999px", background:"url('images/cavalierrouge.png') no-repeat",   width:"70px", height:"65px", margin:"0 auto" });

// utiliser les pièces dans le tableau 
var bluePieces = [
    piece_gb.clone(), 
    piece_fb.clone(), 
    piece_fb.clone(),
    piece_fb.clone(),
    piece_fb.clone(),
    piece_lb.clone(), 
    piece_lb.clone(),
    piece_lb.clone(),
    piece_cb.clone(), 
    piece_cb.clone(), 
];
var redPieces = [
    piece_gr.clone(),
    piece_fr.clone(),
    piece_fr.clone(),
    piece_fr.clone(),
    piece_fr.clone(),
    piece_lr.clone(),
    piece_lr.clone(),
    piece_lr.clone(),
    piece_cr.clone(),
    piece_cr.clone(),
];


// placer les pièces sur le tableau

// place bluepiece table
b.cell([10,6]).place(bluePieces[0]);
b.cell([9,6]).place(bluePieces[5]);
b.cell([9,7]).place(bluePieces[8]);
b.cell([9,8]).place(bluePieces[1]);
b.cell([9,9]).place(bluePieces[6]);
b.cell([9,10]).place(bluePieces[2]);
b.cell([9,5]).place(bluePieces[9]);
b.cell([9,4]).place(bluePieces[3]);
b.cell([9,3]).place(bluePieces[7]);
b.cell([9,2]).place(bluePieces[4]);

// place redpiece table
b.cell([0,6]).place(redPieces[0]);
b.cell([1,6]).place(redPieces[5]);
b.cell([1,7]).place(redPieces[8]);
b.cell([1,8]).place(redPieces[1]);
b.cell([1,9]).place(redPieces[6]);
b.cell([1,10]).place(redPieces[2]);
b.cell([1,5]).place(redPieces[9]);
b.cell([1,4]).place(redPieces[3]);
b.cell([1,3]).place(redPieces[7]);
b.cell([1,2]).place(redPieces[4]);


bluePieces[0].addEventListener("click", function() { showMoves(this); });
bluePieces[1].addEventListener("click", function() { showMoves(this); });
bluePieces[2].addEventListener("click", function() { showMoves(this); });
bluePieces[3].addEventListener("click", function() { showMoves(this); });
bluePieces[4].addEventListener("click", function() { showMoves(this); });
bluePieces[5].addEventListener("click", function() { showMoves(this); });
bluePieces[6].addEventListener("click", function() { showMoves(this); });
bluePieces[7].addEventListener("click", function() { showMoves(this); });
bluePieces[8].addEventListener("click", function() { showMoves(this); });
bluePieces[9].addEventListener("click", function() { showMoves(this); });
redPieces[0].addEventListener("click", function() { showMoves(this); });
redPieces[1].addEventListener("click", function() { showMoves(this); });
redPieces[2].addEventListener("click", function() { showMoves(this); });
redPieces[3].addEventListener("click", function() { showMoves(this); });
redPieces[4].addEventListener("click", function() { showMoves(this); });
redPieces[5].addEventListener("click", function() { showMoves(this); });
redPieces[6].addEventListener("click", function() { showMoves(this); });
redPieces[7].addEventListener("click", function() { showMoves(this); });
redPieces[8].addEventListener("click", function() { showMoves(this); });
redPieces[9].addEventListener("click", function() { showMoves(this); });


function showMoves(piece) {


    var loc = b.cell(piece.parentNode).where();
    console.log(loc);
    var newLocs = [
       [loc[0]-1,loc[1]],[loc[0]-2,loc[1]], // devant
       [loc[0] ,loc[1]-1],[loc[0] ,loc[1]-2], // gauche,
       [loc[0]+1,loc[1]],[loc[0]+2,loc[1]], // devant
       [loc[0] ,loc[1]+1],[loc[0] ,loc[1]+2],

    ];

    // locations to move to 
    // to use JavaScript DOM functions such as classList you need
    // to get the DOM node from the board which you can do by
    // calling cell([x,y]).DOM() or cell(this).DOM()
    for (var i=0; i<newLocs.length; i++) {
        b.cell(newLocs[i]).DOM().classList.add("green");
        b.cell(newLocs[i]).on("click", movePiece);
    }

    // move piece to new location when clicked
    function movePiece() {
        b.cell(this).place(piece);
        b.removeEvents("click", movePiece);
        for (var i=0; i<newLocs.length; i++) 
            b.cell(newLocs[i]).DOM().classList.remove("green");
    }

}


/* var turn = true;
b.cell("each").on("click", function() {
        if (turn)   b.cell(this).place(piece_fb.clone());
        else        b.cell(this).place(piece_fr.clone()); 
        turn = !turn;
}); */

  
