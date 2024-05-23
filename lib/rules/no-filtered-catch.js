/**
 * @fileoverview Prevent filtered `catch` function calls
 * @author Chris Sidi
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
  meta: {
    type: 'problem',
    docs: {
      description: "Prevent filtered `catch` function calls",
      recommended: true,
      url: null, // URL to the documentation page for this rule
    },
    fixable: null, // chained catch methods are not easily fixable. Punting for now.
    schema: [], // Add a schema if the rule has options
    messages: {
      useSingleArgCatch: 'Use a single argument catch method compatible with native promises',
    },
  },

  create(context) {
    return {
      CallExpression(node) {
        if (node.callee.type !== 'MemberExpression') return;
        if (node.callee.property.name !== 'catch') return;
        if (node.arguments.length <= 1) return;

        context.report({
          node,
          loc: {
            start: node.callee.property.loc.start,
            end: node.loc.end,
          },
          messageId: 'useSingleArgCatch',
        });
      }
    };
  },
};
