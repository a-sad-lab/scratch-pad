# tsconfig compilerOptions(编译选项)

> http://json.schemastore.org/tsconfig JSON schema for the TypeScript compiler's configuration file


## strict

控制以下各个选项：noImplicitAny, noImplicitThis, alwaysStrict, strictBindCallApply, strictNullChecks, strictFunctionTypes, strictPropertyInitialization


## strictPropertyInitialization

在 strictNullChecks 为 true 时才能起效


## importHelpers

this can avoid duplicate declarations of things like __extends, __assign, etc., this means delivering users smaller files on average, as well as less runtime overhead. For optimized bundles with TypeScript, you should absolutely consider using tslib and --importHelpers.


## experimentalDecorators

Enables experimental support for ES decorators.


## composite

Enables building for project references


## declaration

Generates corresponding .d.ts file


## noEmitOnError

Do not emit outputs if any errors were reported.


## build

??? Builds this project and all of its dependencies specified by Project References.
