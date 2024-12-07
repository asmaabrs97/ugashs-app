module.exports = {
  customSyntax: 'postcss-html',
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recommended-vue',
    'stylelint-config-prettier'
  ],
  rules: {
    // Désactivez explicitement les règles problématiques
    'media-query-no-invalid': null,
    'selector-anb-no-unmatchable': null,
    // Ajoutez d'autres règles si nécessaire
    'no-descending-specificity': null,
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'tailwind',
          'apply',
          'variants',
          'responsive',
          'screen'
        ]
      }
    ]
  },
  overrides: [
    {
      files: ['*.vue', '**/*.vue'],
      customSyntax: 'postcss-html'
    }
  ]
}
