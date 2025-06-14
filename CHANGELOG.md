# Next

Git diff:
* https://github.com/readium/r2-lcp-js/compare/v1.0.44...develop

Changes:
* TODO

# 1.0.44

> Build environment: NodeJS `22.14.0`, NPM `11.4.2`

Changes:
* NPM package updates

Git revision info:
* https://unpkg.com/r2-lcp-js@1.0.44/dist/gitrev.json
* https://github.com/edrlab/r2-lcp-js-dist/blob/v1.0.44/dist/gitrev.json

Git commit history:
* https://github.com/readium/r2-lcp-js/commits/v1.0.44

Git diff:
* https://github.com/readium/r2-lcp-js/compare/v1.0.43...v1.0.44

# 1.0.43

> Build environment: NodeJS `22.12.0`, NPM `11.0.0`

Changes:
* NPM package updates
* Updated Flox/Nix (dev)

Git revision info:
* https://unpkg.com/r2-lcp-js@1.0.43/dist/gitrev.json
* https://github.com/edrlab/r2-lcp-js-dist/blob/v1.0.43/dist/gitrev.json

Git commit history:
* https://github.com/readium/r2-lcp-js/commits/v1.0.43

Git diff:
* https://github.com/readium/r2-lcp-js/compare/v1.0.42...v1.0.43

# 1.0.42

> Build environment: NodeJS `22.11.0`, NPM `11.0.0`

Changes:
* NPM package updates
* Support for Flox/Nix (dev)

Git revision info:
* https://unpkg.com/r2-lcp-js@1.0.42/dist/gitrev.json
* https://github.com/edrlab/r2-lcp-js-dist/blob/v1.0.42/dist/gitrev.json

Git commit history:
* https://github.com/readium/r2-lcp-js/commits/v1.0.42

Git diff:
* https://github.com/readium/r2-lcp-js/compare/v1.0.41...v1.0.42

# 1.0.41

> Build environment: NodeJS `20.17.0`, NPM `10.8.3`

Changes:
* NPM package updates

Git revision info:
* https://unpkg.com/r2-lcp-js@1.0.41/dist/gitrev.json
* https://github.com/edrlab/r2-lcp-js-dist/blob/v1.0.41/dist/gitrev.json

Git commit history:
* https://github.com/readium/r2-lcp-js/commits/v1.0.41

Git diff:
* https://github.com/readium/r2-lcp-js/compare/v1.0.40...v1.0.41

# 1.0.40

> Build environment: NodeJS `20.12.2`, NPM `10.7.0`

Changes:
* Fixed crash bug introduced by LCP2.x code, affected only LCP2 publications with non-encrypted resources (including obfuscated fonts) consumed by HTML documents during rendering (fetching). Did not affect non-encrypted cover image or navigation document which are not consumed by publication HTML documents (they do not pass through the streamer transformers)

Git revision info:
* https://unpkg.com/r2-lcp-js@1.0.40/dist/gitrev.json
* https://github.com/edrlab/r2-lcp-js-dist/blob/v1.0.40/dist/gitrev.json

Git commit history:
* https://github.com/readium/r2-lcp-js/commits/v1.0.40

Git diff:
* https://github.com/readium/r2-lcp-js/compare/v1.0.39...v1.0.40

# 1.0.39

> Build environment: NodeJS `20.10.0`, NPM `10.2.5`

Changes:
* NPM package updates
* LCP profiles

Git revision info:
* https://unpkg.com/r2-lcp-js@1.0.39/dist/gitrev.json
* https://github.com/edrlab/r2-lcp-js-dist/blob/v1.0.39/dist/gitrev.json

Git commit history:
* https://github.com/readium/r2-lcp-js/commits/v1.0.39

Git diff:
* https://github.com/readium/r2-lcp-js/compare/v1.0.38...v1.0.39

# 1.0.38

> Build environment: NodeJS `18.16.0`, NPM `9.8.0`

Changes:
* NPM package updates

