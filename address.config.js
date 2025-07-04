const PONTUSX_ADDRESSES = require('./pontusxAddresses.json')

module.exports = {
  whitelists: {
    'nft.owner': [
      '0x9B421d0f5d378b66324251d6CDc1945a6560110b', //	SIMAVI
      '0x13a9FfFC7fb684CCc623C305B46b7eD6b3a73C66', //	ENGINSOFT
      '0x7d46Bb46ba45f08480bA80150d3594fd9f3e212d', //	IMT Atlantique
      '0x670E5512aDBE5fAD672d825800f4a4A23Be744D1', //	Fraunhofer IAO
      '0xc9034e58176c59153F53C6B59d5CFD5BBD58b5Fc', //	Aarhus University
      '0xB9fB84b093D8bE26A78208b324D8074627374F49', //	HWR Berlin
      '0xEEC041b73BC4FcAE2B0a66F9992d2b6d1959BbD1', //	Tronico SAS
      '0x7e7cea5dda047F66b8755Cb4Bf1d8eDBFB236e35', //	Airbus Atlantic
      '0x13f8514cA72C83386929f0BAa9bCe6B840cbA03A', //	Continental Automotive
      '0x98bDc1EaDE6D4ad7032A091Dc8bE6D217cB37eF3', //	iED
      '0xf958C1F667f71C1C66C1702830A89057a90F40eE' //	deltaDAO
    ],
    'datatokens.address': [
      '0x25244fAad80E52E3d5E1f5f7B7D00132a97169D5', // Condition Monitoring Software - EuProGigant Validation Platform
      '0xef0E7512F7AF5d4254eA39c7295D411bb3b73321', // CO2-Estimate Algorithm - EuProGigant Validation Platform
      '0xA1C749aA0b77D129c181Cb7C7bDCB0D677AA5679', // Workpiece Data Part No. 882 - EuProGigant Cloud
      '0x4800A8709656D23707260831552252C28D71B7A3', // Workpiece Data Part No. 881 - EuProGigant Cloud
      '0x721c13C16914b1Dcc9f16Ca7F36443E3FF1f669d', // Workpiece Data Part No. 880 - EuProGigant Cloud
      '0x04E12b7d8B0e1B9e38A7337Dc5327374b31727ac', // The Digital Project Management Office
      '0x6621028a198614dE39358d017aC7983928a44384', // ProfiTrainer Production Dataset 1725364307631
      '0x7759f4BCfc24DC16e8D0cDeE49598fCd30840Eee', // ProfiTrainer Production Dataset 1725365355208
      '0x67a026D3356790B447c3287A5937E4f3851fba93', // ProfiTrainer Production Dataset 1725365954529
      '0x5A365b74eFdD3bF1DD2C96CC42d964E201706d43', // Holowork
      '0xb20D3889931517d9AA1D7306c9a521F506f88245', // Tool Recommendation Service
      '0x6417a347ad30d0745cbb3a851df7c72517c4705c', // Process Optimization Service
      '0x6406F91b03a7ffbf858e57C3fa205Ae549EFB1a5', // Tool Performance Report Service
      '0x7622a7Ce0F976D6c5b2DA5755Dce0204973918a5', // CliCE-DiPP x ESCOM Algorithm - PCF-Service
      '0xA9D37a7f7b2c2E31C74eb9006370CbAEE3818D78' // CliCE-DiPP x ESCOM Data Set
    ]
  },
  featured: [
    {
      title: 'Featured Service Offerings',
      assets: [
        'did:op:c524a2ad8aab175315cdbb106289114079637529af988874c1a31e9a179e4540', // Condition Monitoring Software - EuProGigant Validation Platform
        'did:op:291ac52240e7c422aa8e67f9369efa7b30cbdc3f494922f1b646a8091a97fdb6', // CO2-Estimate Algorithm - EuProGigant Validation Platform
        'did:op:ec6abd810b3f3d9f3cf7fbbfd3462e289ee9700f0a1ca492adaf6a8c7d0bdce7', // Workpiece Data Part No. 882 - EuProGigant Cloud
        'did:op:3bee178505bf07494aeaafe67b5d98b5ebd0986bb56d6673e718f8ac4e090c8a', // Workpiece Data Part No. 881 - EuProGigant Cloud
        'did:op:daecfe8261713a3854bdb59de6e6eba1e614dae3a40f436f955f2a94559a88ca', // Workpiece Data Part No. 880 - EuProGigant Cloud
        'did:op:7008fbeaff95defda057f26d1802903287a295d25dbd0481bf0a93540f6f8e9b', // CliCE-DiPP x ESCOM Data Set
        'did:op:a03c48ae417db04dbc3e3ad0974dc66cd70d9ac38277218846756cfb468866fc', // CliCE-DiPP x ESCOM Algorithm - PCF-Service
        'did:op:717240e366f832d693ef3d376e5afb839a4e10215df5071ca90503a3a862737f', // Gühring Tool Performance Report Service
        'did:op:1e129912c2a25888a6a480c7dbbd8f99834f94361d078064a83990fa60d21436', // Gühring Process Optimization Service
        'did:op:e9907813dc738613b81905ee800d8bb97ae8ebd49b0876ed8c4925ed66e88890', // Gühring Tool Recommendation Service
        'did:op:91a3e8fdc3e1e6fc720c8c0ba5753566ad3a345e76b4fcb622598f9bd7582e7a', // Holoworks
        'did:op:4ac6c543dcc8f815ea33f3e0628bb8a9bc710f95d37aaa6ee96543d30db1c0d9', // IGH ProfiTrainer Production Dataset 1725365954529
        'did:op:5e5f43ff384f844566ec749df53b9b4668dfc03fe64b58975481a4ffda8ccfd3', // IGH ProfiTrainer Production Dataset 1725365355208
        'did:op:fd0b1dc94e6d52363edc78ac60d32840e9abdef28e1e5048c43dfa87ebfea209', // IGH ProfiTrainer Production Dataset 1725364307631
        'did:op:8cb0f9c2d652366284bc0feda914f33894be6cadfb8e593071012ab10c85cbd7' // Digital PMO
      ]
    }
  ],
  verifiedAddresses: PONTUSX_ADDRESSES
}
