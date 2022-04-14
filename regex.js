/* 

Sample String
Below is a sample application string similar to the ones StackOver Adoptions will be using these regular expressions on. 

As you go through this activity, use this string to test your regex on using the common built-in JavaScript methods we learned about in class.

*/

let sampleApp = `
name(s): Larissa Souza
phone number(s): 555-123-4567 555-567-8910
email: lsouza@gmail.com 
animals: Dog, cat
bio: Cat ipsum dolor sit amet, exercitationem incididunt. Laborum consequuntur, error velitesse incidunt. Nostrud fugit eu, anim. Sint qui but exercitationem iure yet nesciunt. Occaecat do so ut yet nihil. Fugiat fugiat but voluptatem or velit, for aut. 
status: Approved 
`

/* 

Regular Expression 1: Phone Number 
- Format to match: ###-###-#### 
- Planned usage: Will be used to parse out all phone numbers in that format in any given string. The phone numbers should be saved in an array. Make sure it captures ALL phone 
numbers if there are more than one

- Hint for regex: Is there a shortcut for digits? What quantifier allows you to specify the exact amount of times to match a character? What modifier finds all matches instead of just the first?
- Hint for testing: What JavaScript method saves matches into an array? 

Expected Output: 
["555-123-4567", "555-567-8910"]

*/ 
 
let phoneReg = /write your regex here/

/* 

Regular Expression 2: Email 
- Format to match: ____@__.__ 
- Planned usage: Will be used to parse out the first email provided. The email should be saved in an array. 
- Restraints: 
    - Assume the first part of the email address can only have alphanumeric characters and underscores (_)
    - Assume the domain name and extension can only have alphabetical characters (i.e. gmail.com, abc.de)

- Hints for regex: Is there a shortcut for alphanumerical and underscore? What quantifier allows you to match at least one or more of a character/group? What grouping rule allows you to specify a range of characters to match?
- Hint for testing: What JavaScript method saves matches into an array? 

Expected Output: 
["lsouza@gmail.com"]
- Note: Your terminal might also display the index, input, and groups of the match. If so, that's okay!

*/ 

let emailReg = /write your regex here/

/* 

Regular Expression 3: 
- Format to match: "Status:"
- Planned usage: Will be used to find where the status of the application is located in the string. Be sure to make the regex insensitive to casing as some applicants like to type in all caps or all lowercase. 

- Hints for regex: What modifier allows casing to be ignored?
- Hint for testing: What JavaScript method returns the first index where the match is located? 

Expected Output: 
365

*/ 

let statusReg = /write your regex here/