Git revision info:
* https://unpkg.com/r2-lcp-js@1.0.38/dist/gitrev.json
* https://github.com/edrlab/r2-lcp-js-dist/blob/v1.0.38/dist/gitrev.json

Git commit history:
* https://github.com/readium/r2-lcp-js/commits/v1.0.38

Git diff:
* https://github.com/readium/r2-lcp-js/compare/v1.0.37...v1.0.38

# 1.0.37

> Build environment: NodeJS `18.14.2`, NPM `9.5.1`

Changes:
* NPM package updates

Git revision info:
* https://unpkg.com/r2-lcp-js@1.0.37/dist/gitrev.json
* https://github.com/edrlab/r2-lcp-js-dist/blob/v1.0.37/dist/gitrev.json

Git commit history:
* https://github.com/readium/r2-lcp-js/commits/v1.0.37

Git diff:
* https://github.com/readium/r2-lcp-js/compare/v1.0.36...v1.0.37

# 1.0.36

> Build environment: NodeJS `18.12.1`, NPM `9.1.1`

Changes:
* NPM package updates

Git revision info:
* https://unpkg.com/r2-lcp-js@1.0.36/dist/gitrev.json
* https://github.com/edrlab/r2-lcp-js-dist/blob/v1.0.36/dist/gitrev.json

Git commit history:
* https://github.com/readium/r2-lcp-js/commits/v1.0.36

Git diff:
* https://github.com/readium/r2-lcp-js/compare/v1.0.35...v1.0.36

# 1.0.35

> Build environment: NodeJS `16.13.1`, NPM `8.3.0`

Changes:
* NPM package updates
* safeguard against callbacks that do not capture async / await thrown errors (exceptions do not automatically transit up the call chain) avoids UnhandledPromiseRejectionWarning

Git revision info:
* https://unpkg.com/r2-lcp-js@1.0.35/dist/gitrev.json
* https://github.com/edrlab/r2-lcp-js-dist/blob/v1.0.35/dist/gitrev.json

Git commit history:
* https://github.com/readium/r2-lcp-js/commits/v1.0.35

Git diff:
* https://github.com/readium/r2-lcp-js/compare/v1.0.34...v1.0.35

# 1.0.34

> Build environment: NodeJS `16.13.1`, NPM `8.3.0`

Changes:
* NPM package updates and migration from TSLINT to ESLINT

Git revision info:
* https://unpkg.com/r2-lcp-js@1.0.34/dist/gitrev.json
* https://github.com/edrlab/r2-lcp-js-dist/blob/v1.0.34/dist/gitrev.json

Git commit history:
* https://github.com/readium/r2-lcp-js/commits/v1.0.34

Git diff:
* https://github.com/readium/r2-lcp-js/compare/v1.0.33...v1.0.34

# 1.0.33

> Build environment: NodeJS `14.18.1`, NPM `6.14.15`

Changes:
* NPM package updates
* NodeJS v14 minimum requirement

Git revision info:
* https://unpkg.com/r2-lcp-js@1.0.33/dist/gitrev.json
* https://github.com/edrlab/r2-lcp-js-dist/blob/v1.0.33/dist/gitrev.json

Git commit history:
* https://github.com/readium/r2-lcp-js/commits/v1.0.33

Git diff:
* https://github.com/readium/r2-lcp-js/compare/v1.0.32...v1.0.33

# 1.0.32

> Build environment: NodeJS `14.17.5`, NPM `6.14.14`

Changes:
* NPM package updates
* Shorter LCP/LSD HTTP request timeouts (default was 60s!)

Git revision info:
* https://unpkg.com/r2-lcp-js@1.0.32/dist/gitrev.json
* https://github.com/edrlab/r2-lcp-js-dist/blob/v1.0.32/dist/gitrev.json

Git commit history:
* https://github.com/readium/r2-lcp-js/commits/v1.0.32

Git diff:
* https://github.com/readium/r2-lcp-js/compare/v1.0.31...v1.0.32

# 1.0.31

> Build environment: NodeJS `14.17.5`, NPM `6.14.14`

Changes:
* NPM package updates

