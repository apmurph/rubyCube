$(window).load(function() {

    function startBallOne() {
        $("#orange-ball").circulate({
            speed: 1000,
            height: 100,
            width: -50,
            sizeAdjustment: 40,
            loop: true,
            zIndexValues: [1, 1, 3, 3]
        });
    }
    
    function startBallTwo() {
        $("#blue-ball").circulate({
            speed: 1000,
            height: 120,
            width: -50,
            sizeAdjustment: 35,
            loop: true,
            zIndexValues: [2, 2, 2, 2]
        })
    }
    
    function startBallThree() {
        $("#green-ball").circulate({
            speed: 1000,
            height: 140,
            width: -50,
            sizeAdjustment: 30,
            loop: true,
            zIndexValues: [3, 3, 1, 1]
        }).fadeIn();
    }
            
    startBallOne();
    setTimeout(startBallTwo, 1000);
    setTimeout(startBallThree, 2000);
    
});