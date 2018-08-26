
var random_result = 0;
var lost = 0;
var win = 0;
var previous = 0;

var resetAndStart = function () {
    
    $(".crystals").empty();

    var images = [
        'https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwj4-tva2IndAhUuVd8KHWJiDcwQjRx6BAgBEAU&url=http%3A%2F%2Fantoinettesboutique.co.nz%2F&psig=AOvVaw2BOCTG-gMur709mb8BWIJB&ust=1535337649295530', 
        'https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.bestcrystals.com%2FContent%2FImages%2Fuploaded%2FMasterIndexImages%2FAmazonite%2520-%2520Copy%25201.jpg&imgrefurl=https%3A%2F%2Fwww.bestcrystals.com%2Fcrystals-and-minerals&docid=spBaIQwmUzW2oM&tbnid=7riK2jOxHzdJ5M%3A&vet=12ahUKEwjnnoyW2YndAhUGr1kKHetMBCc49AMQMygpMCl6BAgBECo..i&w=550&h=327&bih=762&biw=1423&q=crystals&ved=2ahUKEwjnnoyW2YndAhUGr1kKHetMBCc49AMQMygpMCl6BAgBECo&iact=mrc&uact=8', 
        'https://www.google.com/imgres?imgurl=http%3A%2F%2Fwww.marinmineral.com%2Fdb_pics%2Fpics%2Faf553c.jpg&imgrefurl=http%3A%2F%2Fwww.marinmineral.com%2Fmixtuc.html%3Fpage%3D2&docid=Y7VZ8tpWz3QuZM&tbnid=zj6nLFzlN70DSM%3A&vet=12ahUKEwjnnoyW2YndAhUGr1kKHetMBCc49AMQMyhGMEZ6BAgBEEc..i&w=550&h=438&bih=762&biw=1423&q=crystals&ved=2ahUKEwjnnoyW2YndAhUGr1kKHetMBCc49AMQMyhGMEZ6BAgBEEc&iact=mrc&uact=8', 
        'https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.irocks.com%2Fstorage%2Fmedia%2F68436%2FRutile-GravesMtn-Georgia-106mm-JB1164-16.jpg&imgrefurl=https%3A%2F%2Fwww.irocks.com%2Fessentials-of-rock-mineral-photography&docid=Z8_aJF5dIWzD2M&tbnid=3S087yxvsBt8tM%3A&vet=12ahUKEwjnnoyW2YndAhUGr1kKHetMBCc49AMQMyhgMGB6BAgBEGE..i&w=1200&h=1799&bih=762&biw=1423&q=crystals&ved=2ahUKEwjnnoyW2YndAhUGr1kKHetMBCc49AMQMyhgMGB6BAgBEGE&iact=mrc&uact=8'];

var random_result = Math.floor(Math.random() * 120 ) + 19;

$("#result").html('Random Result: ' + random_result);

for(var i = 0); i < 4; i ++){

    var random = Math.floor(Math.random() * 11) + 1;
 
    var crystal = $("<div>");
        crystal.attr({
            "class": 'crystal',
            "data-random": random,
        });
        crystal.css({
            "background-image":"url('" + images[i] + "')",
            "background-size":"cover"
        });

    $(".crystals").append(crystal);
    
    }

    $("#previous").html("Total Score: " + previous);
}

resetAndStart();

var reset = function (){

}

$(document).on('click', ".crystal", function () {


    var num = parseInt($(this).attr('data-random'));

    var result = num + 5;

    previous += num;

    $("#previous").html("Total score: " + previous);

    if(previous > random_result){
        
        lost++;
    
        $("#lost").html("You lost: ", + lost);

        previous = 0;

        resetAndStart();
    }
    else if (previous === random_result){
        win++;

        $("#win").html("You win: ", + win);

        previous = 0;

        resetAndStart();
    }

});