Git revision info:
* https://unpkg.com/r2-lcp-js@1.0.31/dist/gitrev.json
* https://github.com/edrlab/r2-lcp-js-dist/blob/v1.0.31/dist/gitrev.json

Git commit history:
* https://github.com/readium/r2-lcp-js/commits/v1.0.31

Git diff:
* https://github.com/readium/r2-lcp-js/compare/v1.0.30...v1.0.31

# 1.0.30

> Build environment: NodeJS `14.16.1`, NPM `6.14.13`

Changes:
* NPM package updates

Git revision info:
* https://unpkg.com/r2-lcp-js@1.0.30/dist/gitrev.json
* https://github.com/edrlab/r2-lcp-js-dist/blob/v1.0.30/dist/gitrev.json

Git commit history:
* https://github.com/readium/r2-lcp-js/commits/v1.0.30

Git diff:
* https://github.com/readium/r2-lcp-js/compare/v1.0.29...v1.0.30

# 1.0.29

> Build environment: NodeJS `12.18.2`, NPM `6.14.5`

Changes:
* NPM package updates
* TypeScript const enum safeguard (isolated modules)

Git revision info:
* https://unpkg.com/r2-lcp-js@1.0.29/dist/gitrev.json
* https://github.com/edrlab/r2-lcp-js-dist/blob/v1.0.29/dist/gitrev.json

Git commit history:
* https://github.com/readium/r2-lcp-js/commits/v1.0.29

Git diff:
* https://github.com/readium/r2-lcp-js/compare/v1.0.28...v1.0.29

# 1.0.28

> Build environment: NodeJS `12.18.1`, NPM `6.14.5`

Changes:
* NPM package updates

Git revision info:
* https://unpkg.com/r2-lcp-js@1.0.28/dist/gitrev.json
* https://github.com/edrlab/r2-lcp-js-dist/blob/v1.0.28/dist/gitrev.json

Git commit history:
* https://github.com/readium/r2-lcp-js/commits/v1.0.28

Git diff:
* https://github.com/readium/r2-lcp-js/compare/v1.0.27...v1.0.28

# 1.0.27

> Build environment: NodeJS `12.16.3`, NPM `6.14.5`

Changes:
* NPM package updates

Git revision info:
* https://unpkg.com/r2-lcp-js@1.0.27/dist/gitrev.json
* https://github.com/edrlab/r2-lcp-js-dist/blob/v1.0.27/dist/gitrev.json

Git commit history:
* https://github.com/readium/r2-lcp-js/commits/v1.0.27

Git diff:
* https://github.com/readium/r2-lcp-js/compare/v1.0.26...v1.0.27

# 1.0.26

> Build environment: NodeJS `12.16.1`, NPM `6.14.4`

Changes:
* NPM package updates
* Fixed CSON-2-JSON script
* LCP transformer support() predicate fallback to simply the Algorithm field of link.Properties.Encryption (discriminator with IDPF and Adobe obfuscation)
* Download of encrypted publication from LCP license, and subsequent injection of META-INF/license.lcpl (for EPUBs) now works for audiobooks too

Git revision info:
* https://unpkg.com/r2-lcp-js@1.0.26/dist/gitrev.json
* https://github.com/edrlab/r2-lcp-js-dist/blob/v1.0.26/dist/gitrev.json

Git commit history:
* https://github.com/readium/r2-lcp-js/commits/v1.0.26

Git diff:
* https://github.com/readium/r2-lcp-js/compare/v1.0.25...v1.0.26

# 1.0.25

> Build environment: NodeJS `12.16.1`, NPM `6.14.4`

Changes:
* NPM package updates

Git revision info:
* https://unpkg.com/r2-lcp-js@1.0.25/dist/gitrev.json
* https://github.com/edrlab/r2-lcp-js-dist/blob/v1.0.25/dist/gitrev.json

Git commit history:
* https://github.com/readium/r2-lcp-js/commits/v1.0.25

Git diff:
* https://github.com/readium/r2-lcp-js/compare/v1.0.24...v1.0.25

# 1.0.24

