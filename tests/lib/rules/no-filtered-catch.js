/**
 * @fileoverview Prevent filtered `catch` function calls
 * @author Chris Sidi
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../lib/rules/no-filtered-catch"),
  RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester();
ruleTester.run("no-filtered-catch", rule, {
  valid: [
    {
      // single argument catch method
      code: "aPromise.catch(function(err) { if (err instanceof RangeError) { return 42 }; throw err })",
    },
    {
      // zero argument catch method
      code: "aPromise.catch()",
    },
    {
      // try statement with catch block
      code: "try { } catch (err) { }",
    },
    {
      // other methods that accept multiple arguments, like `then`
      code: "aPromise.then(function(res) { console.log(res) }, function(err) { console.log(err) })",
    },
  ],

  invalid: [
    {
      code: "aPromise.catch(RangeError, function() { return 42 })",
      errors: [{
        message: "Use a single argument catch method compatible with native promises",
        type: "CallExpression"
      }],
    },
    {
      code: "aPromise.catch({statusCode: 404}, function() { return null })",
      errors: [{
        message: "Use a single argument catch method compatible with native promises",
        type: "CallExpression"
      }],
    },
    {
      // multiple filters
      code: "aPromise.catch(NotFoundError, {statusCode: 404}, function() { return null })",
      errors: [{
        message: "Use a single argument catch method compatible with native promises",
        type: "CallExpression"
      }],
    },
    {
      // chained catches
      // it might be a lot of work to have autofix combine these into a single catch method
      code:
`aPromise
 .catch(RangeError, function() { return 42 })
 .catch({statusCode: 404}, function() { return null })
 .catch(function(err) { console.log(err) })`,
      errors: [
        {
          message: "Use a single argument catch method compatible with native promises",
          type: "CallExpression",
          line: 2,
          column: 3,
          endLine: 2,
          endColumn: 46,
        },
        {
          message: "Use a single argument catch method compatible with native promises",
          type: "CallExpression",
          line: 3,
          column: 3,
          endLine: 3,
          endColumn: 55,
        }
      ],
    }
  ],
});
