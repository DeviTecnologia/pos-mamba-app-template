module.exports = {
  extends: 'stylelint-config-standard',
  /** Report when a unnecessary stylelint disable comment is written */
  reportNeedlessDisables: true,
  rules: {
    /** Allow postcss @at-rules */
    'at-rule-no-unknown': [
      true,
      { ignoreAtRules: ['if', 'else', 'each', 'for', 'mixin'] },
    ],

    /** Prevent extra space between @at-rule and ; for readability */
    'at-rule-semicolon-space-before': 'never',

    /** Autoprefixer takes care of this for us */
    'at-rule-no-vendor-prefix': true,
    'property-no-vendor-prefix': true,
    'media-feature-name-no-vendor-prefix': true,
    'selector-no-vendor-prefix': true,
    'value-no-vendor-prefix': true,

    /** Allow comments to not have a empty line before them */
    'comment-empty-line-before': null,

    /** Prevent the usage of !important (bad practice) */
    'declaration-no-important': true,

    /** Require quotes for recommended font-family names */
    'font-family-name-quotes': 'always-where-recommended',

    /** Prevent confusing colors, use #hex, rgb() or rgba() only */
    'function-blacklist': ['hsl', 'hsla'],
    'function-url-no-scheme-relative': true,

    /** Require quotes for url() */
    'function-url-quotes': 'always',

    /** Always require attribute selectors to have quotes (when relevant) */
    'selector-attribute-quotes': 'always',

    /** Rules for normalizing extra spaces  */
    'media-feature-parentheses-space-inside': 'never',
    'selector-list-comma-newline-before': 'never-multi-line',
    'selector-list-comma-space-after': 'always-single-line',
    'selector-list-comma-space-before': 'never-single-line',
    'media-feature-range-operator-space-after': 'always',
    'media-feature-range-operator-space-before': 'always',
    'value-list-comma-newline-after': null,
    'value-list-comma-newline-before': null,

    /** Disallow #id selectors (bad practice) */
    'selector-max-id': 0,

    /** Allow only one '*' universal selector per selector */
    'selector-max-universal': 1,

    /** Disallow specifying a selector by its element type */
    'selector-no-qualifying-type': [true, { ignore: ['attribute'] }],

    /** Enforce a quote pattern */
    'string-quotes': 'single',

    /** Enforce lowercase for keyword values  */
    'value-keyword-case': ['lower', { ignoreProperties: '/font/' }],

    /** Svelte related */

    /** Allow 'ref:*' selectors */
    'selector-type-no-unknown': [true, { ignoreTypes: ['ref'] }],

    /** Allow svelte :global() and ref:* */
    'selector-pseudo-class-no-unknown': null,
    /**
     * Since stylelint reads all 'ref:*' as the same selector,
     * this prevents it from complaining when multiple 'ref:*'
     * are present on the same css
     */
    'no-descending-specificity': null,
    'no-duplicate-selectors': true,
  },
}