> Build environment: NodeJS `12.15.0`, NPM `6.13.7`

Changes:
* NPM package updates
* JSON property naming: original-length vs. originalLength (backwards-compatible support for the legacy name)

Git revision info:
* https://unpkg.com/r2-lcp-js@1.0.24/dist/gitrev.json
* https://github.com/edrlab/r2-lcp-js-dist/blob/v1.0.24/dist/gitrev.json

Git commit history:
* https://github.com/readium/r2-lcp-js/commits/v1.0.24

Git diff:
* https://github.com/readium/r2-lcp-js/compare/v1.0.23...v1.0.24

# 1.0.23

> Build environment: NodeJS `12.13.0`, NPM `6.13.0`

Changes:
* Dummy create context function to test certificate revoke etc. before actually trying passphrases

Git revision info:
* https://unpkg.com/r2-lcp-js@1.0.23/dist/gitrev.json
* https://github.com/edrlab/r2-lcp-js-dist/blob/v1.0.23/dist/gitrev.json

Git commit history:
* https://github.com/readium/r2-lcp-js/commits/v1.0.23

Git diff:
* https://github.com/readium/r2-lcp-js/compare/v1.0.22...v1.0.23

# 1.0.22

> Build environment: NodeJS `12.13.0`, NPM `6.13.0`

Changes:
* Hotfix for previous release: function argument was missing to propagate optional LCP/LSD HTTP headers overrides

Git revision info:
* https://unpkg.com/r2-lcp-js@1.0.22/dist/gitrev.json
* https://github.com/edrlab/r2-lcp-js-dist/blob/v1.0.22/dist/gitrev.json

Git commit history:
* https://github.com/readium/r2-lcp-js/commits/v1.0.22

Git diff:
* https://github.com/readium/r2-lcp-js/compare/v1.0.21...v1.0.22

# 1.0.21

> Build environment: NodeJS `12.13.0`, NPM `6.13.0`

Changes:
* Hotfix for previous release: function argument was missing to propagate optional LCP/LSD HTTP headers overrides

Git revision info:
* https://unpkg.com/r2-lcp-js@1.0.21/dist/gitrev.json
* https://github.com/edrlab/r2-lcp-js-dist/blob/v1.0.21/dist/gitrev.json

Git commit history:
* https://github.com/readium/r2-lcp-js/commits/v1.0.21

Git diff:
* https://github.com/readium/r2-lcp-js/compare/v1.0.20...v1.0.21

# 1.0.20

> Build environment: NodeJS `12.13.0`, NPM `6.13.0`

Changes:
* Optional LCP/LSD HTTP headers overrides

Git revision info:
* https://unpkg.com/r2-lcp-js@1.0.20/dist/gitrev.json
* https://github.com/edrlab/r2-lcp-js-dist/blob/v1.0.20/dist/gitrev.json

Git commit history:
* https://github.com/readium/r2-lcp-js/commits/v1.0.20

Git diff:
* https://github.com/readium/r2-lcp-js/compare/v1.0.19...v1.0.20

# 1.0.19

> Build environment: NodeJS `12.13.0`, NPM `6.13.0`

Changes:
* NPM package updates
* TAJSON now parses/generates arbitrary JSON properties with typed object

Git revision info:
* https://unpkg.com/r2-lcp-js@1.0.19/dist/gitrev.json
* https://github.com/edrlab/r2-lcp-js-dist/blob/v1.0.19/dist/gitrev.json

Git commit history:
* https://github.com/readium/r2-lcp-js/commits/v1.0.19

Git diff:
* https://github.com/readium/r2-lcp-js/compare/v1.0.18...v1.0.19

# 1.0.18

> Build environment: NodeJS `12.13.0`, NPM `6.13.0`

Changes:
* NPM package updates
* Fixed LSD renew date in URI (ISO syntax)

Git revision info:
* https://unpkg.com/r2-lcp-js@1.0.18/dist/gitrev.json
* https://github.com/edrlab/r2-lcp-js-dist/blob/v1.0.18/dist/gitrev.json

