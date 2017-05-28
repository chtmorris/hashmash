# HASHMASH

## ABOUT
Hashmash is cryptocurrency mining software.  It pulls data from the Coinwarz API and selects the most profitable coin to mine.

## INSTALLATION
In the terminal, run `npm install` from inside the hashmash folder.

Go to Coinwarz API page - http://www.coinwarz.com/v1/api/documentation - and generate a new APIKEY.  This key will look something like this: 94450cf0a67d44a88ea108456ec84b8b.
Create a file called .env file and paste the following (substituting your APIKEY for this example):
APIKEY=94450cf0a67d44a88ea108456ec84b8b

## GUIDE

### RUNNING HASHMASH
To run Hashmash from the terminal use:
`node app.js`

To see statistics on your API usage run:
`node apiStats.js`

### SETTING HASHMASH TO RUN ON A LOOP
When Hashmash is run it will make one call to the API, return its output and then shut itself down.  

To make hashmash run continually simply uncomment line 35 in app.js.  This will run Hashmash on a loop every 5 seconds.  To change the frequency that Hashmash is run, change line 6 in utils.js.

NOTE: The free version of Coinwarz only allows for 1000 calls to the API before charging begins

### AMENDING THE OUTPUT
Line 53 selects which coin is chosen as the one to mine.  At the moment it selects the most profitable coin relative to BTC.  This may not be the best way to do it.
The file sampleJSONOutput shows what is returned from the Coinwarz API. Take a look at it and we can discuss different options to try.
