input location 

input three hashtags, keep hashtag inside text input box to remind user 
    search query operator: #one #two #three = %23one+%23two+%23three
    concatenate "https://api.twitter.com/1.1/search/tweets.json?q=%23" + inputOne + "%23" + inputTwo + "%23" + inputThree
    GET that^

click submit (chirp)

on submit, event prevent default to make sure no spaces in hashtags (or trim?) 
    > see validation, code error message for this

// on submit, event prevent default to make sure location is a real one in twitters API 
//     > validation alphabetically, error message "is that a real location?". add some specific error messages for "the Moon"

on submit, search twitter REST API for users who match all four criteria

    https://api.twitter.com/1.1/search/tweets.json?q=%40twitterapi

// on submit, search twitter STREAM API for users who match all criteria

on submit, Chirp button becomes 'Chirp Again' button (clears input, ready for next input)

display results with clickable usernames, so you can go to the users actual twitter page

static - SEARCH API displays results from last week. can set additional limiting parameters:

    'result_type' = recent, popular, or mix. (do recent)
    'lang' = restricts tweets to a given language. (restrict to english is auto option, but can deselect this)
    'geocode' = location, but without lat/long?

// stream - display most recent results that match all criteria, as they appear in real time [ref: venmo]

[show users who only match two or who have location nearby, with a note that 'we found something nearby']


__




        hashtagInputOne = $('#hashtagOne').val();
        hashtagInputTwo = $('#hashtagTwo').val();
        hashtagInputThree = $('#hashtagThree').val();

clear input forms after


twitterFakeData = [
{
  "hashtags": [
    {
      "text": "design",
    }
  ],
},
{

},
];


on submit, loop through array of objects with for loop
i is each object in array
look into array, then look into objects for hashtags
array[i][0].hashtags compare to input value
if it matches 
  grab array[i][1].avatar_image put in var 
//[i][1] is second object in array
  grab array[i][1].tweet_text in var 
  gray array[i][1].username in var 
  grab array[i][1].name in var 
  grab array[i][1].tweet_pic in var 

create a template from .append('li')


build a div of divs to input the object values for display?