Git commit history:
* https://github.com/readium/r2-lcp-js/commits/v1.0.18

Git diff:
* https://github.com/readium/r2-lcp-js/compare/v1.0.17...v1.0.18

# 1.0.17

> Build environment: NodeJS `12.13.0`, NPM `6.12.1`

Changes:
* Fixed JSON vs. TypeScript object LSD register response error

Git revision info:
* https://unpkg.com/r2-lcp-js@1.0.17/dist/gitrev.json
* https://github.com/edrlab/r2-lcp-js-dist/blob/v1.0.17/dist/gitrev.json

Git commit history:
* https://github.com/readium/r2-lcp-js/commits/v1.0.17

Git diff:
* https://github.com/readium/r2-lcp-js/compare/v1.0.16...v1.0.17

# 1.0.16

> Build environment: NodeJS `12.13.0`, NPM `6.12.0`

Changes:
* NPM updates

Git revision info:
* https://unpkg.com/r2-lcp-js@1.0.16/dist/gitrev.json
* https://github.com/edrlab/r2-lcp-js-dist/blob/v1.0.16/dist/gitrev.json

Git commit history:
* https://github.com/readium/r2-lcp-js/commits/v1.0.16

Git diff:
* https://github.com/readium/r2-lcp-js/compare/v1.0.15...v1.0.16

# 1.0.15

> Build environment: NodeJS `10.16.3`, NPM `6.12.0`

Changes:
* HTTP request header Accept otherwise some LCP/LSD servers fail (status code 406)
* NPM updates (including NodeJS v12 for Electron v6)

Git revision info:
* https://unpkg.com/r2-lcp-js@1.0.15/dist/gitrev.json
* https://github.com/edrlab/r2-lcp-js-dist/blob/v1.0.15/dist/gitrev.json

Git commit history:
* https://github.com/readium/r2-lcp-js/commits/v1.0.15

Git diff:
* https://github.com/readium/r2-lcp-js/compare/v1.0.14...v1.0.15

# 1.0.14

> Build environment: NodeJS `10.16.3`, NPM `6.11.3`

Changes:
* NPM updates

Git revision info:
* https://unpkg.com/r2-lcp-js@1.0.14/dist/gitrev.json
* https://github.com/edrlab/r2-lcp-js-dist/blob/v1.0.14/dist/gitrev.json

Git commit history:
* https://github.com/readium/r2-lcp-js/commits/v1.0.14

Git diff:
* https://github.com/readium/r2-lcp-js/compare/v1.0.13...v1.0.14

# 1.0.13

> Build environment: NodeJS `10.16.3`, NPM `6.11.3`

Changes:
* NPM updates
* TypeScript sort imports

Git revision info:
* https://unpkg.com/r2-lcp-js@1.0.13/dist/gitrev.json
* https://github.com/edrlab/r2-lcp-js-dist/blob/v1.0.13/dist/gitrev.json

Git commit history:
* https://github.com/readium/r2-lcp-js/commits/v1.0.13

Git diff:
* https://github.com/readium/r2-lcp-js/compare/v1.0.12...v1.0.13

# 1.0.12

> Build environment: NodeJS `10.16.3`, NPM `6.11.3`

Changes:
* NPM updates

Git revision info:
* https://unpkg.com/r2-lcp-js@1.0.12/dist/gitrev.json
* https://github.com/edrlab/r2-lcp-js-dist/blob/v1.0.12/dist/gitrev.json

Git commit history:
* https://github.com/readium/r2-lcp-js/commits/v1.0.12

Git diff:
* https://github.com/readium/r2-lcp-js/compare/v1.0.11...v1.0.12

# 1.0.11

> Build environment: NodeJS `10.16.0`, NPM `6.10.2`

Changes:
* NPM updates
* Buffer.from() API to remove deprecation messages
* Workaround for rare (impossible?) edge-case: resource is compressed/deflated before it is encrypted, but the "original length" metadata is not provided in encryption.xml (only the "compression" metadata == 8)

