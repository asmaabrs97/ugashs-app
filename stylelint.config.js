module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recommended-vue',
    'stylelint-config-prettier'
  ],
  rules: {
    'media-query-no-invalid': null,
    'selector-anb-no-unmatchable': null,
    'no-descending-specificity': null,
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'tailwind',
          'apply',
          'variants',
          'responsive',
          'screen',
          'layer'
        ]
      }
    ],
    'declaration-block-trailing-semicolon': null,
    'no-invalid-position-at-import-rule': null,
    'import-notation': null,
    'function-no-unknown': [
      true,
      {
        ignoreFunctions: ['theme']
      }
    ],
    'selector-class-pattern': null,
    'custom-property-pattern': null
  },
  overrides: [
    {
      files: ['*.vue', '**/*.vue'],
      customSyntax: 'postcss-html'
    }
  ]
}
