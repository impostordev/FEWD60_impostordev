// this file is my early process notes for the functionality of the website 

input location 

input three hashtags, keep hashtag inside text input box to remind user 
    search query operator: #one #two #three = %23one+%23two+%23three
    concatenate "https://api.twitter.com/1.1/search/tweets.json?q=%23" + inputOne + "%23" + inputTwo + "%23" + inputThree
    GET that^

click submit

on submit, event prevent default to make sure no spaces in hashtags (or trim?) 
    optional: code error message for this

on submit, search twitter REST API for users who match all four criteria

    https://api.twitter.com/1.1/search/tweets.json?q=%40twitterapi

on submit, submit button becomes 'Submit Again' button (clears input, ready for next input)

display results with clickable usernames, so you can go to the users actual twitter page

static - SEARCH API displays results from last week. can set additional limiting parameters:

    'result_type' = recent, popular, or mix. (do recent)
    'lang' = restricts tweets to a given language. (restrict to english is auto option, but can deselect this)
    'geocode' = location, but without lat/long?

// for later: STREAM displays most recent results that match all criteria, as they appear in real time [ref: venmo]