Git revision info:
* https://unpkg.com/r2-lcp-js@1.0.11/dist/gitrev.json
* https://github.com/edrlab/r2-lcp-js-dist/blob/v1.0.11/dist/gitrev.json

Git commit history:
* https://github.com/readium/r2-lcp-js/commits/v1.0.11

Git diff:
* https://github.com/readium/r2-lcp-js/compare/v1.0.10...v1.0.11

# 1.0.10

> Build environment: NodeJS `10.16.0`, NPM `6.9.0`

Changes:
* NPM updates

Git revision info:
* https://unpkg.com/r2-lcp-js@1.0.10/dist/gitrev.json
* https://github.com/edrlab/r2-lcp-js-dist/blob/v1.0.10/dist/gitrev.json

Git commit history:
* https://github.com/readium/r2-lcp-js/commits/v1.0.10

Git diff:
* https://github.com/readium/r2-lcp-js/compare/v1.0.9...v1.0.10

# 1.0.9

> Build environment: NodeJS `10.15.3`, NPM `6.9.0`

Changes:
* NPM updates

Git revision info:
* https://unpkg.com/r2-lcp-js@1.0.9/dist/gitrev.json
* https://github.com/edrlab/r2-lcp-js-dist/blob/v1.0.9/dist/gitrev.json

Git commit history:
* https://github.com/readium/r2-lcp-js/commits/v1.0.9

Git diff:
* https://github.com/readium/r2-lcp-js/compare/v1.0.8...v1.0.9

# 1.0.8

> Build environment: NodeJS `8.15.1`, NPM `6.4.1`

Changes:
* NPM updates
* Introduced LSD TypeScript model (JSON de/serializable)
* Workaround for LCP license server that responds HTTP 200 code for error JSON payload
* JSON Schema references for LCP and LSD models

Git revision info:
* https://unpkg.com/r2-lcp-js@1.0.8/dist/gitrev.json
* https://github.com/edrlab/r2-lcp-js-dist/blob/v1.0.8/dist/gitrev.json

Git commit history:
* https://github.com/readium/r2-lcp-js/commits/v1.0.8

Git diff:
* https://github.com/readium/r2-lcp-js/compare/v1.0.7...v1.0.8

# 1.0.7

> Build environment: NodeJS `8.15.1`, NPM `6.4.1`

Changes:
* NPM updates

Git revision info:
* https://unpkg.com/r2-lcp-js@1.0.7/dist/gitrev.json
* https://github.com/edrlab/r2-lcp-js-dist/blob/v1.0.7/dist/gitrev.json

Git commit history:
* https://github.com/readium/r2-lcp-js/commits/v1.0.7

Git diff:
* https://github.com/readium/r2-lcp-js/compare/v1.0.6...v1.0.7

# 1.0.6

> Build environment: NodeJS `8.14.1`, NPM `6.4.1`

Changes:
* NPM updates
* Code comment references to latest JSON Schema
* LCP / LSD debug console messages harmonized
* LCP / LSD promise.reject (async/await try/catch) errors now HTTP status code (number type), or object payload with ProblemJSON, returned by server, or just plain string if cannot parse response body.

Git revision info:
* https://unpkg.com/r2-lcp-js@1.0.6/dist/gitrev.json
* https://github.com/edrlab/r2-lcp-js-dist/blob/v1.0.6/dist/gitrev.json

Git commit history:
* https://github.com/readium/r2-lcp-js/commits/v1.0.6

Git diff:
* https://github.com/readium/r2-lcp-js/compare/v1.0.5...v1.0.6

# 1.0.5

> Build environment: NodeJS `8.14.1`, NPM `6.4.1`

Changes:
* NPM updates
* Minor code comment additions regarding Certificate Revocation List (CRL)

Git revision info:
* https://unpkg.com/r2-lcp-js@1.0.5/dist/gitrev.json
* https://github.com/edrlab/r2-lcp-js-dist/blob/v1.0.5/dist/gitrev.json

Git commit history:
* https://github.com/readium/r2-lcp-js/commits/v1.0.5

Git diff:
* https://github.com/readium/r2-lcp-js/compare/v1.0.4...v1.0.5

