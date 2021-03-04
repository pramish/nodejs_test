# Pramish NodeJS Test

How to run this application

1. Clone the repo into your local machine using `git clone https://github.com/pramish/nodejs_test.git`
2. Install all the dependencies
   - Run `npm install` in the root of the folder to install the server dependencies on the root folder.
   - Inside the client folder, isntall the client dependencies using `yarn install`
3. Running the application
   - `npm run dev` to start the server and `yarn start` to start the client.

# Problem 1

1. Checking whether the number is divisible by the divisor.

   a) If the number is divisible by the 3 then add "Boss" to it's index, if the number is divisible by 5 then add "Hogg" to it's index and if the number is divisible by both 5 and 3 then add "BossHogg" to it's index.

   ## My Solution

   - If the number modulo 3 === 0 then it is divisible by 3
   - If the number modulo 5 === 0 then it is divisible by 5
   - If the number modulo 3 === 0 and number module 5 === 0 then it is divisible by both 3 and 5.

   ## Error Handled

   - If the endpoint is not reachable or data is not available, I display the message to the client

2. Searching a specific text in a String

   - **Precondition**: We are not allowed to use string finding methods of subs
     tring, indexof, lastIndexOf, match, search, split or any npm modules related to string / text processing).

     ## My Solution

     - I implemented Rabin-Karp's algorithm to search for a string in a given sentence.

     ## What is a Rabin-Karp's algorithm?

     => The basic principle behind Rabin-Karp's algorithm is that it helps to find all occurences of a substring in a given text based on the hash values. The substring is hashed initially to produce a hash value (a given number in range) and that value is then compared against when iterating through the given text.

     ## Why did I use Rabin-Karp's algorithm?

     => Unlike Naive String matching algorithm, Rabin-Karp's algorithm does not travel through every character in the initial phase rather it filters the characters that do not match and then only performs the comparison. During the comparison we generate the hash value and hash function is a tool to map a larger input value to a smaller output value. And this output value is called hash value.

     ## Error Handled

   - If the endpoint is not reachable or data is not available, I display the message to the client
