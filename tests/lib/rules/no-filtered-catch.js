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
    // give me some code that won't trigger a warning
  ],

  invalid: [
    {
      code: "_.catch(NotFoundError, err => null)",
      errors: [{ message: "Fill me in.", type: "Me too" }],
    },
  ],
});