# 1.0.4

> Build environment: NodeJS `8.14.1`, NPM `6.4.1`

Changes:
* Updated documentation (minor)
* Fixed a NodeJS v8+ regression bug: readable-stream end event was not raised (which is why LCP decryption with basic-test profile was broken at Heroku and Now.sh streamer deployments)
* NPM 6.5.* has regression bugs for global package installs, so revert back to NPM 6.4.1 (which is officially shipped with the NodeJS installer).

Git revision info:
* https://unpkg.com/r2-lcp-js@1.0.4/dist/gitrev.json
* https://github.com/edrlab/r2-lcp-js-dist/blob/v1.0.4/dist/gitrev.json

Git commit history:
* https://github.com/readium/r2-lcp-js/commits/v1.0.4

Git diff:
* https://github.com/readium/r2-lcp-js/compare/v1.0.3...v1.0.4

# 1.0.3

> Build environment: NodeJS `8.14.0`, NPM `6.5.0`

Changes:
* NPM updates
* Added support for CRL Certificate Revocation List (not via certificate-embedded Distribution Points, instead using hard-coded URL for LCP ecosystem)
* Added HTTP error details (console logging)

Git revision info:
* https://unpkg.com/r2-lcp-js@1.0.3/dist/gitrev.json
* https://github.com/edrlab/r2-lcp-js-dist/blob/v1.0.3/dist/gitrev.json

Git commit history:
* https://github.com/readium/r2-lcp-js/commits/v1.0.3

Git diff:
* https://github.com/readium/r2-lcp-js/compare/v1.0.2...v1.0.3

# 1.0.2

> Build environment: NodeJS `8.14.0`, NPM `6.5.0`

Changes:
* NPM updates (r2-xxx-js)

Git revision info:
* https://unpkg.com/r2-lcp-js@1.0.2/dist/gitrev.json
* https://github.com/edrlab/r2-lcp-js-dist/blob/v1.0.2/dist/gitrev.json

Git commit history:
* https://github.com/readium/r2-lcp-js/commits/v1.0.2

Git diff:
* https://github.com/readium/r2-lcp-js/compare/v1.0.1...v1.0.2

# 1.0.1

> Build environment: NodeJS `8.14.0`, NPM `6.5.0`

Changes:
* NPM updates (minor)
* Replaced deprecated RawGit URLs
* Removed unnecessary TypeScript import path aliases

Git revision info:
* https://unpkg.com/r2-lcp-js@1.0.1/dist/gitrev.json
* https://github.com/edrlab/r2-lcp-js-dist/blob/v1.0.1/dist/gitrev.json

Git commit history:
* https://github.com/readium/r2-lcp-js/commits/v1.0.1

Git diff:
* https://github.com/readium/r2-lcp-js/compare/v1.0.0...v1.0.1

# 1.0.0

> Build environment: NodeJS `8.14.0`, NPM `6.5.0`

Changes:
* NPM updates (minor)
* README info
* VisualStudio code tweaks (developer workflow)
* Semantic versioning bump 1.*.* (3-digit style now, "-alphaX" suffix caused issues with NPM tooling: updates, lockfile, etc.)

Git revision info:
* https://unpkg.com/r2-lcp-js@1.0.0/dist/gitrev.json
* https://github.com/edrlab/r2-lcp-js-dist/blob/v1.0.0/dist/gitrev.json

Git commit history:
* https://github.com/readium/r2-lcp-js/commits/v1.0.0

Git diff:
* https://github.com/readium/r2-lcp-js/compare/v1.0.0-alpha.7...v1.0.0

# 1.0.0-alpha.7

> Build environment: NodeJS `8.12.0`, NPM `6.4.1`

Changes:
* NPM updates (minor)
* Git revision JSON info now includes NodeJS and NPM version (build environment)

Git revision info:
* https://unpkg.com/r2-lcp-js@1.0.0-alpha.7/dist/gitrev.json
* https://github.com/edrlab/r2-lcp-js-dist/blob/v1.0.0-alpha.7/dist/gitrev.json

