# Next

Git diff:
* https://github.com/readium/r2-lcp-js/compare/v1.0.14...develop

Changes:
* TODO

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
