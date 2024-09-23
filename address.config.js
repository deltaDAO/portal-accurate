module.exports = {
  whitelists: {
    'nft.owner': [
      '0x4A806a4851472F7cFd579d3FF5465F03c3c2B5d4',
      '0x21CF19e1FaF3A62f82B432f82152e8c5C0FdBdaF',
      '0x9dfbda23b65efB1c836828D74a96eB8528A60f3C',
      '0xb2AF8b92bFaC5299Cb6EDEf16150BFD1d4d26a93',
      '0x3dB4E0b1fC6072271BF51e9a0CC17E3c7C4C99f5',
      '0x9B421d0f5d378b66324251d6CDc1945a6560110b',	//	SIMAVI
      '0x13a9FfFC7fb684CCc623C305B46b7eD6b3a73C66',	//	ENGINSOFT
      '0x7d46Bb46ba45f08480bA80150d3594fd9f3e212d',	//	IMT Atlantique
      '0x670E5512aDBE5fAD672d825800f4a4A23Be744D1',	//	Fraunhofer IAO
      '0xc9034e58176c59153F53C6B59d5CFD5BBD58b5Fc',	//	Aarhus University
      '0xB9fB84b093D8bE26A78208b324D8074627374F49',	//	HWR Berlin
      '0xEEC041b73BC4FcAE2B0a66F9992d2b6d1959BbD1',	//	Tronico SAS
      '0x7e7cea5dda047F66b8755Cb4Bf1d8eDBFB236e35',	//	Airbus Atlantic
      '0x13f8514cA72C83386929f0BAa9bCe6B840cbA03A',	//	Continental Automotive
      '0x98bDc1EaDE6D4ad7032A091Dc8bE6D217cB37eF3',	//	iED
      '0x28080F654eED6CC00e8b16F4841E92CD0c2C0778'	//	deltaDAO
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
  verifiedWallets: {
    '0x628677D9A9d93a913182fa04893Da0ce4E6570Ee': 'deltaDAO AG',
    '0xf8A493af0e72C2C62651Bf7b7d1a006806Fb646f': 'deltaDAO AG',
    '0xf5b1E6f9a566E20de35d0C240D47F9cc08f33c0F': 'deltaDAO AG',
    '0x50499814AE402563b5c34F6BD2F5C829A7693964': 'deltaDAO AG',
    '0x04863f1E29Ea1aBF006fB1ecB129cAD892db0C90': 'deltaDAO AG',
    '0xdA9ED09a94B1A2315e22157d75fd0b0bfC63B6Cc': 'deltaDAO AG',
    '0x7AF6c5F0950A37b7C25da4367E9B56C03dE8234D': 'deltaDAO AG',
    '0xC0E3B447c1e7B22769952E89389Ef2cD9B812Cc5': 'deltaDAO AG',
    '0xBf252dD5b3a31A50Db34113e12517b21D143AC52': 'deltaDAO AG',
    '0x0bd21cF4Da78f74c483a1109ac3A30794FBd556B': 'deltaDAO AG',
    '0x9c26685b6E8e2997d9aAf3f1a642f1b1b3dB9580': 'deltaDAO AG',
    '0xd0ea08826FA10eEaA3871a6AE680E5f15149F355': 'deltaDAO AG',
    '0x4C84a36fCDb7Bc750294A7f3B5ad5CA8F74C4A52': 'deltaDAO AG',
    '0x68C24FA5b2319C81b34f248d1f928601D2E5246B': 'deltaDAO AG',
    '0x2859d961a6dBa6e7d30b2d383Af468edb4E7F4f6': 'deltaDAO AG',
    '0xaBaf56FC1bB6b4FF9fA4378C3C8723d2B2444324': 'deltaDAO AG',
    '0x0a7B96885b28deDE4a6887CA1150E36edb385BeE': 'deltaDAO AG',
    '0xDF1c35c3d5178e9d98043b35a6737Bd861c191c9': 'deltaDAO AG',
    '0x01e66950353400E93AEe7F041C0303103E2ef5Ab': 'deltaDAO AG',
    '0x862E3fe199723945a38871dE4F736f1233589CE5': 'deltaDAO AG',
    '0xFDC7BEc0aED8a584577fd59CbF56805eE8c976B3': 'deltaDAO AG',
    '0x5f525cd29377DC2155C2AbCDaC0Ce45e630318b7': 'deltaDAO AG',
    '0x3a69B365769a9dAb67865Ca5530c4B1D5259bCb7': 'deltaDAO AG',
    '0x97870c129abc9877b66534e49f152585D6Ca3655': 'deltaDAO AG',
    '0x1Ad061ad839f82C05767dACd2B5ab384E72B45a5': 'deltaDAO AG',
    '0xFd4b5ae43f2aA446b02209098438890d3998cC9F': 'deltaDAO AG',
    '0x732BF4fA8E57200621b0e1acbe8855c238823016': 'deltaDAO AG',
    '0xa76Fa6837A6ffc9F123F2193717A5965c68B0cbA': 'deltaDAO AG',
    '0xFaeb57c16D5E9A9f06c8c5dB12796f5a432Eb7d6': 'deltaDAO AG',
    '0xb501FDaad0F0863C4c72f7EB9Abc23965DCa973d': 'deltaDAO AG',
    '0x3dB4E0b1fC6072271BF51e9a0CC17E3c7C4C99f5': 'deltaDAO AG',
    '0xe2DD09d719Da89e5a3D0F2549c7E24566e947260': 'deltaDAO AG',
    '0x1072D3287A5cC513F40b425735E04355487f5F57': 'deltaDAO AG',
    '0x26818079Ba707b2facFfcdc41445322f0e7e3042': 'deltaDAO AG',
    '0x18aa7C29527E71b9F295f1bfB63e57F5a0A97282': 'deltaDAO AG',
    '0x8d4198E9af22863d4269dDA6a41eF2BfA187AbAc': 'deltaDAO AG',
    '0xb4026ac3562245bB0DAb9205D698Ab0410e3d723': 'deltaDAO AG',
    '0x24D68bFBA0fB06ccFfD21dC3a5c0B65207Bd479a': 'deltaDAO AG',
    '0xFB7Cb9F2E15F3935B22FB9846d69b46bD31edf07': 'deltaDAO AG',
    '0xa51815143e6C578D3c27A7b6fA6E4C1Dfcac555C': 'deltaDAO AG',
    '0x6432956a98E522F1B8a73a45245a5C6ff2c7f8f1': 'deltaDAO AG',
    '0xD1Cb3E73a7bC632d2279114AA2783dcaD06517ca': 'deltaDAO AG',
    '0xAEC291E9Eb4293d45a5B8aBE3549c0C7464e5C24': 'deltaDAO AG',
    '0x4c7BfE3D6278eb996FC13c5f748bC7b1dBe593D8': 'deltaDAO AG',
    '0x4A806a4851472F7cFd579d3FF5465F03c3c2B5d4': 'PTW - TU Darmstadt',
    '0x21CF19e1FaF3A62f82B432f82152e8c5C0FdBdaF': 'PTW - TU Darmstadt',
    '0x9f4ceE0eBD03a1e9E4DcffaF876873d7a3e9595c': 'PTW - TU Darmstadt',
    '0x6E7bec8715955B6Cc90A5A1767cd981b90C5a245': 'PTW - TU Darmstadt',
    '0x81336c245712DbF0E971de5463173bCaA9826d84': 'IONOS Cloud',
    '0x56eA3Cc92144Db3bA2bdE25131F40c7B98F7eD32': 'Exoscale',
    '0x9Dc6aDA184fc98012D74F1C4f3f223183A4745D4': 'Wobcom',
    '0x0337b320DEfAddd9aDbC518f8A9cee30b606d15b': 'Arsys',
    '0xD7b90d6476091F6bc4CAaC40180FB300351fAb9F': 'Arsys',
    '0xF20113edd04d98A64AD2A003B836677E1c9aACAD': 'State Library of Berlin',
    '0x0279F7D611e8745BA16A4F1e83B752f8fc173870': 'State Library of Berlin',
    '0x6B33b4Cc1CAa5b49bB2752D23B9B78e524e17654': 'State Library of Berlin',
    '0x23035d7E3cddc44b345eBF9DDDA2e1aaeCeeEeA1': 'State Library of Berlin',
    '0xb98B9304860Be2a90F86CFa738dbedEb6C6AdF98': 'State Library of Berlin',
    '0xE098a4DE67034a17b23CDfB7E81C49296361974F': 'State Library of Berlin',
    '0x67c39F79B1e5430104bCc4009A6210EAeB2672Bf': 'State Library of Berlin',
    '0xEF193A800e956b9fF1c379B7Ac3C55FCA38aDB15': 'State Library of Berlin',
    '0x8337649C1d86ab41d42ef91E303B814f9FfEC04d': 'State Library of Berlin',
    '0xC309b5Cd4833315D495F8616A1B957E6c3F0Cc0b': 'State Library of Berlin',
    '0x04707912117fb09c68F48BDC15Cf78F50501fF92': 'State Library of Berlin',
    '0x92DCe2e6b29863CF190c520B81CB4153f2642a49': 'State Library of Berlin',
    '0xD274318C312174eb7CCe872eE415b7398c8dA2be': 'State Library of Berlin',
    '0x2E32B0e4e20C7A4162A6455b4A12e01D09472556': 'State Library of Berlin',
    '0x4d7fE037831F077583a259B6437E542EffD6f2cD': 'State Library of Berlin',
    '0xdf89102cDd2ccA60E88e480C6D609FB3bfFD4d54': 'State Library of Berlin',
    '0x62078F05Eb4450272D7E492F3660835826906822': 'University of Lleida',
    '0xa702032E187E6A53EAddC28a735B414220712689': 'Software AG',
    '0x0a477f6297413f20C4fBc15F93e34dacE4136123': 'Software AG',
    '0x586000e6DA330E140b11a4aeEbb81963d67F336b': 'TU Wien',
    '0xf596D17C4a3A5c92c4721627B9e5E5064651BF46': 'Materna SE',
    '0xE90e1f337cBBaeD2bf30dD66165246e477F59158': 'Materna SE',
    '0x3CEA8fBCbD1c745E081fD3937C18eE0b6Cc3f1b1': 'Airbus',
    '0xF8dB4a6d529a14e3E029e2b8A9279f408909Fa20': 'OHB',
    '0x48535044200dAE3FD4f5b5C3f9b077fa5c230Ef3':
      'T-Systems Multimedia Solutions GmbH',
    '0x212c355c3ce41a272606da61F661dDd2b7F8a4B1':
      'IKS - Gesellschaft für Informations- und Kommunikationssysteme mbH',
    '0x44C34FbBB727bDC648E65feCfF3FB9D4c85f1fe4': 'msg David GmbH',
    '0x8fBF860883BB71D691053A4363030Dc1c65f7017': 'Detecon',
    '0x7DF1674a1e3449778eEB324652d3FF3Cb5046753': 'SINTEF',
    '0xe3Df4851c094f5F6F1AC9AbfA4FC2075276195Ec': 'Peaq',
    '0xB21282F443EB0D490819d98F2976758af5C979B3': 'Datarella',
    '0x0aec046a558F13Ff18aAEc5E6f76084185358cdf': 'Datarella',
    '0x6fE8aD445AD86b3d1325F79955Ef28d6e9cb2258': 'Bosch',
    '0x51Decd187744bCfAD1BAb0A3E71dD68fAC0ba478': 'TU Dortmund',
    '0xa98A6eefbAE870b88a9C7A43f4b50066A01c93b6': 'RWS',
    '0x9dfbda23b65efB1c836828D74a96eB8528A60f3C': 'Craftworks',
    '0xb2AF8b92bFaC5299Cb6EDEf16150BFD1d4d26a93': 'Concircle Österreich GmbH',
    '0x2b92BF0496B7B41ea2d723325DDE96651795c784':
      'DENSO AUTOMOTIVE Deutschland GmbH',
    '0xe761F8e33c71D08A9323Cb2c711aB4Fae2634276':
      'DENSO AUTOMOTIVE Deutschland GmbH',
    '0x895975869261A215813e33568a295F94A3F301ed': 'Struggle Creative Oy',
    '0xDa4fc9E82Ac4E44207a1f74137493D3437D80761': 'Sphereon',
    '0xfc739f2F91921eb710878ad2Ca38C147a784C96f':
      'Austrian Institute of Technology',
    '0xF62bF6371Ee020Cb2164Ac3C338514DBbb93A0D4': 'acatech',
    '0x6E1cE3530A12F89cF567788C132454E5dC7D3cCE':
      'Spanish Ministry of Economic Affairs and Digital Transformation',
    '0x943CaA8afCAdd2F64a7cE9E53A91d5ea0BEb40c1': 'Eviden Germany GmbH',
    '0x7A6246e02B2aA276203469Cfb839a2666520D8b5': 'Eviden Germany GmbH',
    '0x9391291b0Df512B20810183744De8272774b6655': 'TU Delft',
    '0x2ee3c4F19f90237B7C45cfAD6B5dC4b5840563Ec': 'Perpetuum Progress GmbH',
    '0x203C7AA993EED06932FA327a192de9A8370b5Ab4':
      'Mercedes-Benz Singapore Pte. Ltd.',
    '0x4d6240C7Ef355a2E85c13B26A49A35908ce853E5':
      'Mercedes-Benz Singapore Pte. Ltd.',
    '0x2E33C6014222A47585605F8379a1877eaaF0ec13':
      'Mercedes-Benz Singapore Pte. Ltd.',
    '0x6bF77769e84045a9EAC64573e70a5562457C52ad':
      'Höchstleistungsrechenzentrum Stuttgart (HLRS)',
    '0x17c8D253443F9E7305A2539d7aF177B21aAD3355': 'Ruhr-Universität Bochum',
    '0xFDF411B7A23182e7F0a635bdF0d25f0fCb2aAf74': 'north.io GmbH',
    '0x3560626F234eD181E807E4e31ded56D9aca1ac58': 'CONTACT Software GmbH',
    '0xF0926FbE8e60E54aFB4fD296B2698230ab32799b': 'Universität Siegen',
    '0xAA782a260Ad773bca5Ff0535356CB0F7B94Cd254':
      'AWS-Institut für digitale Produkte und Prozesse gGmbH',
    '0x2aC6802160A74677B7cEC1aaD7E41Ec968D57896': '5D Institut GmbH',
    '0xFd1BEC7E551fAeA6102045D720dD693c4e9C8E06': 'Accenture',
    '0xa2199E3f60fC244037Efd5A77714CC05F604F855':
      'Airbus Defence and Space GmbH',
    '0x5101ea56E29f5dc03285809b6157f0588ff255D0': 'Bernard Technologies GmbH',
    '0x8B7f2b75B7F87D3125C8B0eDB85639B441BBcE21':
      'Deutsches Forschungszentrum für Künstliche Intelligenz GmbH',
    '0xb11124Dfa40E44b3283068fd07bf6FdE60caf06A':
      'Hochschule für angewandte Wissenschaften Kempten',
    '0x632460b14aDd90aD9430e381B4662779cC1ab7a6':
      'Fraunhofer-Institut für Graphische Datenverarbeitung IGD',
    '0x1f65110b63B6044f1E92543C09231842131798C7': '52°North GmbH',
    '0xDFa29AE20eac7f203DdDbe15E1830985e99143B8': 'TrueOcean GmbH',
    '0xFfA05d656465568BE83B11bf274c5458AC8401AC':
      'Institute for Language and Speech Processing',
    '0xb500BfE3d89b5D6b0d2b91841c3A3aD568Cb0FdC': 'Vicomtech',
    '0x8BF36BEFC22a7b9c1a546139bFd4ae8420bcFf0e': 'Fraunhofer IAIS',
    '0x2dB30B996C0E2990F836685Cf1A2939b3299f8e5':
      'Berger Holding GmbH & Co. KG',
    '0x224482ebcf914b9FA9E312036B377e26B676E534': 'Christoph Kroschke GmbH',
    '0xD580c01E2f503287006138a94eBBc537Fe7eBD25': 'Brinkhaus GmbH',
    '0x4B107057aB8278c7d9436bf76230d16e5F7BaD16': 'Gühring KG',
    '0x7bf493b142AB0bb37c7f766A1585245901891685':
      'Fraunhofer-Institut für Werkzeugmaschinen und Umformtechnik IWU',
    '0x1c0c9211E8Ec8E0253A53880D5481e4580B62125':
      'imc information multimedia communication AG',
    '0xEEe803bEFd2B4f229E57523Edb11CDE38DD1a23E': 'SAP Fioneer GmbH',
    '0xb828bA1850aA11daA1890896573Aa6008221A671': 'NT Neue Technologie AG',
    '0x005d24698bF41c398ECF15a93455621932a6e19F': 'IONOS SE',
    '0x746d4715c24fc4d26D02A558ACF98dC717C68E1e': 'ScopeSET GmbH',
    '0x1Bf21DCb771Aba18B1D23AA6D8a619C1AB1811a4': 'RIB Software GmbH',
    '0x04FEA446847c3539d35Cca0a74Cb82Da811BAfc3': 'msg DAVID GmbH',
    '0x69bF63B2Bb6A93fc4ff434595A72a4ED313E5698': 'Arvato Systems GmbH',
    '0xEdfd506dd449Cd06c91f51Fe9DfE4e3E57B2F8f5':
      'Fraunhofer-Institut für Produktionsanlagen und Konstruktionstechnik',
    '0x0763BfBcBfA0126b5A5509fB1185b7b6476BdAd8': 'OSISM GmbH',
    '0x54d2946677CC16E06Efd6161A4abFA17fc98Afc3': 'Netcompany-Intrasoft S.A.',
    '0x5880C2C30C922FE700fc079e1b6BBa7e9E7DE577': 'Stackable GmbH',
    '0xc2350eA5913511A95c1aBED51de377A0b92846Be':
      'FZI Forschungszentrum Informatik',
    '0x0c85Cd08E6643Fa3E4B75268431d19CcFC99C916': 'ProCarement GmbH',
    '0x1153265057782e8C57292CA590E50acC36037204':
      'Hochschule Furtwangen University (HFU)',
    '0xF211efa0C51559e6730db3Ba6FE1f1D46A68BE14':
      'Daten-Kompetenzzentrum Städte und Regionen DKSR GmbH',
    '0x7209bd8fDd841358a3CF9E7DaD8D9dCe2E4BbBB8':
      'GMN Paul Müller Industrie GmbH & Co. KG',
    '0xDB5807EacA2937f6264c5725538f8Ec357b4d3b2':
      'Fraunhofer-Institut für Offene Kommunikationssysteme FOKUS',
    '0x8482256AC35fcA568a53CfD77Af9538FEC0691bb': 'Bechtle Aktiengesellschaft',
    '0x985f314171DFc0Ec3443E32b262c3135E094eD72': 'Bundesdruckerei Gruppe GmbH',
    '0x99c030936B5E7381E65B645d3762A93147EB15F7': 'Fraunhofer IOSB',
    '0x7104a77Ca5FfC6D3f0840048C307d05EA3b529C0': 'embeteco GmbH & Co. KG',
    '0x9c373e9f125497281f37AeF603fa99572856Bc38':
      'T-Systems International GmbH',
    '0x8FAF0702C51c94b5848774129047d75cEe49EE87': 'IPROconsult GmbH',
    '0x3EAbA16E4Ac451D85839A42eb9e7C61F157C88b7': 'Elektra Solar GmbH',
    '0x1c99F7C29EE0e79CAAD8E4d0Cc0b95D5Ece62294': 'Setlabs Research',
    '0xb9C596E9eC598a865b51f3F53ae7d122B7b7a937': 'Schüßler-Plan Digital GmbH',
    '0xb7cF56a08F2B6ccF250B431125850968b7f6a950':
      'Data Machine Intelligence Solutions GmbH',
    '0x4476123c4B4706cf88CbfA055b72726Baa1e8041':
      'Deutsches Zentrum für Luft- und Raumfahrt e. V. (DLR)',
    '0x9309Ce467475DbB0a9c549B988F6571EB024507C': 'OHB System AG',
    '0xb51d556E910Dd1887602034bbB66DA63EaA80ce2':
      'C&S Computer und Software GmbH',
    '0x007dB3DC8De9ae0F8AfeeBf1f7C92CcbD1A75Fd7':
      'eco - Verband der Internetwirtschaft e.V.',
    '0xe70bBA7bC033Bf1Ce6Fa3328eCFAAc8966E66966':
      'Institut für Automation und Kommunikation e. V.',
    '0xE4EE92b3a6B661b7148305Fa3A8d96062CBFAFc5': 'Fujitsu Services GmbH',
    '0x37e01308d6A0E322dECc457a13E0B2b2086D84B1': 'RADIUSMEDIA KG',
    '0x9Adf8e343ec1C7dB2B44e420bB8F4Cc51dEbFb7a':
      'ahu GmbH Wasser Boden Geomatik',
    '0xE64872A181F0695DA0660fE0B809a89A3bA359AA': 'Hochschule Offenburg (HSO)',
    '0x533d456D3D5c16E6390647E2167678b7a76A4840': 'FeltLabs',
    '0x56e194D46fF305560f51D06cE84649C1DD91d2F8': 'FeltLabs',
    '0x61DB12d8b636Cb49ea09eCa58a893dA9480E1F33': 'BigchainDB GmbH',
    '0xC8a08b33995594bfdB0ef9c18EB72da0469E396F': 'Deal ex Machina',
    '0x289Ff19C1e544B6E9488d5E79966491A2bAa88C9': 'Deloitte',
    '0x2650e382770A04bE0f7E362ed578FB261A60F4b3': '3D Mapping Solutions GmbH',
    '0x172b3eB3BDa62e81c171d340eC4a8C70f3d044EF':
      'Vodafone Group Services Limited',
    '0xf1F30d7048775F02139Be30067e984F2C2d1812a':
      'Vodafone Group Services Limited',
    '0xc21854fC5B997afa00c75b5098842a61F6E18e5B': 'Feuerwehr Braunschweig',
    '0x3561F6126Ce77A98fdC09DA2815919d5E04879D5':
      'Airbus Defense and Space GmbH',
    '0xaDD9344fc33530dE1F2fb338de4Cf25f7d8a6E92':
      'Airbus Defense and Space GmbH',
    '0xD9d17aC4b23222D0F9055723127acCaeeE834AD7':
      'Airbus Defense and Space GmbH',
    '0x81c337F4a5113E30919F588F178a361ade1D1Be2': 'ZARM Technik AG',
    '0xA38E2b6fFf3d9c66270253c7fE4Dcb5B088020D5': 'htw Saar',
    '0x3BB6944351d156fAF798f952C2838ef5bac68E40':
      'Centre de Visió per Computador (CVC)',
    '0xC09c6A1d5538E7ed135d6146241c8da11e92130B':
      'Freie und Hansestadt Hamburg',
    '0xA933f297ca605434850419951685ACeEcE2Bc88e': 'IGH Infotec AG',
    '0xd1E02B17524C53B337C22BF9D414bc15f933C3f0': 'itemis AG',
    '0x4DdaE8989871DB4fAB65d62775e20c577340F8bE': 'inovex GmbH',
    '0xAaeA7A824cffffFFf9Dd6EC51D7D7B0abA3f205F': 'neusta aerospace GmbH',
    '0xf9eaebd346E9D414f4D4210CB12e43cc226038cF': 'DLR GfR mbH',
    '0xdbe749D939ea958aC64A5bdf163B05096E260572': 'Valispace GmbH',
    '0xAE823B7a6ad5b79da6d180Dbe91E7C810abAcCA4': 'grandcentrix GmbH',
    '0x2B9C7E0d7Be68ec6b519Dad050CD0A4bf130B6A4': 'DIO'
  }
}
