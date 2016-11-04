# 02 Types

All input and output fields in the Designer have a type.

The five basic types in the Designer are: String, Number, True/False, Date, and File. When working with input fields and output fields, it’s important to be mindful of types. The type system is what allows or prevents certain behaviors.

The Big List of Types

String

A sequence of characters, wrapped in either single quotes or double quotes.

Example:

`'Free Mars’, “Free Mars”, ‘12345’, “12345”, "", " “`

In the last two examples, “” represents an empty string, and “ “ is a string that contains one character, an empty space.

Number

An integer or decimal.

Example:

`12345, 1, -10, 0.543, 500000`

True/False

The boolean values true and false.

Example:

`true, false`

These values are not strings. They are special keywords that signify a boolean value. A boolean is a variable that can be either true, or false.

In addition to these keywords, both Number and String types can convert to the True/False type within the Designer.

For example, the string ’true’ and the string ‘false’ will both work as input to a True/False input field. The Designer will automatically convert these values to their respective boolean values. Additionally, any non-empty string values will also evaluate to True if used in a True/False input field. Empty strings, however, evaluate to False.

Similarly, the integer 0 and the integer 1 will also work as inputs to True/False. 0 is representative of the Boolean value false, and 1 is representative of the Boolean value true.

Special Types

Beyond these basic types, there are also two special types, List and Object. These types are composites of the other types.

A list is a collection of items. An object is a collection of keys and values, where each value is of a certain type. Unlike lists, objects can contain values of many different types.

A list has the structure:

`[ 'nitrogen', 'oxygen', 'carbon' ]`,

where ‘nitrogen’, ‘oxygen’, and ‘carbon’ represent three items in a list.

An object has the structure:

`{“lastName”: “Russell”, “firstName”: “Saxifrage”}`

In the above example, “lastName” and “firstName” are the keys in the object. The corresponding values are “Russell” and “Saxifrage”.

Items in a list are often represented as contained between brackets []. Similarly, you can distinguish an object by its use of curly braces {}.

**Just My Types**

Type mismatches occur when the Designer expects a certain type but does not receive it. Most of the time, the Designer will prevent you from making these sorts of errors. However, they can occur with more advanced use of the Designer, so it’s important to be mindful of the overall type system.

Both input fields and output fields have a type. However, input fields and output fields both handle types differently.

**Types - Input Fields**
For an input field, if a certain type is specified, the card will try to automatically convert an incoming value to that type. For example, if you were to use the value “4” (which is of type string) as input to a field that was set to the type “Number”, the card will automatically convert this value to the appropriate type, Number.

**Types - Output Fields**
Output fields, however, behave differently. Output fields expect you, the user, to be honest about what they are. If you specify that an output field is of the type “String”, the Designer will expect that the value contained within this output field is a string. In the circumstance that the output field value does not match its type, a type conversion error will be thrown.

Many of the available functions in the Designer already specify both the type of the input field and the output field and do not allow you to change these types. The Designer will often know what type both the inputs and outputs should be. In this circumstance, worrying about types is unnecessary.

However, in circumstances where the Designer doesn’t explicitly know either the input or the output field values, types play a large role.

**03 Functions**
The categories of functions that are currently available in the Designer are: Boolean, Control, Crypto, Date, HTTP, JSON, JWT, List, Math, Object, String, Text Analysis, URL, and XML.

We’ll start by going over a few of the basic functions and
operations available within the Math and String Function categories. Once we have the basics of functions down, we’ll move to the more advanced Function categories, such as List and Object.

You don’t need to memorize what every function does inside the Designer. A function is just a procedure that accepts an input, does something to that input, and then generates an output.

**Fundamentals - Math and String Functions**

**Math Functions**
Functions
	- Add
	- Subtract
	- Multiply
	- Divide

Math functions are used to perform common Math operations, such as **Add**, **Subtract**, **Multiply**, and **Divide**. In addition to these basic functions, there are also other more complex functions available, such as **Factorial**, **Modulo** and **Ceiling**.

	~~Let’s see some of these basic functions in action:~~

~~\\// insert video of adding two numbers together \\//~~

~~This is just a simple example, but many of the other Math function cards operate in the same way: they accept numbers as input and return a numeric output.~~

**String Functions**
- Find
- Substring
- Compose

There are a number of different String functions available for your use, but three of the most important string functions are **Find**, **Substring**, and **Compose**.

**Find** allows you to search for a string inside another string. This can be useful if you’re looking for a specific string (this function will return an output field of “-1” if a string is not found), or only want to return part of a string.

//video of Find

This function goes hand-in-hand with our next function, **Substring**. Substring allows you to extract a value from a string by specifying the starting location of the string and the ending location of the string. These locations are referred to as the ‘starting index’ and the ‘ending index’.

You can think of Substring as grabbing only a very specific section of a string. This may be a word, a character, or a series of words and characters. With Substring, you are grabbing just a slice of another string.

//video of Substring and Find working in tandem

Our last function, **Compose**, is one of the most useful string functions. It allows you to drag-and-drop output fields into a textbox and “compose” new strings from these fields. This is functionally similar to the Concatenate function that is also available.

//video of Compose

**Beyond Fundamentals - Lists and Objects**
Inside the Designer, lists are represented as three output fields stacked diagonally.

In Chapter 2, we were introduced to the list:

[‘nitrogen’, ‘oxygen’, ‘carbon’].

You might expect, if you were to number these items, that ‘nitrogen’ would be at position 1 in the list, ‘oxygen’ at position 2, and ‘carbon’ at position 3. A quirk about lists, though, is that when counting the number of items in a list, we don’t begin at 1; we begin at 0.

So, if we look back to our previous list, the item ‘nitrogen’ is actually at position 0 in our list, ‘oxygen’ is at position 1, and ‘carbon’ is at position 2. A list always begins at position (index) 0. When working with items in a list, it is important to remember this.

**Types of Lists**

In the previous example, we had the list:

`['nitrogen', 'oxygen', 'carbon']`,

This list contains three items. Each item is of the type String. Items that are type String are always wrapped in either single quotes or double quotes.

Two other common types of lists:

`List of Numbers: [2, 4, 6, 8]`

`List of Objects: [{“firstName”: “John”, “lastName”: “Smith”}, {“firstName”: “Taylor”, “lastName”: “Swift”}]`

Every item in a list must be of the same type. You can have lists of Number, String, Date, True/False, and File.