Git commit history:
* https://github.com/readium/r2-lcp-js/commits/v1.0.0-alpha.7

Git diff:
* https://github.com/readium/r2-lcp-js/compare/v1.0.0-alpha.6...v1.0.0-alpha.7

# 1.0.0-alpha.6

Changes:
* Dependency "ta-json" GitHub semver dependency becomes "ta-json-x" NPM package (fixes https://github.com/readium/r2-testapp-js/issues/10 )

Git revision info:
* https://unpkg.com/r2-lcp-js@1.0.0-alpha.6/dist/gitrev.json
* https://github.com/edrlab/r2-lcp-js-dist/blob/v1.0.0-alpha.6/dist/gitrev.json

Git commit history:
* https://github.com/readium/r2-lcp-js/commits/v1.0.0-alpha.6

Git diff:
* https://github.com/readium/r2-lcp-js/compare/v1.0.0-alpha.5...v1.0.0-alpha.6

# 1.0.0-alpha.5

Changes:
* Removed TypeScript linter warning message (checks for no unused variables)
* NPM updates related to the Node TypeScript typings
* Dependency "ta-json" updates, and NPM integration GitHub semver reference
* NPM r2-utils-js dep update
* Fixed TypeScript regression bug (3.0.3 -> 3.1.1) related to LCP typings

Git revision info:
* https://unpkg.com/r2-lcp-js@1.0.0-alpha.5/dist/gitrev.json
* https://github.com/edrlab/r2-lcp-js-dist/blob/v1.0.0-alpha.5/dist/gitrev.json

Git commit history:
* https://github.com/readium/r2-lcp-js/commits/v1.0.0-alpha.5

Git diff:
* https://github.com/readium/r2-lcp-js/compare/v1.0.0-alpha.4...v1.0.0-alpha.5

# 1.0.0-alpha.4

Changes:
* NPM updates (external dependencies)

Git revision info:
* https://unpkg.com/r2-lcp-js@1.0.0-alpha.4/dist/gitrev.json
* https://github.com/edrlab/r2-lcp-js-dist/blob/v1.0.0-alpha.4/dist/gitrev.json

Git commit history:
* https://github.com/readium/r2-lcp-js/commits/v1.0.0-alpha.4

Git diff:
* https://github.com/readium/r2-lcp-js/compare/v1.0.0-alpha.3...v1.0.0-alpha.4

# 1.0.0-alpha.3

Changes:
* correct version in `package-lock.json`

Git revision info:
* https://unpkg.com/r2-lcp-js@1.0.0-alpha.3/dist/gitrev.json
* https://github.com/edrlab/r2-lcp-js-dist/blob/v1.0.0-alpha.3/dist/gitrev.json

Git commit history:
* https://github.com/readium/r2-lcp-js/commits/v1.0.0-alpha.3

Git diff:
* https://github.com/readium/r2-lcp-js/compare/v1.0.0-alpha.2...v1.0.0-alpha.3

# 1.0.0-alpha.2

Changes (NPM updates):
* `@types/node`
* `r2-utils-js`

Git revision info:
* https://unpkg.com/r2-lcp-js@1.0.0-alpha.2/dist/gitrev.json
* https://github.com/edrlab/r2-lcp-js-dist/blob/v1.0.0-alpha.2/dist/gitrev.json

Git commit history:
* https://github.com/readium/r2-lcp-js/commits/v1.0.0-alpha.2

Git diff:
* https://github.com/readium/r2-lcp-js/compare/v1.0.0-alpha.1...v1.0.0-alpha.2

# 1.0.0-alpha.1

Changes:
* initial NPM publish

Git revision info:
* https://unpkg.com/r2-lcp-js@1.0.0-alpha.1/dist/gitrev.json
* https://github.com/edrlab/r2-lcp-js-dist/blob/v1.0.0-alpha.1/dist/gitrev.json

Git commit history:
* https://github.com/readium/r2-lcp-js/commits/v1.0.0-alpha.1

Git diff:
* initial NPM publish
