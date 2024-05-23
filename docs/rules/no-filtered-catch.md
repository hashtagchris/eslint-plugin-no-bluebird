# Prevent filtered `catch` function calls (`no-bluebird/no-filtered-catch`)

<!-- end auto-generated rule header -->

Please describe the origin of the rule here.

## Rule Details

This rule aims to detect `catch` methods that are incompatible with native promises.

Examples of **incorrect** code for this rule:

```js
aPromise
.catch(NotFoundError, err => null)
```

Examples of **correct** code for this rule:

```js
aPromise
.catch(err => {
    if (err instanceof NotFoundError) {
        return null
    }
    throw err
})
```

## When Not To Use It

When you're confident your code and dependencies are returning bluebird promises, not native promises.

## Further Reading

* http://bluebirdjs.com/docs/api/catch.html#filtered-catch