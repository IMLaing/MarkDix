$( document ).ready(function() {


var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('nav').outerHeight();


$(window).scroll(function(event){ //$(window), .scroll, event
                 didScroll = true; 
                 });

setInterval(function() {
if (didScroll) {
  hasScrolled();
  didScroll = false;
  }
}, 250);

function hasScrolled(){
  var st = $(this).scrollTop(); // .scrollTop
  if (Math.abs(lastScrollTop-st) <= delta) //Math.abs
  return;
  if (st > lastScrollTop && st > navbarHeight) {
    $('nav').removeClass('nav-down').addClass('nav-up');
  } else {
    if (st + $(window).height() < $(document).height()) {
      $('nav').removeClass('nav-up').addClass('nav-down')
    }
 
    
  }
     lastScrollTop = st;
}

});
/*

   <script>
      
  function getLyrics(x){
  
document.getElementById("text").innerHTML(x); 
}
  
var hAR = "Well I met you on the back seat of your best friend's Chevrolet and the first thing that you told me was you'd soon be on your way my mind was set on empty, my heart about to bust when you dropped me on the pavement and you left me in the dust<br><br>Chorus: But it's all right mama you stole away my pride I wasn't goin' nowhere till you took me for a ride Well I was on my way back home, pretty mama when you rolled into town I never saw the likes of you to turn a man's head around you drove me up, you drove me down you drove me through the night but you just about drove me outa my mind when you drove out of my sight<br><br>Chorus<br><br> Now I'm standin down by the crossroads mama as the dust begins to clear I'm wonderin' what just hit me and where it disappeared My dreams are all broke down  I got a head full of misery Cuz your crazy lovin' hit and run Was just a bit too much for me <br><br> Chorus";

var bMNM = "I sit by my window and sing our song but my words just fall to the floor they die like an echo from long ago cuz you're not beside me no more Dark are the shadows that crowd my room cold is the wind at my door deep is the sorrow that fills my heart cuz youre not beside me no more Where is the tenderness we once knew?<br><br>Where are the vows that we swore? How will I travel this long dark night if youre not beside me no more? Green was the springtime when first we met White was the dress that you wore Black is the night time <br><br>surrounding me and youre not beside me no more I went to the water to wash my tears and lay my soul by the shore but my heart it just broke like a wave on the beach cuz youre not beside me no more";

var iBIC = "There's a hell of a snow storm out on Route 95 and the truckers have all headed home And you're out there somewhere waitin' for someone while I'm here drivin' alone<br><br> Why do we make it so hard to get together? It seems like we must like it this way But I'm feelin' lonesome out here on this hiway and I wish that I was somewhere I could say <br><br> Chorus: Come to my bedside and lay by me awhile stay here as long as you can You are the woman my heart believes in and I believe I could be your man<br><br> There was an all night rest stop a mile or two ago where I should have gone and got myself inside The wind's blowin' heavy the snow's driftin' deep and soon there will be no place to hide <br><br> But I've got this notion I've got to keep on goin' and find myself a better place to be But I've got no reason to get down off this hiway unless you might be waitin' there for me<br><br> Chorus: Come to my bedside...";

var iIHT = "You may think this is clumsy you'll probably think its trite I know my words are foolish and rarely come out right but it's late in the evening the mornin's on the way it's much too late for changes but the meaning still remains<br><br> Chorus: That if I had the words to say 'I love you' I'd shout them from the mountains 'til everbody knew I'd write them in the sky and I'd paint them on the sand And they would not be so hard to understand They would not be so hard to understand<br><br> You always seem to listen but I wonder if you know The places in my heart where I do not let you go Sometimes you do seem puzzled when I look into your eyes But if I put it plainly I think you'd be surprised<br><br>Chorus: That if I had the words...<br><br> If I had a dollar for every time I let you down I'd buy you a new car and take you from this town We'd ride a hundred miles down some crooked country road And find ourselves a quiet place that no one else would know<br><br> Chorus: But if I had the words...";

var lOM = "Woke up late one mornin' there was nothin' left in my bed cuz everything I thought I owned was someplace else instead my voice was on the radio my dreams were on tv and the doctors had my body and my personality<br><br>The scientists deny my soul the church denies my flesh all my joys are out of fashion my ideas are out of step and Hollywood, she stole my heart the schools have got my mind  and this little bit of a melody is all they left behind <br><br> But late one night I had a dream and I dreamed that it was true that somewhere in the darkness I sang a song with you we sang the high notes, we sang the low notes and some wrong notes in between but I never got a notion what it could mean<br><br> Woke up late one mornin'there was nothin' left in my bed but this song was driftin' on the breeze and runnin' through my head I got right up and I wrote it down and I sent it on its way with a hope that it may come to you someday";

var lFAF = "It used to be the young girls with diamonds in their eyes would offer him their secrets and listen to his lies It used to be tomorrow was the last thing on his mind but now the party's over the past is hard to find He used to be so carefree he used to be so cool born to be most likely to be nobody's fool But now it ain't so easy findin' games that he can win and he's still out there lookin' lookin' for a friend <br><br>Time was on his side when time was goin' slow cuz he was goin' nowhere he had nowhere to go and time gave him some chances to leave it all behind but the times were just so easy he let 'em all roll by They rolled up to his doorstep they rolled down to the sea and anywhere those  good times rolled was where he meant to be But now the tide is turnin' and his turn is at an end but he's still out there lookin' lookin' for a friend<br><br> I met him at the depot a suitcase in his hand I offered him my number and asked about his plans He smiled and said most likely he'd be back around next fall and if I was still in town he might give me a call Then he stepped up on the greyhound but the fumes caught in my chest he headed for the hiway and the hiway headed west Now when the air is bitter and winter's on the wind I know he's out there lookin'  lookin' for a friend, yes I think of him out lookin lookin for a friend";
var rP = "My feet are feelin' heavy my mind is movin' slow I've got some trouble waiting with no place else to go the sky is full of thunder the night is full of rain I'm ready to go under I need you in my arms again<br><br> Chorus: ...by my side <br><br> in the stillness of the night and all around you a sense of grace a quiet moment a resting place <br><br> I've got some music playin' on my radio a song I should remember from someplace long ago but nothin' seems to move me nothin' feels the same I need a touch of magic I need you in my arms again <br><br> Chorus: ...by my side<br><br> Bridge: I hate to let these hours slip away but I guess I'll have to leave it all for another day<br><br> But you know where to find me if it should cross your mind that no one else can take you to the place we left behind there are no maps to show you the ways that we have been the only way to find them is when you're in my arms again<br> <br> Chorus: ...by my side";

var rTST = "You are my angel you are the apple of my eye you lit the stars and you hung the moon but if I’m cryin’ baby you know the reason why cuz you give me the right to sing the blues<br> <br> I see you stretched out on your gold and silver bed I get excited and confused you take my lovin’ and you take my breath away and you give me the right to sing the blues<br> <br> You are my diva you are my queen of style and grace You always know just what to do You are so heavenly, I just cannot relate Cuz you ain’t got the right to sing the blues<br> <br>There are no wrinkles in your Mona Lisa smile You’ve got no messed-up attitudes You’ve got no worries  and you have no sleepless nights and you have got no right to sing the blues<br> <br> So it's, bye-bye baby bye-bye the time has come for me to go before I leave you on that highway headed west there’s just a few things I think you ought to know <br> <br> I slashed your tires and I broke your TV set I took your favorite dancing shoes I took your credit card  and ran up a little debt so you might have the right to sing the blues<br><br> Yes it's bye-bye baby bye-bye the cops are comin for you soon they want to ask about this money that you owe and about the drugs that I left hidden in your room<br><br> They want to take you for a little ride downtown and book you for the things you do and when they read your rights I’m sure they’ll let you know that now you’ve got the right to sing the blues<br><br> yes, you have got the right to sing the blues.";

var tOS = "They've turned up the lights cleared off the floor closed all the windows and opened the doors The dancers are leavin' the evenin' is through but I'm still here dreamin' with you <br><br> We empty our glasses and lean on the wall the bartender's sayin' we've missed the last call and I may be crazy I've got it all wrong but I think there's  time for one song <br><br> Chorus: The hours will hurry the flowers will fade the memories will linger and go on their way but when it's all over and the dancin' is through this old song will still be for you<br><br> The days will go quickly the years they will roll the fashions will change and the children grow old But somethin' I've wanted to tell you so long will keep comin' back in this old song <br><br> Chorus: The hours will hurry... <br><br> And maybe one day in some faraway time we'll sit by a dance floor and sip one more wine And then if by chance they play this old song we'll know it's been right all along <br><br> Chorus: The hours will hurry...";
   </script> */
