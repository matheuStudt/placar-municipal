
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Campeonato
 * 
 */
export type Campeonato = $Result.DefaultSelection<Prisma.$CampeonatoPayload>
/**
 * Model Equipe
 * 
 */
export type Equipe = $Result.DefaultSelection<Prisma.$EquipePayload>
/**
 * Model Atleta
 * 
 */
export type Atleta = $Result.DefaultSelection<Prisma.$AtletaPayload>
/**
 * Model Participacao
 * 
 */
export type Participacao = $Result.DefaultSelection<Prisma.$ParticipacaoPayload>
/**
 * Model Vinculo
 * 
 */
export type Vinculo = $Result.DefaultSelection<Prisma.$VinculoPayload>
/**
 * Model Jogo
 * 
 */
export type Jogo = $Result.DefaultSelection<Prisma.$JogoPayload>
/**
 * Model Evento
 * 
 */
export type Evento = $Result.DefaultSelection<Prisma.$EventoPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Campeonatoes
 * const campeonatoes = await prisma.campeonato.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Campeonatoes
   * const campeonatoes = await prisma.campeonato.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.campeonato`: Exposes CRUD operations for the **Campeonato** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Campeonatoes
    * const campeonatoes = await prisma.campeonato.findMany()
    * ```
    */
  get campeonato(): Prisma.CampeonatoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.equipe`: Exposes CRUD operations for the **Equipe** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Equipes
    * const equipes = await prisma.equipe.findMany()
    * ```
    */
  get equipe(): Prisma.EquipeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.atleta`: Exposes CRUD operations for the **Atleta** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Atletas
    * const atletas = await prisma.atleta.findMany()
    * ```
    */
  get atleta(): Prisma.AtletaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.participacao`: Exposes CRUD operations for the **Participacao** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Participacaos
    * const participacaos = await prisma.participacao.findMany()
    * ```
    */
  get participacao(): Prisma.ParticipacaoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.vinculo`: Exposes CRUD operations for the **Vinculo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Vinculos
    * const vinculos = await prisma.vinculo.findMany()
    * ```
    */
  get vinculo(): Prisma.VinculoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.jogo`: Exposes CRUD operations for the **Jogo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Jogos
    * const jogos = await prisma.jogo.findMany()
    * ```
    */
  get jogo(): Prisma.JogoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.evento`: Exposes CRUD operations for the **Evento** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Eventos
    * const eventos = await prisma.evento.findMany()
    * ```
    */
  get evento(): Prisma.EventoDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.5.0
   * Query Engine version: 280c870be64f457428992c43c1f6d557fab6e29e
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Campeonato: 'Campeonato',
    Equipe: 'Equipe',
    Atleta: 'Atleta',
    Participacao: 'Participacao',
    Vinculo: 'Vinculo',
    Jogo: 'Jogo',
    Evento: 'Evento'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "campeonato" | "equipe" | "atleta" | "participacao" | "vinculo" | "jogo" | "evento"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Campeonato: {
        payload: Prisma.$CampeonatoPayload<ExtArgs>
        fields: Prisma.CampeonatoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CampeonatoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampeonatoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CampeonatoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampeonatoPayload>
          }
          findFirst: {
            args: Prisma.CampeonatoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampeonatoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CampeonatoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampeonatoPayload>
          }
          findMany: {
            args: Prisma.CampeonatoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampeonatoPayload>[]
          }
          create: {
            args: Prisma.CampeonatoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampeonatoPayload>
          }
          createMany: {
            args: Prisma.CampeonatoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CampeonatoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampeonatoPayload>[]
          }
          delete: {
            args: Prisma.CampeonatoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampeonatoPayload>
          }
          update: {
            args: Prisma.CampeonatoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampeonatoPayload>
          }
          deleteMany: {
            args: Prisma.CampeonatoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CampeonatoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CampeonatoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampeonatoPayload>[]
          }
          upsert: {
            args: Prisma.CampeonatoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampeonatoPayload>
          }
          aggregate: {
            args: Prisma.CampeonatoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCampeonato>
          }
          groupBy: {
            args: Prisma.CampeonatoGroupByArgs<ExtArgs>
            result: $Utils.Optional<CampeonatoGroupByOutputType>[]
          }
          count: {
            args: Prisma.CampeonatoCountArgs<ExtArgs>
            result: $Utils.Optional<CampeonatoCountAggregateOutputType> | number
          }
        }
      }
      Equipe: {
        payload: Prisma.$EquipePayload<ExtArgs>
        fields: Prisma.EquipeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EquipeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EquipeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipePayload>
          }
          findFirst: {
            args: Prisma.EquipeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EquipeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipePayload>
          }
          findMany: {
            args: Prisma.EquipeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipePayload>[]
          }
          create: {
            args: Prisma.EquipeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipePayload>
          }
          createMany: {
            args: Prisma.EquipeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EquipeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipePayload>[]
          }
          delete: {
            args: Prisma.EquipeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipePayload>
          }
          update: {
            args: Prisma.EquipeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipePayload>
          }
          deleteMany: {
            args: Prisma.EquipeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EquipeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EquipeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipePayload>[]
          }
          upsert: {
            args: Prisma.EquipeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipePayload>
          }
          aggregate: {
            args: Prisma.EquipeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEquipe>
          }
          groupBy: {
            args: Prisma.EquipeGroupByArgs<ExtArgs>
            result: $Utils.Optional<EquipeGroupByOutputType>[]
          }
          count: {
            args: Prisma.EquipeCountArgs<ExtArgs>
            result: $Utils.Optional<EquipeCountAggregateOutputType> | number
          }
        }
      }
      Atleta: {
        payload: Prisma.$AtletaPayload<ExtArgs>
        fields: Prisma.AtletaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AtletaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtletaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AtletaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtletaPayload>
          }
          findFirst: {
            args: Prisma.AtletaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtletaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AtletaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtletaPayload>
          }
          findMany: {
            args: Prisma.AtletaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtletaPayload>[]
          }
          create: {
            args: Prisma.AtletaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtletaPayload>
          }
          createMany: {
            args: Prisma.AtletaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AtletaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtletaPayload>[]
          }
          delete: {
            args: Prisma.AtletaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtletaPayload>
          }
          update: {
            args: Prisma.AtletaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtletaPayload>
          }
          deleteMany: {
            args: Prisma.AtletaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AtletaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AtletaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtletaPayload>[]
          }
          upsert: {
            args: Prisma.AtletaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtletaPayload>
          }
          aggregate: {
            args: Prisma.AtletaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAtleta>
          }
          groupBy: {
            args: Prisma.AtletaGroupByArgs<ExtArgs>
            result: $Utils.Optional<AtletaGroupByOutputType>[]
          }
          count: {
            args: Prisma.AtletaCountArgs<ExtArgs>
            result: $Utils.Optional<AtletaCountAggregateOutputType> | number
          }
        }
      }
      Participacao: {
        payload: Prisma.$ParticipacaoPayload<ExtArgs>
        fields: Prisma.ParticipacaoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ParticipacaoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipacaoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ParticipacaoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipacaoPayload>
          }
          findFirst: {
            args: Prisma.ParticipacaoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipacaoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ParticipacaoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipacaoPayload>
          }
          findMany: {
            args: Prisma.ParticipacaoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipacaoPayload>[]
          }
          create: {
            args: Prisma.ParticipacaoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipacaoPayload>
          }
          createMany: {
            args: Prisma.ParticipacaoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ParticipacaoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipacaoPayload>[]
          }
          delete: {
            args: Prisma.ParticipacaoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipacaoPayload>
          }
          update: {
            args: Prisma.ParticipacaoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipacaoPayload>
          }
          deleteMany: {
            args: Prisma.ParticipacaoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ParticipacaoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ParticipacaoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipacaoPayload>[]
          }
          upsert: {
            args: Prisma.ParticipacaoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipacaoPayload>
          }
          aggregate: {
            args: Prisma.ParticipacaoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateParticipacao>
          }
          groupBy: {
            args: Prisma.ParticipacaoGroupByArgs<ExtArgs>
            result: $Utils.Optional<ParticipacaoGroupByOutputType>[]
          }
          count: {
            args: Prisma.ParticipacaoCountArgs<ExtArgs>
            result: $Utils.Optional<ParticipacaoCountAggregateOutputType> | number
          }
        }
      }
      Vinculo: {
        payload: Prisma.$VinculoPayload<ExtArgs>
        fields: Prisma.VinculoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VinculoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VinculoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VinculoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VinculoPayload>
          }
          findFirst: {
            args: Prisma.VinculoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VinculoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VinculoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VinculoPayload>
          }
          findMany: {
            args: Prisma.VinculoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VinculoPayload>[]
          }
          create: {
            args: Prisma.VinculoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VinculoPayload>
          }
          createMany: {
            args: Prisma.VinculoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VinculoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VinculoPayload>[]
          }
          delete: {
            args: Prisma.VinculoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VinculoPayload>
          }
          update: {
            args: Prisma.VinculoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VinculoPayload>
          }
          deleteMany: {
            args: Prisma.VinculoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VinculoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VinculoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VinculoPayload>[]
          }
          upsert: {
            args: Prisma.VinculoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VinculoPayload>
          }
          aggregate: {
            args: Prisma.VinculoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVinculo>
          }
          groupBy: {
            args: Prisma.VinculoGroupByArgs<ExtArgs>
            result: $Utils.Optional<VinculoGroupByOutputType>[]
          }
          count: {
            args: Prisma.VinculoCountArgs<ExtArgs>
            result: $Utils.Optional<VinculoCountAggregateOutputType> | number
          }
        }
      }
      Jogo: {
        payload: Prisma.$JogoPayload<ExtArgs>
        fields: Prisma.JogoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.JogoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JogoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.JogoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JogoPayload>
          }
          findFirst: {
            args: Prisma.JogoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JogoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.JogoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JogoPayload>
          }
          findMany: {
            args: Prisma.JogoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JogoPayload>[]
          }
          create: {
            args: Prisma.JogoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JogoPayload>
          }
          createMany: {
            args: Prisma.JogoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.JogoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JogoPayload>[]
          }
          delete: {
            args: Prisma.JogoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JogoPayload>
          }
          update: {
            args: Prisma.JogoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JogoPayload>
          }
          deleteMany: {
            args: Prisma.JogoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.JogoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.JogoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JogoPayload>[]
          }
          upsert: {
            args: Prisma.JogoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JogoPayload>
          }
          aggregate: {
            args: Prisma.JogoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateJogo>
          }
          groupBy: {
            args: Prisma.JogoGroupByArgs<ExtArgs>
            result: $Utils.Optional<JogoGroupByOutputType>[]
          }
          count: {
            args: Prisma.JogoCountArgs<ExtArgs>
            result: $Utils.Optional<JogoCountAggregateOutputType> | number
          }
        }
      }
      Evento: {
        payload: Prisma.$EventoPayload<ExtArgs>
        fields: Prisma.EventoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EventoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EventoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventoPayload>
          }
          findFirst: {
            args: Prisma.EventoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EventoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventoPayload>
          }
          findMany: {
            args: Prisma.EventoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventoPayload>[]
          }
          create: {
            args: Prisma.EventoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventoPayload>
          }
          createMany: {
            args: Prisma.EventoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EventoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventoPayload>[]
          }
          delete: {
            args: Prisma.EventoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventoPayload>
          }
          update: {
            args: Prisma.EventoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventoPayload>
          }
          deleteMany: {
            args: Prisma.EventoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EventoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EventoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventoPayload>[]
          }
          upsert: {
            args: Prisma.EventoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventoPayload>
          }
          aggregate: {
            args: Prisma.EventoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEvento>
          }
          groupBy: {
            args: Prisma.EventoGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventoGroupByOutputType>[]
          }
          count: {
            args: Prisma.EventoCountArgs<ExtArgs>
            result: $Utils.Optional<EventoCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    campeonato?: CampeonatoOmit
    equipe?: EquipeOmit
    atleta?: AtletaOmit
    participacao?: ParticipacaoOmit
    vinculo?: VinculoOmit
    jogo?: JogoOmit
    evento?: EventoOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type CampeonatoCountOutputType
   */

  export type CampeonatoCountOutputType = {
    participacoes: number
    jogos: number
  }

  export type CampeonatoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    participacoes?: boolean | CampeonatoCountOutputTypeCountParticipacoesArgs
    jogos?: boolean | CampeonatoCountOutputTypeCountJogosArgs
  }

  // Custom InputTypes
  /**
   * CampeonatoCountOutputType without action
   */
  export type CampeonatoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampeonatoCountOutputType
     */
    select?: CampeonatoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CampeonatoCountOutputType without action
   */
  export type CampeonatoCountOutputTypeCountParticipacoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParticipacaoWhereInput
  }

  /**
   * CampeonatoCountOutputType without action
   */
  export type CampeonatoCountOutputTypeCountJogosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JogoWhereInput
  }


  /**
   * Count Type EquipeCountOutputType
   */

  export type EquipeCountOutputType = {
    participacoes: number
    vinculos: number
    jogosMandante: number
    jogosVisitante: number
  }

  export type EquipeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    participacoes?: boolean | EquipeCountOutputTypeCountParticipacoesArgs
    vinculos?: boolean | EquipeCountOutputTypeCountVinculosArgs
    jogosMandante?: boolean | EquipeCountOutputTypeCountJogosMandanteArgs
    jogosVisitante?: boolean | EquipeCountOutputTypeCountJogosVisitanteArgs
  }

  // Custom InputTypes
  /**
   * EquipeCountOutputType without action
   */
  export type EquipeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipeCountOutputType
     */
    select?: EquipeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EquipeCountOutputType without action
   */
  export type EquipeCountOutputTypeCountParticipacoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParticipacaoWhereInput
  }

  /**
   * EquipeCountOutputType without action
   */
  export type EquipeCountOutputTypeCountVinculosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VinculoWhereInput
  }

  /**
   * EquipeCountOutputType without action
   */
  export type EquipeCountOutputTypeCountJogosMandanteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JogoWhereInput
  }

  /**
   * EquipeCountOutputType without action
   */
  export type EquipeCountOutputTypeCountJogosVisitanteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JogoWhereInput
  }


  /**
   * Count Type AtletaCountOutputType
   */

  export type AtletaCountOutputType = {
    vinculos: number
    eventos: number
  }

  export type AtletaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vinculos?: boolean | AtletaCountOutputTypeCountVinculosArgs
    eventos?: boolean | AtletaCountOutputTypeCountEventosArgs
  }

  // Custom InputTypes
  /**
   * AtletaCountOutputType without action
   */
  export type AtletaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AtletaCountOutputType
     */
    select?: AtletaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AtletaCountOutputType without action
   */
  export type AtletaCountOutputTypeCountVinculosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VinculoWhereInput
  }

  /**
   * AtletaCountOutputType without action
   */
  export type AtletaCountOutputTypeCountEventosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventoWhereInput
  }


  /**
   * Count Type JogoCountOutputType
   */

  export type JogoCountOutputType = {
    eventos: number
  }

  export type JogoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    eventos?: boolean | JogoCountOutputTypeCountEventosArgs
  }

  // Custom InputTypes
  /**
   * JogoCountOutputType without action
   */
  export type JogoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JogoCountOutputType
     */
    select?: JogoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * JogoCountOutputType without action
   */
  export type JogoCountOutputTypeCountEventosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventoWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Campeonato
   */

  export type AggregateCampeonato = {
    _count: CampeonatoCountAggregateOutputType | null
    _avg: CampeonatoAvgAggregateOutputType | null
    _sum: CampeonatoSumAggregateOutputType | null
    _min: CampeonatoMinAggregateOutputType | null
    _max: CampeonatoMaxAggregateOutputType | null
  }

  export type CampeonatoAvgAggregateOutputType = {
    id: number | null
    ano: number | null
  }

  export type CampeonatoSumAggregateOutputType = {
    id: number | null
    ano: number | null
  }

  export type CampeonatoMinAggregateOutputType = {
    id: number | null
    nome: string | null
    ano: number | null
    formato: string | null
  }

  export type CampeonatoMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    ano: number | null
    formato: string | null
  }

  export type CampeonatoCountAggregateOutputType = {
    id: number
    nome: number
    ano: number
    formato: number
    _all: number
  }


  export type CampeonatoAvgAggregateInputType = {
    id?: true
    ano?: true
  }

  export type CampeonatoSumAggregateInputType = {
    id?: true
    ano?: true
  }

  export type CampeonatoMinAggregateInputType = {
    id?: true
    nome?: true
    ano?: true
    formato?: true
  }

  export type CampeonatoMaxAggregateInputType = {
    id?: true
    nome?: true
    ano?: true
    formato?: true
  }

  export type CampeonatoCountAggregateInputType = {
    id?: true
    nome?: true
    ano?: true
    formato?: true
    _all?: true
  }

  export type CampeonatoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Campeonato to aggregate.
     */
    where?: CampeonatoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Campeonatoes to fetch.
     */
    orderBy?: CampeonatoOrderByWithRelationInput | CampeonatoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CampeonatoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Campeonatoes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Campeonatoes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Campeonatoes
    **/
    _count?: true | CampeonatoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CampeonatoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CampeonatoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CampeonatoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CampeonatoMaxAggregateInputType
  }

  export type GetCampeonatoAggregateType<T extends CampeonatoAggregateArgs> = {
        [P in keyof T & keyof AggregateCampeonato]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCampeonato[P]>
      : GetScalarType<T[P], AggregateCampeonato[P]>
  }




  export type CampeonatoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CampeonatoWhereInput
    orderBy?: CampeonatoOrderByWithAggregationInput | CampeonatoOrderByWithAggregationInput[]
    by: CampeonatoScalarFieldEnum[] | CampeonatoScalarFieldEnum
    having?: CampeonatoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CampeonatoCountAggregateInputType | true
    _avg?: CampeonatoAvgAggregateInputType
    _sum?: CampeonatoSumAggregateInputType
    _min?: CampeonatoMinAggregateInputType
    _max?: CampeonatoMaxAggregateInputType
  }

  export type CampeonatoGroupByOutputType = {
    id: number
    nome: string
    ano: number
    formato: string
    _count: CampeonatoCountAggregateOutputType | null
    _avg: CampeonatoAvgAggregateOutputType | null
    _sum: CampeonatoSumAggregateOutputType | null
    _min: CampeonatoMinAggregateOutputType | null
    _max: CampeonatoMaxAggregateOutputType | null
  }

  type GetCampeonatoGroupByPayload<T extends CampeonatoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CampeonatoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CampeonatoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CampeonatoGroupByOutputType[P]>
            : GetScalarType<T[P], CampeonatoGroupByOutputType[P]>
        }
      >
    >


  export type CampeonatoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    ano?: boolean
    formato?: boolean
    participacoes?: boolean | Campeonato$participacoesArgs<ExtArgs>
    jogos?: boolean | Campeonato$jogosArgs<ExtArgs>
    _count?: boolean | CampeonatoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["campeonato"]>

  export type CampeonatoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    ano?: boolean
    formato?: boolean
  }, ExtArgs["result"]["campeonato"]>

  export type CampeonatoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    ano?: boolean
    formato?: boolean
  }, ExtArgs["result"]["campeonato"]>

  export type CampeonatoSelectScalar = {
    id?: boolean
    nome?: boolean
    ano?: boolean
    formato?: boolean
  }

  export type CampeonatoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "ano" | "formato", ExtArgs["result"]["campeonato"]>
  export type CampeonatoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    participacoes?: boolean | Campeonato$participacoesArgs<ExtArgs>
    jogos?: boolean | Campeonato$jogosArgs<ExtArgs>
    _count?: boolean | CampeonatoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CampeonatoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CampeonatoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CampeonatoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Campeonato"
    objects: {
      participacoes: Prisma.$ParticipacaoPayload<ExtArgs>[]
      jogos: Prisma.$JogoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      ano: number
      formato: string
    }, ExtArgs["result"]["campeonato"]>
    composites: {}
  }

  type CampeonatoGetPayload<S extends boolean | null | undefined | CampeonatoDefaultArgs> = $Result.GetResult<Prisma.$CampeonatoPayload, S>

  type CampeonatoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CampeonatoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CampeonatoCountAggregateInputType | true
    }

  export interface CampeonatoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Campeonato'], meta: { name: 'Campeonato' } }
    /**
     * Find zero or one Campeonato that matches the filter.
     * @param {CampeonatoFindUniqueArgs} args - Arguments to find a Campeonato
     * @example
     * // Get one Campeonato
     * const campeonato = await prisma.campeonato.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CampeonatoFindUniqueArgs>(args: SelectSubset<T, CampeonatoFindUniqueArgs<ExtArgs>>): Prisma__CampeonatoClient<$Result.GetResult<Prisma.$CampeonatoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Campeonato that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CampeonatoFindUniqueOrThrowArgs} args - Arguments to find a Campeonato
     * @example
     * // Get one Campeonato
     * const campeonato = await prisma.campeonato.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CampeonatoFindUniqueOrThrowArgs>(args: SelectSubset<T, CampeonatoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CampeonatoClient<$Result.GetResult<Prisma.$CampeonatoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Campeonato that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampeonatoFindFirstArgs} args - Arguments to find a Campeonato
     * @example
     * // Get one Campeonato
     * const campeonato = await prisma.campeonato.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CampeonatoFindFirstArgs>(args?: SelectSubset<T, CampeonatoFindFirstArgs<ExtArgs>>): Prisma__CampeonatoClient<$Result.GetResult<Prisma.$CampeonatoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Campeonato that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampeonatoFindFirstOrThrowArgs} args - Arguments to find a Campeonato
     * @example
     * // Get one Campeonato
     * const campeonato = await prisma.campeonato.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CampeonatoFindFirstOrThrowArgs>(args?: SelectSubset<T, CampeonatoFindFirstOrThrowArgs<ExtArgs>>): Prisma__CampeonatoClient<$Result.GetResult<Prisma.$CampeonatoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Campeonatoes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampeonatoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Campeonatoes
     * const campeonatoes = await prisma.campeonato.findMany()
     * 
     * // Get first 10 Campeonatoes
     * const campeonatoes = await prisma.campeonato.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const campeonatoWithIdOnly = await prisma.campeonato.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CampeonatoFindManyArgs>(args?: SelectSubset<T, CampeonatoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampeonatoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Campeonato.
     * @param {CampeonatoCreateArgs} args - Arguments to create a Campeonato.
     * @example
     * // Create one Campeonato
     * const Campeonato = await prisma.campeonato.create({
     *   data: {
     *     // ... data to create a Campeonato
     *   }
     * })
     * 
     */
    create<T extends CampeonatoCreateArgs>(args: SelectSubset<T, CampeonatoCreateArgs<ExtArgs>>): Prisma__CampeonatoClient<$Result.GetResult<Prisma.$CampeonatoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Campeonatoes.
     * @param {CampeonatoCreateManyArgs} args - Arguments to create many Campeonatoes.
     * @example
     * // Create many Campeonatoes
     * const campeonato = await prisma.campeonato.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CampeonatoCreateManyArgs>(args?: SelectSubset<T, CampeonatoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Campeonatoes and returns the data saved in the database.
     * @param {CampeonatoCreateManyAndReturnArgs} args - Arguments to create many Campeonatoes.
     * @example
     * // Create many Campeonatoes
     * const campeonato = await prisma.campeonato.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Campeonatoes and only return the `id`
     * const campeonatoWithIdOnly = await prisma.campeonato.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CampeonatoCreateManyAndReturnArgs>(args?: SelectSubset<T, CampeonatoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampeonatoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Campeonato.
     * @param {CampeonatoDeleteArgs} args - Arguments to delete one Campeonato.
     * @example
     * // Delete one Campeonato
     * const Campeonato = await prisma.campeonato.delete({
     *   where: {
     *     // ... filter to delete one Campeonato
     *   }
     * })
     * 
     */
    delete<T extends CampeonatoDeleteArgs>(args: SelectSubset<T, CampeonatoDeleteArgs<ExtArgs>>): Prisma__CampeonatoClient<$Result.GetResult<Prisma.$CampeonatoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Campeonato.
     * @param {CampeonatoUpdateArgs} args - Arguments to update one Campeonato.
     * @example
     * // Update one Campeonato
     * const campeonato = await prisma.campeonato.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CampeonatoUpdateArgs>(args: SelectSubset<T, CampeonatoUpdateArgs<ExtArgs>>): Prisma__CampeonatoClient<$Result.GetResult<Prisma.$CampeonatoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Campeonatoes.
     * @param {CampeonatoDeleteManyArgs} args - Arguments to filter Campeonatoes to delete.
     * @example
     * // Delete a few Campeonatoes
     * const { count } = await prisma.campeonato.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CampeonatoDeleteManyArgs>(args?: SelectSubset<T, CampeonatoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Campeonatoes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampeonatoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Campeonatoes
     * const campeonato = await prisma.campeonato.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CampeonatoUpdateManyArgs>(args: SelectSubset<T, CampeonatoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Campeonatoes and returns the data updated in the database.
     * @param {CampeonatoUpdateManyAndReturnArgs} args - Arguments to update many Campeonatoes.
     * @example
     * // Update many Campeonatoes
     * const campeonato = await prisma.campeonato.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Campeonatoes and only return the `id`
     * const campeonatoWithIdOnly = await prisma.campeonato.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CampeonatoUpdateManyAndReturnArgs>(args: SelectSubset<T, CampeonatoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampeonatoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Campeonato.
     * @param {CampeonatoUpsertArgs} args - Arguments to update or create a Campeonato.
     * @example
     * // Update or create a Campeonato
     * const campeonato = await prisma.campeonato.upsert({
     *   create: {
     *     // ... data to create a Campeonato
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Campeonato we want to update
     *   }
     * })
     */
    upsert<T extends CampeonatoUpsertArgs>(args: SelectSubset<T, CampeonatoUpsertArgs<ExtArgs>>): Prisma__CampeonatoClient<$Result.GetResult<Prisma.$CampeonatoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Campeonatoes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampeonatoCountArgs} args - Arguments to filter Campeonatoes to count.
     * @example
     * // Count the number of Campeonatoes
     * const count = await prisma.campeonato.count({
     *   where: {
     *     // ... the filter for the Campeonatoes we want to count
     *   }
     * })
    **/
    count<T extends CampeonatoCountArgs>(
      args?: Subset<T, CampeonatoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CampeonatoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Campeonato.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampeonatoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CampeonatoAggregateArgs>(args: Subset<T, CampeonatoAggregateArgs>): Prisma.PrismaPromise<GetCampeonatoAggregateType<T>>

    /**
     * Group by Campeonato.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampeonatoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CampeonatoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CampeonatoGroupByArgs['orderBy'] }
        : { orderBy?: CampeonatoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CampeonatoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCampeonatoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Campeonato model
   */
  readonly fields: CampeonatoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Campeonato.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CampeonatoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    participacoes<T extends Campeonato$participacoesArgs<ExtArgs> = {}>(args?: Subset<T, Campeonato$participacoesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParticipacaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    jogos<T extends Campeonato$jogosArgs<ExtArgs> = {}>(args?: Subset<T, Campeonato$jogosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JogoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Campeonato model
   */
  interface CampeonatoFieldRefs {
    readonly id: FieldRef<"Campeonato", 'Int'>
    readonly nome: FieldRef<"Campeonato", 'String'>
    readonly ano: FieldRef<"Campeonato", 'Int'>
    readonly formato: FieldRef<"Campeonato", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Campeonato findUnique
   */
  export type CampeonatoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campeonato
     */
    select?: CampeonatoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campeonato
     */
    omit?: CampeonatoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampeonatoInclude<ExtArgs> | null
    /**
     * Filter, which Campeonato to fetch.
     */
    where: CampeonatoWhereUniqueInput
  }

  /**
   * Campeonato findUniqueOrThrow
   */
  export type CampeonatoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campeonato
     */
    select?: CampeonatoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campeonato
     */
    omit?: CampeonatoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampeonatoInclude<ExtArgs> | null
    /**
     * Filter, which Campeonato to fetch.
     */
    where: CampeonatoWhereUniqueInput
  }

  /**
   * Campeonato findFirst
   */
  export type CampeonatoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campeonato
     */
    select?: CampeonatoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campeonato
     */
    omit?: CampeonatoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampeonatoInclude<ExtArgs> | null
    /**
     * Filter, which Campeonato to fetch.
     */
    where?: CampeonatoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Campeonatoes to fetch.
     */
    orderBy?: CampeonatoOrderByWithRelationInput | CampeonatoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Campeonatoes.
     */
    cursor?: CampeonatoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Campeonatoes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Campeonatoes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Campeonatoes.
     */
    distinct?: CampeonatoScalarFieldEnum | CampeonatoScalarFieldEnum[]
  }

  /**
   * Campeonato findFirstOrThrow
   */
  export type CampeonatoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campeonato
     */
    select?: CampeonatoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campeonato
     */
    omit?: CampeonatoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampeonatoInclude<ExtArgs> | null
    /**
     * Filter, which Campeonato to fetch.
     */
    where?: CampeonatoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Campeonatoes to fetch.
     */
    orderBy?: CampeonatoOrderByWithRelationInput | CampeonatoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Campeonatoes.
     */
    cursor?: CampeonatoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Campeonatoes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Campeonatoes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Campeonatoes.
     */
    distinct?: CampeonatoScalarFieldEnum | CampeonatoScalarFieldEnum[]
  }

  /**
   * Campeonato findMany
   */
  export type CampeonatoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campeonato
     */
    select?: CampeonatoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campeonato
     */
    omit?: CampeonatoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampeonatoInclude<ExtArgs> | null
    /**
     * Filter, which Campeonatoes to fetch.
     */
    where?: CampeonatoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Campeonatoes to fetch.
     */
    orderBy?: CampeonatoOrderByWithRelationInput | CampeonatoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Campeonatoes.
     */
    cursor?: CampeonatoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Campeonatoes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Campeonatoes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Campeonatoes.
     */
    distinct?: CampeonatoScalarFieldEnum | CampeonatoScalarFieldEnum[]
  }

  /**
   * Campeonato create
   */
  export type CampeonatoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campeonato
     */
    select?: CampeonatoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campeonato
     */
    omit?: CampeonatoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampeonatoInclude<ExtArgs> | null
    /**
     * The data needed to create a Campeonato.
     */
    data: XOR<CampeonatoCreateInput, CampeonatoUncheckedCreateInput>
  }

  /**
   * Campeonato createMany
   */
  export type CampeonatoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Campeonatoes.
     */
    data: CampeonatoCreateManyInput | CampeonatoCreateManyInput[]
  }

  /**
   * Campeonato createManyAndReturn
   */
  export type CampeonatoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campeonato
     */
    select?: CampeonatoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Campeonato
     */
    omit?: CampeonatoOmit<ExtArgs> | null
    /**
     * The data used to create many Campeonatoes.
     */
    data: CampeonatoCreateManyInput | CampeonatoCreateManyInput[]
  }

  /**
   * Campeonato update
   */
  export type CampeonatoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campeonato
     */
    select?: CampeonatoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campeonato
     */
    omit?: CampeonatoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampeonatoInclude<ExtArgs> | null
    /**
     * The data needed to update a Campeonato.
     */
    data: XOR<CampeonatoUpdateInput, CampeonatoUncheckedUpdateInput>
    /**
     * Choose, which Campeonato to update.
     */
    where: CampeonatoWhereUniqueInput
  }

  /**
   * Campeonato updateMany
   */
  export type CampeonatoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Campeonatoes.
     */
    data: XOR<CampeonatoUpdateManyMutationInput, CampeonatoUncheckedUpdateManyInput>
    /**
     * Filter which Campeonatoes to update
     */
    where?: CampeonatoWhereInput
    /**
     * Limit how many Campeonatoes to update.
     */
    limit?: number
  }

  /**
   * Campeonato updateManyAndReturn
   */
  export type CampeonatoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campeonato
     */
    select?: CampeonatoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Campeonato
     */
    omit?: CampeonatoOmit<ExtArgs> | null
    /**
     * The data used to update Campeonatoes.
     */
    data: XOR<CampeonatoUpdateManyMutationInput, CampeonatoUncheckedUpdateManyInput>
    /**
     * Filter which Campeonatoes to update
     */
    where?: CampeonatoWhereInput
    /**
     * Limit how many Campeonatoes to update.
     */
    limit?: number
  }

  /**
   * Campeonato upsert
   */
  export type CampeonatoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campeonato
     */
    select?: CampeonatoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campeonato
     */
    omit?: CampeonatoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampeonatoInclude<ExtArgs> | null
    /**
     * The filter to search for the Campeonato to update in case it exists.
     */
    where: CampeonatoWhereUniqueInput
    /**
     * In case the Campeonato found by the `where` argument doesn't exist, create a new Campeonato with this data.
     */
    create: XOR<CampeonatoCreateInput, CampeonatoUncheckedCreateInput>
    /**
     * In case the Campeonato was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CampeonatoUpdateInput, CampeonatoUncheckedUpdateInput>
  }

  /**
   * Campeonato delete
   */
  export type CampeonatoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campeonato
     */
    select?: CampeonatoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campeonato
     */
    omit?: CampeonatoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampeonatoInclude<ExtArgs> | null
    /**
     * Filter which Campeonato to delete.
     */
    where: CampeonatoWhereUniqueInput
  }

  /**
   * Campeonato deleteMany
   */
  export type CampeonatoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Campeonatoes to delete
     */
    where?: CampeonatoWhereInput
    /**
     * Limit how many Campeonatoes to delete.
     */
    limit?: number
  }

  /**
   * Campeonato.participacoes
   */
  export type Campeonato$participacoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participacao
     */
    select?: ParticipacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participacao
     */
    omit?: ParticipacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipacaoInclude<ExtArgs> | null
    where?: ParticipacaoWhereInput
    orderBy?: ParticipacaoOrderByWithRelationInput | ParticipacaoOrderByWithRelationInput[]
    cursor?: ParticipacaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ParticipacaoScalarFieldEnum | ParticipacaoScalarFieldEnum[]
  }

  /**
   * Campeonato.jogos
   */
  export type Campeonato$jogosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jogo
     */
    select?: JogoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jogo
     */
    omit?: JogoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JogoInclude<ExtArgs> | null
    where?: JogoWhereInput
    orderBy?: JogoOrderByWithRelationInput | JogoOrderByWithRelationInput[]
    cursor?: JogoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: JogoScalarFieldEnum | JogoScalarFieldEnum[]
  }

  /**
   * Campeonato without action
   */
  export type CampeonatoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campeonato
     */
    select?: CampeonatoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campeonato
     */
    omit?: CampeonatoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampeonatoInclude<ExtArgs> | null
  }


  /**
   * Model Equipe
   */

  export type AggregateEquipe = {
    _count: EquipeCountAggregateOutputType | null
    _avg: EquipeAvgAggregateOutputType | null
    _sum: EquipeSumAggregateOutputType | null
    _min: EquipeMinAggregateOutputType | null
    _max: EquipeMaxAggregateOutputType | null
  }

  export type EquipeAvgAggregateOutputType = {
    id: number | null
  }

  export type EquipeSumAggregateOutputType = {
    id: number | null
  }

  export type EquipeMinAggregateOutputType = {
    id: number | null
    nome: string | null
    responsavel: string | null
    telefone: string | null
  }

  export type EquipeMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    responsavel: string | null
    telefone: string | null
  }

  export type EquipeCountAggregateOutputType = {
    id: number
    nome: number
    responsavel: number
    telefone: number
    _all: number
  }


  export type EquipeAvgAggregateInputType = {
    id?: true
  }

  export type EquipeSumAggregateInputType = {
    id?: true
  }

  export type EquipeMinAggregateInputType = {
    id?: true
    nome?: true
    responsavel?: true
    telefone?: true
  }

  export type EquipeMaxAggregateInputType = {
    id?: true
    nome?: true
    responsavel?: true
    telefone?: true
  }

  export type EquipeCountAggregateInputType = {
    id?: true
    nome?: true
    responsavel?: true
    telefone?: true
    _all?: true
  }

  export type EquipeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Equipe to aggregate.
     */
    where?: EquipeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Equipes to fetch.
     */
    orderBy?: EquipeOrderByWithRelationInput | EquipeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EquipeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Equipes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Equipes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Equipes
    **/
    _count?: true | EquipeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EquipeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EquipeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EquipeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EquipeMaxAggregateInputType
  }

  export type GetEquipeAggregateType<T extends EquipeAggregateArgs> = {
        [P in keyof T & keyof AggregateEquipe]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEquipe[P]>
      : GetScalarType<T[P], AggregateEquipe[P]>
  }




  export type EquipeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EquipeWhereInput
    orderBy?: EquipeOrderByWithAggregationInput | EquipeOrderByWithAggregationInput[]
    by: EquipeScalarFieldEnum[] | EquipeScalarFieldEnum
    having?: EquipeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EquipeCountAggregateInputType | true
    _avg?: EquipeAvgAggregateInputType
    _sum?: EquipeSumAggregateInputType
    _min?: EquipeMinAggregateInputType
    _max?: EquipeMaxAggregateInputType
  }

  export type EquipeGroupByOutputType = {
    id: number
    nome: string
    responsavel: string
    telefone: string
    _count: EquipeCountAggregateOutputType | null
    _avg: EquipeAvgAggregateOutputType | null
    _sum: EquipeSumAggregateOutputType | null
    _min: EquipeMinAggregateOutputType | null
    _max: EquipeMaxAggregateOutputType | null
  }

  type GetEquipeGroupByPayload<T extends EquipeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EquipeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EquipeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EquipeGroupByOutputType[P]>
            : GetScalarType<T[P], EquipeGroupByOutputType[P]>
        }
      >
    >


  export type EquipeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    responsavel?: boolean
    telefone?: boolean
    participacoes?: boolean | Equipe$participacoesArgs<ExtArgs>
    vinculos?: boolean | Equipe$vinculosArgs<ExtArgs>
    jogosMandante?: boolean | Equipe$jogosMandanteArgs<ExtArgs>
    jogosVisitante?: boolean | Equipe$jogosVisitanteArgs<ExtArgs>
    _count?: boolean | EquipeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["equipe"]>

  export type EquipeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    responsavel?: boolean
    telefone?: boolean
  }, ExtArgs["result"]["equipe"]>

  export type EquipeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    responsavel?: boolean
    telefone?: boolean
  }, ExtArgs["result"]["equipe"]>

  export type EquipeSelectScalar = {
    id?: boolean
    nome?: boolean
    responsavel?: boolean
    telefone?: boolean
  }

  export type EquipeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "responsavel" | "telefone", ExtArgs["result"]["equipe"]>
  export type EquipeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    participacoes?: boolean | Equipe$participacoesArgs<ExtArgs>
    vinculos?: boolean | Equipe$vinculosArgs<ExtArgs>
    jogosMandante?: boolean | Equipe$jogosMandanteArgs<ExtArgs>
    jogosVisitante?: boolean | Equipe$jogosVisitanteArgs<ExtArgs>
    _count?: boolean | EquipeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EquipeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type EquipeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $EquipePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Equipe"
    objects: {
      participacoes: Prisma.$ParticipacaoPayload<ExtArgs>[]
      vinculos: Prisma.$VinculoPayload<ExtArgs>[]
      jogosMandante: Prisma.$JogoPayload<ExtArgs>[]
      jogosVisitante: Prisma.$JogoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      responsavel: string
      telefone: string
    }, ExtArgs["result"]["equipe"]>
    composites: {}
  }

  type EquipeGetPayload<S extends boolean | null | undefined | EquipeDefaultArgs> = $Result.GetResult<Prisma.$EquipePayload, S>

  type EquipeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EquipeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EquipeCountAggregateInputType | true
    }

  export interface EquipeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Equipe'], meta: { name: 'Equipe' } }
    /**
     * Find zero or one Equipe that matches the filter.
     * @param {EquipeFindUniqueArgs} args - Arguments to find a Equipe
     * @example
     * // Get one Equipe
     * const equipe = await prisma.equipe.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EquipeFindUniqueArgs>(args: SelectSubset<T, EquipeFindUniqueArgs<ExtArgs>>): Prisma__EquipeClient<$Result.GetResult<Prisma.$EquipePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Equipe that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EquipeFindUniqueOrThrowArgs} args - Arguments to find a Equipe
     * @example
     * // Get one Equipe
     * const equipe = await prisma.equipe.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EquipeFindUniqueOrThrowArgs>(args: SelectSubset<T, EquipeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EquipeClient<$Result.GetResult<Prisma.$EquipePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Equipe that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipeFindFirstArgs} args - Arguments to find a Equipe
     * @example
     * // Get one Equipe
     * const equipe = await prisma.equipe.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EquipeFindFirstArgs>(args?: SelectSubset<T, EquipeFindFirstArgs<ExtArgs>>): Prisma__EquipeClient<$Result.GetResult<Prisma.$EquipePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Equipe that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipeFindFirstOrThrowArgs} args - Arguments to find a Equipe
     * @example
     * // Get one Equipe
     * const equipe = await prisma.equipe.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EquipeFindFirstOrThrowArgs>(args?: SelectSubset<T, EquipeFindFirstOrThrowArgs<ExtArgs>>): Prisma__EquipeClient<$Result.GetResult<Prisma.$EquipePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Equipes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Equipes
     * const equipes = await prisma.equipe.findMany()
     * 
     * // Get first 10 Equipes
     * const equipes = await prisma.equipe.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const equipeWithIdOnly = await prisma.equipe.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EquipeFindManyArgs>(args?: SelectSubset<T, EquipeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EquipePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Equipe.
     * @param {EquipeCreateArgs} args - Arguments to create a Equipe.
     * @example
     * // Create one Equipe
     * const Equipe = await prisma.equipe.create({
     *   data: {
     *     // ... data to create a Equipe
     *   }
     * })
     * 
     */
    create<T extends EquipeCreateArgs>(args: SelectSubset<T, EquipeCreateArgs<ExtArgs>>): Prisma__EquipeClient<$Result.GetResult<Prisma.$EquipePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Equipes.
     * @param {EquipeCreateManyArgs} args - Arguments to create many Equipes.
     * @example
     * // Create many Equipes
     * const equipe = await prisma.equipe.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EquipeCreateManyArgs>(args?: SelectSubset<T, EquipeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Equipes and returns the data saved in the database.
     * @param {EquipeCreateManyAndReturnArgs} args - Arguments to create many Equipes.
     * @example
     * // Create many Equipes
     * const equipe = await prisma.equipe.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Equipes and only return the `id`
     * const equipeWithIdOnly = await prisma.equipe.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EquipeCreateManyAndReturnArgs>(args?: SelectSubset<T, EquipeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EquipePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Equipe.
     * @param {EquipeDeleteArgs} args - Arguments to delete one Equipe.
     * @example
     * // Delete one Equipe
     * const Equipe = await prisma.equipe.delete({
     *   where: {
     *     // ... filter to delete one Equipe
     *   }
     * })
     * 
     */
    delete<T extends EquipeDeleteArgs>(args: SelectSubset<T, EquipeDeleteArgs<ExtArgs>>): Prisma__EquipeClient<$Result.GetResult<Prisma.$EquipePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Equipe.
     * @param {EquipeUpdateArgs} args - Arguments to update one Equipe.
     * @example
     * // Update one Equipe
     * const equipe = await prisma.equipe.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EquipeUpdateArgs>(args: SelectSubset<T, EquipeUpdateArgs<ExtArgs>>): Prisma__EquipeClient<$Result.GetResult<Prisma.$EquipePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Equipes.
     * @param {EquipeDeleteManyArgs} args - Arguments to filter Equipes to delete.
     * @example
     * // Delete a few Equipes
     * const { count } = await prisma.equipe.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EquipeDeleteManyArgs>(args?: SelectSubset<T, EquipeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Equipes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Equipes
     * const equipe = await prisma.equipe.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EquipeUpdateManyArgs>(args: SelectSubset<T, EquipeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Equipes and returns the data updated in the database.
     * @param {EquipeUpdateManyAndReturnArgs} args - Arguments to update many Equipes.
     * @example
     * // Update many Equipes
     * const equipe = await prisma.equipe.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Equipes and only return the `id`
     * const equipeWithIdOnly = await prisma.equipe.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EquipeUpdateManyAndReturnArgs>(args: SelectSubset<T, EquipeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EquipePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Equipe.
     * @param {EquipeUpsertArgs} args - Arguments to update or create a Equipe.
     * @example
     * // Update or create a Equipe
     * const equipe = await prisma.equipe.upsert({
     *   create: {
     *     // ... data to create a Equipe
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Equipe we want to update
     *   }
     * })
     */
    upsert<T extends EquipeUpsertArgs>(args: SelectSubset<T, EquipeUpsertArgs<ExtArgs>>): Prisma__EquipeClient<$Result.GetResult<Prisma.$EquipePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Equipes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipeCountArgs} args - Arguments to filter Equipes to count.
     * @example
     * // Count the number of Equipes
     * const count = await prisma.equipe.count({
     *   where: {
     *     // ... the filter for the Equipes we want to count
     *   }
     * })
    **/
    count<T extends EquipeCountArgs>(
      args?: Subset<T, EquipeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EquipeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Equipe.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EquipeAggregateArgs>(args: Subset<T, EquipeAggregateArgs>): Prisma.PrismaPromise<GetEquipeAggregateType<T>>

    /**
     * Group by Equipe.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EquipeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EquipeGroupByArgs['orderBy'] }
        : { orderBy?: EquipeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EquipeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEquipeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Equipe model
   */
  readonly fields: EquipeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Equipe.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EquipeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    participacoes<T extends Equipe$participacoesArgs<ExtArgs> = {}>(args?: Subset<T, Equipe$participacoesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParticipacaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    vinculos<T extends Equipe$vinculosArgs<ExtArgs> = {}>(args?: Subset<T, Equipe$vinculosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VinculoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    jogosMandante<T extends Equipe$jogosMandanteArgs<ExtArgs> = {}>(args?: Subset<T, Equipe$jogosMandanteArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JogoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    jogosVisitante<T extends Equipe$jogosVisitanteArgs<ExtArgs> = {}>(args?: Subset<T, Equipe$jogosVisitanteArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JogoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Equipe model
   */
  interface EquipeFieldRefs {
    readonly id: FieldRef<"Equipe", 'Int'>
    readonly nome: FieldRef<"Equipe", 'String'>
    readonly responsavel: FieldRef<"Equipe", 'String'>
    readonly telefone: FieldRef<"Equipe", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Equipe findUnique
   */
  export type EquipeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipe
     */
    select?: EquipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipe
     */
    omit?: EquipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipeInclude<ExtArgs> | null
    /**
     * Filter, which Equipe to fetch.
     */
    where: EquipeWhereUniqueInput
  }

  /**
   * Equipe findUniqueOrThrow
   */
  export type EquipeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipe
     */
    select?: EquipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipe
     */
    omit?: EquipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipeInclude<ExtArgs> | null
    /**
     * Filter, which Equipe to fetch.
     */
    where: EquipeWhereUniqueInput
  }

  /**
   * Equipe findFirst
   */
  export type EquipeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipe
     */
    select?: EquipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipe
     */
    omit?: EquipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipeInclude<ExtArgs> | null
    /**
     * Filter, which Equipe to fetch.
     */
    where?: EquipeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Equipes to fetch.
     */
    orderBy?: EquipeOrderByWithRelationInput | EquipeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Equipes.
     */
    cursor?: EquipeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Equipes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Equipes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Equipes.
     */
    distinct?: EquipeScalarFieldEnum | EquipeScalarFieldEnum[]
  }

  /**
   * Equipe findFirstOrThrow
   */
  export type EquipeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipe
     */
    select?: EquipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipe
     */
    omit?: EquipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipeInclude<ExtArgs> | null
    /**
     * Filter, which Equipe to fetch.
     */
    where?: EquipeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Equipes to fetch.
     */
    orderBy?: EquipeOrderByWithRelationInput | EquipeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Equipes.
     */
    cursor?: EquipeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Equipes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Equipes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Equipes.
     */
    distinct?: EquipeScalarFieldEnum | EquipeScalarFieldEnum[]
  }

  /**
   * Equipe findMany
   */
  export type EquipeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipe
     */
    select?: EquipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipe
     */
    omit?: EquipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipeInclude<ExtArgs> | null
    /**
     * Filter, which Equipes to fetch.
     */
    where?: EquipeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Equipes to fetch.
     */
    orderBy?: EquipeOrderByWithRelationInput | EquipeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Equipes.
     */
    cursor?: EquipeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Equipes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Equipes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Equipes.
     */
    distinct?: EquipeScalarFieldEnum | EquipeScalarFieldEnum[]
  }

  /**
   * Equipe create
   */
  export type EquipeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipe
     */
    select?: EquipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipe
     */
    omit?: EquipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipeInclude<ExtArgs> | null
    /**
     * The data needed to create a Equipe.
     */
    data: XOR<EquipeCreateInput, EquipeUncheckedCreateInput>
  }

  /**
   * Equipe createMany
   */
  export type EquipeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Equipes.
     */
    data: EquipeCreateManyInput | EquipeCreateManyInput[]
  }

  /**
   * Equipe createManyAndReturn
   */
  export type EquipeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipe
     */
    select?: EquipeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Equipe
     */
    omit?: EquipeOmit<ExtArgs> | null
    /**
     * The data used to create many Equipes.
     */
    data: EquipeCreateManyInput | EquipeCreateManyInput[]
  }

  /**
   * Equipe update
   */
  export type EquipeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipe
     */
    select?: EquipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipe
     */
    omit?: EquipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipeInclude<ExtArgs> | null
    /**
     * The data needed to update a Equipe.
     */
    data: XOR<EquipeUpdateInput, EquipeUncheckedUpdateInput>
    /**
     * Choose, which Equipe to update.
     */
    where: EquipeWhereUniqueInput
  }

  /**
   * Equipe updateMany
   */
  export type EquipeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Equipes.
     */
    data: XOR<EquipeUpdateManyMutationInput, EquipeUncheckedUpdateManyInput>
    /**
     * Filter which Equipes to update
     */
    where?: EquipeWhereInput
    /**
     * Limit how many Equipes to update.
     */
    limit?: number
  }

  /**
   * Equipe updateManyAndReturn
   */
  export type EquipeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipe
     */
    select?: EquipeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Equipe
     */
    omit?: EquipeOmit<ExtArgs> | null
    /**
     * The data used to update Equipes.
     */
    data: XOR<EquipeUpdateManyMutationInput, EquipeUncheckedUpdateManyInput>
    /**
     * Filter which Equipes to update
     */
    where?: EquipeWhereInput
    /**
     * Limit how many Equipes to update.
     */
    limit?: number
  }

  /**
   * Equipe upsert
   */
  export type EquipeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipe
     */
    select?: EquipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipe
     */
    omit?: EquipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipeInclude<ExtArgs> | null
    /**
     * The filter to search for the Equipe to update in case it exists.
     */
    where: EquipeWhereUniqueInput
    /**
     * In case the Equipe found by the `where` argument doesn't exist, create a new Equipe with this data.
     */
    create: XOR<EquipeCreateInput, EquipeUncheckedCreateInput>
    /**
     * In case the Equipe was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EquipeUpdateInput, EquipeUncheckedUpdateInput>
  }

  /**
   * Equipe delete
   */
  export type EquipeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipe
     */
    select?: EquipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipe
     */
    omit?: EquipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipeInclude<ExtArgs> | null
    /**
     * Filter which Equipe to delete.
     */
    where: EquipeWhereUniqueInput
  }

  /**
   * Equipe deleteMany
   */
  export type EquipeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Equipes to delete
     */
    where?: EquipeWhereInput
    /**
     * Limit how many Equipes to delete.
     */
    limit?: number
  }

  /**
   * Equipe.participacoes
   */
  export type Equipe$participacoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participacao
     */
    select?: ParticipacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participacao
     */
    omit?: ParticipacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipacaoInclude<ExtArgs> | null
    where?: ParticipacaoWhereInput
    orderBy?: ParticipacaoOrderByWithRelationInput | ParticipacaoOrderByWithRelationInput[]
    cursor?: ParticipacaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ParticipacaoScalarFieldEnum | ParticipacaoScalarFieldEnum[]
  }

  /**
   * Equipe.vinculos
   */
  export type Equipe$vinculosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vinculo
     */
    select?: VinculoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vinculo
     */
    omit?: VinculoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VinculoInclude<ExtArgs> | null
    where?: VinculoWhereInput
    orderBy?: VinculoOrderByWithRelationInput | VinculoOrderByWithRelationInput[]
    cursor?: VinculoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VinculoScalarFieldEnum | VinculoScalarFieldEnum[]
  }

  /**
   * Equipe.jogosMandante
   */
  export type Equipe$jogosMandanteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jogo
     */
    select?: JogoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jogo
     */
    omit?: JogoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JogoInclude<ExtArgs> | null
    where?: JogoWhereInput
    orderBy?: JogoOrderByWithRelationInput | JogoOrderByWithRelationInput[]
    cursor?: JogoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: JogoScalarFieldEnum | JogoScalarFieldEnum[]
  }

  /**
   * Equipe.jogosVisitante
   */
  export type Equipe$jogosVisitanteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jogo
     */
    select?: JogoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jogo
     */
    omit?: JogoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JogoInclude<ExtArgs> | null
    where?: JogoWhereInput
    orderBy?: JogoOrderByWithRelationInput | JogoOrderByWithRelationInput[]
    cursor?: JogoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: JogoScalarFieldEnum | JogoScalarFieldEnum[]
  }

  /**
   * Equipe without action
   */
  export type EquipeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipe
     */
    select?: EquipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipe
     */
    omit?: EquipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipeInclude<ExtArgs> | null
  }


  /**
   * Model Atleta
   */

  export type AggregateAtleta = {
    _count: AtletaCountAggregateOutputType | null
    _avg: AtletaAvgAggregateOutputType | null
    _sum: AtletaSumAggregateOutputType | null
    _min: AtletaMinAggregateOutputType | null
    _max: AtletaMaxAggregateOutputType | null
  }

  export type AtletaAvgAggregateOutputType = {
    id: number | null
  }

  export type AtletaSumAggregateOutputType = {
    id: number | null
  }

  export type AtletaMinAggregateOutputType = {
    id: number | null
    nome: string | null
    cpf: string | null
    numero: string | null
  }

  export type AtletaMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    cpf: string | null
    numero: string | null
  }

  export type AtletaCountAggregateOutputType = {
    id: number
    nome: number
    cpf: number
    numero: number
    _all: number
  }


  export type AtletaAvgAggregateInputType = {
    id?: true
  }

  export type AtletaSumAggregateInputType = {
    id?: true
  }

  export type AtletaMinAggregateInputType = {
    id?: true
    nome?: true
    cpf?: true
    numero?: true
  }

  export type AtletaMaxAggregateInputType = {
    id?: true
    nome?: true
    cpf?: true
    numero?: true
  }

  export type AtletaCountAggregateInputType = {
    id?: true
    nome?: true
    cpf?: true
    numero?: true
    _all?: true
  }

  export type AtletaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Atleta to aggregate.
     */
    where?: AtletaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Atletas to fetch.
     */
    orderBy?: AtletaOrderByWithRelationInput | AtletaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AtletaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Atletas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Atletas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Atletas
    **/
    _count?: true | AtletaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AtletaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AtletaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AtletaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AtletaMaxAggregateInputType
  }

  export type GetAtletaAggregateType<T extends AtletaAggregateArgs> = {
        [P in keyof T & keyof AggregateAtleta]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAtleta[P]>
      : GetScalarType<T[P], AggregateAtleta[P]>
  }




  export type AtletaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AtletaWhereInput
    orderBy?: AtletaOrderByWithAggregationInput | AtletaOrderByWithAggregationInput[]
    by: AtletaScalarFieldEnum[] | AtletaScalarFieldEnum
    having?: AtletaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AtletaCountAggregateInputType | true
    _avg?: AtletaAvgAggregateInputType
    _sum?: AtletaSumAggregateInputType
    _min?: AtletaMinAggregateInputType
    _max?: AtletaMaxAggregateInputType
  }

  export type AtletaGroupByOutputType = {
    id: number
    nome: string
    cpf: string
    numero: string
    _count: AtletaCountAggregateOutputType | null
    _avg: AtletaAvgAggregateOutputType | null
    _sum: AtletaSumAggregateOutputType | null
    _min: AtletaMinAggregateOutputType | null
    _max: AtletaMaxAggregateOutputType | null
  }

  type GetAtletaGroupByPayload<T extends AtletaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AtletaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AtletaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AtletaGroupByOutputType[P]>
            : GetScalarType<T[P], AtletaGroupByOutputType[P]>
        }
      >
    >


  export type AtletaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    cpf?: boolean
    numero?: boolean
    vinculos?: boolean | Atleta$vinculosArgs<ExtArgs>
    eventos?: boolean | Atleta$eventosArgs<ExtArgs>
    _count?: boolean | AtletaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["atleta"]>

  export type AtletaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    cpf?: boolean
    numero?: boolean
  }, ExtArgs["result"]["atleta"]>

  export type AtletaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    cpf?: boolean
    numero?: boolean
  }, ExtArgs["result"]["atleta"]>

  export type AtletaSelectScalar = {
    id?: boolean
    nome?: boolean
    cpf?: boolean
    numero?: boolean
  }

  export type AtletaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "cpf" | "numero", ExtArgs["result"]["atleta"]>
  export type AtletaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vinculos?: boolean | Atleta$vinculosArgs<ExtArgs>
    eventos?: boolean | Atleta$eventosArgs<ExtArgs>
    _count?: boolean | AtletaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AtletaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type AtletaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AtletaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Atleta"
    objects: {
      vinculos: Prisma.$VinculoPayload<ExtArgs>[]
      eventos: Prisma.$EventoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      cpf: string
      numero: string
    }, ExtArgs["result"]["atleta"]>
    composites: {}
  }

  type AtletaGetPayload<S extends boolean | null | undefined | AtletaDefaultArgs> = $Result.GetResult<Prisma.$AtletaPayload, S>

  type AtletaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AtletaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AtletaCountAggregateInputType | true
    }

  export interface AtletaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Atleta'], meta: { name: 'Atleta' } }
    /**
     * Find zero or one Atleta that matches the filter.
     * @param {AtletaFindUniqueArgs} args - Arguments to find a Atleta
     * @example
     * // Get one Atleta
     * const atleta = await prisma.atleta.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AtletaFindUniqueArgs>(args: SelectSubset<T, AtletaFindUniqueArgs<ExtArgs>>): Prisma__AtletaClient<$Result.GetResult<Prisma.$AtletaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Atleta that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AtletaFindUniqueOrThrowArgs} args - Arguments to find a Atleta
     * @example
     * // Get one Atleta
     * const atleta = await prisma.atleta.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AtletaFindUniqueOrThrowArgs>(args: SelectSubset<T, AtletaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AtletaClient<$Result.GetResult<Prisma.$AtletaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Atleta that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtletaFindFirstArgs} args - Arguments to find a Atleta
     * @example
     * // Get one Atleta
     * const atleta = await prisma.atleta.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AtletaFindFirstArgs>(args?: SelectSubset<T, AtletaFindFirstArgs<ExtArgs>>): Prisma__AtletaClient<$Result.GetResult<Prisma.$AtletaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Atleta that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtletaFindFirstOrThrowArgs} args - Arguments to find a Atleta
     * @example
     * // Get one Atleta
     * const atleta = await prisma.atleta.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AtletaFindFirstOrThrowArgs>(args?: SelectSubset<T, AtletaFindFirstOrThrowArgs<ExtArgs>>): Prisma__AtletaClient<$Result.GetResult<Prisma.$AtletaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Atletas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtletaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Atletas
     * const atletas = await prisma.atleta.findMany()
     * 
     * // Get first 10 Atletas
     * const atletas = await prisma.atleta.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const atletaWithIdOnly = await prisma.atleta.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AtletaFindManyArgs>(args?: SelectSubset<T, AtletaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AtletaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Atleta.
     * @param {AtletaCreateArgs} args - Arguments to create a Atleta.
     * @example
     * // Create one Atleta
     * const Atleta = await prisma.atleta.create({
     *   data: {
     *     // ... data to create a Atleta
     *   }
     * })
     * 
     */
    create<T extends AtletaCreateArgs>(args: SelectSubset<T, AtletaCreateArgs<ExtArgs>>): Prisma__AtletaClient<$Result.GetResult<Prisma.$AtletaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Atletas.
     * @param {AtletaCreateManyArgs} args - Arguments to create many Atletas.
     * @example
     * // Create many Atletas
     * const atleta = await prisma.atleta.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AtletaCreateManyArgs>(args?: SelectSubset<T, AtletaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Atletas and returns the data saved in the database.
     * @param {AtletaCreateManyAndReturnArgs} args - Arguments to create many Atletas.
     * @example
     * // Create many Atletas
     * const atleta = await prisma.atleta.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Atletas and only return the `id`
     * const atletaWithIdOnly = await prisma.atleta.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AtletaCreateManyAndReturnArgs>(args?: SelectSubset<T, AtletaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AtletaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Atleta.
     * @param {AtletaDeleteArgs} args - Arguments to delete one Atleta.
     * @example
     * // Delete one Atleta
     * const Atleta = await prisma.atleta.delete({
     *   where: {
     *     // ... filter to delete one Atleta
     *   }
     * })
     * 
     */
    delete<T extends AtletaDeleteArgs>(args: SelectSubset<T, AtletaDeleteArgs<ExtArgs>>): Prisma__AtletaClient<$Result.GetResult<Prisma.$AtletaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Atleta.
     * @param {AtletaUpdateArgs} args - Arguments to update one Atleta.
     * @example
     * // Update one Atleta
     * const atleta = await prisma.atleta.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AtletaUpdateArgs>(args: SelectSubset<T, AtletaUpdateArgs<ExtArgs>>): Prisma__AtletaClient<$Result.GetResult<Prisma.$AtletaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Atletas.
     * @param {AtletaDeleteManyArgs} args - Arguments to filter Atletas to delete.
     * @example
     * // Delete a few Atletas
     * const { count } = await prisma.atleta.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AtletaDeleteManyArgs>(args?: SelectSubset<T, AtletaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Atletas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtletaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Atletas
     * const atleta = await prisma.atleta.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AtletaUpdateManyArgs>(args: SelectSubset<T, AtletaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Atletas and returns the data updated in the database.
     * @param {AtletaUpdateManyAndReturnArgs} args - Arguments to update many Atletas.
     * @example
     * // Update many Atletas
     * const atleta = await prisma.atleta.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Atletas and only return the `id`
     * const atletaWithIdOnly = await prisma.atleta.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AtletaUpdateManyAndReturnArgs>(args: SelectSubset<T, AtletaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AtletaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Atleta.
     * @param {AtletaUpsertArgs} args - Arguments to update or create a Atleta.
     * @example
     * // Update or create a Atleta
     * const atleta = await prisma.atleta.upsert({
     *   create: {
     *     // ... data to create a Atleta
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Atleta we want to update
     *   }
     * })
     */
    upsert<T extends AtletaUpsertArgs>(args: SelectSubset<T, AtletaUpsertArgs<ExtArgs>>): Prisma__AtletaClient<$Result.GetResult<Prisma.$AtletaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Atletas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtletaCountArgs} args - Arguments to filter Atletas to count.
     * @example
     * // Count the number of Atletas
     * const count = await prisma.atleta.count({
     *   where: {
     *     // ... the filter for the Atletas we want to count
     *   }
     * })
    **/
    count<T extends AtletaCountArgs>(
      args?: Subset<T, AtletaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AtletaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Atleta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtletaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AtletaAggregateArgs>(args: Subset<T, AtletaAggregateArgs>): Prisma.PrismaPromise<GetAtletaAggregateType<T>>

    /**
     * Group by Atleta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtletaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AtletaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AtletaGroupByArgs['orderBy'] }
        : { orderBy?: AtletaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AtletaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAtletaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Atleta model
   */
  readonly fields: AtletaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Atleta.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AtletaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    vinculos<T extends Atleta$vinculosArgs<ExtArgs> = {}>(args?: Subset<T, Atleta$vinculosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VinculoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    eventos<T extends Atleta$eventosArgs<ExtArgs> = {}>(args?: Subset<T, Atleta$eventosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Atleta model
   */
  interface AtletaFieldRefs {
    readonly id: FieldRef<"Atleta", 'Int'>
    readonly nome: FieldRef<"Atleta", 'String'>
    readonly cpf: FieldRef<"Atleta", 'String'>
    readonly numero: FieldRef<"Atleta", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Atleta findUnique
   */
  export type AtletaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atleta
     */
    select?: AtletaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Atleta
     */
    omit?: AtletaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtletaInclude<ExtArgs> | null
    /**
     * Filter, which Atleta to fetch.
     */
    where: AtletaWhereUniqueInput
  }

  /**
   * Atleta findUniqueOrThrow
   */
  export type AtletaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atleta
     */
    select?: AtletaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Atleta
     */
    omit?: AtletaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtletaInclude<ExtArgs> | null
    /**
     * Filter, which Atleta to fetch.
     */
    where: AtletaWhereUniqueInput
  }

  /**
   * Atleta findFirst
   */
  export type AtletaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atleta
     */
    select?: AtletaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Atleta
     */
    omit?: AtletaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtletaInclude<ExtArgs> | null
    /**
     * Filter, which Atleta to fetch.
     */
    where?: AtletaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Atletas to fetch.
     */
    orderBy?: AtletaOrderByWithRelationInput | AtletaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Atletas.
     */
    cursor?: AtletaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Atletas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Atletas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Atletas.
     */
    distinct?: AtletaScalarFieldEnum | AtletaScalarFieldEnum[]
  }

  /**
   * Atleta findFirstOrThrow
   */
  export type AtletaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atleta
     */
    select?: AtletaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Atleta
     */
    omit?: AtletaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtletaInclude<ExtArgs> | null
    /**
     * Filter, which Atleta to fetch.
     */
    where?: AtletaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Atletas to fetch.
     */
    orderBy?: AtletaOrderByWithRelationInput | AtletaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Atletas.
     */
    cursor?: AtletaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Atletas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Atletas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Atletas.
     */
    distinct?: AtletaScalarFieldEnum | AtletaScalarFieldEnum[]
  }

  /**
   * Atleta findMany
   */
  export type AtletaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atleta
     */
    select?: AtletaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Atleta
     */
    omit?: AtletaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtletaInclude<ExtArgs> | null
    /**
     * Filter, which Atletas to fetch.
     */
    where?: AtletaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Atletas to fetch.
     */
    orderBy?: AtletaOrderByWithRelationInput | AtletaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Atletas.
     */
    cursor?: AtletaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Atletas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Atletas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Atletas.
     */
    distinct?: AtletaScalarFieldEnum | AtletaScalarFieldEnum[]
  }

  /**
   * Atleta create
   */
  export type AtletaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atleta
     */
    select?: AtletaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Atleta
     */
    omit?: AtletaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtletaInclude<ExtArgs> | null
    /**
     * The data needed to create a Atleta.
     */
    data: XOR<AtletaCreateInput, AtletaUncheckedCreateInput>
  }

  /**
   * Atleta createMany
   */
  export type AtletaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Atletas.
     */
    data: AtletaCreateManyInput | AtletaCreateManyInput[]
  }

  /**
   * Atleta createManyAndReturn
   */
  export type AtletaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atleta
     */
    select?: AtletaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Atleta
     */
    omit?: AtletaOmit<ExtArgs> | null
    /**
     * The data used to create many Atletas.
     */
    data: AtletaCreateManyInput | AtletaCreateManyInput[]
  }

  /**
   * Atleta update
   */
  export type AtletaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atleta
     */
    select?: AtletaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Atleta
     */
    omit?: AtletaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtletaInclude<ExtArgs> | null
    /**
     * The data needed to update a Atleta.
     */
    data: XOR<AtletaUpdateInput, AtletaUncheckedUpdateInput>
    /**
     * Choose, which Atleta to update.
     */
    where: AtletaWhereUniqueInput
  }

  /**
   * Atleta updateMany
   */
  export type AtletaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Atletas.
     */
    data: XOR<AtletaUpdateManyMutationInput, AtletaUncheckedUpdateManyInput>
    /**
     * Filter which Atletas to update
     */
    where?: AtletaWhereInput
    /**
     * Limit how many Atletas to update.
     */
    limit?: number
  }

  /**
   * Atleta updateManyAndReturn
   */
  export type AtletaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atleta
     */
    select?: AtletaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Atleta
     */
    omit?: AtletaOmit<ExtArgs> | null
    /**
     * The data used to update Atletas.
     */
    data: XOR<AtletaUpdateManyMutationInput, AtletaUncheckedUpdateManyInput>
    /**
     * Filter which Atletas to update
     */
    where?: AtletaWhereInput
    /**
     * Limit how many Atletas to update.
     */
    limit?: number
  }

  /**
   * Atleta upsert
   */
  export type AtletaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atleta
     */
    select?: AtletaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Atleta
     */
    omit?: AtletaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtletaInclude<ExtArgs> | null
    /**
     * The filter to search for the Atleta to update in case it exists.
     */
    where: AtletaWhereUniqueInput
    /**
     * In case the Atleta found by the `where` argument doesn't exist, create a new Atleta with this data.
     */
    create: XOR<AtletaCreateInput, AtletaUncheckedCreateInput>
    /**
     * In case the Atleta was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AtletaUpdateInput, AtletaUncheckedUpdateInput>
  }

  /**
   * Atleta delete
   */
  export type AtletaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atleta
     */
    select?: AtletaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Atleta
     */
    omit?: AtletaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtletaInclude<ExtArgs> | null
    /**
     * Filter which Atleta to delete.
     */
    where: AtletaWhereUniqueInput
  }

  /**
   * Atleta deleteMany
   */
  export type AtletaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Atletas to delete
     */
    where?: AtletaWhereInput
    /**
     * Limit how many Atletas to delete.
     */
    limit?: number
  }

  /**
   * Atleta.vinculos
   */
  export type Atleta$vinculosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vinculo
     */
    select?: VinculoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vinculo
     */
    omit?: VinculoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VinculoInclude<ExtArgs> | null
    where?: VinculoWhereInput
    orderBy?: VinculoOrderByWithRelationInput | VinculoOrderByWithRelationInput[]
    cursor?: VinculoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VinculoScalarFieldEnum | VinculoScalarFieldEnum[]
  }

  /**
   * Atleta.eventos
   */
  export type Atleta$eventosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evento
     */
    select?: EventoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evento
     */
    omit?: EventoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventoInclude<ExtArgs> | null
    where?: EventoWhereInput
    orderBy?: EventoOrderByWithRelationInput | EventoOrderByWithRelationInput[]
    cursor?: EventoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventoScalarFieldEnum | EventoScalarFieldEnum[]
  }

  /**
   * Atleta without action
   */
  export type AtletaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atleta
     */
    select?: AtletaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Atleta
     */
    omit?: AtletaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtletaInclude<ExtArgs> | null
  }


  /**
   * Model Participacao
   */

  export type AggregateParticipacao = {
    _count: ParticipacaoCountAggregateOutputType | null
    _avg: ParticipacaoAvgAggregateOutputType | null
    _sum: ParticipacaoSumAggregateOutputType | null
    _min: ParticipacaoMinAggregateOutputType | null
    _max: ParticipacaoMaxAggregateOutputType | null
  }

  export type ParticipacaoAvgAggregateOutputType = {
    id: number | null
    equipeId: number | null
    campeonatoId: number | null
  }

  export type ParticipacaoSumAggregateOutputType = {
    id: number | null
    equipeId: number | null
    campeonatoId: number | null
  }

  export type ParticipacaoMinAggregateOutputType = {
    id: number | null
    equipeId: number | null
    campeonatoId: number | null
  }

  export type ParticipacaoMaxAggregateOutputType = {
    id: number | null
    equipeId: number | null
    campeonatoId: number | null
  }

  export type ParticipacaoCountAggregateOutputType = {
    id: number
    equipeId: number
    campeonatoId: number
    _all: number
  }


  export type ParticipacaoAvgAggregateInputType = {
    id?: true
    equipeId?: true
    campeonatoId?: true
  }

  export type ParticipacaoSumAggregateInputType = {
    id?: true
    equipeId?: true
    campeonatoId?: true
  }

  export type ParticipacaoMinAggregateInputType = {
    id?: true
    equipeId?: true
    campeonatoId?: true
  }

  export type ParticipacaoMaxAggregateInputType = {
    id?: true
    equipeId?: true
    campeonatoId?: true
  }

  export type ParticipacaoCountAggregateInputType = {
    id?: true
    equipeId?: true
    campeonatoId?: true
    _all?: true
  }

  export type ParticipacaoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Participacao to aggregate.
     */
    where?: ParticipacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Participacaos to fetch.
     */
    orderBy?: ParticipacaoOrderByWithRelationInput | ParticipacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ParticipacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Participacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Participacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Participacaos
    **/
    _count?: true | ParticipacaoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ParticipacaoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ParticipacaoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ParticipacaoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ParticipacaoMaxAggregateInputType
  }

  export type GetParticipacaoAggregateType<T extends ParticipacaoAggregateArgs> = {
        [P in keyof T & keyof AggregateParticipacao]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateParticipacao[P]>
      : GetScalarType<T[P], AggregateParticipacao[P]>
  }




  export type ParticipacaoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParticipacaoWhereInput
    orderBy?: ParticipacaoOrderByWithAggregationInput | ParticipacaoOrderByWithAggregationInput[]
    by: ParticipacaoScalarFieldEnum[] | ParticipacaoScalarFieldEnum
    having?: ParticipacaoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ParticipacaoCountAggregateInputType | true
    _avg?: ParticipacaoAvgAggregateInputType
    _sum?: ParticipacaoSumAggregateInputType
    _min?: ParticipacaoMinAggregateInputType
    _max?: ParticipacaoMaxAggregateInputType
  }

  export type ParticipacaoGroupByOutputType = {
    id: number
    equipeId: number
    campeonatoId: number
    _count: ParticipacaoCountAggregateOutputType | null
    _avg: ParticipacaoAvgAggregateOutputType | null
    _sum: ParticipacaoSumAggregateOutputType | null
    _min: ParticipacaoMinAggregateOutputType | null
    _max: ParticipacaoMaxAggregateOutputType | null
  }

  type GetParticipacaoGroupByPayload<T extends ParticipacaoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ParticipacaoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ParticipacaoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ParticipacaoGroupByOutputType[P]>
            : GetScalarType<T[P], ParticipacaoGroupByOutputType[P]>
        }
      >
    >


  export type ParticipacaoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    equipeId?: boolean
    campeonatoId?: boolean
    equipe?: boolean | EquipeDefaultArgs<ExtArgs>
    campeonato?: boolean | CampeonatoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["participacao"]>

  export type ParticipacaoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    equipeId?: boolean
    campeonatoId?: boolean
    equipe?: boolean | EquipeDefaultArgs<ExtArgs>
    campeonato?: boolean | CampeonatoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["participacao"]>

  export type ParticipacaoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    equipeId?: boolean
    campeonatoId?: boolean
    equipe?: boolean | EquipeDefaultArgs<ExtArgs>
    campeonato?: boolean | CampeonatoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["participacao"]>

  export type ParticipacaoSelectScalar = {
    id?: boolean
    equipeId?: boolean
    campeonatoId?: boolean
  }

  export type ParticipacaoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "equipeId" | "campeonatoId", ExtArgs["result"]["participacao"]>
  export type ParticipacaoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    equipe?: boolean | EquipeDefaultArgs<ExtArgs>
    campeonato?: boolean | CampeonatoDefaultArgs<ExtArgs>
  }
  export type ParticipacaoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    equipe?: boolean | EquipeDefaultArgs<ExtArgs>
    campeonato?: boolean | CampeonatoDefaultArgs<ExtArgs>
  }
  export type ParticipacaoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    equipe?: boolean | EquipeDefaultArgs<ExtArgs>
    campeonato?: boolean | CampeonatoDefaultArgs<ExtArgs>
  }

  export type $ParticipacaoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Participacao"
    objects: {
      equipe: Prisma.$EquipePayload<ExtArgs>
      campeonato: Prisma.$CampeonatoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      equipeId: number
      campeonatoId: number
    }, ExtArgs["result"]["participacao"]>
    composites: {}
  }

  type ParticipacaoGetPayload<S extends boolean | null | undefined | ParticipacaoDefaultArgs> = $Result.GetResult<Prisma.$ParticipacaoPayload, S>

  type ParticipacaoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ParticipacaoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ParticipacaoCountAggregateInputType | true
    }

  export interface ParticipacaoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Participacao'], meta: { name: 'Participacao' } }
    /**
     * Find zero or one Participacao that matches the filter.
     * @param {ParticipacaoFindUniqueArgs} args - Arguments to find a Participacao
     * @example
     * // Get one Participacao
     * const participacao = await prisma.participacao.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ParticipacaoFindUniqueArgs>(args: SelectSubset<T, ParticipacaoFindUniqueArgs<ExtArgs>>): Prisma__ParticipacaoClient<$Result.GetResult<Prisma.$ParticipacaoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Participacao that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ParticipacaoFindUniqueOrThrowArgs} args - Arguments to find a Participacao
     * @example
     * // Get one Participacao
     * const participacao = await prisma.participacao.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ParticipacaoFindUniqueOrThrowArgs>(args: SelectSubset<T, ParticipacaoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ParticipacaoClient<$Result.GetResult<Prisma.$ParticipacaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Participacao that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipacaoFindFirstArgs} args - Arguments to find a Participacao
     * @example
     * // Get one Participacao
     * const participacao = await prisma.participacao.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ParticipacaoFindFirstArgs>(args?: SelectSubset<T, ParticipacaoFindFirstArgs<ExtArgs>>): Prisma__ParticipacaoClient<$Result.GetResult<Prisma.$ParticipacaoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Participacao that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipacaoFindFirstOrThrowArgs} args - Arguments to find a Participacao
     * @example
     * // Get one Participacao
     * const participacao = await prisma.participacao.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ParticipacaoFindFirstOrThrowArgs>(args?: SelectSubset<T, ParticipacaoFindFirstOrThrowArgs<ExtArgs>>): Prisma__ParticipacaoClient<$Result.GetResult<Prisma.$ParticipacaoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Participacaos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipacaoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Participacaos
     * const participacaos = await prisma.participacao.findMany()
     * 
     * // Get first 10 Participacaos
     * const participacaos = await prisma.participacao.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const participacaoWithIdOnly = await prisma.participacao.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ParticipacaoFindManyArgs>(args?: SelectSubset<T, ParticipacaoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParticipacaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Participacao.
     * @param {ParticipacaoCreateArgs} args - Arguments to create a Participacao.
     * @example
     * // Create one Participacao
     * const Participacao = await prisma.participacao.create({
     *   data: {
     *     // ... data to create a Participacao
     *   }
     * })
     * 
     */
    create<T extends ParticipacaoCreateArgs>(args: SelectSubset<T, ParticipacaoCreateArgs<ExtArgs>>): Prisma__ParticipacaoClient<$Result.GetResult<Prisma.$ParticipacaoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Participacaos.
     * @param {ParticipacaoCreateManyArgs} args - Arguments to create many Participacaos.
     * @example
     * // Create many Participacaos
     * const participacao = await prisma.participacao.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ParticipacaoCreateManyArgs>(args?: SelectSubset<T, ParticipacaoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Participacaos and returns the data saved in the database.
     * @param {ParticipacaoCreateManyAndReturnArgs} args - Arguments to create many Participacaos.
     * @example
     * // Create many Participacaos
     * const participacao = await prisma.participacao.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Participacaos and only return the `id`
     * const participacaoWithIdOnly = await prisma.participacao.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ParticipacaoCreateManyAndReturnArgs>(args?: SelectSubset<T, ParticipacaoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParticipacaoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Participacao.
     * @param {ParticipacaoDeleteArgs} args - Arguments to delete one Participacao.
     * @example
     * // Delete one Participacao
     * const Participacao = await prisma.participacao.delete({
     *   where: {
     *     // ... filter to delete one Participacao
     *   }
     * })
     * 
     */
    delete<T extends ParticipacaoDeleteArgs>(args: SelectSubset<T, ParticipacaoDeleteArgs<ExtArgs>>): Prisma__ParticipacaoClient<$Result.GetResult<Prisma.$ParticipacaoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Participacao.
     * @param {ParticipacaoUpdateArgs} args - Arguments to update one Participacao.
     * @example
     * // Update one Participacao
     * const participacao = await prisma.participacao.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ParticipacaoUpdateArgs>(args: SelectSubset<T, ParticipacaoUpdateArgs<ExtArgs>>): Prisma__ParticipacaoClient<$Result.GetResult<Prisma.$ParticipacaoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Participacaos.
     * @param {ParticipacaoDeleteManyArgs} args - Arguments to filter Participacaos to delete.
     * @example
     * // Delete a few Participacaos
     * const { count } = await prisma.participacao.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ParticipacaoDeleteManyArgs>(args?: SelectSubset<T, ParticipacaoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Participacaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipacaoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Participacaos
     * const participacao = await prisma.participacao.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ParticipacaoUpdateManyArgs>(args: SelectSubset<T, ParticipacaoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Participacaos and returns the data updated in the database.
     * @param {ParticipacaoUpdateManyAndReturnArgs} args - Arguments to update many Participacaos.
     * @example
     * // Update many Participacaos
     * const participacao = await prisma.participacao.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Participacaos and only return the `id`
     * const participacaoWithIdOnly = await prisma.participacao.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ParticipacaoUpdateManyAndReturnArgs>(args: SelectSubset<T, ParticipacaoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParticipacaoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Participacao.
     * @param {ParticipacaoUpsertArgs} args - Arguments to update or create a Participacao.
     * @example
     * // Update or create a Participacao
     * const participacao = await prisma.participacao.upsert({
     *   create: {
     *     // ... data to create a Participacao
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Participacao we want to update
     *   }
     * })
     */
    upsert<T extends ParticipacaoUpsertArgs>(args: SelectSubset<T, ParticipacaoUpsertArgs<ExtArgs>>): Prisma__ParticipacaoClient<$Result.GetResult<Prisma.$ParticipacaoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Participacaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipacaoCountArgs} args - Arguments to filter Participacaos to count.
     * @example
     * // Count the number of Participacaos
     * const count = await prisma.participacao.count({
     *   where: {
     *     // ... the filter for the Participacaos we want to count
     *   }
     * })
    **/
    count<T extends ParticipacaoCountArgs>(
      args?: Subset<T, ParticipacaoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ParticipacaoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Participacao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipacaoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ParticipacaoAggregateArgs>(args: Subset<T, ParticipacaoAggregateArgs>): Prisma.PrismaPromise<GetParticipacaoAggregateType<T>>

    /**
     * Group by Participacao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipacaoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ParticipacaoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ParticipacaoGroupByArgs['orderBy'] }
        : { orderBy?: ParticipacaoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ParticipacaoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetParticipacaoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Participacao model
   */
  readonly fields: ParticipacaoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Participacao.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ParticipacaoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    equipe<T extends EquipeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EquipeDefaultArgs<ExtArgs>>): Prisma__EquipeClient<$Result.GetResult<Prisma.$EquipePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    campeonato<T extends CampeonatoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CampeonatoDefaultArgs<ExtArgs>>): Prisma__CampeonatoClient<$Result.GetResult<Prisma.$CampeonatoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Participacao model
   */
  interface ParticipacaoFieldRefs {
    readonly id: FieldRef<"Participacao", 'Int'>
    readonly equipeId: FieldRef<"Participacao", 'Int'>
    readonly campeonatoId: FieldRef<"Participacao", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Participacao findUnique
   */
  export type ParticipacaoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participacao
     */
    select?: ParticipacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participacao
     */
    omit?: ParticipacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipacaoInclude<ExtArgs> | null
    /**
     * Filter, which Participacao to fetch.
     */
    where: ParticipacaoWhereUniqueInput
  }

  /**
   * Participacao findUniqueOrThrow
   */
  export type ParticipacaoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participacao
     */
    select?: ParticipacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participacao
     */
    omit?: ParticipacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipacaoInclude<ExtArgs> | null
    /**
     * Filter, which Participacao to fetch.
     */
    where: ParticipacaoWhereUniqueInput
  }

  /**
   * Participacao findFirst
   */
  export type ParticipacaoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participacao
     */
    select?: ParticipacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participacao
     */
    omit?: ParticipacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipacaoInclude<ExtArgs> | null
    /**
     * Filter, which Participacao to fetch.
     */
    where?: ParticipacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Participacaos to fetch.
     */
    orderBy?: ParticipacaoOrderByWithRelationInput | ParticipacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Participacaos.
     */
    cursor?: ParticipacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Participacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Participacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Participacaos.
     */
    distinct?: ParticipacaoScalarFieldEnum | ParticipacaoScalarFieldEnum[]
  }

  /**
   * Participacao findFirstOrThrow
   */
  export type ParticipacaoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participacao
     */
    select?: ParticipacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participacao
     */
    omit?: ParticipacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipacaoInclude<ExtArgs> | null
    /**
     * Filter, which Participacao to fetch.
     */
    where?: ParticipacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Participacaos to fetch.
     */
    orderBy?: ParticipacaoOrderByWithRelationInput | ParticipacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Participacaos.
     */
    cursor?: ParticipacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Participacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Participacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Participacaos.
     */
    distinct?: ParticipacaoScalarFieldEnum | ParticipacaoScalarFieldEnum[]
  }

  /**
   * Participacao findMany
   */
  export type ParticipacaoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participacao
     */
    select?: ParticipacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participacao
     */
    omit?: ParticipacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipacaoInclude<ExtArgs> | null
    /**
     * Filter, which Participacaos to fetch.
     */
    where?: ParticipacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Participacaos to fetch.
     */
    orderBy?: ParticipacaoOrderByWithRelationInput | ParticipacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Participacaos.
     */
    cursor?: ParticipacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Participacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Participacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Participacaos.
     */
    distinct?: ParticipacaoScalarFieldEnum | ParticipacaoScalarFieldEnum[]
  }

  /**
   * Participacao create
   */
  export type ParticipacaoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participacao
     */
    select?: ParticipacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participacao
     */
    omit?: ParticipacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipacaoInclude<ExtArgs> | null
    /**
     * The data needed to create a Participacao.
     */
    data: XOR<ParticipacaoCreateInput, ParticipacaoUncheckedCreateInput>
  }

  /**
   * Participacao createMany
   */
  export type ParticipacaoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Participacaos.
     */
    data: ParticipacaoCreateManyInput | ParticipacaoCreateManyInput[]
  }

  /**
   * Participacao createManyAndReturn
   */
  export type ParticipacaoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participacao
     */
    select?: ParticipacaoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Participacao
     */
    omit?: ParticipacaoOmit<ExtArgs> | null
    /**
     * The data used to create many Participacaos.
     */
    data: ParticipacaoCreateManyInput | ParticipacaoCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipacaoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Participacao update
   */
  export type ParticipacaoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participacao
     */
    select?: ParticipacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participacao
     */
    omit?: ParticipacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipacaoInclude<ExtArgs> | null
    /**
     * The data needed to update a Participacao.
     */
    data: XOR<ParticipacaoUpdateInput, ParticipacaoUncheckedUpdateInput>
    /**
     * Choose, which Participacao to update.
     */
    where: ParticipacaoWhereUniqueInput
  }

  /**
   * Participacao updateMany
   */
  export type ParticipacaoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Participacaos.
     */
    data: XOR<ParticipacaoUpdateManyMutationInput, ParticipacaoUncheckedUpdateManyInput>
    /**
     * Filter which Participacaos to update
     */
    where?: ParticipacaoWhereInput
    /**
     * Limit how many Participacaos to update.
     */
    limit?: number
  }

  /**
   * Participacao updateManyAndReturn
   */
  export type ParticipacaoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participacao
     */
    select?: ParticipacaoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Participacao
     */
    omit?: ParticipacaoOmit<ExtArgs> | null
    /**
     * The data used to update Participacaos.
     */
    data: XOR<ParticipacaoUpdateManyMutationInput, ParticipacaoUncheckedUpdateManyInput>
    /**
     * Filter which Participacaos to update
     */
    where?: ParticipacaoWhereInput
    /**
     * Limit how many Participacaos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipacaoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Participacao upsert
   */
  export type ParticipacaoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participacao
     */
    select?: ParticipacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participacao
     */
    omit?: ParticipacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipacaoInclude<ExtArgs> | null
    /**
     * The filter to search for the Participacao to update in case it exists.
     */
    where: ParticipacaoWhereUniqueInput
    /**
     * In case the Participacao found by the `where` argument doesn't exist, create a new Participacao with this data.
     */
    create: XOR<ParticipacaoCreateInput, ParticipacaoUncheckedCreateInput>
    /**
     * In case the Participacao was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ParticipacaoUpdateInput, ParticipacaoUncheckedUpdateInput>
  }

  /**
   * Participacao delete
   */
  export type ParticipacaoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participacao
     */
    select?: ParticipacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participacao
     */
    omit?: ParticipacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipacaoInclude<ExtArgs> | null
    /**
     * Filter which Participacao to delete.
     */
    where: ParticipacaoWhereUniqueInput
  }

  /**
   * Participacao deleteMany
   */
  export type ParticipacaoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Participacaos to delete
     */
    where?: ParticipacaoWhereInput
    /**
     * Limit how many Participacaos to delete.
     */
    limit?: number
  }

  /**
   * Participacao without action
   */
  export type ParticipacaoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participacao
     */
    select?: ParticipacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participacao
     */
    omit?: ParticipacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipacaoInclude<ExtArgs> | null
  }


  /**
   * Model Vinculo
   */

  export type AggregateVinculo = {
    _count: VinculoCountAggregateOutputType | null
    _avg: VinculoAvgAggregateOutputType | null
    _sum: VinculoSumAggregateOutputType | null
    _min: VinculoMinAggregateOutputType | null
    _max: VinculoMaxAggregateOutputType | null
  }

  export type VinculoAvgAggregateOutputType = {
    id: number | null
    atletaId: number | null
    equipeId: number | null
  }

  export type VinculoSumAggregateOutputType = {
    id: number | null
    atletaId: number | null
    equipeId: number | null
  }

  export type VinculoMinAggregateOutputType = {
    id: number | null
    atletaId: number | null
    equipeId: number | null
    tipo: string | null
  }

  export type VinculoMaxAggregateOutputType = {
    id: number | null
    atletaId: number | null
    equipeId: number | null
    tipo: string | null
  }

  export type VinculoCountAggregateOutputType = {
    id: number
    atletaId: number
    equipeId: number
    tipo: number
    _all: number
  }


  export type VinculoAvgAggregateInputType = {
    id?: true
    atletaId?: true
    equipeId?: true
  }

  export type VinculoSumAggregateInputType = {
    id?: true
    atletaId?: true
    equipeId?: true
  }

  export type VinculoMinAggregateInputType = {
    id?: true
    atletaId?: true
    equipeId?: true
    tipo?: true
  }

  export type VinculoMaxAggregateInputType = {
    id?: true
    atletaId?: true
    equipeId?: true
    tipo?: true
  }

  export type VinculoCountAggregateInputType = {
    id?: true
    atletaId?: true
    equipeId?: true
    tipo?: true
    _all?: true
  }

  export type VinculoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vinculo to aggregate.
     */
    where?: VinculoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vinculos to fetch.
     */
    orderBy?: VinculoOrderByWithRelationInput | VinculoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VinculoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vinculos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vinculos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Vinculos
    **/
    _count?: true | VinculoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VinculoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VinculoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VinculoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VinculoMaxAggregateInputType
  }

  export type GetVinculoAggregateType<T extends VinculoAggregateArgs> = {
        [P in keyof T & keyof AggregateVinculo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVinculo[P]>
      : GetScalarType<T[P], AggregateVinculo[P]>
  }




  export type VinculoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VinculoWhereInput
    orderBy?: VinculoOrderByWithAggregationInput | VinculoOrderByWithAggregationInput[]
    by: VinculoScalarFieldEnum[] | VinculoScalarFieldEnum
    having?: VinculoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VinculoCountAggregateInputType | true
    _avg?: VinculoAvgAggregateInputType
    _sum?: VinculoSumAggregateInputType
    _min?: VinculoMinAggregateInputType
    _max?: VinculoMaxAggregateInputType
  }

  export type VinculoGroupByOutputType = {
    id: number
    atletaId: number
    equipeId: number
    tipo: string
    _count: VinculoCountAggregateOutputType | null
    _avg: VinculoAvgAggregateOutputType | null
    _sum: VinculoSumAggregateOutputType | null
    _min: VinculoMinAggregateOutputType | null
    _max: VinculoMaxAggregateOutputType | null
  }

  type GetVinculoGroupByPayload<T extends VinculoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VinculoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VinculoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VinculoGroupByOutputType[P]>
            : GetScalarType<T[P], VinculoGroupByOutputType[P]>
        }
      >
    >


  export type VinculoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    atletaId?: boolean
    equipeId?: boolean
    tipo?: boolean
    atleta?: boolean | AtletaDefaultArgs<ExtArgs>
    equipe?: boolean | EquipeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vinculo"]>

  export type VinculoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    atletaId?: boolean
    equipeId?: boolean
    tipo?: boolean
    atleta?: boolean | AtletaDefaultArgs<ExtArgs>
    equipe?: boolean | EquipeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vinculo"]>

  export type VinculoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    atletaId?: boolean
    equipeId?: boolean
    tipo?: boolean
    atleta?: boolean | AtletaDefaultArgs<ExtArgs>
    equipe?: boolean | EquipeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vinculo"]>

  export type VinculoSelectScalar = {
    id?: boolean
    atletaId?: boolean
    equipeId?: boolean
    tipo?: boolean
  }

  export type VinculoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "atletaId" | "equipeId" | "tipo", ExtArgs["result"]["vinculo"]>
  export type VinculoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    atleta?: boolean | AtletaDefaultArgs<ExtArgs>
    equipe?: boolean | EquipeDefaultArgs<ExtArgs>
  }
  export type VinculoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    atleta?: boolean | AtletaDefaultArgs<ExtArgs>
    equipe?: boolean | EquipeDefaultArgs<ExtArgs>
  }
  export type VinculoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    atleta?: boolean | AtletaDefaultArgs<ExtArgs>
    equipe?: boolean | EquipeDefaultArgs<ExtArgs>
  }

  export type $VinculoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Vinculo"
    objects: {
      atleta: Prisma.$AtletaPayload<ExtArgs>
      equipe: Prisma.$EquipePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      atletaId: number
      equipeId: number
      tipo: string
    }, ExtArgs["result"]["vinculo"]>
    composites: {}
  }

  type VinculoGetPayload<S extends boolean | null | undefined | VinculoDefaultArgs> = $Result.GetResult<Prisma.$VinculoPayload, S>

  type VinculoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VinculoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VinculoCountAggregateInputType | true
    }

  export interface VinculoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Vinculo'], meta: { name: 'Vinculo' } }
    /**
     * Find zero or one Vinculo that matches the filter.
     * @param {VinculoFindUniqueArgs} args - Arguments to find a Vinculo
     * @example
     * // Get one Vinculo
     * const vinculo = await prisma.vinculo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VinculoFindUniqueArgs>(args: SelectSubset<T, VinculoFindUniqueArgs<ExtArgs>>): Prisma__VinculoClient<$Result.GetResult<Prisma.$VinculoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Vinculo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VinculoFindUniqueOrThrowArgs} args - Arguments to find a Vinculo
     * @example
     * // Get one Vinculo
     * const vinculo = await prisma.vinculo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VinculoFindUniqueOrThrowArgs>(args: SelectSubset<T, VinculoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VinculoClient<$Result.GetResult<Prisma.$VinculoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vinculo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VinculoFindFirstArgs} args - Arguments to find a Vinculo
     * @example
     * // Get one Vinculo
     * const vinculo = await prisma.vinculo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VinculoFindFirstArgs>(args?: SelectSubset<T, VinculoFindFirstArgs<ExtArgs>>): Prisma__VinculoClient<$Result.GetResult<Prisma.$VinculoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vinculo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VinculoFindFirstOrThrowArgs} args - Arguments to find a Vinculo
     * @example
     * // Get one Vinculo
     * const vinculo = await prisma.vinculo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VinculoFindFirstOrThrowArgs>(args?: SelectSubset<T, VinculoFindFirstOrThrowArgs<ExtArgs>>): Prisma__VinculoClient<$Result.GetResult<Prisma.$VinculoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Vinculos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VinculoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Vinculos
     * const vinculos = await prisma.vinculo.findMany()
     * 
     * // Get first 10 Vinculos
     * const vinculos = await prisma.vinculo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const vinculoWithIdOnly = await prisma.vinculo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VinculoFindManyArgs>(args?: SelectSubset<T, VinculoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VinculoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Vinculo.
     * @param {VinculoCreateArgs} args - Arguments to create a Vinculo.
     * @example
     * // Create one Vinculo
     * const Vinculo = await prisma.vinculo.create({
     *   data: {
     *     // ... data to create a Vinculo
     *   }
     * })
     * 
     */
    create<T extends VinculoCreateArgs>(args: SelectSubset<T, VinculoCreateArgs<ExtArgs>>): Prisma__VinculoClient<$Result.GetResult<Prisma.$VinculoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Vinculos.
     * @param {VinculoCreateManyArgs} args - Arguments to create many Vinculos.
     * @example
     * // Create many Vinculos
     * const vinculo = await prisma.vinculo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VinculoCreateManyArgs>(args?: SelectSubset<T, VinculoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Vinculos and returns the data saved in the database.
     * @param {VinculoCreateManyAndReturnArgs} args - Arguments to create many Vinculos.
     * @example
     * // Create many Vinculos
     * const vinculo = await prisma.vinculo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Vinculos and only return the `id`
     * const vinculoWithIdOnly = await prisma.vinculo.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VinculoCreateManyAndReturnArgs>(args?: SelectSubset<T, VinculoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VinculoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Vinculo.
     * @param {VinculoDeleteArgs} args - Arguments to delete one Vinculo.
     * @example
     * // Delete one Vinculo
     * const Vinculo = await prisma.vinculo.delete({
     *   where: {
     *     // ... filter to delete one Vinculo
     *   }
     * })
     * 
     */
    delete<T extends VinculoDeleteArgs>(args: SelectSubset<T, VinculoDeleteArgs<ExtArgs>>): Prisma__VinculoClient<$Result.GetResult<Prisma.$VinculoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Vinculo.
     * @param {VinculoUpdateArgs} args - Arguments to update one Vinculo.
     * @example
     * // Update one Vinculo
     * const vinculo = await prisma.vinculo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VinculoUpdateArgs>(args: SelectSubset<T, VinculoUpdateArgs<ExtArgs>>): Prisma__VinculoClient<$Result.GetResult<Prisma.$VinculoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Vinculos.
     * @param {VinculoDeleteManyArgs} args - Arguments to filter Vinculos to delete.
     * @example
     * // Delete a few Vinculos
     * const { count } = await prisma.vinculo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VinculoDeleteManyArgs>(args?: SelectSubset<T, VinculoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vinculos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VinculoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Vinculos
     * const vinculo = await prisma.vinculo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VinculoUpdateManyArgs>(args: SelectSubset<T, VinculoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vinculos and returns the data updated in the database.
     * @param {VinculoUpdateManyAndReturnArgs} args - Arguments to update many Vinculos.
     * @example
     * // Update many Vinculos
     * const vinculo = await prisma.vinculo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Vinculos and only return the `id`
     * const vinculoWithIdOnly = await prisma.vinculo.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VinculoUpdateManyAndReturnArgs>(args: SelectSubset<T, VinculoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VinculoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Vinculo.
     * @param {VinculoUpsertArgs} args - Arguments to update or create a Vinculo.
     * @example
     * // Update or create a Vinculo
     * const vinculo = await prisma.vinculo.upsert({
     *   create: {
     *     // ... data to create a Vinculo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Vinculo we want to update
     *   }
     * })
     */
    upsert<T extends VinculoUpsertArgs>(args: SelectSubset<T, VinculoUpsertArgs<ExtArgs>>): Prisma__VinculoClient<$Result.GetResult<Prisma.$VinculoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Vinculos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VinculoCountArgs} args - Arguments to filter Vinculos to count.
     * @example
     * // Count the number of Vinculos
     * const count = await prisma.vinculo.count({
     *   where: {
     *     // ... the filter for the Vinculos we want to count
     *   }
     * })
    **/
    count<T extends VinculoCountArgs>(
      args?: Subset<T, VinculoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VinculoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Vinculo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VinculoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VinculoAggregateArgs>(args: Subset<T, VinculoAggregateArgs>): Prisma.PrismaPromise<GetVinculoAggregateType<T>>

    /**
     * Group by Vinculo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VinculoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VinculoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VinculoGroupByArgs['orderBy'] }
        : { orderBy?: VinculoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VinculoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVinculoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Vinculo model
   */
  readonly fields: VinculoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Vinculo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VinculoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    atleta<T extends AtletaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AtletaDefaultArgs<ExtArgs>>): Prisma__AtletaClient<$Result.GetResult<Prisma.$AtletaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    equipe<T extends EquipeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EquipeDefaultArgs<ExtArgs>>): Prisma__EquipeClient<$Result.GetResult<Prisma.$EquipePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Vinculo model
   */
  interface VinculoFieldRefs {
    readonly id: FieldRef<"Vinculo", 'Int'>
    readonly atletaId: FieldRef<"Vinculo", 'Int'>
    readonly equipeId: FieldRef<"Vinculo", 'Int'>
    readonly tipo: FieldRef<"Vinculo", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Vinculo findUnique
   */
  export type VinculoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vinculo
     */
    select?: VinculoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vinculo
     */
    omit?: VinculoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VinculoInclude<ExtArgs> | null
    /**
     * Filter, which Vinculo to fetch.
     */
    where: VinculoWhereUniqueInput
  }

  /**
   * Vinculo findUniqueOrThrow
   */
  export type VinculoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vinculo
     */
    select?: VinculoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vinculo
     */
    omit?: VinculoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VinculoInclude<ExtArgs> | null
    /**
     * Filter, which Vinculo to fetch.
     */
    where: VinculoWhereUniqueInput
  }

  /**
   * Vinculo findFirst
   */
  export type VinculoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vinculo
     */
    select?: VinculoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vinculo
     */
    omit?: VinculoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VinculoInclude<ExtArgs> | null
    /**
     * Filter, which Vinculo to fetch.
     */
    where?: VinculoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vinculos to fetch.
     */
    orderBy?: VinculoOrderByWithRelationInput | VinculoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vinculos.
     */
    cursor?: VinculoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vinculos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vinculos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vinculos.
     */
    distinct?: VinculoScalarFieldEnum | VinculoScalarFieldEnum[]
  }

  /**
   * Vinculo findFirstOrThrow
   */
  export type VinculoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vinculo
     */
    select?: VinculoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vinculo
     */
    omit?: VinculoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VinculoInclude<ExtArgs> | null
    /**
     * Filter, which Vinculo to fetch.
     */
    where?: VinculoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vinculos to fetch.
     */
    orderBy?: VinculoOrderByWithRelationInput | VinculoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vinculos.
     */
    cursor?: VinculoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vinculos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vinculos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vinculos.
     */
    distinct?: VinculoScalarFieldEnum | VinculoScalarFieldEnum[]
  }

  /**
   * Vinculo findMany
   */
  export type VinculoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vinculo
     */
    select?: VinculoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vinculo
     */
    omit?: VinculoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VinculoInclude<ExtArgs> | null
    /**
     * Filter, which Vinculos to fetch.
     */
    where?: VinculoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vinculos to fetch.
     */
    orderBy?: VinculoOrderByWithRelationInput | VinculoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Vinculos.
     */
    cursor?: VinculoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vinculos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vinculos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vinculos.
     */
    distinct?: VinculoScalarFieldEnum | VinculoScalarFieldEnum[]
  }

  /**
   * Vinculo create
   */
  export type VinculoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vinculo
     */
    select?: VinculoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vinculo
     */
    omit?: VinculoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VinculoInclude<ExtArgs> | null
    /**
     * The data needed to create a Vinculo.
     */
    data: XOR<VinculoCreateInput, VinculoUncheckedCreateInput>
  }

  /**
   * Vinculo createMany
   */
  export type VinculoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Vinculos.
     */
    data: VinculoCreateManyInput | VinculoCreateManyInput[]
  }

  /**
   * Vinculo createManyAndReturn
   */
  export type VinculoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vinculo
     */
    select?: VinculoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Vinculo
     */
    omit?: VinculoOmit<ExtArgs> | null
    /**
     * The data used to create many Vinculos.
     */
    data: VinculoCreateManyInput | VinculoCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VinculoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Vinculo update
   */
  export type VinculoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vinculo
     */
    select?: VinculoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vinculo
     */
    omit?: VinculoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VinculoInclude<ExtArgs> | null
    /**
     * The data needed to update a Vinculo.
     */
    data: XOR<VinculoUpdateInput, VinculoUncheckedUpdateInput>
    /**
     * Choose, which Vinculo to update.
     */
    where: VinculoWhereUniqueInput
  }

  /**
   * Vinculo updateMany
   */
  export type VinculoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Vinculos.
     */
    data: XOR<VinculoUpdateManyMutationInput, VinculoUncheckedUpdateManyInput>
    /**
     * Filter which Vinculos to update
     */
    where?: VinculoWhereInput
    /**
     * Limit how many Vinculos to update.
     */
    limit?: number
  }

  /**
   * Vinculo updateManyAndReturn
   */
  export type VinculoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vinculo
     */
    select?: VinculoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Vinculo
     */
    omit?: VinculoOmit<ExtArgs> | null
    /**
     * The data used to update Vinculos.
     */
    data: XOR<VinculoUpdateManyMutationInput, VinculoUncheckedUpdateManyInput>
    /**
     * Filter which Vinculos to update
     */
    where?: VinculoWhereInput
    /**
     * Limit how many Vinculos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VinculoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Vinculo upsert
   */
  export type VinculoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vinculo
     */
    select?: VinculoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vinculo
     */
    omit?: VinculoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VinculoInclude<ExtArgs> | null
    /**
     * The filter to search for the Vinculo to update in case it exists.
     */
    where: VinculoWhereUniqueInput
    /**
     * In case the Vinculo found by the `where` argument doesn't exist, create a new Vinculo with this data.
     */
    create: XOR<VinculoCreateInput, VinculoUncheckedCreateInput>
    /**
     * In case the Vinculo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VinculoUpdateInput, VinculoUncheckedUpdateInput>
  }

  /**
   * Vinculo delete
   */
  export type VinculoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vinculo
     */
    select?: VinculoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vinculo
     */
    omit?: VinculoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VinculoInclude<ExtArgs> | null
    /**
     * Filter which Vinculo to delete.
     */
    where: VinculoWhereUniqueInput
  }

  /**
   * Vinculo deleteMany
   */
  export type VinculoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vinculos to delete
     */
    where?: VinculoWhereInput
    /**
     * Limit how many Vinculos to delete.
     */
    limit?: number
  }

  /**
   * Vinculo without action
   */
  export type VinculoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vinculo
     */
    select?: VinculoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vinculo
     */
    omit?: VinculoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VinculoInclude<ExtArgs> | null
  }


  /**
   * Model Jogo
   */

  export type AggregateJogo = {
    _count: JogoCountAggregateOutputType | null
    _avg: JogoAvgAggregateOutputType | null
    _sum: JogoSumAggregateOutputType | null
    _min: JogoMinAggregateOutputType | null
    _max: JogoMaxAggregateOutputType | null
  }

  export type JogoAvgAggregateOutputType = {
    id: number | null
    numero: number | null
    campeonatoId: number | null
    mandanteId: number | null
    visitanteId: number | null
    golsMandante: number | null
    golsVisitante: number | null
  }

  export type JogoSumAggregateOutputType = {
    id: number | null
    numero: number | null
    campeonatoId: number | null
    mandanteId: number | null
    visitanteId: number | null
    golsMandante: number | null
    golsVisitante: number | null
  }

  export type JogoMinAggregateOutputType = {
    id: number | null
    numero: number | null
    campeonatoId: number | null
    mandanteId: number | null
    mandanteNome: string | null
    visitanteId: number | null
    visitanteNome: string | null
    golsMandante: number | null
    golsVisitante: number | null
    status: string | null
  }

  export type JogoMaxAggregateOutputType = {
    id: number | null
    numero: number | null
    campeonatoId: number | null
    mandanteId: number | null
    mandanteNome: string | null
    visitanteId: number | null
    visitanteNome: string | null
    golsMandante: number | null
    golsVisitante: number | null
    status: string | null
  }

  export type JogoCountAggregateOutputType = {
    id: number
    numero: number
    campeonatoId: number
    mandanteId: number
    mandanteNome: number
    visitanteId: number
    visitanteNome: number
    golsMandante: number
    golsVisitante: number
    status: number
    _all: number
  }


  export type JogoAvgAggregateInputType = {
    id?: true
    numero?: true
    campeonatoId?: true
    mandanteId?: true
    visitanteId?: true
    golsMandante?: true
    golsVisitante?: true
  }

  export type JogoSumAggregateInputType = {
    id?: true
    numero?: true
    campeonatoId?: true
    mandanteId?: true
    visitanteId?: true
    golsMandante?: true
    golsVisitante?: true
  }

  export type JogoMinAggregateInputType = {
    id?: true
    numero?: true
    campeonatoId?: true
    mandanteId?: true
    mandanteNome?: true
    visitanteId?: true
    visitanteNome?: true
    golsMandante?: true
    golsVisitante?: true
    status?: true
  }

  export type JogoMaxAggregateInputType = {
    id?: true
    numero?: true
    campeonatoId?: true
    mandanteId?: true
    mandanteNome?: true
    visitanteId?: true
    visitanteNome?: true
    golsMandante?: true
    golsVisitante?: true
    status?: true
  }

  export type JogoCountAggregateInputType = {
    id?: true
    numero?: true
    campeonatoId?: true
    mandanteId?: true
    mandanteNome?: true
    visitanteId?: true
    visitanteNome?: true
    golsMandante?: true
    golsVisitante?: true
    status?: true
    _all?: true
  }

  export type JogoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Jogo to aggregate.
     */
    where?: JogoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jogos to fetch.
     */
    orderBy?: JogoOrderByWithRelationInput | JogoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: JogoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jogos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jogos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Jogos
    **/
    _count?: true | JogoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: JogoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: JogoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: JogoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: JogoMaxAggregateInputType
  }

  export type GetJogoAggregateType<T extends JogoAggregateArgs> = {
        [P in keyof T & keyof AggregateJogo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJogo[P]>
      : GetScalarType<T[P], AggregateJogo[P]>
  }




  export type JogoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JogoWhereInput
    orderBy?: JogoOrderByWithAggregationInput | JogoOrderByWithAggregationInput[]
    by: JogoScalarFieldEnum[] | JogoScalarFieldEnum
    having?: JogoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: JogoCountAggregateInputType | true
    _avg?: JogoAvgAggregateInputType
    _sum?: JogoSumAggregateInputType
    _min?: JogoMinAggregateInputType
    _max?: JogoMaxAggregateInputType
  }

  export type JogoGroupByOutputType = {
    id: number
    numero: number
    campeonatoId: number
    mandanteId: number
    mandanteNome: string
    visitanteId: number
    visitanteNome: string
    golsMandante: number
    golsVisitante: number
    status: string
    _count: JogoCountAggregateOutputType | null
    _avg: JogoAvgAggregateOutputType | null
    _sum: JogoSumAggregateOutputType | null
    _min: JogoMinAggregateOutputType | null
    _max: JogoMaxAggregateOutputType | null
  }

  type GetJogoGroupByPayload<T extends JogoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<JogoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof JogoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JogoGroupByOutputType[P]>
            : GetScalarType<T[P], JogoGroupByOutputType[P]>
        }
      >
    >


  export type JogoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    numero?: boolean
    campeonatoId?: boolean
    mandanteId?: boolean
    mandanteNome?: boolean
    visitanteId?: boolean
    visitanteNome?: boolean
    golsMandante?: boolean
    golsVisitante?: boolean
    status?: boolean
    campeonato?: boolean | CampeonatoDefaultArgs<ExtArgs>
    mandante?: boolean | EquipeDefaultArgs<ExtArgs>
    visitante?: boolean | EquipeDefaultArgs<ExtArgs>
    eventos?: boolean | Jogo$eventosArgs<ExtArgs>
    _count?: boolean | JogoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jogo"]>

  export type JogoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    numero?: boolean
    campeonatoId?: boolean
    mandanteId?: boolean
    mandanteNome?: boolean
    visitanteId?: boolean
    visitanteNome?: boolean
    golsMandante?: boolean
    golsVisitante?: boolean
    status?: boolean
    campeonato?: boolean | CampeonatoDefaultArgs<ExtArgs>
    mandante?: boolean | EquipeDefaultArgs<ExtArgs>
    visitante?: boolean | EquipeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jogo"]>

  export type JogoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    numero?: boolean
    campeonatoId?: boolean
    mandanteId?: boolean
    mandanteNome?: boolean
    visitanteId?: boolean
    visitanteNome?: boolean
    golsMandante?: boolean
    golsVisitante?: boolean
    status?: boolean
    campeonato?: boolean | CampeonatoDefaultArgs<ExtArgs>
    mandante?: boolean | EquipeDefaultArgs<ExtArgs>
    visitante?: boolean | EquipeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jogo"]>

  export type JogoSelectScalar = {
    id?: boolean
    numero?: boolean
    campeonatoId?: boolean
    mandanteId?: boolean
    mandanteNome?: boolean
    visitanteId?: boolean
    visitanteNome?: boolean
    golsMandante?: boolean
    golsVisitante?: boolean
    status?: boolean
  }

  export type JogoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "numero" | "campeonatoId" | "mandanteId" | "mandanteNome" | "visitanteId" | "visitanteNome" | "golsMandante" | "golsVisitante" | "status", ExtArgs["result"]["jogo"]>
  export type JogoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    campeonato?: boolean | CampeonatoDefaultArgs<ExtArgs>
    mandante?: boolean | EquipeDefaultArgs<ExtArgs>
    visitante?: boolean | EquipeDefaultArgs<ExtArgs>
    eventos?: boolean | Jogo$eventosArgs<ExtArgs>
    _count?: boolean | JogoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type JogoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    campeonato?: boolean | CampeonatoDefaultArgs<ExtArgs>
    mandante?: boolean | EquipeDefaultArgs<ExtArgs>
    visitante?: boolean | EquipeDefaultArgs<ExtArgs>
  }
  export type JogoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    campeonato?: boolean | CampeonatoDefaultArgs<ExtArgs>
    mandante?: boolean | EquipeDefaultArgs<ExtArgs>
    visitante?: boolean | EquipeDefaultArgs<ExtArgs>
  }

  export type $JogoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Jogo"
    objects: {
      campeonato: Prisma.$CampeonatoPayload<ExtArgs>
      mandante: Prisma.$EquipePayload<ExtArgs>
      visitante: Prisma.$EquipePayload<ExtArgs>
      eventos: Prisma.$EventoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      numero: number
      campeonatoId: number
      mandanteId: number
      mandanteNome: string
      visitanteId: number
      visitanteNome: string
      golsMandante: number
      golsVisitante: number
      status: string
    }, ExtArgs["result"]["jogo"]>
    composites: {}
  }

  type JogoGetPayload<S extends boolean | null | undefined | JogoDefaultArgs> = $Result.GetResult<Prisma.$JogoPayload, S>

  type JogoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<JogoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: JogoCountAggregateInputType | true
    }

  export interface JogoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Jogo'], meta: { name: 'Jogo' } }
    /**
     * Find zero or one Jogo that matches the filter.
     * @param {JogoFindUniqueArgs} args - Arguments to find a Jogo
     * @example
     * // Get one Jogo
     * const jogo = await prisma.jogo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends JogoFindUniqueArgs>(args: SelectSubset<T, JogoFindUniqueArgs<ExtArgs>>): Prisma__JogoClient<$Result.GetResult<Prisma.$JogoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Jogo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {JogoFindUniqueOrThrowArgs} args - Arguments to find a Jogo
     * @example
     * // Get one Jogo
     * const jogo = await prisma.jogo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends JogoFindUniqueOrThrowArgs>(args: SelectSubset<T, JogoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__JogoClient<$Result.GetResult<Prisma.$JogoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Jogo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JogoFindFirstArgs} args - Arguments to find a Jogo
     * @example
     * // Get one Jogo
     * const jogo = await prisma.jogo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends JogoFindFirstArgs>(args?: SelectSubset<T, JogoFindFirstArgs<ExtArgs>>): Prisma__JogoClient<$Result.GetResult<Prisma.$JogoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Jogo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JogoFindFirstOrThrowArgs} args - Arguments to find a Jogo
     * @example
     * // Get one Jogo
     * const jogo = await prisma.jogo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends JogoFindFirstOrThrowArgs>(args?: SelectSubset<T, JogoFindFirstOrThrowArgs<ExtArgs>>): Prisma__JogoClient<$Result.GetResult<Prisma.$JogoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Jogos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JogoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Jogos
     * const jogos = await prisma.jogo.findMany()
     * 
     * // Get first 10 Jogos
     * const jogos = await prisma.jogo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const jogoWithIdOnly = await prisma.jogo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends JogoFindManyArgs>(args?: SelectSubset<T, JogoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JogoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Jogo.
     * @param {JogoCreateArgs} args - Arguments to create a Jogo.
     * @example
     * // Create one Jogo
     * const Jogo = await prisma.jogo.create({
     *   data: {
     *     // ... data to create a Jogo
     *   }
     * })
     * 
     */
    create<T extends JogoCreateArgs>(args: SelectSubset<T, JogoCreateArgs<ExtArgs>>): Prisma__JogoClient<$Result.GetResult<Prisma.$JogoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Jogos.
     * @param {JogoCreateManyArgs} args - Arguments to create many Jogos.
     * @example
     * // Create many Jogos
     * const jogo = await prisma.jogo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends JogoCreateManyArgs>(args?: SelectSubset<T, JogoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Jogos and returns the data saved in the database.
     * @param {JogoCreateManyAndReturnArgs} args - Arguments to create many Jogos.
     * @example
     * // Create many Jogos
     * const jogo = await prisma.jogo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Jogos and only return the `id`
     * const jogoWithIdOnly = await prisma.jogo.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends JogoCreateManyAndReturnArgs>(args?: SelectSubset<T, JogoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JogoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Jogo.
     * @param {JogoDeleteArgs} args - Arguments to delete one Jogo.
     * @example
     * // Delete one Jogo
     * const Jogo = await prisma.jogo.delete({
     *   where: {
     *     // ... filter to delete one Jogo
     *   }
     * })
     * 
     */
    delete<T extends JogoDeleteArgs>(args: SelectSubset<T, JogoDeleteArgs<ExtArgs>>): Prisma__JogoClient<$Result.GetResult<Prisma.$JogoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Jogo.
     * @param {JogoUpdateArgs} args - Arguments to update one Jogo.
     * @example
     * // Update one Jogo
     * const jogo = await prisma.jogo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends JogoUpdateArgs>(args: SelectSubset<T, JogoUpdateArgs<ExtArgs>>): Prisma__JogoClient<$Result.GetResult<Prisma.$JogoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Jogos.
     * @param {JogoDeleteManyArgs} args - Arguments to filter Jogos to delete.
     * @example
     * // Delete a few Jogos
     * const { count } = await prisma.jogo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends JogoDeleteManyArgs>(args?: SelectSubset<T, JogoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Jogos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JogoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Jogos
     * const jogo = await prisma.jogo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends JogoUpdateManyArgs>(args: SelectSubset<T, JogoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Jogos and returns the data updated in the database.
     * @param {JogoUpdateManyAndReturnArgs} args - Arguments to update many Jogos.
     * @example
     * // Update many Jogos
     * const jogo = await prisma.jogo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Jogos and only return the `id`
     * const jogoWithIdOnly = await prisma.jogo.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends JogoUpdateManyAndReturnArgs>(args: SelectSubset<T, JogoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JogoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Jogo.
     * @param {JogoUpsertArgs} args - Arguments to update or create a Jogo.
     * @example
     * // Update or create a Jogo
     * const jogo = await prisma.jogo.upsert({
     *   create: {
     *     // ... data to create a Jogo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Jogo we want to update
     *   }
     * })
     */
    upsert<T extends JogoUpsertArgs>(args: SelectSubset<T, JogoUpsertArgs<ExtArgs>>): Prisma__JogoClient<$Result.GetResult<Prisma.$JogoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Jogos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JogoCountArgs} args - Arguments to filter Jogos to count.
     * @example
     * // Count the number of Jogos
     * const count = await prisma.jogo.count({
     *   where: {
     *     // ... the filter for the Jogos we want to count
     *   }
     * })
    **/
    count<T extends JogoCountArgs>(
      args?: Subset<T, JogoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JogoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Jogo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JogoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends JogoAggregateArgs>(args: Subset<T, JogoAggregateArgs>): Prisma.PrismaPromise<GetJogoAggregateType<T>>

    /**
     * Group by Jogo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JogoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends JogoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: JogoGroupByArgs['orderBy'] }
        : { orderBy?: JogoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, JogoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJogoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Jogo model
   */
  readonly fields: JogoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Jogo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__JogoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    campeonato<T extends CampeonatoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CampeonatoDefaultArgs<ExtArgs>>): Prisma__CampeonatoClient<$Result.GetResult<Prisma.$CampeonatoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    mandante<T extends EquipeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EquipeDefaultArgs<ExtArgs>>): Prisma__EquipeClient<$Result.GetResult<Prisma.$EquipePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    visitante<T extends EquipeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EquipeDefaultArgs<ExtArgs>>): Prisma__EquipeClient<$Result.GetResult<Prisma.$EquipePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    eventos<T extends Jogo$eventosArgs<ExtArgs> = {}>(args?: Subset<T, Jogo$eventosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Jogo model
   */
  interface JogoFieldRefs {
    readonly id: FieldRef<"Jogo", 'Int'>
    readonly numero: FieldRef<"Jogo", 'Int'>
    readonly campeonatoId: FieldRef<"Jogo", 'Int'>
    readonly mandanteId: FieldRef<"Jogo", 'Int'>
    readonly mandanteNome: FieldRef<"Jogo", 'String'>
    readonly visitanteId: FieldRef<"Jogo", 'Int'>
    readonly visitanteNome: FieldRef<"Jogo", 'String'>
    readonly golsMandante: FieldRef<"Jogo", 'Int'>
    readonly golsVisitante: FieldRef<"Jogo", 'Int'>
    readonly status: FieldRef<"Jogo", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Jogo findUnique
   */
  export type JogoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jogo
     */
    select?: JogoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jogo
     */
    omit?: JogoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JogoInclude<ExtArgs> | null
    /**
     * Filter, which Jogo to fetch.
     */
    where: JogoWhereUniqueInput
  }

  /**
   * Jogo findUniqueOrThrow
   */
  export type JogoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jogo
     */
    select?: JogoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jogo
     */
    omit?: JogoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JogoInclude<ExtArgs> | null
    /**
     * Filter, which Jogo to fetch.
     */
    where: JogoWhereUniqueInput
  }

  /**
   * Jogo findFirst
   */
  export type JogoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jogo
     */
    select?: JogoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jogo
     */
    omit?: JogoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JogoInclude<ExtArgs> | null
    /**
     * Filter, which Jogo to fetch.
     */
    where?: JogoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jogos to fetch.
     */
    orderBy?: JogoOrderByWithRelationInput | JogoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Jogos.
     */
    cursor?: JogoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jogos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jogos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Jogos.
     */
    distinct?: JogoScalarFieldEnum | JogoScalarFieldEnum[]
  }

  /**
   * Jogo findFirstOrThrow
   */
  export type JogoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jogo
     */
    select?: JogoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jogo
     */
    omit?: JogoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JogoInclude<ExtArgs> | null
    /**
     * Filter, which Jogo to fetch.
     */
    where?: JogoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jogos to fetch.
     */
    orderBy?: JogoOrderByWithRelationInput | JogoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Jogos.
     */
    cursor?: JogoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jogos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jogos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Jogos.
     */
    distinct?: JogoScalarFieldEnum | JogoScalarFieldEnum[]
  }

  /**
   * Jogo findMany
   */
  export type JogoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jogo
     */
    select?: JogoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jogo
     */
    omit?: JogoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JogoInclude<ExtArgs> | null
    /**
     * Filter, which Jogos to fetch.
     */
    where?: JogoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jogos to fetch.
     */
    orderBy?: JogoOrderByWithRelationInput | JogoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Jogos.
     */
    cursor?: JogoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jogos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jogos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Jogos.
     */
    distinct?: JogoScalarFieldEnum | JogoScalarFieldEnum[]
  }

  /**
   * Jogo create
   */
  export type JogoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jogo
     */
    select?: JogoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jogo
     */
    omit?: JogoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JogoInclude<ExtArgs> | null
    /**
     * The data needed to create a Jogo.
     */
    data: XOR<JogoCreateInput, JogoUncheckedCreateInput>
  }

  /**
   * Jogo createMany
   */
  export type JogoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Jogos.
     */
    data: JogoCreateManyInput | JogoCreateManyInput[]
  }

  /**
   * Jogo createManyAndReturn
   */
  export type JogoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jogo
     */
    select?: JogoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Jogo
     */
    omit?: JogoOmit<ExtArgs> | null
    /**
     * The data used to create many Jogos.
     */
    data: JogoCreateManyInput | JogoCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JogoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Jogo update
   */
  export type JogoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jogo
     */
    select?: JogoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jogo
     */
    omit?: JogoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JogoInclude<ExtArgs> | null
    /**
     * The data needed to update a Jogo.
     */
    data: XOR<JogoUpdateInput, JogoUncheckedUpdateInput>
    /**
     * Choose, which Jogo to update.
     */
    where: JogoWhereUniqueInput
  }

  /**
   * Jogo updateMany
   */
  export type JogoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Jogos.
     */
    data: XOR<JogoUpdateManyMutationInput, JogoUncheckedUpdateManyInput>
    /**
     * Filter which Jogos to update
     */
    where?: JogoWhereInput
    /**
     * Limit how many Jogos to update.
     */
    limit?: number
  }

  /**
   * Jogo updateManyAndReturn
   */
  export type JogoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jogo
     */
    select?: JogoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Jogo
     */
    omit?: JogoOmit<ExtArgs> | null
    /**
     * The data used to update Jogos.
     */
    data: XOR<JogoUpdateManyMutationInput, JogoUncheckedUpdateManyInput>
    /**
     * Filter which Jogos to update
     */
    where?: JogoWhereInput
    /**
     * Limit how many Jogos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JogoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Jogo upsert
   */
  export type JogoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jogo
     */
    select?: JogoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jogo
     */
    omit?: JogoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JogoInclude<ExtArgs> | null
    /**
     * The filter to search for the Jogo to update in case it exists.
     */
    where: JogoWhereUniqueInput
    /**
     * In case the Jogo found by the `where` argument doesn't exist, create a new Jogo with this data.
     */
    create: XOR<JogoCreateInput, JogoUncheckedCreateInput>
    /**
     * In case the Jogo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<JogoUpdateInput, JogoUncheckedUpdateInput>
  }

  /**
   * Jogo delete
   */
  export type JogoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jogo
     */
    select?: JogoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jogo
     */
    omit?: JogoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JogoInclude<ExtArgs> | null
    /**
     * Filter which Jogo to delete.
     */
    where: JogoWhereUniqueInput
  }

  /**
   * Jogo deleteMany
   */
  export type JogoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Jogos to delete
     */
    where?: JogoWhereInput
    /**
     * Limit how many Jogos to delete.
     */
    limit?: number
  }

  /**
   * Jogo.eventos
   */
  export type Jogo$eventosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evento
     */
    select?: EventoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evento
     */
    omit?: EventoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventoInclude<ExtArgs> | null
    where?: EventoWhereInput
    orderBy?: EventoOrderByWithRelationInput | EventoOrderByWithRelationInput[]
    cursor?: EventoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventoScalarFieldEnum | EventoScalarFieldEnum[]
  }

  /**
   * Jogo without action
   */
  export type JogoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jogo
     */
    select?: JogoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jogo
     */
    omit?: JogoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JogoInclude<ExtArgs> | null
  }


  /**
   * Model Evento
   */

  export type AggregateEvento = {
    _count: EventoCountAggregateOutputType | null
    _avg: EventoAvgAggregateOutputType | null
    _sum: EventoSumAggregateOutputType | null
    _min: EventoMinAggregateOutputType | null
    _max: EventoMaxAggregateOutputType | null
  }

  export type EventoAvgAggregateOutputType = {
    id: number | null
    jogoId: number | null
    atletaId: number | null
    gols: number | null
    gc: number | null
    am: number | null
    vm: number | null
  }

  export type EventoSumAggregateOutputType = {
    id: number | null
    jogoId: number | null
    atletaId: number | null
    gols: number | null
    gc: number | null
    am: number | null
    vm: number | null
  }

  export type EventoMinAggregateOutputType = {
    id: number | null
    jogoId: number | null
    atletaId: number | null
    gols: number | null
    gc: number | null
    am: number | null
    vm: number | null
  }

  export type EventoMaxAggregateOutputType = {
    id: number | null
    jogoId: number | null
    atletaId: number | null
    gols: number | null
    gc: number | null
    am: number | null
    vm: number | null
  }

  export type EventoCountAggregateOutputType = {
    id: number
    jogoId: number
    atletaId: number
    gols: number
    gc: number
    am: number
    vm: number
    _all: number
  }


  export type EventoAvgAggregateInputType = {
    id?: true
    jogoId?: true
    atletaId?: true
    gols?: true
    gc?: true
    am?: true
    vm?: true
  }

  export type EventoSumAggregateInputType = {
    id?: true
    jogoId?: true
    atletaId?: true
    gols?: true
    gc?: true
    am?: true
    vm?: true
  }

  export type EventoMinAggregateInputType = {
    id?: true
    jogoId?: true
    atletaId?: true
    gols?: true
    gc?: true
    am?: true
    vm?: true
  }

  export type EventoMaxAggregateInputType = {
    id?: true
    jogoId?: true
    atletaId?: true
    gols?: true
    gc?: true
    am?: true
    vm?: true
  }

  export type EventoCountAggregateInputType = {
    id?: true
    jogoId?: true
    atletaId?: true
    gols?: true
    gc?: true
    am?: true
    vm?: true
    _all?: true
  }

  export type EventoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Evento to aggregate.
     */
    where?: EventoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Eventos to fetch.
     */
    orderBy?: EventoOrderByWithRelationInput | EventoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EventoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Eventos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Eventos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Eventos
    **/
    _count?: true | EventoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EventoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EventoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventoMaxAggregateInputType
  }

  export type GetEventoAggregateType<T extends EventoAggregateArgs> = {
        [P in keyof T & keyof AggregateEvento]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEvento[P]>
      : GetScalarType<T[P], AggregateEvento[P]>
  }




  export type EventoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventoWhereInput
    orderBy?: EventoOrderByWithAggregationInput | EventoOrderByWithAggregationInput[]
    by: EventoScalarFieldEnum[] | EventoScalarFieldEnum
    having?: EventoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventoCountAggregateInputType | true
    _avg?: EventoAvgAggregateInputType
    _sum?: EventoSumAggregateInputType
    _min?: EventoMinAggregateInputType
    _max?: EventoMaxAggregateInputType
  }

  export type EventoGroupByOutputType = {
    id: number
    jogoId: number
    atletaId: number
    gols: number
    gc: number
    am: number
    vm: number
    _count: EventoCountAggregateOutputType | null
    _avg: EventoAvgAggregateOutputType | null
    _sum: EventoSumAggregateOutputType | null
    _min: EventoMinAggregateOutputType | null
    _max: EventoMaxAggregateOutputType | null
  }

  type GetEventoGroupByPayload<T extends EventoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventoGroupByOutputType[P]>
            : GetScalarType<T[P], EventoGroupByOutputType[P]>
        }
      >
    >


  export type EventoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    jogoId?: boolean
    atletaId?: boolean
    gols?: boolean
    gc?: boolean
    am?: boolean
    vm?: boolean
    jogo?: boolean | JogoDefaultArgs<ExtArgs>
    atleta?: boolean | AtletaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["evento"]>

  export type EventoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    jogoId?: boolean
    atletaId?: boolean
    gols?: boolean
    gc?: boolean
    am?: boolean
    vm?: boolean
    jogo?: boolean | JogoDefaultArgs<ExtArgs>
    atleta?: boolean | AtletaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["evento"]>

  export type EventoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    jogoId?: boolean
    atletaId?: boolean
    gols?: boolean
    gc?: boolean
    am?: boolean
    vm?: boolean
    jogo?: boolean | JogoDefaultArgs<ExtArgs>
    atleta?: boolean | AtletaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["evento"]>

  export type EventoSelectScalar = {
    id?: boolean
    jogoId?: boolean
    atletaId?: boolean
    gols?: boolean
    gc?: boolean
    am?: boolean
    vm?: boolean
  }

  export type EventoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "jogoId" | "atletaId" | "gols" | "gc" | "am" | "vm", ExtArgs["result"]["evento"]>
  export type EventoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jogo?: boolean | JogoDefaultArgs<ExtArgs>
    atleta?: boolean | AtletaDefaultArgs<ExtArgs>
  }
  export type EventoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jogo?: boolean | JogoDefaultArgs<ExtArgs>
    atleta?: boolean | AtletaDefaultArgs<ExtArgs>
  }
  export type EventoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jogo?: boolean | JogoDefaultArgs<ExtArgs>
    atleta?: boolean | AtletaDefaultArgs<ExtArgs>
  }

  export type $EventoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Evento"
    objects: {
      jogo: Prisma.$JogoPayload<ExtArgs>
      atleta: Prisma.$AtletaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      jogoId: number
      atletaId: number
      gols: number
      gc: number
      am: number
      vm: number
    }, ExtArgs["result"]["evento"]>
    composites: {}
  }

  type EventoGetPayload<S extends boolean | null | undefined | EventoDefaultArgs> = $Result.GetResult<Prisma.$EventoPayload, S>

  type EventoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EventoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EventoCountAggregateInputType | true
    }

  export interface EventoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Evento'], meta: { name: 'Evento' } }
    /**
     * Find zero or one Evento that matches the filter.
     * @param {EventoFindUniqueArgs} args - Arguments to find a Evento
     * @example
     * // Get one Evento
     * const evento = await prisma.evento.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EventoFindUniqueArgs>(args: SelectSubset<T, EventoFindUniqueArgs<ExtArgs>>): Prisma__EventoClient<$Result.GetResult<Prisma.$EventoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Evento that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EventoFindUniqueOrThrowArgs} args - Arguments to find a Evento
     * @example
     * // Get one Evento
     * const evento = await prisma.evento.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EventoFindUniqueOrThrowArgs>(args: SelectSubset<T, EventoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EventoClient<$Result.GetResult<Prisma.$EventoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Evento that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventoFindFirstArgs} args - Arguments to find a Evento
     * @example
     * // Get one Evento
     * const evento = await prisma.evento.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EventoFindFirstArgs>(args?: SelectSubset<T, EventoFindFirstArgs<ExtArgs>>): Prisma__EventoClient<$Result.GetResult<Prisma.$EventoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Evento that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventoFindFirstOrThrowArgs} args - Arguments to find a Evento
     * @example
     * // Get one Evento
     * const evento = await prisma.evento.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EventoFindFirstOrThrowArgs>(args?: SelectSubset<T, EventoFindFirstOrThrowArgs<ExtArgs>>): Prisma__EventoClient<$Result.GetResult<Prisma.$EventoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Eventos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Eventos
     * const eventos = await prisma.evento.findMany()
     * 
     * // Get first 10 Eventos
     * const eventos = await prisma.evento.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eventoWithIdOnly = await prisma.evento.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EventoFindManyArgs>(args?: SelectSubset<T, EventoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Evento.
     * @param {EventoCreateArgs} args - Arguments to create a Evento.
     * @example
     * // Create one Evento
     * const Evento = await prisma.evento.create({
     *   data: {
     *     // ... data to create a Evento
     *   }
     * })
     * 
     */
    create<T extends EventoCreateArgs>(args: SelectSubset<T, EventoCreateArgs<ExtArgs>>): Prisma__EventoClient<$Result.GetResult<Prisma.$EventoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Eventos.
     * @param {EventoCreateManyArgs} args - Arguments to create many Eventos.
     * @example
     * // Create many Eventos
     * const evento = await prisma.evento.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EventoCreateManyArgs>(args?: SelectSubset<T, EventoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Eventos and returns the data saved in the database.
     * @param {EventoCreateManyAndReturnArgs} args - Arguments to create many Eventos.
     * @example
     * // Create many Eventos
     * const evento = await prisma.evento.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Eventos and only return the `id`
     * const eventoWithIdOnly = await prisma.evento.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EventoCreateManyAndReturnArgs>(args?: SelectSubset<T, EventoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Evento.
     * @param {EventoDeleteArgs} args - Arguments to delete one Evento.
     * @example
     * // Delete one Evento
     * const Evento = await prisma.evento.delete({
     *   where: {
     *     // ... filter to delete one Evento
     *   }
     * })
     * 
     */
    delete<T extends EventoDeleteArgs>(args: SelectSubset<T, EventoDeleteArgs<ExtArgs>>): Prisma__EventoClient<$Result.GetResult<Prisma.$EventoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Evento.
     * @param {EventoUpdateArgs} args - Arguments to update one Evento.
     * @example
     * // Update one Evento
     * const evento = await prisma.evento.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EventoUpdateArgs>(args: SelectSubset<T, EventoUpdateArgs<ExtArgs>>): Prisma__EventoClient<$Result.GetResult<Prisma.$EventoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Eventos.
     * @param {EventoDeleteManyArgs} args - Arguments to filter Eventos to delete.
     * @example
     * // Delete a few Eventos
     * const { count } = await prisma.evento.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EventoDeleteManyArgs>(args?: SelectSubset<T, EventoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Eventos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Eventos
     * const evento = await prisma.evento.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EventoUpdateManyArgs>(args: SelectSubset<T, EventoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Eventos and returns the data updated in the database.
     * @param {EventoUpdateManyAndReturnArgs} args - Arguments to update many Eventos.
     * @example
     * // Update many Eventos
     * const evento = await prisma.evento.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Eventos and only return the `id`
     * const eventoWithIdOnly = await prisma.evento.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EventoUpdateManyAndReturnArgs>(args: SelectSubset<T, EventoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Evento.
     * @param {EventoUpsertArgs} args - Arguments to update or create a Evento.
     * @example
     * // Update or create a Evento
     * const evento = await prisma.evento.upsert({
     *   create: {
     *     // ... data to create a Evento
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Evento we want to update
     *   }
     * })
     */
    upsert<T extends EventoUpsertArgs>(args: SelectSubset<T, EventoUpsertArgs<ExtArgs>>): Prisma__EventoClient<$Result.GetResult<Prisma.$EventoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Eventos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventoCountArgs} args - Arguments to filter Eventos to count.
     * @example
     * // Count the number of Eventos
     * const count = await prisma.evento.count({
     *   where: {
     *     // ... the filter for the Eventos we want to count
     *   }
     * })
    **/
    count<T extends EventoCountArgs>(
      args?: Subset<T, EventoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Evento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EventoAggregateArgs>(args: Subset<T, EventoAggregateArgs>): Prisma.PrismaPromise<GetEventoAggregateType<T>>

    /**
     * Group by Evento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EventoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventoGroupByArgs['orderBy'] }
        : { orderBy?: EventoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EventoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Evento model
   */
  readonly fields: EventoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Evento.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EventoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    jogo<T extends JogoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, JogoDefaultArgs<ExtArgs>>): Prisma__JogoClient<$Result.GetResult<Prisma.$JogoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    atleta<T extends AtletaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AtletaDefaultArgs<ExtArgs>>): Prisma__AtletaClient<$Result.GetResult<Prisma.$AtletaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Evento model
   */
  interface EventoFieldRefs {
    readonly id: FieldRef<"Evento", 'Int'>
    readonly jogoId: FieldRef<"Evento", 'Int'>
    readonly atletaId: FieldRef<"Evento", 'Int'>
    readonly gols: FieldRef<"Evento", 'Int'>
    readonly gc: FieldRef<"Evento", 'Int'>
    readonly am: FieldRef<"Evento", 'Int'>
    readonly vm: FieldRef<"Evento", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Evento findUnique
   */
  export type EventoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evento
     */
    select?: EventoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evento
     */
    omit?: EventoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventoInclude<ExtArgs> | null
    /**
     * Filter, which Evento to fetch.
     */
    where: EventoWhereUniqueInput
  }

  /**
   * Evento findUniqueOrThrow
   */
  export type EventoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evento
     */
    select?: EventoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evento
     */
    omit?: EventoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventoInclude<ExtArgs> | null
    /**
     * Filter, which Evento to fetch.
     */
    where: EventoWhereUniqueInput
  }

  /**
   * Evento findFirst
   */
  export type EventoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evento
     */
    select?: EventoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evento
     */
    omit?: EventoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventoInclude<ExtArgs> | null
    /**
     * Filter, which Evento to fetch.
     */
    where?: EventoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Eventos to fetch.
     */
    orderBy?: EventoOrderByWithRelationInput | EventoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Eventos.
     */
    cursor?: EventoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Eventos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Eventos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Eventos.
     */
    distinct?: EventoScalarFieldEnum | EventoScalarFieldEnum[]
  }

  /**
   * Evento findFirstOrThrow
   */
  export type EventoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evento
     */
    select?: EventoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evento
     */
    omit?: EventoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventoInclude<ExtArgs> | null
    /**
     * Filter, which Evento to fetch.
     */
    where?: EventoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Eventos to fetch.
     */
    orderBy?: EventoOrderByWithRelationInput | EventoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Eventos.
     */
    cursor?: EventoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Eventos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Eventos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Eventos.
     */
    distinct?: EventoScalarFieldEnum | EventoScalarFieldEnum[]
  }

  /**
   * Evento findMany
   */
  export type EventoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evento
     */
    select?: EventoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evento
     */
    omit?: EventoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventoInclude<ExtArgs> | null
    /**
     * Filter, which Eventos to fetch.
     */
    where?: EventoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Eventos to fetch.
     */
    orderBy?: EventoOrderByWithRelationInput | EventoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Eventos.
     */
    cursor?: EventoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Eventos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Eventos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Eventos.
     */
    distinct?: EventoScalarFieldEnum | EventoScalarFieldEnum[]
  }

  /**
   * Evento create
   */
  export type EventoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evento
     */
    select?: EventoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evento
     */
    omit?: EventoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventoInclude<ExtArgs> | null
    /**
     * The data needed to create a Evento.
     */
    data: XOR<EventoCreateInput, EventoUncheckedCreateInput>
  }

  /**
   * Evento createMany
   */
  export type EventoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Eventos.
     */
    data: EventoCreateManyInput | EventoCreateManyInput[]
  }

  /**
   * Evento createManyAndReturn
   */
  export type EventoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evento
     */
    select?: EventoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Evento
     */
    omit?: EventoOmit<ExtArgs> | null
    /**
     * The data used to create many Eventos.
     */
    data: EventoCreateManyInput | EventoCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Evento update
   */
  export type EventoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evento
     */
    select?: EventoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evento
     */
    omit?: EventoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventoInclude<ExtArgs> | null
    /**
     * The data needed to update a Evento.
     */
    data: XOR<EventoUpdateInput, EventoUncheckedUpdateInput>
    /**
     * Choose, which Evento to update.
     */
    where: EventoWhereUniqueInput
  }

  /**
   * Evento updateMany
   */
  export type EventoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Eventos.
     */
    data: XOR<EventoUpdateManyMutationInput, EventoUncheckedUpdateManyInput>
    /**
     * Filter which Eventos to update
     */
    where?: EventoWhereInput
    /**
     * Limit how many Eventos to update.
     */
    limit?: number
  }

  /**
   * Evento updateManyAndReturn
   */
  export type EventoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evento
     */
    select?: EventoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Evento
     */
    omit?: EventoOmit<ExtArgs> | null
    /**
     * The data used to update Eventos.
     */
    data: XOR<EventoUpdateManyMutationInput, EventoUncheckedUpdateManyInput>
    /**
     * Filter which Eventos to update
     */
    where?: EventoWhereInput
    /**
     * Limit how many Eventos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Evento upsert
   */
  export type EventoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evento
     */
    select?: EventoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evento
     */
    omit?: EventoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventoInclude<ExtArgs> | null
    /**
     * The filter to search for the Evento to update in case it exists.
     */
    where: EventoWhereUniqueInput
    /**
     * In case the Evento found by the `where` argument doesn't exist, create a new Evento with this data.
     */
    create: XOR<EventoCreateInput, EventoUncheckedCreateInput>
    /**
     * In case the Evento was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EventoUpdateInput, EventoUncheckedUpdateInput>
  }

  /**
   * Evento delete
   */
  export type EventoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evento
     */
    select?: EventoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evento
     */
    omit?: EventoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventoInclude<ExtArgs> | null
    /**
     * Filter which Evento to delete.
     */
    where: EventoWhereUniqueInput
  }

  /**
   * Evento deleteMany
   */
  export type EventoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Eventos to delete
     */
    where?: EventoWhereInput
    /**
     * Limit how many Eventos to delete.
     */
    limit?: number
  }

  /**
   * Evento without action
   */
  export type EventoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evento
     */
    select?: EventoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evento
     */
    omit?: EventoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventoInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const CampeonatoScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    ano: 'ano',
    formato: 'formato'
  };

  export type CampeonatoScalarFieldEnum = (typeof CampeonatoScalarFieldEnum)[keyof typeof CampeonatoScalarFieldEnum]


  export const EquipeScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    responsavel: 'responsavel',
    telefone: 'telefone'
  };

  export type EquipeScalarFieldEnum = (typeof EquipeScalarFieldEnum)[keyof typeof EquipeScalarFieldEnum]


  export const AtletaScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    cpf: 'cpf',
    numero: 'numero'
  };

  export type AtletaScalarFieldEnum = (typeof AtletaScalarFieldEnum)[keyof typeof AtletaScalarFieldEnum]


  export const ParticipacaoScalarFieldEnum: {
    id: 'id',
    equipeId: 'equipeId',
    campeonatoId: 'campeonatoId'
  };

  export type ParticipacaoScalarFieldEnum = (typeof ParticipacaoScalarFieldEnum)[keyof typeof ParticipacaoScalarFieldEnum]


  export const VinculoScalarFieldEnum: {
    id: 'id',
    atletaId: 'atletaId',
    equipeId: 'equipeId',
    tipo: 'tipo'
  };

  export type VinculoScalarFieldEnum = (typeof VinculoScalarFieldEnum)[keyof typeof VinculoScalarFieldEnum]


  export const JogoScalarFieldEnum: {
    id: 'id',
    numero: 'numero',
    campeonatoId: 'campeonatoId',
    mandanteId: 'mandanteId',
    mandanteNome: 'mandanteNome',
    visitanteId: 'visitanteId',
    visitanteNome: 'visitanteNome',
    golsMandante: 'golsMandante',
    golsVisitante: 'golsVisitante',
    status: 'status'
  };

  export type JogoScalarFieldEnum = (typeof JogoScalarFieldEnum)[keyof typeof JogoScalarFieldEnum]


  export const EventoScalarFieldEnum: {
    id: 'id',
    jogoId: 'jogoId',
    atletaId: 'atletaId',
    gols: 'gols',
    gc: 'gc',
    am: 'am',
    vm: 'vm'
  };

  export type EventoScalarFieldEnum = (typeof EventoScalarFieldEnum)[keyof typeof EventoScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type CampeonatoWhereInput = {
    AND?: CampeonatoWhereInput | CampeonatoWhereInput[]
    OR?: CampeonatoWhereInput[]
    NOT?: CampeonatoWhereInput | CampeonatoWhereInput[]
    id?: IntFilter<"Campeonato"> | number
    nome?: StringFilter<"Campeonato"> | string
    ano?: IntFilter<"Campeonato"> | number
    formato?: StringFilter<"Campeonato"> | string
    participacoes?: ParticipacaoListRelationFilter
    jogos?: JogoListRelationFilter
  }

  export type CampeonatoOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    ano?: SortOrder
    formato?: SortOrder
    participacoes?: ParticipacaoOrderByRelationAggregateInput
    jogos?: JogoOrderByRelationAggregateInput
  }

  export type CampeonatoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CampeonatoWhereInput | CampeonatoWhereInput[]
    OR?: CampeonatoWhereInput[]
    NOT?: CampeonatoWhereInput | CampeonatoWhereInput[]
    nome?: StringFilter<"Campeonato"> | string
    ano?: IntFilter<"Campeonato"> | number
    formato?: StringFilter<"Campeonato"> | string
    participacoes?: ParticipacaoListRelationFilter
    jogos?: JogoListRelationFilter
  }, "id">

  export type CampeonatoOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    ano?: SortOrder
    formato?: SortOrder
    _count?: CampeonatoCountOrderByAggregateInput
    _avg?: CampeonatoAvgOrderByAggregateInput
    _max?: CampeonatoMaxOrderByAggregateInput
    _min?: CampeonatoMinOrderByAggregateInput
    _sum?: CampeonatoSumOrderByAggregateInput
  }

  export type CampeonatoScalarWhereWithAggregatesInput = {
    AND?: CampeonatoScalarWhereWithAggregatesInput | CampeonatoScalarWhereWithAggregatesInput[]
    OR?: CampeonatoScalarWhereWithAggregatesInput[]
    NOT?: CampeonatoScalarWhereWithAggregatesInput | CampeonatoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Campeonato"> | number
    nome?: StringWithAggregatesFilter<"Campeonato"> | string
    ano?: IntWithAggregatesFilter<"Campeonato"> | number
    formato?: StringWithAggregatesFilter<"Campeonato"> | string
  }

  export type EquipeWhereInput = {
    AND?: EquipeWhereInput | EquipeWhereInput[]
    OR?: EquipeWhereInput[]
    NOT?: EquipeWhereInput | EquipeWhereInput[]
    id?: IntFilter<"Equipe"> | number
    nome?: StringFilter<"Equipe"> | string
    responsavel?: StringFilter<"Equipe"> | string
    telefone?: StringFilter<"Equipe"> | string
    participacoes?: ParticipacaoListRelationFilter
    vinculos?: VinculoListRelationFilter
    jogosMandante?: JogoListRelationFilter
    jogosVisitante?: JogoListRelationFilter
  }

  export type EquipeOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    responsavel?: SortOrder
    telefone?: SortOrder
    participacoes?: ParticipacaoOrderByRelationAggregateInput
    vinculos?: VinculoOrderByRelationAggregateInput
    jogosMandante?: JogoOrderByRelationAggregateInput
    jogosVisitante?: JogoOrderByRelationAggregateInput
  }

  export type EquipeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: EquipeWhereInput | EquipeWhereInput[]
    OR?: EquipeWhereInput[]
    NOT?: EquipeWhereInput | EquipeWhereInput[]
    nome?: StringFilter<"Equipe"> | string
    responsavel?: StringFilter<"Equipe"> | string
    telefone?: StringFilter<"Equipe"> | string
    participacoes?: ParticipacaoListRelationFilter
    vinculos?: VinculoListRelationFilter
    jogosMandante?: JogoListRelationFilter
    jogosVisitante?: JogoListRelationFilter
  }, "id">

  export type EquipeOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    responsavel?: SortOrder
    telefone?: SortOrder
    _count?: EquipeCountOrderByAggregateInput
    _avg?: EquipeAvgOrderByAggregateInput
    _max?: EquipeMaxOrderByAggregateInput
    _min?: EquipeMinOrderByAggregateInput
    _sum?: EquipeSumOrderByAggregateInput
  }

  export type EquipeScalarWhereWithAggregatesInput = {
    AND?: EquipeScalarWhereWithAggregatesInput | EquipeScalarWhereWithAggregatesInput[]
    OR?: EquipeScalarWhereWithAggregatesInput[]
    NOT?: EquipeScalarWhereWithAggregatesInput | EquipeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Equipe"> | number
    nome?: StringWithAggregatesFilter<"Equipe"> | string
    responsavel?: StringWithAggregatesFilter<"Equipe"> | string
    telefone?: StringWithAggregatesFilter<"Equipe"> | string
  }

  export type AtletaWhereInput = {
    AND?: AtletaWhereInput | AtletaWhereInput[]
    OR?: AtletaWhereInput[]
    NOT?: AtletaWhereInput | AtletaWhereInput[]
    id?: IntFilter<"Atleta"> | number
    nome?: StringFilter<"Atleta"> | string
    cpf?: StringFilter<"Atleta"> | string
    numero?: StringFilter<"Atleta"> | string
    vinculos?: VinculoListRelationFilter
    eventos?: EventoListRelationFilter
  }

  export type AtletaOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    cpf?: SortOrder
    numero?: SortOrder
    vinculos?: VinculoOrderByRelationAggregateInput
    eventos?: EventoOrderByRelationAggregateInput
  }

  export type AtletaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AtletaWhereInput | AtletaWhereInput[]
    OR?: AtletaWhereInput[]
    NOT?: AtletaWhereInput | AtletaWhereInput[]
    nome?: StringFilter<"Atleta"> | string
    cpf?: StringFilter<"Atleta"> | string
    numero?: StringFilter<"Atleta"> | string
    vinculos?: VinculoListRelationFilter
    eventos?: EventoListRelationFilter
  }, "id">

  export type AtletaOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    cpf?: SortOrder
    numero?: SortOrder
    _count?: AtletaCountOrderByAggregateInput
    _avg?: AtletaAvgOrderByAggregateInput
    _max?: AtletaMaxOrderByAggregateInput
    _min?: AtletaMinOrderByAggregateInput
    _sum?: AtletaSumOrderByAggregateInput
  }

  export type AtletaScalarWhereWithAggregatesInput = {
    AND?: AtletaScalarWhereWithAggregatesInput | AtletaScalarWhereWithAggregatesInput[]
    OR?: AtletaScalarWhereWithAggregatesInput[]
    NOT?: AtletaScalarWhereWithAggregatesInput | AtletaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Atleta"> | number
    nome?: StringWithAggregatesFilter<"Atleta"> | string
    cpf?: StringWithAggregatesFilter<"Atleta"> | string
    numero?: StringWithAggregatesFilter<"Atleta"> | string
  }

  export type ParticipacaoWhereInput = {
    AND?: ParticipacaoWhereInput | ParticipacaoWhereInput[]
    OR?: ParticipacaoWhereInput[]
    NOT?: ParticipacaoWhereInput | ParticipacaoWhereInput[]
    id?: IntFilter<"Participacao"> | number
    equipeId?: IntFilter<"Participacao"> | number
    campeonatoId?: IntFilter<"Participacao"> | number
    equipe?: XOR<EquipeScalarRelationFilter, EquipeWhereInput>
    campeonato?: XOR<CampeonatoScalarRelationFilter, CampeonatoWhereInput>
  }

  export type ParticipacaoOrderByWithRelationInput = {
    id?: SortOrder
    equipeId?: SortOrder
    campeonatoId?: SortOrder
    equipe?: EquipeOrderByWithRelationInput
    campeonato?: CampeonatoOrderByWithRelationInput
  }

  export type ParticipacaoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ParticipacaoWhereInput | ParticipacaoWhereInput[]
    OR?: ParticipacaoWhereInput[]
    NOT?: ParticipacaoWhereInput | ParticipacaoWhereInput[]
    equipeId?: IntFilter<"Participacao"> | number
    campeonatoId?: IntFilter<"Participacao"> | number
    equipe?: XOR<EquipeScalarRelationFilter, EquipeWhereInput>
    campeonato?: XOR<CampeonatoScalarRelationFilter, CampeonatoWhereInput>
  }, "id">

  export type ParticipacaoOrderByWithAggregationInput = {
    id?: SortOrder
    equipeId?: SortOrder
    campeonatoId?: SortOrder
    _count?: ParticipacaoCountOrderByAggregateInput
    _avg?: ParticipacaoAvgOrderByAggregateInput
    _max?: ParticipacaoMaxOrderByAggregateInput
    _min?: ParticipacaoMinOrderByAggregateInput
    _sum?: ParticipacaoSumOrderByAggregateInput
  }

  export type ParticipacaoScalarWhereWithAggregatesInput = {
    AND?: ParticipacaoScalarWhereWithAggregatesInput | ParticipacaoScalarWhereWithAggregatesInput[]
    OR?: ParticipacaoScalarWhereWithAggregatesInput[]
    NOT?: ParticipacaoScalarWhereWithAggregatesInput | ParticipacaoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Participacao"> | number
    equipeId?: IntWithAggregatesFilter<"Participacao"> | number
    campeonatoId?: IntWithAggregatesFilter<"Participacao"> | number
  }

  export type VinculoWhereInput = {
    AND?: VinculoWhereInput | VinculoWhereInput[]
    OR?: VinculoWhereInput[]
    NOT?: VinculoWhereInput | VinculoWhereInput[]
    id?: IntFilter<"Vinculo"> | number
    atletaId?: IntFilter<"Vinculo"> | number
    equipeId?: IntFilter<"Vinculo"> | number
    tipo?: StringFilter<"Vinculo"> | string
    atleta?: XOR<AtletaScalarRelationFilter, AtletaWhereInput>
    equipe?: XOR<EquipeScalarRelationFilter, EquipeWhereInput>
  }

  export type VinculoOrderByWithRelationInput = {
    id?: SortOrder
    atletaId?: SortOrder
    equipeId?: SortOrder
    tipo?: SortOrder
    atleta?: AtletaOrderByWithRelationInput
    equipe?: EquipeOrderByWithRelationInput
  }

  export type VinculoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: VinculoWhereInput | VinculoWhereInput[]
    OR?: VinculoWhereInput[]
    NOT?: VinculoWhereInput | VinculoWhereInput[]
    atletaId?: IntFilter<"Vinculo"> | number
    equipeId?: IntFilter<"Vinculo"> | number
    tipo?: StringFilter<"Vinculo"> | string
    atleta?: XOR<AtletaScalarRelationFilter, AtletaWhereInput>
    equipe?: XOR<EquipeScalarRelationFilter, EquipeWhereInput>
  }, "id">

  export type VinculoOrderByWithAggregationInput = {
    id?: SortOrder
    atletaId?: SortOrder
    equipeId?: SortOrder
    tipo?: SortOrder
    _count?: VinculoCountOrderByAggregateInput
    _avg?: VinculoAvgOrderByAggregateInput
    _max?: VinculoMaxOrderByAggregateInput
    _min?: VinculoMinOrderByAggregateInput
    _sum?: VinculoSumOrderByAggregateInput
  }

  export type VinculoScalarWhereWithAggregatesInput = {
    AND?: VinculoScalarWhereWithAggregatesInput | VinculoScalarWhereWithAggregatesInput[]
    OR?: VinculoScalarWhereWithAggregatesInput[]
    NOT?: VinculoScalarWhereWithAggregatesInput | VinculoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Vinculo"> | number
    atletaId?: IntWithAggregatesFilter<"Vinculo"> | number
    equipeId?: IntWithAggregatesFilter<"Vinculo"> | number
    tipo?: StringWithAggregatesFilter<"Vinculo"> | string
  }

  export type JogoWhereInput = {
    AND?: JogoWhereInput | JogoWhereInput[]
    OR?: JogoWhereInput[]
    NOT?: JogoWhereInput | JogoWhereInput[]
    id?: IntFilter<"Jogo"> | number
    numero?: IntFilter<"Jogo"> | number
    campeonatoId?: IntFilter<"Jogo"> | number
    mandanteId?: IntFilter<"Jogo"> | number
    mandanteNome?: StringFilter<"Jogo"> | string
    visitanteId?: IntFilter<"Jogo"> | number
    visitanteNome?: StringFilter<"Jogo"> | string
    golsMandante?: IntFilter<"Jogo"> | number
    golsVisitante?: IntFilter<"Jogo"> | number
    status?: StringFilter<"Jogo"> | string
    campeonato?: XOR<CampeonatoScalarRelationFilter, CampeonatoWhereInput>
    mandante?: XOR<EquipeScalarRelationFilter, EquipeWhereInput>
    visitante?: XOR<EquipeScalarRelationFilter, EquipeWhereInput>
    eventos?: EventoListRelationFilter
  }

  export type JogoOrderByWithRelationInput = {
    id?: SortOrder
    numero?: SortOrder
    campeonatoId?: SortOrder
    mandanteId?: SortOrder
    mandanteNome?: SortOrder
    visitanteId?: SortOrder
    visitanteNome?: SortOrder
    golsMandante?: SortOrder
    golsVisitante?: SortOrder
    status?: SortOrder
    campeonato?: CampeonatoOrderByWithRelationInput
    mandante?: EquipeOrderByWithRelationInput
    visitante?: EquipeOrderByWithRelationInput
    eventos?: EventoOrderByRelationAggregateInput
  }

  export type JogoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: JogoWhereInput | JogoWhereInput[]
    OR?: JogoWhereInput[]
    NOT?: JogoWhereInput | JogoWhereInput[]
    numero?: IntFilter<"Jogo"> | number
    campeonatoId?: IntFilter<"Jogo"> | number
    mandanteId?: IntFilter<"Jogo"> | number
    mandanteNome?: StringFilter<"Jogo"> | string
    visitanteId?: IntFilter<"Jogo"> | number
    visitanteNome?: StringFilter<"Jogo"> | string
    golsMandante?: IntFilter<"Jogo"> | number
    golsVisitante?: IntFilter<"Jogo"> | number
    status?: StringFilter<"Jogo"> | string
    campeonato?: XOR<CampeonatoScalarRelationFilter, CampeonatoWhereInput>
    mandante?: XOR<EquipeScalarRelationFilter, EquipeWhereInput>
    visitante?: XOR<EquipeScalarRelationFilter, EquipeWhereInput>
    eventos?: EventoListRelationFilter
  }, "id">

  export type JogoOrderByWithAggregationInput = {
    id?: SortOrder
    numero?: SortOrder
    campeonatoId?: SortOrder
    mandanteId?: SortOrder
    mandanteNome?: SortOrder
    visitanteId?: SortOrder
    visitanteNome?: SortOrder
    golsMandante?: SortOrder
    golsVisitante?: SortOrder
    status?: SortOrder
    _count?: JogoCountOrderByAggregateInput
    _avg?: JogoAvgOrderByAggregateInput
    _max?: JogoMaxOrderByAggregateInput
    _min?: JogoMinOrderByAggregateInput
    _sum?: JogoSumOrderByAggregateInput
  }

  export type JogoScalarWhereWithAggregatesInput = {
    AND?: JogoScalarWhereWithAggregatesInput | JogoScalarWhereWithAggregatesInput[]
    OR?: JogoScalarWhereWithAggregatesInput[]
    NOT?: JogoScalarWhereWithAggregatesInput | JogoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Jogo"> | number
    numero?: IntWithAggregatesFilter<"Jogo"> | number
    campeonatoId?: IntWithAggregatesFilter<"Jogo"> | number
    mandanteId?: IntWithAggregatesFilter<"Jogo"> | number
    mandanteNome?: StringWithAggregatesFilter<"Jogo"> | string
    visitanteId?: IntWithAggregatesFilter<"Jogo"> | number
    visitanteNome?: StringWithAggregatesFilter<"Jogo"> | string
    golsMandante?: IntWithAggregatesFilter<"Jogo"> | number
    golsVisitante?: IntWithAggregatesFilter<"Jogo"> | number
    status?: StringWithAggregatesFilter<"Jogo"> | string
  }

  export type EventoWhereInput = {
    AND?: EventoWhereInput | EventoWhereInput[]
    OR?: EventoWhereInput[]
    NOT?: EventoWhereInput | EventoWhereInput[]
    id?: IntFilter<"Evento"> | number
    jogoId?: IntFilter<"Evento"> | number
    atletaId?: IntFilter<"Evento"> | number
    gols?: IntFilter<"Evento"> | number
    gc?: IntFilter<"Evento"> | number
    am?: IntFilter<"Evento"> | number
    vm?: IntFilter<"Evento"> | number
    jogo?: XOR<JogoScalarRelationFilter, JogoWhereInput>
    atleta?: XOR<AtletaScalarRelationFilter, AtletaWhereInput>
  }

  export type EventoOrderByWithRelationInput = {
    id?: SortOrder
    jogoId?: SortOrder
    atletaId?: SortOrder
    gols?: SortOrder
    gc?: SortOrder
    am?: SortOrder
    vm?: SortOrder
    jogo?: JogoOrderByWithRelationInput
    atleta?: AtletaOrderByWithRelationInput
  }

  export type EventoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: EventoWhereInput | EventoWhereInput[]
    OR?: EventoWhereInput[]
    NOT?: EventoWhereInput | EventoWhereInput[]
    jogoId?: IntFilter<"Evento"> | number
    atletaId?: IntFilter<"Evento"> | number
    gols?: IntFilter<"Evento"> | number
    gc?: IntFilter<"Evento"> | number
    am?: IntFilter<"Evento"> | number
    vm?: IntFilter<"Evento"> | number
    jogo?: XOR<JogoScalarRelationFilter, JogoWhereInput>
    atleta?: XOR<AtletaScalarRelationFilter, AtletaWhereInput>
  }, "id">

  export type EventoOrderByWithAggregationInput = {
    id?: SortOrder
    jogoId?: SortOrder
    atletaId?: SortOrder
    gols?: SortOrder
    gc?: SortOrder
    am?: SortOrder
    vm?: SortOrder
    _count?: EventoCountOrderByAggregateInput
    _avg?: EventoAvgOrderByAggregateInput
    _max?: EventoMaxOrderByAggregateInput
    _min?: EventoMinOrderByAggregateInput
    _sum?: EventoSumOrderByAggregateInput
  }

  export type EventoScalarWhereWithAggregatesInput = {
    AND?: EventoScalarWhereWithAggregatesInput | EventoScalarWhereWithAggregatesInput[]
    OR?: EventoScalarWhereWithAggregatesInput[]
    NOT?: EventoScalarWhereWithAggregatesInput | EventoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Evento"> | number
    jogoId?: IntWithAggregatesFilter<"Evento"> | number
    atletaId?: IntWithAggregatesFilter<"Evento"> | number
    gols?: IntWithAggregatesFilter<"Evento"> | number
    gc?: IntWithAggregatesFilter<"Evento"> | number
    am?: IntWithAggregatesFilter<"Evento"> | number
    vm?: IntWithAggregatesFilter<"Evento"> | number
  }

  export type CampeonatoCreateInput = {
    nome: string
    ano: number
    formato: string
    participacoes?: ParticipacaoCreateNestedManyWithoutCampeonatoInput
    jogos?: JogoCreateNestedManyWithoutCampeonatoInput
  }

  export type CampeonatoUncheckedCreateInput = {
    id?: number
    nome: string
    ano: number
    formato: string
    participacoes?: ParticipacaoUncheckedCreateNestedManyWithoutCampeonatoInput
    jogos?: JogoUncheckedCreateNestedManyWithoutCampeonatoInput
  }

  export type CampeonatoUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    ano?: IntFieldUpdateOperationsInput | number
    formato?: StringFieldUpdateOperationsInput | string
    participacoes?: ParticipacaoUpdateManyWithoutCampeonatoNestedInput
    jogos?: JogoUpdateManyWithoutCampeonatoNestedInput
  }

  export type CampeonatoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    ano?: IntFieldUpdateOperationsInput | number
    formato?: StringFieldUpdateOperationsInput | string
    participacoes?: ParticipacaoUncheckedUpdateManyWithoutCampeonatoNestedInput
    jogos?: JogoUncheckedUpdateManyWithoutCampeonatoNestedInput
  }

  export type CampeonatoCreateManyInput = {
    id?: number
    nome: string
    ano: number
    formato: string
  }

  export type CampeonatoUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    ano?: IntFieldUpdateOperationsInput | number
    formato?: StringFieldUpdateOperationsInput | string
  }

  export type CampeonatoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    ano?: IntFieldUpdateOperationsInput | number
    formato?: StringFieldUpdateOperationsInput | string
  }

  export type EquipeCreateInput = {
    nome: string
    responsavel: string
    telefone: string
    participacoes?: ParticipacaoCreateNestedManyWithoutEquipeInput
    vinculos?: VinculoCreateNestedManyWithoutEquipeInput
    jogosMandante?: JogoCreateNestedManyWithoutMandanteInput
    jogosVisitante?: JogoCreateNestedManyWithoutVisitanteInput
  }

  export type EquipeUncheckedCreateInput = {
    id?: number
    nome: string
    responsavel: string
    telefone: string
    participacoes?: ParticipacaoUncheckedCreateNestedManyWithoutEquipeInput
    vinculos?: VinculoUncheckedCreateNestedManyWithoutEquipeInput
    jogosMandante?: JogoUncheckedCreateNestedManyWithoutMandanteInput
    jogosVisitante?: JogoUncheckedCreateNestedManyWithoutVisitanteInput
  }

  export type EquipeUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    responsavel?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    participacoes?: ParticipacaoUpdateManyWithoutEquipeNestedInput
    vinculos?: VinculoUpdateManyWithoutEquipeNestedInput
    jogosMandante?: JogoUpdateManyWithoutMandanteNestedInput
    jogosVisitante?: JogoUpdateManyWithoutVisitanteNestedInput
  }

  export type EquipeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    responsavel?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    participacoes?: ParticipacaoUncheckedUpdateManyWithoutEquipeNestedInput
    vinculos?: VinculoUncheckedUpdateManyWithoutEquipeNestedInput
    jogosMandante?: JogoUncheckedUpdateManyWithoutMandanteNestedInput
    jogosVisitante?: JogoUncheckedUpdateManyWithoutVisitanteNestedInput
  }

  export type EquipeCreateManyInput = {
    id?: number
    nome: string
    responsavel: string
    telefone: string
  }

  export type EquipeUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    responsavel?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
  }

  export type EquipeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    responsavel?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
  }

  export type AtletaCreateInput = {
    nome: string
    cpf: string
    numero: string
    vinculos?: VinculoCreateNestedManyWithoutAtletaInput
    eventos?: EventoCreateNestedManyWithoutAtletaInput
  }

  export type AtletaUncheckedCreateInput = {
    id?: number
    nome: string
    cpf: string
    numero: string
    vinculos?: VinculoUncheckedCreateNestedManyWithoutAtletaInput
    eventos?: EventoUncheckedCreateNestedManyWithoutAtletaInput
  }

  export type AtletaUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    vinculos?: VinculoUpdateManyWithoutAtletaNestedInput
    eventos?: EventoUpdateManyWithoutAtletaNestedInput
  }

  export type AtletaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    vinculos?: VinculoUncheckedUpdateManyWithoutAtletaNestedInput
    eventos?: EventoUncheckedUpdateManyWithoutAtletaNestedInput
  }

  export type AtletaCreateManyInput = {
    id?: number
    nome: string
    cpf: string
    numero: string
  }

  export type AtletaUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
  }

  export type AtletaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
  }

  export type ParticipacaoCreateInput = {
    equipe: EquipeCreateNestedOneWithoutParticipacoesInput
    campeonato: CampeonatoCreateNestedOneWithoutParticipacoesInput
  }

  export type ParticipacaoUncheckedCreateInput = {
    id?: number
    equipeId: number
    campeonatoId: number
  }

  export type ParticipacaoUpdateInput = {
    equipe?: EquipeUpdateOneRequiredWithoutParticipacoesNestedInput
    campeonato?: CampeonatoUpdateOneRequiredWithoutParticipacoesNestedInput
  }

  export type ParticipacaoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    equipeId?: IntFieldUpdateOperationsInput | number
    campeonatoId?: IntFieldUpdateOperationsInput | number
  }

  export type ParticipacaoCreateManyInput = {
    id?: number
    equipeId: number
    campeonatoId: number
  }

  export type ParticipacaoUpdateManyMutationInput = {

  }

  export type ParticipacaoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    equipeId?: IntFieldUpdateOperationsInput | number
    campeonatoId?: IntFieldUpdateOperationsInput | number
  }

  export type VinculoCreateInput = {
    tipo: string
    atleta: AtletaCreateNestedOneWithoutVinculosInput
    equipe: EquipeCreateNestedOneWithoutVinculosInput
  }

  export type VinculoUncheckedCreateInput = {
    id?: number
    atletaId: number
    equipeId: number
    tipo: string
  }

  export type VinculoUpdateInput = {
    tipo?: StringFieldUpdateOperationsInput | string
    atleta?: AtletaUpdateOneRequiredWithoutVinculosNestedInput
    equipe?: EquipeUpdateOneRequiredWithoutVinculosNestedInput
  }

  export type VinculoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    atletaId?: IntFieldUpdateOperationsInput | number
    equipeId?: IntFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
  }

  export type VinculoCreateManyInput = {
    id?: number
    atletaId: number
    equipeId: number
    tipo: string
  }

  export type VinculoUpdateManyMutationInput = {
    tipo?: StringFieldUpdateOperationsInput | string
  }

  export type VinculoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    atletaId?: IntFieldUpdateOperationsInput | number
    equipeId?: IntFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
  }

  export type JogoCreateInput = {
    numero: number
    mandanteNome: string
    visitanteNome: string
    golsMandante?: number
    golsVisitante?: number
    status?: string
    campeonato: CampeonatoCreateNestedOneWithoutJogosInput
    mandante: EquipeCreateNestedOneWithoutJogosMandanteInput
    visitante: EquipeCreateNestedOneWithoutJogosVisitanteInput
    eventos?: EventoCreateNestedManyWithoutJogoInput
  }

  export type JogoUncheckedCreateInput = {
    id?: number
    numero: number
    campeonatoId: number
    mandanteId: number
    mandanteNome: string
    visitanteId: number
    visitanteNome: string
    golsMandante?: number
    golsVisitante?: number
    status?: string
    eventos?: EventoUncheckedCreateNestedManyWithoutJogoInput
  }

  export type JogoUpdateInput = {
    numero?: IntFieldUpdateOperationsInput | number
    mandanteNome?: StringFieldUpdateOperationsInput | string
    visitanteNome?: StringFieldUpdateOperationsInput | string
    golsMandante?: IntFieldUpdateOperationsInput | number
    golsVisitante?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    campeonato?: CampeonatoUpdateOneRequiredWithoutJogosNestedInput
    mandante?: EquipeUpdateOneRequiredWithoutJogosMandanteNestedInput
    visitante?: EquipeUpdateOneRequiredWithoutJogosVisitanteNestedInput
    eventos?: EventoUpdateManyWithoutJogoNestedInput
  }

  export type JogoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    numero?: IntFieldUpdateOperationsInput | number
    campeonatoId?: IntFieldUpdateOperationsInput | number
    mandanteId?: IntFieldUpdateOperationsInput | number
    mandanteNome?: StringFieldUpdateOperationsInput | string
    visitanteId?: IntFieldUpdateOperationsInput | number
    visitanteNome?: StringFieldUpdateOperationsInput | string
    golsMandante?: IntFieldUpdateOperationsInput | number
    golsVisitante?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    eventos?: EventoUncheckedUpdateManyWithoutJogoNestedInput
  }

  export type JogoCreateManyInput = {
    id?: number
    numero: number
    campeonatoId: number
    mandanteId: number
    mandanteNome: string
    visitanteId: number
    visitanteNome: string
    golsMandante?: number
    golsVisitante?: number
    status?: string
  }

  export type JogoUpdateManyMutationInput = {
    numero?: IntFieldUpdateOperationsInput | number
    mandanteNome?: StringFieldUpdateOperationsInput | string
    visitanteNome?: StringFieldUpdateOperationsInput | string
    golsMandante?: IntFieldUpdateOperationsInput | number
    golsVisitante?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
  }

  export type JogoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    numero?: IntFieldUpdateOperationsInput | number
    campeonatoId?: IntFieldUpdateOperationsInput | number
    mandanteId?: IntFieldUpdateOperationsInput | number
    mandanteNome?: StringFieldUpdateOperationsInput | string
    visitanteId?: IntFieldUpdateOperationsInput | number
    visitanteNome?: StringFieldUpdateOperationsInput | string
    golsMandante?: IntFieldUpdateOperationsInput | number
    golsVisitante?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
  }

  export type EventoCreateInput = {
    gols?: number
    gc?: number
    am?: number
    vm?: number
    jogo: JogoCreateNestedOneWithoutEventosInput
    atleta: AtletaCreateNestedOneWithoutEventosInput
  }

  export type EventoUncheckedCreateInput = {
    id?: number
    jogoId: number
    atletaId: number
    gols?: number
    gc?: number
    am?: number
    vm?: number
  }

  export type EventoUpdateInput = {
    gols?: IntFieldUpdateOperationsInput | number
    gc?: IntFieldUpdateOperationsInput | number
    am?: IntFieldUpdateOperationsInput | number
    vm?: IntFieldUpdateOperationsInput | number
    jogo?: JogoUpdateOneRequiredWithoutEventosNestedInput
    atleta?: AtletaUpdateOneRequiredWithoutEventosNestedInput
  }

  export type EventoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    jogoId?: IntFieldUpdateOperationsInput | number
    atletaId?: IntFieldUpdateOperationsInput | number
    gols?: IntFieldUpdateOperationsInput | number
    gc?: IntFieldUpdateOperationsInput | number
    am?: IntFieldUpdateOperationsInput | number
    vm?: IntFieldUpdateOperationsInput | number
  }

  export type EventoCreateManyInput = {
    id?: number
    jogoId: number
    atletaId: number
    gols?: number
    gc?: number
    am?: number
    vm?: number
  }

  export type EventoUpdateManyMutationInput = {
    gols?: IntFieldUpdateOperationsInput | number
    gc?: IntFieldUpdateOperationsInput | number
    am?: IntFieldUpdateOperationsInput | number
    vm?: IntFieldUpdateOperationsInput | number
  }

  export type EventoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    jogoId?: IntFieldUpdateOperationsInput | number
    atletaId?: IntFieldUpdateOperationsInput | number
    gols?: IntFieldUpdateOperationsInput | number
    gc?: IntFieldUpdateOperationsInput | number
    am?: IntFieldUpdateOperationsInput | number
    vm?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type ParticipacaoListRelationFilter = {
    every?: ParticipacaoWhereInput
    some?: ParticipacaoWhereInput
    none?: ParticipacaoWhereInput
  }

  export type JogoListRelationFilter = {
    every?: JogoWhereInput
    some?: JogoWhereInput
    none?: JogoWhereInput
  }

  export type ParticipacaoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type JogoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CampeonatoCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    ano?: SortOrder
    formato?: SortOrder
  }

  export type CampeonatoAvgOrderByAggregateInput = {
    id?: SortOrder
    ano?: SortOrder
  }

  export type CampeonatoMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    ano?: SortOrder
    formato?: SortOrder
  }

  export type CampeonatoMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    ano?: SortOrder
    formato?: SortOrder
  }

  export type CampeonatoSumOrderByAggregateInput = {
    id?: SortOrder
    ano?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type VinculoListRelationFilter = {
    every?: VinculoWhereInput
    some?: VinculoWhereInput
    none?: VinculoWhereInput
  }

  export type VinculoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EquipeCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    responsavel?: SortOrder
    telefone?: SortOrder
  }

  export type EquipeAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EquipeMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    responsavel?: SortOrder
    telefone?: SortOrder
  }

  export type EquipeMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    responsavel?: SortOrder
    telefone?: SortOrder
  }

  export type EquipeSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EventoListRelationFilter = {
    every?: EventoWhereInput
    some?: EventoWhereInput
    none?: EventoWhereInput
  }

  export type EventoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AtletaCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    cpf?: SortOrder
    numero?: SortOrder
  }

  export type AtletaAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AtletaMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    cpf?: SortOrder
    numero?: SortOrder
  }

  export type AtletaMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    cpf?: SortOrder
    numero?: SortOrder
  }

  export type AtletaSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EquipeScalarRelationFilter = {
    is?: EquipeWhereInput
    isNot?: EquipeWhereInput
  }

  export type CampeonatoScalarRelationFilter = {
    is?: CampeonatoWhereInput
    isNot?: CampeonatoWhereInput
  }

  export type ParticipacaoCountOrderByAggregateInput = {
    id?: SortOrder
    equipeId?: SortOrder
    campeonatoId?: SortOrder
  }

  export type ParticipacaoAvgOrderByAggregateInput = {
    id?: SortOrder
    equipeId?: SortOrder
    campeonatoId?: SortOrder
  }

  export type ParticipacaoMaxOrderByAggregateInput = {
    id?: SortOrder
    equipeId?: SortOrder
    campeonatoId?: SortOrder
  }

  export type ParticipacaoMinOrderByAggregateInput = {
    id?: SortOrder
    equipeId?: SortOrder
    campeonatoId?: SortOrder
  }

  export type ParticipacaoSumOrderByAggregateInput = {
    id?: SortOrder
    equipeId?: SortOrder
    campeonatoId?: SortOrder
  }

  export type AtletaScalarRelationFilter = {
    is?: AtletaWhereInput
    isNot?: AtletaWhereInput
  }

  export type VinculoCountOrderByAggregateInput = {
    id?: SortOrder
    atletaId?: SortOrder
    equipeId?: SortOrder
    tipo?: SortOrder
  }

  export type VinculoAvgOrderByAggregateInput = {
    id?: SortOrder
    atletaId?: SortOrder
    equipeId?: SortOrder
  }

  export type VinculoMaxOrderByAggregateInput = {
    id?: SortOrder
    atletaId?: SortOrder
    equipeId?: SortOrder
    tipo?: SortOrder
  }

  export type VinculoMinOrderByAggregateInput = {
    id?: SortOrder
    atletaId?: SortOrder
    equipeId?: SortOrder
    tipo?: SortOrder
  }

  export type VinculoSumOrderByAggregateInput = {
    id?: SortOrder
    atletaId?: SortOrder
    equipeId?: SortOrder
  }

  export type JogoCountOrderByAggregateInput = {
    id?: SortOrder
    numero?: SortOrder
    campeonatoId?: SortOrder
    mandanteId?: SortOrder
    mandanteNome?: SortOrder
    visitanteId?: SortOrder
    visitanteNome?: SortOrder
    golsMandante?: SortOrder
    golsVisitante?: SortOrder
    status?: SortOrder
  }

  export type JogoAvgOrderByAggregateInput = {
    id?: SortOrder
    numero?: SortOrder
    campeonatoId?: SortOrder
    mandanteId?: SortOrder
    visitanteId?: SortOrder
    golsMandante?: SortOrder
    golsVisitante?: SortOrder
  }

  export type JogoMaxOrderByAggregateInput = {
    id?: SortOrder
    numero?: SortOrder
    campeonatoId?: SortOrder
    mandanteId?: SortOrder
    mandanteNome?: SortOrder
    visitanteId?: SortOrder
    visitanteNome?: SortOrder
    golsMandante?: SortOrder
    golsVisitante?: SortOrder
    status?: SortOrder
  }

  export type JogoMinOrderByAggregateInput = {
    id?: SortOrder
    numero?: SortOrder
    campeonatoId?: SortOrder
    mandanteId?: SortOrder
    mandanteNome?: SortOrder
    visitanteId?: SortOrder
    visitanteNome?: SortOrder
    golsMandante?: SortOrder
    golsVisitante?: SortOrder
    status?: SortOrder
  }

  export type JogoSumOrderByAggregateInput = {
    id?: SortOrder
    numero?: SortOrder
    campeonatoId?: SortOrder
    mandanteId?: SortOrder
    visitanteId?: SortOrder
    golsMandante?: SortOrder
    golsVisitante?: SortOrder
  }

  export type JogoScalarRelationFilter = {
    is?: JogoWhereInput
    isNot?: JogoWhereInput
  }

  export type EventoCountOrderByAggregateInput = {
    id?: SortOrder
    jogoId?: SortOrder
    atletaId?: SortOrder
    gols?: SortOrder
    gc?: SortOrder
    am?: SortOrder
    vm?: SortOrder
  }

  export type EventoAvgOrderByAggregateInput = {
    id?: SortOrder
    jogoId?: SortOrder
    atletaId?: SortOrder
    gols?: SortOrder
    gc?: SortOrder
    am?: SortOrder
    vm?: SortOrder
  }

  export type EventoMaxOrderByAggregateInput = {
    id?: SortOrder
    jogoId?: SortOrder
    atletaId?: SortOrder
    gols?: SortOrder
    gc?: SortOrder
    am?: SortOrder
    vm?: SortOrder
  }

  export type EventoMinOrderByAggregateInput = {
    id?: SortOrder
    jogoId?: SortOrder
    atletaId?: SortOrder
    gols?: SortOrder
    gc?: SortOrder
    am?: SortOrder
    vm?: SortOrder
  }

  export type EventoSumOrderByAggregateInput = {
    id?: SortOrder
    jogoId?: SortOrder
    atletaId?: SortOrder
    gols?: SortOrder
    gc?: SortOrder
    am?: SortOrder
    vm?: SortOrder
  }

  export type ParticipacaoCreateNestedManyWithoutCampeonatoInput = {
    create?: XOR<ParticipacaoCreateWithoutCampeonatoInput, ParticipacaoUncheckedCreateWithoutCampeonatoInput> | ParticipacaoCreateWithoutCampeonatoInput[] | ParticipacaoUncheckedCreateWithoutCampeonatoInput[]
    connectOrCreate?: ParticipacaoCreateOrConnectWithoutCampeonatoInput | ParticipacaoCreateOrConnectWithoutCampeonatoInput[]
    createMany?: ParticipacaoCreateManyCampeonatoInputEnvelope
    connect?: ParticipacaoWhereUniqueInput | ParticipacaoWhereUniqueInput[]
  }

  export type JogoCreateNestedManyWithoutCampeonatoInput = {
    create?: XOR<JogoCreateWithoutCampeonatoInput, JogoUncheckedCreateWithoutCampeonatoInput> | JogoCreateWithoutCampeonatoInput[] | JogoUncheckedCreateWithoutCampeonatoInput[]
    connectOrCreate?: JogoCreateOrConnectWithoutCampeonatoInput | JogoCreateOrConnectWithoutCampeonatoInput[]
    createMany?: JogoCreateManyCampeonatoInputEnvelope
    connect?: JogoWhereUniqueInput | JogoWhereUniqueInput[]
  }

  export type ParticipacaoUncheckedCreateNestedManyWithoutCampeonatoInput = {
    create?: XOR<ParticipacaoCreateWithoutCampeonatoInput, ParticipacaoUncheckedCreateWithoutCampeonatoInput> | ParticipacaoCreateWithoutCampeonatoInput[] | ParticipacaoUncheckedCreateWithoutCampeonatoInput[]
    connectOrCreate?: ParticipacaoCreateOrConnectWithoutCampeonatoInput | ParticipacaoCreateOrConnectWithoutCampeonatoInput[]
    createMany?: ParticipacaoCreateManyCampeonatoInputEnvelope
    connect?: ParticipacaoWhereUniqueInput | ParticipacaoWhereUniqueInput[]
  }

  export type JogoUncheckedCreateNestedManyWithoutCampeonatoInput = {
    create?: XOR<JogoCreateWithoutCampeonatoInput, JogoUncheckedCreateWithoutCampeonatoInput> | JogoCreateWithoutCampeonatoInput[] | JogoUncheckedCreateWithoutCampeonatoInput[]
    connectOrCreate?: JogoCreateOrConnectWithoutCampeonatoInput | JogoCreateOrConnectWithoutCampeonatoInput[]
    createMany?: JogoCreateManyCampeonatoInputEnvelope
    connect?: JogoWhereUniqueInput | JogoWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ParticipacaoUpdateManyWithoutCampeonatoNestedInput = {
    create?: XOR<ParticipacaoCreateWithoutCampeonatoInput, ParticipacaoUncheckedCreateWithoutCampeonatoInput> | ParticipacaoCreateWithoutCampeonatoInput[] | ParticipacaoUncheckedCreateWithoutCampeonatoInput[]
    connectOrCreate?: ParticipacaoCreateOrConnectWithoutCampeonatoInput | ParticipacaoCreateOrConnectWithoutCampeonatoInput[]
    upsert?: ParticipacaoUpsertWithWhereUniqueWithoutCampeonatoInput | ParticipacaoUpsertWithWhereUniqueWithoutCampeonatoInput[]
    createMany?: ParticipacaoCreateManyCampeonatoInputEnvelope
    set?: ParticipacaoWhereUniqueInput | ParticipacaoWhereUniqueInput[]
    disconnect?: ParticipacaoWhereUniqueInput | ParticipacaoWhereUniqueInput[]
    delete?: ParticipacaoWhereUniqueInput | ParticipacaoWhereUniqueInput[]
    connect?: ParticipacaoWhereUniqueInput | ParticipacaoWhereUniqueInput[]
    update?: ParticipacaoUpdateWithWhereUniqueWithoutCampeonatoInput | ParticipacaoUpdateWithWhereUniqueWithoutCampeonatoInput[]
    updateMany?: ParticipacaoUpdateManyWithWhereWithoutCampeonatoInput | ParticipacaoUpdateManyWithWhereWithoutCampeonatoInput[]
    deleteMany?: ParticipacaoScalarWhereInput | ParticipacaoScalarWhereInput[]
  }

  export type JogoUpdateManyWithoutCampeonatoNestedInput = {
    create?: XOR<JogoCreateWithoutCampeonatoInput, JogoUncheckedCreateWithoutCampeonatoInput> | JogoCreateWithoutCampeonatoInput[] | JogoUncheckedCreateWithoutCampeonatoInput[]
    connectOrCreate?: JogoCreateOrConnectWithoutCampeonatoInput | JogoCreateOrConnectWithoutCampeonatoInput[]
    upsert?: JogoUpsertWithWhereUniqueWithoutCampeonatoInput | JogoUpsertWithWhereUniqueWithoutCampeonatoInput[]
    createMany?: JogoCreateManyCampeonatoInputEnvelope
    set?: JogoWhereUniqueInput | JogoWhereUniqueInput[]
    disconnect?: JogoWhereUniqueInput | JogoWhereUniqueInput[]
    delete?: JogoWhereUniqueInput | JogoWhereUniqueInput[]
    connect?: JogoWhereUniqueInput | JogoWhereUniqueInput[]
    update?: JogoUpdateWithWhereUniqueWithoutCampeonatoInput | JogoUpdateWithWhereUniqueWithoutCampeonatoInput[]
    updateMany?: JogoUpdateManyWithWhereWithoutCampeonatoInput | JogoUpdateManyWithWhereWithoutCampeonatoInput[]
    deleteMany?: JogoScalarWhereInput | JogoScalarWhereInput[]
  }

  export type ParticipacaoUncheckedUpdateManyWithoutCampeonatoNestedInput = {
    create?: XOR<ParticipacaoCreateWithoutCampeonatoInput, ParticipacaoUncheckedCreateWithoutCampeonatoInput> | ParticipacaoCreateWithoutCampeonatoInput[] | ParticipacaoUncheckedCreateWithoutCampeonatoInput[]
    connectOrCreate?: ParticipacaoCreateOrConnectWithoutCampeonatoInput | ParticipacaoCreateOrConnectWithoutCampeonatoInput[]
    upsert?: ParticipacaoUpsertWithWhereUniqueWithoutCampeonatoInput | ParticipacaoUpsertWithWhereUniqueWithoutCampeonatoInput[]
    createMany?: ParticipacaoCreateManyCampeonatoInputEnvelope
    set?: ParticipacaoWhereUniqueInput | ParticipacaoWhereUniqueInput[]
    disconnect?: ParticipacaoWhereUniqueInput | ParticipacaoWhereUniqueInput[]
    delete?: ParticipacaoWhereUniqueInput | ParticipacaoWhereUniqueInput[]
    connect?: ParticipacaoWhereUniqueInput | ParticipacaoWhereUniqueInput[]
    update?: ParticipacaoUpdateWithWhereUniqueWithoutCampeonatoInput | ParticipacaoUpdateWithWhereUniqueWithoutCampeonatoInput[]
    updateMany?: ParticipacaoUpdateManyWithWhereWithoutCampeonatoInput | ParticipacaoUpdateManyWithWhereWithoutCampeonatoInput[]
    deleteMany?: ParticipacaoScalarWhereInput | ParticipacaoScalarWhereInput[]
  }

  export type JogoUncheckedUpdateManyWithoutCampeonatoNestedInput = {
    create?: XOR<JogoCreateWithoutCampeonatoInput, JogoUncheckedCreateWithoutCampeonatoInput> | JogoCreateWithoutCampeonatoInput[] | JogoUncheckedCreateWithoutCampeonatoInput[]
    connectOrCreate?: JogoCreateOrConnectWithoutCampeonatoInput | JogoCreateOrConnectWithoutCampeonatoInput[]
    upsert?: JogoUpsertWithWhereUniqueWithoutCampeonatoInput | JogoUpsertWithWhereUniqueWithoutCampeonatoInput[]
    createMany?: JogoCreateManyCampeonatoInputEnvelope
    set?: JogoWhereUniqueInput | JogoWhereUniqueInput[]
    disconnect?: JogoWhereUniqueInput | JogoWhereUniqueInput[]
    delete?: JogoWhereUniqueInput | JogoWhereUniqueInput[]
    connect?: JogoWhereUniqueInput | JogoWhereUniqueInput[]
    update?: JogoUpdateWithWhereUniqueWithoutCampeonatoInput | JogoUpdateWithWhereUniqueWithoutCampeonatoInput[]
    updateMany?: JogoUpdateManyWithWhereWithoutCampeonatoInput | JogoUpdateManyWithWhereWithoutCampeonatoInput[]
    deleteMany?: JogoScalarWhereInput | JogoScalarWhereInput[]
  }

  export type ParticipacaoCreateNestedManyWithoutEquipeInput = {
    create?: XOR<ParticipacaoCreateWithoutEquipeInput, ParticipacaoUncheckedCreateWithoutEquipeInput> | ParticipacaoCreateWithoutEquipeInput[] | ParticipacaoUncheckedCreateWithoutEquipeInput[]
    connectOrCreate?: ParticipacaoCreateOrConnectWithoutEquipeInput | ParticipacaoCreateOrConnectWithoutEquipeInput[]
    createMany?: ParticipacaoCreateManyEquipeInputEnvelope
    connect?: ParticipacaoWhereUniqueInput | ParticipacaoWhereUniqueInput[]
  }

  export type VinculoCreateNestedManyWithoutEquipeInput = {
    create?: XOR<VinculoCreateWithoutEquipeInput, VinculoUncheckedCreateWithoutEquipeInput> | VinculoCreateWithoutEquipeInput[] | VinculoUncheckedCreateWithoutEquipeInput[]
    connectOrCreate?: VinculoCreateOrConnectWithoutEquipeInput | VinculoCreateOrConnectWithoutEquipeInput[]
    createMany?: VinculoCreateManyEquipeInputEnvelope
    connect?: VinculoWhereUniqueInput | VinculoWhereUniqueInput[]
  }

  export type JogoCreateNestedManyWithoutMandanteInput = {
    create?: XOR<JogoCreateWithoutMandanteInput, JogoUncheckedCreateWithoutMandanteInput> | JogoCreateWithoutMandanteInput[] | JogoUncheckedCreateWithoutMandanteInput[]
    connectOrCreate?: JogoCreateOrConnectWithoutMandanteInput | JogoCreateOrConnectWithoutMandanteInput[]
    createMany?: JogoCreateManyMandanteInputEnvelope
    connect?: JogoWhereUniqueInput | JogoWhereUniqueInput[]
  }

  export type JogoCreateNestedManyWithoutVisitanteInput = {
    create?: XOR<JogoCreateWithoutVisitanteInput, JogoUncheckedCreateWithoutVisitanteInput> | JogoCreateWithoutVisitanteInput[] | JogoUncheckedCreateWithoutVisitanteInput[]
    connectOrCreate?: JogoCreateOrConnectWithoutVisitanteInput | JogoCreateOrConnectWithoutVisitanteInput[]
    createMany?: JogoCreateManyVisitanteInputEnvelope
    connect?: JogoWhereUniqueInput | JogoWhereUniqueInput[]
  }

  export type ParticipacaoUncheckedCreateNestedManyWithoutEquipeInput = {
    create?: XOR<ParticipacaoCreateWithoutEquipeInput, ParticipacaoUncheckedCreateWithoutEquipeInput> | ParticipacaoCreateWithoutEquipeInput[] | ParticipacaoUncheckedCreateWithoutEquipeInput[]
    connectOrCreate?: ParticipacaoCreateOrConnectWithoutEquipeInput | ParticipacaoCreateOrConnectWithoutEquipeInput[]
    createMany?: ParticipacaoCreateManyEquipeInputEnvelope
    connect?: ParticipacaoWhereUniqueInput | ParticipacaoWhereUniqueInput[]
  }

  export type VinculoUncheckedCreateNestedManyWithoutEquipeInput = {
    create?: XOR<VinculoCreateWithoutEquipeInput, VinculoUncheckedCreateWithoutEquipeInput> | VinculoCreateWithoutEquipeInput[] | VinculoUncheckedCreateWithoutEquipeInput[]
    connectOrCreate?: VinculoCreateOrConnectWithoutEquipeInput | VinculoCreateOrConnectWithoutEquipeInput[]
    createMany?: VinculoCreateManyEquipeInputEnvelope
    connect?: VinculoWhereUniqueInput | VinculoWhereUniqueInput[]
  }

  export type JogoUncheckedCreateNestedManyWithoutMandanteInput = {
    create?: XOR<JogoCreateWithoutMandanteInput, JogoUncheckedCreateWithoutMandanteInput> | JogoCreateWithoutMandanteInput[] | JogoUncheckedCreateWithoutMandanteInput[]
    connectOrCreate?: JogoCreateOrConnectWithoutMandanteInput | JogoCreateOrConnectWithoutMandanteInput[]
    createMany?: JogoCreateManyMandanteInputEnvelope
    connect?: JogoWhereUniqueInput | JogoWhereUniqueInput[]
  }

  export type JogoUncheckedCreateNestedManyWithoutVisitanteInput = {
    create?: XOR<JogoCreateWithoutVisitanteInput, JogoUncheckedCreateWithoutVisitanteInput> | JogoCreateWithoutVisitanteInput[] | JogoUncheckedCreateWithoutVisitanteInput[]
    connectOrCreate?: JogoCreateOrConnectWithoutVisitanteInput | JogoCreateOrConnectWithoutVisitanteInput[]
    createMany?: JogoCreateManyVisitanteInputEnvelope
    connect?: JogoWhereUniqueInput | JogoWhereUniqueInput[]
  }

  export type ParticipacaoUpdateManyWithoutEquipeNestedInput = {
    create?: XOR<ParticipacaoCreateWithoutEquipeInput, ParticipacaoUncheckedCreateWithoutEquipeInput> | ParticipacaoCreateWithoutEquipeInput[] | ParticipacaoUncheckedCreateWithoutEquipeInput[]
    connectOrCreate?: ParticipacaoCreateOrConnectWithoutEquipeInput | ParticipacaoCreateOrConnectWithoutEquipeInput[]
    upsert?: ParticipacaoUpsertWithWhereUniqueWithoutEquipeInput | ParticipacaoUpsertWithWhereUniqueWithoutEquipeInput[]
    createMany?: ParticipacaoCreateManyEquipeInputEnvelope
    set?: ParticipacaoWhereUniqueInput | ParticipacaoWhereUniqueInput[]
    disconnect?: ParticipacaoWhereUniqueInput | ParticipacaoWhereUniqueInput[]
    delete?: ParticipacaoWhereUniqueInput | ParticipacaoWhereUniqueInput[]
    connect?: ParticipacaoWhereUniqueInput | ParticipacaoWhereUniqueInput[]
    update?: ParticipacaoUpdateWithWhereUniqueWithoutEquipeInput | ParticipacaoUpdateWithWhereUniqueWithoutEquipeInput[]
    updateMany?: ParticipacaoUpdateManyWithWhereWithoutEquipeInput | ParticipacaoUpdateManyWithWhereWithoutEquipeInput[]
    deleteMany?: ParticipacaoScalarWhereInput | ParticipacaoScalarWhereInput[]
  }

  export type VinculoUpdateManyWithoutEquipeNestedInput = {
    create?: XOR<VinculoCreateWithoutEquipeInput, VinculoUncheckedCreateWithoutEquipeInput> | VinculoCreateWithoutEquipeInput[] | VinculoUncheckedCreateWithoutEquipeInput[]
    connectOrCreate?: VinculoCreateOrConnectWithoutEquipeInput | VinculoCreateOrConnectWithoutEquipeInput[]
    upsert?: VinculoUpsertWithWhereUniqueWithoutEquipeInput | VinculoUpsertWithWhereUniqueWithoutEquipeInput[]
    createMany?: VinculoCreateManyEquipeInputEnvelope
    set?: VinculoWhereUniqueInput | VinculoWhereUniqueInput[]
    disconnect?: VinculoWhereUniqueInput | VinculoWhereUniqueInput[]
    delete?: VinculoWhereUniqueInput | VinculoWhereUniqueInput[]
    connect?: VinculoWhereUniqueInput | VinculoWhereUniqueInput[]
    update?: VinculoUpdateWithWhereUniqueWithoutEquipeInput | VinculoUpdateWithWhereUniqueWithoutEquipeInput[]
    updateMany?: VinculoUpdateManyWithWhereWithoutEquipeInput | VinculoUpdateManyWithWhereWithoutEquipeInput[]
    deleteMany?: VinculoScalarWhereInput | VinculoScalarWhereInput[]
  }

  export type JogoUpdateManyWithoutMandanteNestedInput = {
    create?: XOR<JogoCreateWithoutMandanteInput, JogoUncheckedCreateWithoutMandanteInput> | JogoCreateWithoutMandanteInput[] | JogoUncheckedCreateWithoutMandanteInput[]
    connectOrCreate?: JogoCreateOrConnectWithoutMandanteInput | JogoCreateOrConnectWithoutMandanteInput[]
    upsert?: JogoUpsertWithWhereUniqueWithoutMandanteInput | JogoUpsertWithWhereUniqueWithoutMandanteInput[]
    createMany?: JogoCreateManyMandanteInputEnvelope
    set?: JogoWhereUniqueInput | JogoWhereUniqueInput[]
    disconnect?: JogoWhereUniqueInput | JogoWhereUniqueInput[]
    delete?: JogoWhereUniqueInput | JogoWhereUniqueInput[]
    connect?: JogoWhereUniqueInput | JogoWhereUniqueInput[]
    update?: JogoUpdateWithWhereUniqueWithoutMandanteInput | JogoUpdateWithWhereUniqueWithoutMandanteInput[]
    updateMany?: JogoUpdateManyWithWhereWithoutMandanteInput | JogoUpdateManyWithWhereWithoutMandanteInput[]
    deleteMany?: JogoScalarWhereInput | JogoScalarWhereInput[]
  }

  export type JogoUpdateManyWithoutVisitanteNestedInput = {
    create?: XOR<JogoCreateWithoutVisitanteInput, JogoUncheckedCreateWithoutVisitanteInput> | JogoCreateWithoutVisitanteInput[] | JogoUncheckedCreateWithoutVisitanteInput[]
    connectOrCreate?: JogoCreateOrConnectWithoutVisitanteInput | JogoCreateOrConnectWithoutVisitanteInput[]
    upsert?: JogoUpsertWithWhereUniqueWithoutVisitanteInput | JogoUpsertWithWhereUniqueWithoutVisitanteInput[]
    createMany?: JogoCreateManyVisitanteInputEnvelope
    set?: JogoWhereUniqueInput | JogoWhereUniqueInput[]
    disconnect?: JogoWhereUniqueInput | JogoWhereUniqueInput[]
    delete?: JogoWhereUniqueInput | JogoWhereUniqueInput[]
    connect?: JogoWhereUniqueInput | JogoWhereUniqueInput[]
    update?: JogoUpdateWithWhereUniqueWithoutVisitanteInput | JogoUpdateWithWhereUniqueWithoutVisitanteInput[]
    updateMany?: JogoUpdateManyWithWhereWithoutVisitanteInput | JogoUpdateManyWithWhereWithoutVisitanteInput[]
    deleteMany?: JogoScalarWhereInput | JogoScalarWhereInput[]
  }

  export type ParticipacaoUncheckedUpdateManyWithoutEquipeNestedInput = {
    create?: XOR<ParticipacaoCreateWithoutEquipeInput, ParticipacaoUncheckedCreateWithoutEquipeInput> | ParticipacaoCreateWithoutEquipeInput[] | ParticipacaoUncheckedCreateWithoutEquipeInput[]
    connectOrCreate?: ParticipacaoCreateOrConnectWithoutEquipeInput | ParticipacaoCreateOrConnectWithoutEquipeInput[]
    upsert?: ParticipacaoUpsertWithWhereUniqueWithoutEquipeInput | ParticipacaoUpsertWithWhereUniqueWithoutEquipeInput[]
    createMany?: ParticipacaoCreateManyEquipeInputEnvelope
    set?: ParticipacaoWhereUniqueInput | ParticipacaoWhereUniqueInput[]
    disconnect?: ParticipacaoWhereUniqueInput | ParticipacaoWhereUniqueInput[]
    delete?: ParticipacaoWhereUniqueInput | ParticipacaoWhereUniqueInput[]
    connect?: ParticipacaoWhereUniqueInput | ParticipacaoWhereUniqueInput[]
    update?: ParticipacaoUpdateWithWhereUniqueWithoutEquipeInput | ParticipacaoUpdateWithWhereUniqueWithoutEquipeInput[]
    updateMany?: ParticipacaoUpdateManyWithWhereWithoutEquipeInput | ParticipacaoUpdateManyWithWhereWithoutEquipeInput[]
    deleteMany?: ParticipacaoScalarWhereInput | ParticipacaoScalarWhereInput[]
  }

  export type VinculoUncheckedUpdateManyWithoutEquipeNestedInput = {
    create?: XOR<VinculoCreateWithoutEquipeInput, VinculoUncheckedCreateWithoutEquipeInput> | VinculoCreateWithoutEquipeInput[] | VinculoUncheckedCreateWithoutEquipeInput[]
    connectOrCreate?: VinculoCreateOrConnectWithoutEquipeInput | VinculoCreateOrConnectWithoutEquipeInput[]
    upsert?: VinculoUpsertWithWhereUniqueWithoutEquipeInput | VinculoUpsertWithWhereUniqueWithoutEquipeInput[]
    createMany?: VinculoCreateManyEquipeInputEnvelope
    set?: VinculoWhereUniqueInput | VinculoWhereUniqueInput[]
    disconnect?: VinculoWhereUniqueInput | VinculoWhereUniqueInput[]
    delete?: VinculoWhereUniqueInput | VinculoWhereUniqueInput[]
    connect?: VinculoWhereUniqueInput | VinculoWhereUniqueInput[]
    update?: VinculoUpdateWithWhereUniqueWithoutEquipeInput | VinculoUpdateWithWhereUniqueWithoutEquipeInput[]
    updateMany?: VinculoUpdateManyWithWhereWithoutEquipeInput | VinculoUpdateManyWithWhereWithoutEquipeInput[]
    deleteMany?: VinculoScalarWhereInput | VinculoScalarWhereInput[]
  }

  export type JogoUncheckedUpdateManyWithoutMandanteNestedInput = {
    create?: XOR<JogoCreateWithoutMandanteInput, JogoUncheckedCreateWithoutMandanteInput> | JogoCreateWithoutMandanteInput[] | JogoUncheckedCreateWithoutMandanteInput[]
    connectOrCreate?: JogoCreateOrConnectWithoutMandanteInput | JogoCreateOrConnectWithoutMandanteInput[]
    upsert?: JogoUpsertWithWhereUniqueWithoutMandanteInput | JogoUpsertWithWhereUniqueWithoutMandanteInput[]
    createMany?: JogoCreateManyMandanteInputEnvelope
    set?: JogoWhereUniqueInput | JogoWhereUniqueInput[]
    disconnect?: JogoWhereUniqueInput | JogoWhereUniqueInput[]
    delete?: JogoWhereUniqueInput | JogoWhereUniqueInput[]
    connect?: JogoWhereUniqueInput | JogoWhereUniqueInput[]
    update?: JogoUpdateWithWhereUniqueWithoutMandanteInput | JogoUpdateWithWhereUniqueWithoutMandanteInput[]
    updateMany?: JogoUpdateManyWithWhereWithoutMandanteInput | JogoUpdateManyWithWhereWithoutMandanteInput[]
    deleteMany?: JogoScalarWhereInput | JogoScalarWhereInput[]
  }

  export type JogoUncheckedUpdateManyWithoutVisitanteNestedInput = {
    create?: XOR<JogoCreateWithoutVisitanteInput, JogoUncheckedCreateWithoutVisitanteInput> | JogoCreateWithoutVisitanteInput[] | JogoUncheckedCreateWithoutVisitanteInput[]
    connectOrCreate?: JogoCreateOrConnectWithoutVisitanteInput | JogoCreateOrConnectWithoutVisitanteInput[]
    upsert?: JogoUpsertWithWhereUniqueWithoutVisitanteInput | JogoUpsertWithWhereUniqueWithoutVisitanteInput[]
    createMany?: JogoCreateManyVisitanteInputEnvelope
    set?: JogoWhereUniqueInput | JogoWhereUniqueInput[]
    disconnect?: JogoWhereUniqueInput | JogoWhereUniqueInput[]
    delete?: JogoWhereUniqueInput | JogoWhereUniqueInput[]
    connect?: JogoWhereUniqueInput | JogoWhereUniqueInput[]
    update?: JogoUpdateWithWhereUniqueWithoutVisitanteInput | JogoUpdateWithWhereUniqueWithoutVisitanteInput[]
    updateMany?: JogoUpdateManyWithWhereWithoutVisitanteInput | JogoUpdateManyWithWhereWithoutVisitanteInput[]
    deleteMany?: JogoScalarWhereInput | JogoScalarWhereInput[]
  }

  export type VinculoCreateNestedManyWithoutAtletaInput = {
    create?: XOR<VinculoCreateWithoutAtletaInput, VinculoUncheckedCreateWithoutAtletaInput> | VinculoCreateWithoutAtletaInput[] | VinculoUncheckedCreateWithoutAtletaInput[]
    connectOrCreate?: VinculoCreateOrConnectWithoutAtletaInput | VinculoCreateOrConnectWithoutAtletaInput[]
    createMany?: VinculoCreateManyAtletaInputEnvelope
    connect?: VinculoWhereUniqueInput | VinculoWhereUniqueInput[]
  }

  export type EventoCreateNestedManyWithoutAtletaInput = {
    create?: XOR<EventoCreateWithoutAtletaInput, EventoUncheckedCreateWithoutAtletaInput> | EventoCreateWithoutAtletaInput[] | EventoUncheckedCreateWithoutAtletaInput[]
    connectOrCreate?: EventoCreateOrConnectWithoutAtletaInput | EventoCreateOrConnectWithoutAtletaInput[]
    createMany?: EventoCreateManyAtletaInputEnvelope
    connect?: EventoWhereUniqueInput | EventoWhereUniqueInput[]
  }

  export type VinculoUncheckedCreateNestedManyWithoutAtletaInput = {
    create?: XOR<VinculoCreateWithoutAtletaInput, VinculoUncheckedCreateWithoutAtletaInput> | VinculoCreateWithoutAtletaInput[] | VinculoUncheckedCreateWithoutAtletaInput[]
    connectOrCreate?: VinculoCreateOrConnectWithoutAtletaInput | VinculoCreateOrConnectWithoutAtletaInput[]
    createMany?: VinculoCreateManyAtletaInputEnvelope
    connect?: VinculoWhereUniqueInput | VinculoWhereUniqueInput[]
  }

  export type EventoUncheckedCreateNestedManyWithoutAtletaInput = {
    create?: XOR<EventoCreateWithoutAtletaInput, EventoUncheckedCreateWithoutAtletaInput> | EventoCreateWithoutAtletaInput[] | EventoUncheckedCreateWithoutAtletaInput[]
    connectOrCreate?: EventoCreateOrConnectWithoutAtletaInput | EventoCreateOrConnectWithoutAtletaInput[]
    createMany?: EventoCreateManyAtletaInputEnvelope
    connect?: EventoWhereUniqueInput | EventoWhereUniqueInput[]
  }

  export type VinculoUpdateManyWithoutAtletaNestedInput = {
    create?: XOR<VinculoCreateWithoutAtletaInput, VinculoUncheckedCreateWithoutAtletaInput> | VinculoCreateWithoutAtletaInput[] | VinculoUncheckedCreateWithoutAtletaInput[]
    connectOrCreate?: VinculoCreateOrConnectWithoutAtletaInput | VinculoCreateOrConnectWithoutAtletaInput[]
    upsert?: VinculoUpsertWithWhereUniqueWithoutAtletaInput | VinculoUpsertWithWhereUniqueWithoutAtletaInput[]
    createMany?: VinculoCreateManyAtletaInputEnvelope
    set?: VinculoWhereUniqueInput | VinculoWhereUniqueInput[]
    disconnect?: VinculoWhereUniqueInput | VinculoWhereUniqueInput[]
    delete?: VinculoWhereUniqueInput | VinculoWhereUniqueInput[]
    connect?: VinculoWhereUniqueInput | VinculoWhereUniqueInput[]
    update?: VinculoUpdateWithWhereUniqueWithoutAtletaInput | VinculoUpdateWithWhereUniqueWithoutAtletaInput[]
    updateMany?: VinculoUpdateManyWithWhereWithoutAtletaInput | VinculoUpdateManyWithWhereWithoutAtletaInput[]
    deleteMany?: VinculoScalarWhereInput | VinculoScalarWhereInput[]
  }

  export type EventoUpdateManyWithoutAtletaNestedInput = {
    create?: XOR<EventoCreateWithoutAtletaInput, EventoUncheckedCreateWithoutAtletaInput> | EventoCreateWithoutAtletaInput[] | EventoUncheckedCreateWithoutAtletaInput[]
    connectOrCreate?: EventoCreateOrConnectWithoutAtletaInput | EventoCreateOrConnectWithoutAtletaInput[]
    upsert?: EventoUpsertWithWhereUniqueWithoutAtletaInput | EventoUpsertWithWhereUniqueWithoutAtletaInput[]
    createMany?: EventoCreateManyAtletaInputEnvelope
    set?: EventoWhereUniqueInput | EventoWhereUniqueInput[]
    disconnect?: EventoWhereUniqueInput | EventoWhereUniqueInput[]
    delete?: EventoWhereUniqueInput | EventoWhereUniqueInput[]
    connect?: EventoWhereUniqueInput | EventoWhereUniqueInput[]
    update?: EventoUpdateWithWhereUniqueWithoutAtletaInput | EventoUpdateWithWhereUniqueWithoutAtletaInput[]
    updateMany?: EventoUpdateManyWithWhereWithoutAtletaInput | EventoUpdateManyWithWhereWithoutAtletaInput[]
    deleteMany?: EventoScalarWhereInput | EventoScalarWhereInput[]
  }

  export type VinculoUncheckedUpdateManyWithoutAtletaNestedInput = {
    create?: XOR<VinculoCreateWithoutAtletaInput, VinculoUncheckedCreateWithoutAtletaInput> | VinculoCreateWithoutAtletaInput[] | VinculoUncheckedCreateWithoutAtletaInput[]
    connectOrCreate?: VinculoCreateOrConnectWithoutAtletaInput | VinculoCreateOrConnectWithoutAtletaInput[]
    upsert?: VinculoUpsertWithWhereUniqueWithoutAtletaInput | VinculoUpsertWithWhereUniqueWithoutAtletaInput[]
    createMany?: VinculoCreateManyAtletaInputEnvelope
    set?: VinculoWhereUniqueInput | VinculoWhereUniqueInput[]
    disconnect?: VinculoWhereUniqueInput | VinculoWhereUniqueInput[]
    delete?: VinculoWhereUniqueInput | VinculoWhereUniqueInput[]
    connect?: VinculoWhereUniqueInput | VinculoWhereUniqueInput[]
    update?: VinculoUpdateWithWhereUniqueWithoutAtletaInput | VinculoUpdateWithWhereUniqueWithoutAtletaInput[]
    updateMany?: VinculoUpdateManyWithWhereWithoutAtletaInput | VinculoUpdateManyWithWhereWithoutAtletaInput[]
    deleteMany?: VinculoScalarWhereInput | VinculoScalarWhereInput[]
  }

  export type EventoUncheckedUpdateManyWithoutAtletaNestedInput = {
    create?: XOR<EventoCreateWithoutAtletaInput, EventoUncheckedCreateWithoutAtletaInput> | EventoCreateWithoutAtletaInput[] | EventoUncheckedCreateWithoutAtletaInput[]
    connectOrCreate?: EventoCreateOrConnectWithoutAtletaInput | EventoCreateOrConnectWithoutAtletaInput[]
    upsert?: EventoUpsertWithWhereUniqueWithoutAtletaInput | EventoUpsertWithWhereUniqueWithoutAtletaInput[]
    createMany?: EventoCreateManyAtletaInputEnvelope
    set?: EventoWhereUniqueInput | EventoWhereUniqueInput[]
    disconnect?: EventoWhereUniqueInput | EventoWhereUniqueInput[]
    delete?: EventoWhereUniqueInput | EventoWhereUniqueInput[]
    connect?: EventoWhereUniqueInput | EventoWhereUniqueInput[]
    update?: EventoUpdateWithWhereUniqueWithoutAtletaInput | EventoUpdateWithWhereUniqueWithoutAtletaInput[]
    updateMany?: EventoUpdateManyWithWhereWithoutAtletaInput | EventoUpdateManyWithWhereWithoutAtletaInput[]
    deleteMany?: EventoScalarWhereInput | EventoScalarWhereInput[]
  }

  export type EquipeCreateNestedOneWithoutParticipacoesInput = {
    create?: XOR<EquipeCreateWithoutParticipacoesInput, EquipeUncheckedCreateWithoutParticipacoesInput>
    connectOrCreate?: EquipeCreateOrConnectWithoutParticipacoesInput
    connect?: EquipeWhereUniqueInput
  }

  export type CampeonatoCreateNestedOneWithoutParticipacoesInput = {
    create?: XOR<CampeonatoCreateWithoutParticipacoesInput, CampeonatoUncheckedCreateWithoutParticipacoesInput>
    connectOrCreate?: CampeonatoCreateOrConnectWithoutParticipacoesInput
    connect?: CampeonatoWhereUniqueInput
  }

  export type EquipeUpdateOneRequiredWithoutParticipacoesNestedInput = {
    create?: XOR<EquipeCreateWithoutParticipacoesInput, EquipeUncheckedCreateWithoutParticipacoesInput>
    connectOrCreate?: EquipeCreateOrConnectWithoutParticipacoesInput
    upsert?: EquipeUpsertWithoutParticipacoesInput
    connect?: EquipeWhereUniqueInput
    update?: XOR<XOR<EquipeUpdateToOneWithWhereWithoutParticipacoesInput, EquipeUpdateWithoutParticipacoesInput>, EquipeUncheckedUpdateWithoutParticipacoesInput>
  }

  export type CampeonatoUpdateOneRequiredWithoutParticipacoesNestedInput = {
    create?: XOR<CampeonatoCreateWithoutParticipacoesInput, CampeonatoUncheckedCreateWithoutParticipacoesInput>
    connectOrCreate?: CampeonatoCreateOrConnectWithoutParticipacoesInput
    upsert?: CampeonatoUpsertWithoutParticipacoesInput
    connect?: CampeonatoWhereUniqueInput
    update?: XOR<XOR<CampeonatoUpdateToOneWithWhereWithoutParticipacoesInput, CampeonatoUpdateWithoutParticipacoesInput>, CampeonatoUncheckedUpdateWithoutParticipacoesInput>
  }

  export type AtletaCreateNestedOneWithoutVinculosInput = {
    create?: XOR<AtletaCreateWithoutVinculosInput, AtletaUncheckedCreateWithoutVinculosInput>
    connectOrCreate?: AtletaCreateOrConnectWithoutVinculosInput
    connect?: AtletaWhereUniqueInput
  }

  export type EquipeCreateNestedOneWithoutVinculosInput = {
    create?: XOR<EquipeCreateWithoutVinculosInput, EquipeUncheckedCreateWithoutVinculosInput>
    connectOrCreate?: EquipeCreateOrConnectWithoutVinculosInput
    connect?: EquipeWhereUniqueInput
  }

  export type AtletaUpdateOneRequiredWithoutVinculosNestedInput = {
    create?: XOR<AtletaCreateWithoutVinculosInput, AtletaUncheckedCreateWithoutVinculosInput>
    connectOrCreate?: AtletaCreateOrConnectWithoutVinculosInput
    upsert?: AtletaUpsertWithoutVinculosInput
    connect?: AtletaWhereUniqueInput
    update?: XOR<XOR<AtletaUpdateToOneWithWhereWithoutVinculosInput, AtletaUpdateWithoutVinculosInput>, AtletaUncheckedUpdateWithoutVinculosInput>
  }

  export type EquipeUpdateOneRequiredWithoutVinculosNestedInput = {
    create?: XOR<EquipeCreateWithoutVinculosInput, EquipeUncheckedCreateWithoutVinculosInput>
    connectOrCreate?: EquipeCreateOrConnectWithoutVinculosInput
    upsert?: EquipeUpsertWithoutVinculosInput
    connect?: EquipeWhereUniqueInput
    update?: XOR<XOR<EquipeUpdateToOneWithWhereWithoutVinculosInput, EquipeUpdateWithoutVinculosInput>, EquipeUncheckedUpdateWithoutVinculosInput>
  }

  export type CampeonatoCreateNestedOneWithoutJogosInput = {
    create?: XOR<CampeonatoCreateWithoutJogosInput, CampeonatoUncheckedCreateWithoutJogosInput>
    connectOrCreate?: CampeonatoCreateOrConnectWithoutJogosInput
    connect?: CampeonatoWhereUniqueInput
  }

  export type EquipeCreateNestedOneWithoutJogosMandanteInput = {
    create?: XOR<EquipeCreateWithoutJogosMandanteInput, EquipeUncheckedCreateWithoutJogosMandanteInput>
    connectOrCreate?: EquipeCreateOrConnectWithoutJogosMandanteInput
    connect?: EquipeWhereUniqueInput
  }

  export type EquipeCreateNestedOneWithoutJogosVisitanteInput = {
    create?: XOR<EquipeCreateWithoutJogosVisitanteInput, EquipeUncheckedCreateWithoutJogosVisitanteInput>
    connectOrCreate?: EquipeCreateOrConnectWithoutJogosVisitanteInput
    connect?: EquipeWhereUniqueInput
  }

  export type EventoCreateNestedManyWithoutJogoInput = {
    create?: XOR<EventoCreateWithoutJogoInput, EventoUncheckedCreateWithoutJogoInput> | EventoCreateWithoutJogoInput[] | EventoUncheckedCreateWithoutJogoInput[]
    connectOrCreate?: EventoCreateOrConnectWithoutJogoInput | EventoCreateOrConnectWithoutJogoInput[]
    createMany?: EventoCreateManyJogoInputEnvelope
    connect?: EventoWhereUniqueInput | EventoWhereUniqueInput[]
  }

  export type EventoUncheckedCreateNestedManyWithoutJogoInput = {
    create?: XOR<EventoCreateWithoutJogoInput, EventoUncheckedCreateWithoutJogoInput> | EventoCreateWithoutJogoInput[] | EventoUncheckedCreateWithoutJogoInput[]
    connectOrCreate?: EventoCreateOrConnectWithoutJogoInput | EventoCreateOrConnectWithoutJogoInput[]
    createMany?: EventoCreateManyJogoInputEnvelope
    connect?: EventoWhereUniqueInput | EventoWhereUniqueInput[]
  }

  export type CampeonatoUpdateOneRequiredWithoutJogosNestedInput = {
    create?: XOR<CampeonatoCreateWithoutJogosInput, CampeonatoUncheckedCreateWithoutJogosInput>
    connectOrCreate?: CampeonatoCreateOrConnectWithoutJogosInput
    upsert?: CampeonatoUpsertWithoutJogosInput
    connect?: CampeonatoWhereUniqueInput
    update?: XOR<XOR<CampeonatoUpdateToOneWithWhereWithoutJogosInput, CampeonatoUpdateWithoutJogosInput>, CampeonatoUncheckedUpdateWithoutJogosInput>
  }

  export type EquipeUpdateOneRequiredWithoutJogosMandanteNestedInput = {
    create?: XOR<EquipeCreateWithoutJogosMandanteInput, EquipeUncheckedCreateWithoutJogosMandanteInput>
    connectOrCreate?: EquipeCreateOrConnectWithoutJogosMandanteInput
    upsert?: EquipeUpsertWithoutJogosMandanteInput
    connect?: EquipeWhereUniqueInput
    update?: XOR<XOR<EquipeUpdateToOneWithWhereWithoutJogosMandanteInput, EquipeUpdateWithoutJogosMandanteInput>, EquipeUncheckedUpdateWithoutJogosMandanteInput>
  }

  export type EquipeUpdateOneRequiredWithoutJogosVisitanteNestedInput = {
    create?: XOR<EquipeCreateWithoutJogosVisitanteInput, EquipeUncheckedCreateWithoutJogosVisitanteInput>
    connectOrCreate?: EquipeCreateOrConnectWithoutJogosVisitanteInput
    upsert?: EquipeUpsertWithoutJogosVisitanteInput
    connect?: EquipeWhereUniqueInput
    update?: XOR<XOR<EquipeUpdateToOneWithWhereWithoutJogosVisitanteInput, EquipeUpdateWithoutJogosVisitanteInput>, EquipeUncheckedUpdateWithoutJogosVisitanteInput>
  }

  export type EventoUpdateManyWithoutJogoNestedInput = {
    create?: XOR<EventoCreateWithoutJogoInput, EventoUncheckedCreateWithoutJogoInput> | EventoCreateWithoutJogoInput[] | EventoUncheckedCreateWithoutJogoInput[]
    connectOrCreate?: EventoCreateOrConnectWithoutJogoInput | EventoCreateOrConnectWithoutJogoInput[]
    upsert?: EventoUpsertWithWhereUniqueWithoutJogoInput | EventoUpsertWithWhereUniqueWithoutJogoInput[]
    createMany?: EventoCreateManyJogoInputEnvelope
    set?: EventoWhereUniqueInput | EventoWhereUniqueInput[]
    disconnect?: EventoWhereUniqueInput | EventoWhereUniqueInput[]
    delete?: EventoWhereUniqueInput | EventoWhereUniqueInput[]
    connect?: EventoWhereUniqueInput | EventoWhereUniqueInput[]
    update?: EventoUpdateWithWhereUniqueWithoutJogoInput | EventoUpdateWithWhereUniqueWithoutJogoInput[]
    updateMany?: EventoUpdateManyWithWhereWithoutJogoInput | EventoUpdateManyWithWhereWithoutJogoInput[]
    deleteMany?: EventoScalarWhereInput | EventoScalarWhereInput[]
  }

  export type EventoUncheckedUpdateManyWithoutJogoNestedInput = {
    create?: XOR<EventoCreateWithoutJogoInput, EventoUncheckedCreateWithoutJogoInput> | EventoCreateWithoutJogoInput[] | EventoUncheckedCreateWithoutJogoInput[]
    connectOrCreate?: EventoCreateOrConnectWithoutJogoInput | EventoCreateOrConnectWithoutJogoInput[]
    upsert?: EventoUpsertWithWhereUniqueWithoutJogoInput | EventoUpsertWithWhereUniqueWithoutJogoInput[]
    createMany?: EventoCreateManyJogoInputEnvelope
    set?: EventoWhereUniqueInput | EventoWhereUniqueInput[]
    disconnect?: EventoWhereUniqueInput | EventoWhereUniqueInput[]
    delete?: EventoWhereUniqueInput | EventoWhereUniqueInput[]
    connect?: EventoWhereUniqueInput | EventoWhereUniqueInput[]
    update?: EventoUpdateWithWhereUniqueWithoutJogoInput | EventoUpdateWithWhereUniqueWithoutJogoInput[]
    updateMany?: EventoUpdateManyWithWhereWithoutJogoInput | EventoUpdateManyWithWhereWithoutJogoInput[]
    deleteMany?: EventoScalarWhereInput | EventoScalarWhereInput[]
  }

  export type JogoCreateNestedOneWithoutEventosInput = {
    create?: XOR<JogoCreateWithoutEventosInput, JogoUncheckedCreateWithoutEventosInput>
    connectOrCreate?: JogoCreateOrConnectWithoutEventosInput
    connect?: JogoWhereUniqueInput
  }

  export type AtletaCreateNestedOneWithoutEventosInput = {
    create?: XOR<AtletaCreateWithoutEventosInput, AtletaUncheckedCreateWithoutEventosInput>
    connectOrCreate?: AtletaCreateOrConnectWithoutEventosInput
    connect?: AtletaWhereUniqueInput
  }

  export type JogoUpdateOneRequiredWithoutEventosNestedInput = {
    create?: XOR<JogoCreateWithoutEventosInput, JogoUncheckedCreateWithoutEventosInput>
    connectOrCreate?: JogoCreateOrConnectWithoutEventosInput
    upsert?: JogoUpsertWithoutEventosInput
    connect?: JogoWhereUniqueInput
    update?: XOR<XOR<JogoUpdateToOneWithWhereWithoutEventosInput, JogoUpdateWithoutEventosInput>, JogoUncheckedUpdateWithoutEventosInput>
  }

  export type AtletaUpdateOneRequiredWithoutEventosNestedInput = {
    create?: XOR<AtletaCreateWithoutEventosInput, AtletaUncheckedCreateWithoutEventosInput>
    connectOrCreate?: AtletaCreateOrConnectWithoutEventosInput
    upsert?: AtletaUpsertWithoutEventosInput
    connect?: AtletaWhereUniqueInput
    update?: XOR<XOR<AtletaUpdateToOneWithWhereWithoutEventosInput, AtletaUpdateWithoutEventosInput>, AtletaUncheckedUpdateWithoutEventosInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type ParticipacaoCreateWithoutCampeonatoInput = {
    equipe: EquipeCreateNestedOneWithoutParticipacoesInput
  }

  export type ParticipacaoUncheckedCreateWithoutCampeonatoInput = {
    id?: number
    equipeId: number
  }

  export type ParticipacaoCreateOrConnectWithoutCampeonatoInput = {
    where: ParticipacaoWhereUniqueInput
    create: XOR<ParticipacaoCreateWithoutCampeonatoInput, ParticipacaoUncheckedCreateWithoutCampeonatoInput>
  }

  export type ParticipacaoCreateManyCampeonatoInputEnvelope = {
    data: ParticipacaoCreateManyCampeonatoInput | ParticipacaoCreateManyCampeonatoInput[]
  }

  export type JogoCreateWithoutCampeonatoInput = {
    numero: number
    mandanteNome: string
    visitanteNome: string
    golsMandante?: number
    golsVisitante?: number
    status?: string
    mandante: EquipeCreateNestedOneWithoutJogosMandanteInput
    visitante: EquipeCreateNestedOneWithoutJogosVisitanteInput
    eventos?: EventoCreateNestedManyWithoutJogoInput
  }

  export type JogoUncheckedCreateWithoutCampeonatoInput = {
    id?: number
    numero: number
    mandanteId: number
    mandanteNome: string
    visitanteId: number
    visitanteNome: string
    golsMandante?: number
    golsVisitante?: number
    status?: string
    eventos?: EventoUncheckedCreateNestedManyWithoutJogoInput
  }

  export type JogoCreateOrConnectWithoutCampeonatoInput = {
    where: JogoWhereUniqueInput
    create: XOR<JogoCreateWithoutCampeonatoInput, JogoUncheckedCreateWithoutCampeonatoInput>
  }

  export type JogoCreateManyCampeonatoInputEnvelope = {
    data: JogoCreateManyCampeonatoInput | JogoCreateManyCampeonatoInput[]
  }

  export type ParticipacaoUpsertWithWhereUniqueWithoutCampeonatoInput = {
    where: ParticipacaoWhereUniqueInput
    update: XOR<ParticipacaoUpdateWithoutCampeonatoInput, ParticipacaoUncheckedUpdateWithoutCampeonatoInput>
    create: XOR<ParticipacaoCreateWithoutCampeonatoInput, ParticipacaoUncheckedCreateWithoutCampeonatoInput>
  }

  export type ParticipacaoUpdateWithWhereUniqueWithoutCampeonatoInput = {
    where: ParticipacaoWhereUniqueInput
    data: XOR<ParticipacaoUpdateWithoutCampeonatoInput, ParticipacaoUncheckedUpdateWithoutCampeonatoInput>
  }

  export type ParticipacaoUpdateManyWithWhereWithoutCampeonatoInput = {
    where: ParticipacaoScalarWhereInput
    data: XOR<ParticipacaoUpdateManyMutationInput, ParticipacaoUncheckedUpdateManyWithoutCampeonatoInput>
  }

  export type ParticipacaoScalarWhereInput = {
    AND?: ParticipacaoScalarWhereInput | ParticipacaoScalarWhereInput[]
    OR?: ParticipacaoScalarWhereInput[]
    NOT?: ParticipacaoScalarWhereInput | ParticipacaoScalarWhereInput[]
    id?: IntFilter<"Participacao"> | number
    equipeId?: IntFilter<"Participacao"> | number
    campeonatoId?: IntFilter<"Participacao"> | number
  }

  export type JogoUpsertWithWhereUniqueWithoutCampeonatoInput = {
    where: JogoWhereUniqueInput
    update: XOR<JogoUpdateWithoutCampeonatoInput, JogoUncheckedUpdateWithoutCampeonatoInput>
    create: XOR<JogoCreateWithoutCampeonatoInput, JogoUncheckedCreateWithoutCampeonatoInput>
  }

  export type JogoUpdateWithWhereUniqueWithoutCampeonatoInput = {
    where: JogoWhereUniqueInput
    data: XOR<JogoUpdateWithoutCampeonatoInput, JogoUncheckedUpdateWithoutCampeonatoInput>
  }

  export type JogoUpdateManyWithWhereWithoutCampeonatoInput = {
    where: JogoScalarWhereInput
    data: XOR<JogoUpdateManyMutationInput, JogoUncheckedUpdateManyWithoutCampeonatoInput>
  }

  export type JogoScalarWhereInput = {
    AND?: JogoScalarWhereInput | JogoScalarWhereInput[]
    OR?: JogoScalarWhereInput[]
    NOT?: JogoScalarWhereInput | JogoScalarWhereInput[]
    id?: IntFilter<"Jogo"> | number
    numero?: IntFilter<"Jogo"> | number
    campeonatoId?: IntFilter<"Jogo"> | number
    mandanteId?: IntFilter<"Jogo"> | number
    mandanteNome?: StringFilter<"Jogo"> | string
    visitanteId?: IntFilter<"Jogo"> | number
    visitanteNome?: StringFilter<"Jogo"> | string
    golsMandante?: IntFilter<"Jogo"> | number
    golsVisitante?: IntFilter<"Jogo"> | number
    status?: StringFilter<"Jogo"> | string
  }

  export type ParticipacaoCreateWithoutEquipeInput = {
    campeonato: CampeonatoCreateNestedOneWithoutParticipacoesInput
  }

  export type ParticipacaoUncheckedCreateWithoutEquipeInput = {
    id?: number
    campeonatoId: number
  }

  export type ParticipacaoCreateOrConnectWithoutEquipeInput = {
    where: ParticipacaoWhereUniqueInput
    create: XOR<ParticipacaoCreateWithoutEquipeInput, ParticipacaoUncheckedCreateWithoutEquipeInput>
  }

  export type ParticipacaoCreateManyEquipeInputEnvelope = {
    data: ParticipacaoCreateManyEquipeInput | ParticipacaoCreateManyEquipeInput[]
  }

  export type VinculoCreateWithoutEquipeInput = {
    tipo: string
    atleta: AtletaCreateNestedOneWithoutVinculosInput
  }

  export type VinculoUncheckedCreateWithoutEquipeInput = {
    id?: number
    atletaId: number
    tipo: string
  }

  export type VinculoCreateOrConnectWithoutEquipeInput = {
    where: VinculoWhereUniqueInput
    create: XOR<VinculoCreateWithoutEquipeInput, VinculoUncheckedCreateWithoutEquipeInput>
  }

  export type VinculoCreateManyEquipeInputEnvelope = {
    data: VinculoCreateManyEquipeInput | VinculoCreateManyEquipeInput[]
  }

  export type JogoCreateWithoutMandanteInput = {
    numero: number
    mandanteNome: string
    visitanteNome: string
    golsMandante?: number
    golsVisitante?: number
    status?: string
    campeonato: CampeonatoCreateNestedOneWithoutJogosInput
    visitante: EquipeCreateNestedOneWithoutJogosVisitanteInput
    eventos?: EventoCreateNestedManyWithoutJogoInput
  }

  export type JogoUncheckedCreateWithoutMandanteInput = {
    id?: number
    numero: number
    campeonatoId: number
    mandanteNome: string
    visitanteId: number
    visitanteNome: string
    golsMandante?: number
    golsVisitante?: number
    status?: string
    eventos?: EventoUncheckedCreateNestedManyWithoutJogoInput
  }

  export type JogoCreateOrConnectWithoutMandanteInput = {
    where: JogoWhereUniqueInput
    create: XOR<JogoCreateWithoutMandanteInput, JogoUncheckedCreateWithoutMandanteInput>
  }

  export type JogoCreateManyMandanteInputEnvelope = {
    data: JogoCreateManyMandanteInput | JogoCreateManyMandanteInput[]
  }

  export type JogoCreateWithoutVisitanteInput = {
    numero: number
    mandanteNome: string
    visitanteNome: string
    golsMandante?: number
    golsVisitante?: number
    status?: string
    campeonato: CampeonatoCreateNestedOneWithoutJogosInput
    mandante: EquipeCreateNestedOneWithoutJogosMandanteInput
    eventos?: EventoCreateNestedManyWithoutJogoInput
  }

  export type JogoUncheckedCreateWithoutVisitanteInput = {
    id?: number
    numero: number
    campeonatoId: number
    mandanteId: number
    mandanteNome: string
    visitanteNome: string
    golsMandante?: number
    golsVisitante?: number
    status?: string
    eventos?: EventoUncheckedCreateNestedManyWithoutJogoInput
  }

  export type JogoCreateOrConnectWithoutVisitanteInput = {
    where: JogoWhereUniqueInput
    create: XOR<JogoCreateWithoutVisitanteInput, JogoUncheckedCreateWithoutVisitanteInput>
  }

  export type JogoCreateManyVisitanteInputEnvelope = {
    data: JogoCreateManyVisitanteInput | JogoCreateManyVisitanteInput[]
  }

  export type ParticipacaoUpsertWithWhereUniqueWithoutEquipeInput = {
    where: ParticipacaoWhereUniqueInput
    update: XOR<ParticipacaoUpdateWithoutEquipeInput, ParticipacaoUncheckedUpdateWithoutEquipeInput>
    create: XOR<ParticipacaoCreateWithoutEquipeInput, ParticipacaoUncheckedCreateWithoutEquipeInput>
  }

  export type ParticipacaoUpdateWithWhereUniqueWithoutEquipeInput = {
    where: ParticipacaoWhereUniqueInput
    data: XOR<ParticipacaoUpdateWithoutEquipeInput, ParticipacaoUncheckedUpdateWithoutEquipeInput>
  }

  export type ParticipacaoUpdateManyWithWhereWithoutEquipeInput = {
    where: ParticipacaoScalarWhereInput
    data: XOR<ParticipacaoUpdateManyMutationInput, ParticipacaoUncheckedUpdateManyWithoutEquipeInput>
  }

  export type VinculoUpsertWithWhereUniqueWithoutEquipeInput = {
    where: VinculoWhereUniqueInput
    update: XOR<VinculoUpdateWithoutEquipeInput, VinculoUncheckedUpdateWithoutEquipeInput>
    create: XOR<VinculoCreateWithoutEquipeInput, VinculoUncheckedCreateWithoutEquipeInput>
  }

  export type VinculoUpdateWithWhereUniqueWithoutEquipeInput = {
    where: VinculoWhereUniqueInput
    data: XOR<VinculoUpdateWithoutEquipeInput, VinculoUncheckedUpdateWithoutEquipeInput>
  }

  export type VinculoUpdateManyWithWhereWithoutEquipeInput = {
    where: VinculoScalarWhereInput
    data: XOR<VinculoUpdateManyMutationInput, VinculoUncheckedUpdateManyWithoutEquipeInput>
  }

  export type VinculoScalarWhereInput = {
    AND?: VinculoScalarWhereInput | VinculoScalarWhereInput[]
    OR?: VinculoScalarWhereInput[]
    NOT?: VinculoScalarWhereInput | VinculoScalarWhereInput[]
    id?: IntFilter<"Vinculo"> | number
    atletaId?: IntFilter<"Vinculo"> | number
    equipeId?: IntFilter<"Vinculo"> | number
    tipo?: StringFilter<"Vinculo"> | string
  }

  export type JogoUpsertWithWhereUniqueWithoutMandanteInput = {
    where: JogoWhereUniqueInput
    update: XOR<JogoUpdateWithoutMandanteInput, JogoUncheckedUpdateWithoutMandanteInput>
    create: XOR<JogoCreateWithoutMandanteInput, JogoUncheckedCreateWithoutMandanteInput>
  }

  export type JogoUpdateWithWhereUniqueWithoutMandanteInput = {
    where: JogoWhereUniqueInput
    data: XOR<JogoUpdateWithoutMandanteInput, JogoUncheckedUpdateWithoutMandanteInput>
  }

  export type JogoUpdateManyWithWhereWithoutMandanteInput = {
    where: JogoScalarWhereInput
    data: XOR<JogoUpdateManyMutationInput, JogoUncheckedUpdateManyWithoutMandanteInput>
  }

  export type JogoUpsertWithWhereUniqueWithoutVisitanteInput = {
    where: JogoWhereUniqueInput
    update: XOR<JogoUpdateWithoutVisitanteInput, JogoUncheckedUpdateWithoutVisitanteInput>
    create: XOR<JogoCreateWithoutVisitanteInput, JogoUncheckedCreateWithoutVisitanteInput>
  }

  export type JogoUpdateWithWhereUniqueWithoutVisitanteInput = {
    where: JogoWhereUniqueInput
    data: XOR<JogoUpdateWithoutVisitanteInput, JogoUncheckedUpdateWithoutVisitanteInput>
  }

  export type JogoUpdateManyWithWhereWithoutVisitanteInput = {
    where: JogoScalarWhereInput
    data: XOR<JogoUpdateManyMutationInput, JogoUncheckedUpdateManyWithoutVisitanteInput>
  }

  export type VinculoCreateWithoutAtletaInput = {
    tipo: string
    equipe: EquipeCreateNestedOneWithoutVinculosInput
  }

  export type VinculoUncheckedCreateWithoutAtletaInput = {
    id?: number
    equipeId: number
    tipo: string
  }

  export type VinculoCreateOrConnectWithoutAtletaInput = {
    where: VinculoWhereUniqueInput
    create: XOR<VinculoCreateWithoutAtletaInput, VinculoUncheckedCreateWithoutAtletaInput>
  }

  export type VinculoCreateManyAtletaInputEnvelope = {
    data: VinculoCreateManyAtletaInput | VinculoCreateManyAtletaInput[]
  }

  export type EventoCreateWithoutAtletaInput = {
    gols?: number
    gc?: number
    am?: number
    vm?: number
    jogo: JogoCreateNestedOneWithoutEventosInput
  }

  export type EventoUncheckedCreateWithoutAtletaInput = {
    id?: number
    jogoId: number
    gols?: number
    gc?: number
    am?: number
    vm?: number
  }

  export type EventoCreateOrConnectWithoutAtletaInput = {
    where: EventoWhereUniqueInput
    create: XOR<EventoCreateWithoutAtletaInput, EventoUncheckedCreateWithoutAtletaInput>
  }

  export type EventoCreateManyAtletaInputEnvelope = {
    data: EventoCreateManyAtletaInput | EventoCreateManyAtletaInput[]
  }

  export type VinculoUpsertWithWhereUniqueWithoutAtletaInput = {
    where: VinculoWhereUniqueInput
    update: XOR<VinculoUpdateWithoutAtletaInput, VinculoUncheckedUpdateWithoutAtletaInput>
    create: XOR<VinculoCreateWithoutAtletaInput, VinculoUncheckedCreateWithoutAtletaInput>
  }

  export type VinculoUpdateWithWhereUniqueWithoutAtletaInput = {
    where: VinculoWhereUniqueInput
    data: XOR<VinculoUpdateWithoutAtletaInput, VinculoUncheckedUpdateWithoutAtletaInput>
  }

  export type VinculoUpdateManyWithWhereWithoutAtletaInput = {
    where: VinculoScalarWhereInput
    data: XOR<VinculoUpdateManyMutationInput, VinculoUncheckedUpdateManyWithoutAtletaInput>
  }

  export type EventoUpsertWithWhereUniqueWithoutAtletaInput = {
    where: EventoWhereUniqueInput
    update: XOR<EventoUpdateWithoutAtletaInput, EventoUncheckedUpdateWithoutAtletaInput>
    create: XOR<EventoCreateWithoutAtletaInput, EventoUncheckedCreateWithoutAtletaInput>
  }

  export type EventoUpdateWithWhereUniqueWithoutAtletaInput = {
    where: EventoWhereUniqueInput
    data: XOR<EventoUpdateWithoutAtletaInput, EventoUncheckedUpdateWithoutAtletaInput>
  }

  export type EventoUpdateManyWithWhereWithoutAtletaInput = {
    where: EventoScalarWhereInput
    data: XOR<EventoUpdateManyMutationInput, EventoUncheckedUpdateManyWithoutAtletaInput>
  }

  export type EventoScalarWhereInput = {
    AND?: EventoScalarWhereInput | EventoScalarWhereInput[]
    OR?: EventoScalarWhereInput[]
    NOT?: EventoScalarWhereInput | EventoScalarWhereInput[]
    id?: IntFilter<"Evento"> | number
    jogoId?: IntFilter<"Evento"> | number
    atletaId?: IntFilter<"Evento"> | number
    gols?: IntFilter<"Evento"> | number
    gc?: IntFilter<"Evento"> | number
    am?: IntFilter<"Evento"> | number
    vm?: IntFilter<"Evento"> | number
  }

  export type EquipeCreateWithoutParticipacoesInput = {
    nome: string
    responsavel: string
    telefone: string
    vinculos?: VinculoCreateNestedManyWithoutEquipeInput
    jogosMandante?: JogoCreateNestedManyWithoutMandanteInput
    jogosVisitante?: JogoCreateNestedManyWithoutVisitanteInput
  }

  export type EquipeUncheckedCreateWithoutParticipacoesInput = {
    id?: number
    nome: string
    responsavel: string
    telefone: string
    vinculos?: VinculoUncheckedCreateNestedManyWithoutEquipeInput
    jogosMandante?: JogoUncheckedCreateNestedManyWithoutMandanteInput
    jogosVisitante?: JogoUncheckedCreateNestedManyWithoutVisitanteInput
  }

  export type EquipeCreateOrConnectWithoutParticipacoesInput = {
    where: EquipeWhereUniqueInput
    create: XOR<EquipeCreateWithoutParticipacoesInput, EquipeUncheckedCreateWithoutParticipacoesInput>
  }

  export type CampeonatoCreateWithoutParticipacoesInput = {
    nome: string
    ano: number
    formato: string
    jogos?: JogoCreateNestedManyWithoutCampeonatoInput
  }

  export type CampeonatoUncheckedCreateWithoutParticipacoesInput = {
    id?: number
    nome: string
    ano: number
    formato: string
    jogos?: JogoUncheckedCreateNestedManyWithoutCampeonatoInput
  }

  export type CampeonatoCreateOrConnectWithoutParticipacoesInput = {
    where: CampeonatoWhereUniqueInput
    create: XOR<CampeonatoCreateWithoutParticipacoesInput, CampeonatoUncheckedCreateWithoutParticipacoesInput>
  }

  export type EquipeUpsertWithoutParticipacoesInput = {
    update: XOR<EquipeUpdateWithoutParticipacoesInput, EquipeUncheckedUpdateWithoutParticipacoesInput>
    create: XOR<EquipeCreateWithoutParticipacoesInput, EquipeUncheckedCreateWithoutParticipacoesInput>
    where?: EquipeWhereInput
  }

  export type EquipeUpdateToOneWithWhereWithoutParticipacoesInput = {
    where?: EquipeWhereInput
    data: XOR<EquipeUpdateWithoutParticipacoesInput, EquipeUncheckedUpdateWithoutParticipacoesInput>
  }

  export type EquipeUpdateWithoutParticipacoesInput = {
    nome?: StringFieldUpdateOperationsInput | string
    responsavel?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    vinculos?: VinculoUpdateManyWithoutEquipeNestedInput
    jogosMandante?: JogoUpdateManyWithoutMandanteNestedInput
    jogosVisitante?: JogoUpdateManyWithoutVisitanteNestedInput
  }

  export type EquipeUncheckedUpdateWithoutParticipacoesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    responsavel?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    vinculos?: VinculoUncheckedUpdateManyWithoutEquipeNestedInput
    jogosMandante?: JogoUncheckedUpdateManyWithoutMandanteNestedInput
    jogosVisitante?: JogoUncheckedUpdateManyWithoutVisitanteNestedInput
  }

  export type CampeonatoUpsertWithoutParticipacoesInput = {
    update: XOR<CampeonatoUpdateWithoutParticipacoesInput, CampeonatoUncheckedUpdateWithoutParticipacoesInput>
    create: XOR<CampeonatoCreateWithoutParticipacoesInput, CampeonatoUncheckedCreateWithoutParticipacoesInput>
    where?: CampeonatoWhereInput
  }

  export type CampeonatoUpdateToOneWithWhereWithoutParticipacoesInput = {
    where?: CampeonatoWhereInput
    data: XOR<CampeonatoUpdateWithoutParticipacoesInput, CampeonatoUncheckedUpdateWithoutParticipacoesInput>
  }

  export type CampeonatoUpdateWithoutParticipacoesInput = {
    nome?: StringFieldUpdateOperationsInput | string
    ano?: IntFieldUpdateOperationsInput | number
    formato?: StringFieldUpdateOperationsInput | string
    jogos?: JogoUpdateManyWithoutCampeonatoNestedInput
  }

  export type CampeonatoUncheckedUpdateWithoutParticipacoesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    ano?: IntFieldUpdateOperationsInput | number
    formato?: StringFieldUpdateOperationsInput | string
    jogos?: JogoUncheckedUpdateManyWithoutCampeonatoNestedInput
  }

  export type AtletaCreateWithoutVinculosInput = {
    nome: string
    cpf: string
    numero: string
    eventos?: EventoCreateNestedManyWithoutAtletaInput
  }

  export type AtletaUncheckedCreateWithoutVinculosInput = {
    id?: number
    nome: string
    cpf: string
    numero: string
    eventos?: EventoUncheckedCreateNestedManyWithoutAtletaInput
  }

  export type AtletaCreateOrConnectWithoutVinculosInput = {
    where: AtletaWhereUniqueInput
    create: XOR<AtletaCreateWithoutVinculosInput, AtletaUncheckedCreateWithoutVinculosInput>
  }

  export type EquipeCreateWithoutVinculosInput = {
    nome: string
    responsavel: string
    telefone: string
    participacoes?: ParticipacaoCreateNestedManyWithoutEquipeInput
    jogosMandante?: JogoCreateNestedManyWithoutMandanteInput
    jogosVisitante?: JogoCreateNestedManyWithoutVisitanteInput
  }

  export type EquipeUncheckedCreateWithoutVinculosInput = {
    id?: number
    nome: string
    responsavel: string
    telefone: string
    participacoes?: ParticipacaoUncheckedCreateNestedManyWithoutEquipeInput
    jogosMandante?: JogoUncheckedCreateNestedManyWithoutMandanteInput
    jogosVisitante?: JogoUncheckedCreateNestedManyWithoutVisitanteInput
  }

  export type EquipeCreateOrConnectWithoutVinculosInput = {
    where: EquipeWhereUniqueInput
    create: XOR<EquipeCreateWithoutVinculosInput, EquipeUncheckedCreateWithoutVinculosInput>
  }

  export type AtletaUpsertWithoutVinculosInput = {
    update: XOR<AtletaUpdateWithoutVinculosInput, AtletaUncheckedUpdateWithoutVinculosInput>
    create: XOR<AtletaCreateWithoutVinculosInput, AtletaUncheckedCreateWithoutVinculosInput>
    where?: AtletaWhereInput
  }

  export type AtletaUpdateToOneWithWhereWithoutVinculosInput = {
    where?: AtletaWhereInput
    data: XOR<AtletaUpdateWithoutVinculosInput, AtletaUncheckedUpdateWithoutVinculosInput>
  }

  export type AtletaUpdateWithoutVinculosInput = {
    nome?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    eventos?: EventoUpdateManyWithoutAtletaNestedInput
  }

  export type AtletaUncheckedUpdateWithoutVinculosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    eventos?: EventoUncheckedUpdateManyWithoutAtletaNestedInput
  }

  export type EquipeUpsertWithoutVinculosInput = {
    update: XOR<EquipeUpdateWithoutVinculosInput, EquipeUncheckedUpdateWithoutVinculosInput>
    create: XOR<EquipeCreateWithoutVinculosInput, EquipeUncheckedCreateWithoutVinculosInput>
    where?: EquipeWhereInput
  }

  export type EquipeUpdateToOneWithWhereWithoutVinculosInput = {
    where?: EquipeWhereInput
    data: XOR<EquipeUpdateWithoutVinculosInput, EquipeUncheckedUpdateWithoutVinculosInput>
  }

  export type EquipeUpdateWithoutVinculosInput = {
    nome?: StringFieldUpdateOperationsInput | string
    responsavel?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    participacoes?: ParticipacaoUpdateManyWithoutEquipeNestedInput
    jogosMandante?: JogoUpdateManyWithoutMandanteNestedInput
    jogosVisitante?: JogoUpdateManyWithoutVisitanteNestedInput
  }

  export type EquipeUncheckedUpdateWithoutVinculosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    responsavel?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    participacoes?: ParticipacaoUncheckedUpdateManyWithoutEquipeNestedInput
    jogosMandante?: JogoUncheckedUpdateManyWithoutMandanteNestedInput
    jogosVisitante?: JogoUncheckedUpdateManyWithoutVisitanteNestedInput
  }

  export type CampeonatoCreateWithoutJogosInput = {
    nome: string
    ano: number
    formato: string
    participacoes?: ParticipacaoCreateNestedManyWithoutCampeonatoInput
  }

  export type CampeonatoUncheckedCreateWithoutJogosInput = {
    id?: number
    nome: string
    ano: number
    formato: string
    participacoes?: ParticipacaoUncheckedCreateNestedManyWithoutCampeonatoInput
  }

  export type CampeonatoCreateOrConnectWithoutJogosInput = {
    where: CampeonatoWhereUniqueInput
    create: XOR<CampeonatoCreateWithoutJogosInput, CampeonatoUncheckedCreateWithoutJogosInput>
  }

  export type EquipeCreateWithoutJogosMandanteInput = {
    nome: string
    responsavel: string
    telefone: string
    participacoes?: ParticipacaoCreateNestedManyWithoutEquipeInput
    vinculos?: VinculoCreateNestedManyWithoutEquipeInput
    jogosVisitante?: JogoCreateNestedManyWithoutVisitanteInput
  }

  export type EquipeUncheckedCreateWithoutJogosMandanteInput = {
    id?: number
    nome: string
    responsavel: string
    telefone: string
    participacoes?: ParticipacaoUncheckedCreateNestedManyWithoutEquipeInput
    vinculos?: VinculoUncheckedCreateNestedManyWithoutEquipeInput
    jogosVisitante?: JogoUncheckedCreateNestedManyWithoutVisitanteInput
  }

  export type EquipeCreateOrConnectWithoutJogosMandanteInput = {
    where: EquipeWhereUniqueInput
    create: XOR<EquipeCreateWithoutJogosMandanteInput, EquipeUncheckedCreateWithoutJogosMandanteInput>
  }

  export type EquipeCreateWithoutJogosVisitanteInput = {
    nome: string
    responsavel: string
    telefone: string
    participacoes?: ParticipacaoCreateNestedManyWithoutEquipeInput
    vinculos?: VinculoCreateNestedManyWithoutEquipeInput
    jogosMandante?: JogoCreateNestedManyWithoutMandanteInput
  }

  export type EquipeUncheckedCreateWithoutJogosVisitanteInput = {
    id?: number
    nome: string
    responsavel: string
    telefone: string
    participacoes?: ParticipacaoUncheckedCreateNestedManyWithoutEquipeInput
    vinculos?: VinculoUncheckedCreateNestedManyWithoutEquipeInput
    jogosMandante?: JogoUncheckedCreateNestedManyWithoutMandanteInput
  }

  export type EquipeCreateOrConnectWithoutJogosVisitanteInput = {
    where: EquipeWhereUniqueInput
    create: XOR<EquipeCreateWithoutJogosVisitanteInput, EquipeUncheckedCreateWithoutJogosVisitanteInput>
  }

  export type EventoCreateWithoutJogoInput = {
    gols?: number
    gc?: number
    am?: number
    vm?: number
    atleta: AtletaCreateNestedOneWithoutEventosInput
  }

  export type EventoUncheckedCreateWithoutJogoInput = {
    id?: number
    atletaId: number
    gols?: number
    gc?: number
    am?: number
    vm?: number
  }

  export type EventoCreateOrConnectWithoutJogoInput = {
    where: EventoWhereUniqueInput
    create: XOR<EventoCreateWithoutJogoInput, EventoUncheckedCreateWithoutJogoInput>
  }

  export type EventoCreateManyJogoInputEnvelope = {
    data: EventoCreateManyJogoInput | EventoCreateManyJogoInput[]
  }

  export type CampeonatoUpsertWithoutJogosInput = {
    update: XOR<CampeonatoUpdateWithoutJogosInput, CampeonatoUncheckedUpdateWithoutJogosInput>
    create: XOR<CampeonatoCreateWithoutJogosInput, CampeonatoUncheckedCreateWithoutJogosInput>
    where?: CampeonatoWhereInput
  }

  export type CampeonatoUpdateToOneWithWhereWithoutJogosInput = {
    where?: CampeonatoWhereInput
    data: XOR<CampeonatoUpdateWithoutJogosInput, CampeonatoUncheckedUpdateWithoutJogosInput>
  }

  export type CampeonatoUpdateWithoutJogosInput = {
    nome?: StringFieldUpdateOperationsInput | string
    ano?: IntFieldUpdateOperationsInput | number
    formato?: StringFieldUpdateOperationsInput | string
    participacoes?: ParticipacaoUpdateManyWithoutCampeonatoNestedInput
  }

  export type CampeonatoUncheckedUpdateWithoutJogosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    ano?: IntFieldUpdateOperationsInput | number
    formato?: StringFieldUpdateOperationsInput | string
    participacoes?: ParticipacaoUncheckedUpdateManyWithoutCampeonatoNestedInput
  }

  export type EquipeUpsertWithoutJogosMandanteInput = {
    update: XOR<EquipeUpdateWithoutJogosMandanteInput, EquipeUncheckedUpdateWithoutJogosMandanteInput>
    create: XOR<EquipeCreateWithoutJogosMandanteInput, EquipeUncheckedCreateWithoutJogosMandanteInput>
    where?: EquipeWhereInput
  }

  export type EquipeUpdateToOneWithWhereWithoutJogosMandanteInput = {
    where?: EquipeWhereInput
    data: XOR<EquipeUpdateWithoutJogosMandanteInput, EquipeUncheckedUpdateWithoutJogosMandanteInput>
  }

  export type EquipeUpdateWithoutJogosMandanteInput = {
    nome?: StringFieldUpdateOperationsInput | string
    responsavel?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    participacoes?: ParticipacaoUpdateManyWithoutEquipeNestedInput
    vinculos?: VinculoUpdateManyWithoutEquipeNestedInput
    jogosVisitante?: JogoUpdateManyWithoutVisitanteNestedInput
  }

  export type EquipeUncheckedUpdateWithoutJogosMandanteInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    responsavel?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    participacoes?: ParticipacaoUncheckedUpdateManyWithoutEquipeNestedInput
    vinculos?: VinculoUncheckedUpdateManyWithoutEquipeNestedInput
    jogosVisitante?: JogoUncheckedUpdateManyWithoutVisitanteNestedInput
  }

  export type EquipeUpsertWithoutJogosVisitanteInput = {
    update: XOR<EquipeUpdateWithoutJogosVisitanteInput, EquipeUncheckedUpdateWithoutJogosVisitanteInput>
    create: XOR<EquipeCreateWithoutJogosVisitanteInput, EquipeUncheckedCreateWithoutJogosVisitanteInput>
    where?: EquipeWhereInput
  }

  export type EquipeUpdateToOneWithWhereWithoutJogosVisitanteInput = {
    where?: EquipeWhereInput
    data: XOR<EquipeUpdateWithoutJogosVisitanteInput, EquipeUncheckedUpdateWithoutJogosVisitanteInput>
  }

  export type EquipeUpdateWithoutJogosVisitanteInput = {
    nome?: StringFieldUpdateOperationsInput | string
    responsavel?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    participacoes?: ParticipacaoUpdateManyWithoutEquipeNestedInput
    vinculos?: VinculoUpdateManyWithoutEquipeNestedInput
    jogosMandante?: JogoUpdateManyWithoutMandanteNestedInput
  }

  export type EquipeUncheckedUpdateWithoutJogosVisitanteInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    responsavel?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    participacoes?: ParticipacaoUncheckedUpdateManyWithoutEquipeNestedInput
    vinculos?: VinculoUncheckedUpdateManyWithoutEquipeNestedInput
    jogosMandante?: JogoUncheckedUpdateManyWithoutMandanteNestedInput
  }

  export type EventoUpsertWithWhereUniqueWithoutJogoInput = {
    where: EventoWhereUniqueInput
    update: XOR<EventoUpdateWithoutJogoInput, EventoUncheckedUpdateWithoutJogoInput>
    create: XOR<EventoCreateWithoutJogoInput, EventoUncheckedCreateWithoutJogoInput>
  }

  export type EventoUpdateWithWhereUniqueWithoutJogoInput = {
    where: EventoWhereUniqueInput
    data: XOR<EventoUpdateWithoutJogoInput, EventoUncheckedUpdateWithoutJogoInput>
  }

  export type EventoUpdateManyWithWhereWithoutJogoInput = {
    where: EventoScalarWhereInput
    data: XOR<EventoUpdateManyMutationInput, EventoUncheckedUpdateManyWithoutJogoInput>
  }

  export type JogoCreateWithoutEventosInput = {
    numero: number
    mandanteNome: string
    visitanteNome: string
    golsMandante?: number
    golsVisitante?: number
    status?: string
    campeonato: CampeonatoCreateNestedOneWithoutJogosInput
    mandante: EquipeCreateNestedOneWithoutJogosMandanteInput
    visitante: EquipeCreateNestedOneWithoutJogosVisitanteInput
  }

  export type JogoUncheckedCreateWithoutEventosInput = {
    id?: number
    numero: number
    campeonatoId: number
    mandanteId: number
    mandanteNome: string
    visitanteId: number
    visitanteNome: string
    golsMandante?: number
    golsVisitante?: number
    status?: string
  }

  export type JogoCreateOrConnectWithoutEventosInput = {
    where: JogoWhereUniqueInput
    create: XOR<JogoCreateWithoutEventosInput, JogoUncheckedCreateWithoutEventosInput>
  }

  export type AtletaCreateWithoutEventosInput = {
    nome: string
    cpf: string
    numero: string
    vinculos?: VinculoCreateNestedManyWithoutAtletaInput
  }

  export type AtletaUncheckedCreateWithoutEventosInput = {
    id?: number
    nome: string
    cpf: string
    numero: string
    vinculos?: VinculoUncheckedCreateNestedManyWithoutAtletaInput
  }

  export type AtletaCreateOrConnectWithoutEventosInput = {
    where: AtletaWhereUniqueInput
    create: XOR<AtletaCreateWithoutEventosInput, AtletaUncheckedCreateWithoutEventosInput>
  }

  export type JogoUpsertWithoutEventosInput = {
    update: XOR<JogoUpdateWithoutEventosInput, JogoUncheckedUpdateWithoutEventosInput>
    create: XOR<JogoCreateWithoutEventosInput, JogoUncheckedCreateWithoutEventosInput>
    where?: JogoWhereInput
  }

  export type JogoUpdateToOneWithWhereWithoutEventosInput = {
    where?: JogoWhereInput
    data: XOR<JogoUpdateWithoutEventosInput, JogoUncheckedUpdateWithoutEventosInput>
  }

  export type JogoUpdateWithoutEventosInput = {
    numero?: IntFieldUpdateOperationsInput | number
    mandanteNome?: StringFieldUpdateOperationsInput | string
    visitanteNome?: StringFieldUpdateOperationsInput | string
    golsMandante?: IntFieldUpdateOperationsInput | number
    golsVisitante?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    campeonato?: CampeonatoUpdateOneRequiredWithoutJogosNestedInput
    mandante?: EquipeUpdateOneRequiredWithoutJogosMandanteNestedInput
    visitante?: EquipeUpdateOneRequiredWithoutJogosVisitanteNestedInput
  }

  export type JogoUncheckedUpdateWithoutEventosInput = {
    id?: IntFieldUpdateOperationsInput | number
    numero?: IntFieldUpdateOperationsInput | number
    campeonatoId?: IntFieldUpdateOperationsInput | number
    mandanteId?: IntFieldUpdateOperationsInput | number
    mandanteNome?: StringFieldUpdateOperationsInput | string
    visitanteId?: IntFieldUpdateOperationsInput | number
    visitanteNome?: StringFieldUpdateOperationsInput | string
    golsMandante?: IntFieldUpdateOperationsInput | number
    golsVisitante?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
  }

  export type AtletaUpsertWithoutEventosInput = {
    update: XOR<AtletaUpdateWithoutEventosInput, AtletaUncheckedUpdateWithoutEventosInput>
    create: XOR<AtletaCreateWithoutEventosInput, AtletaUncheckedCreateWithoutEventosInput>
    where?: AtletaWhereInput
  }

  export type AtletaUpdateToOneWithWhereWithoutEventosInput = {
    where?: AtletaWhereInput
    data: XOR<AtletaUpdateWithoutEventosInput, AtletaUncheckedUpdateWithoutEventosInput>
  }

  export type AtletaUpdateWithoutEventosInput = {
    nome?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    vinculos?: VinculoUpdateManyWithoutAtletaNestedInput
  }

  export type AtletaUncheckedUpdateWithoutEventosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    vinculos?: VinculoUncheckedUpdateManyWithoutAtletaNestedInput
  }

  export type ParticipacaoCreateManyCampeonatoInput = {
    id?: number
    equipeId: number
  }

  export type JogoCreateManyCampeonatoInput = {
    id?: number
    numero: number
    mandanteId: number
    mandanteNome: string
    visitanteId: number
    visitanteNome: string
    golsMandante?: number
    golsVisitante?: number
    status?: string
  }

  export type ParticipacaoUpdateWithoutCampeonatoInput = {
    equipe?: EquipeUpdateOneRequiredWithoutParticipacoesNestedInput
  }

  export type ParticipacaoUncheckedUpdateWithoutCampeonatoInput = {
    id?: IntFieldUpdateOperationsInput | number
    equipeId?: IntFieldUpdateOperationsInput | number
  }

  export type ParticipacaoUncheckedUpdateManyWithoutCampeonatoInput = {
    id?: IntFieldUpdateOperationsInput | number
    equipeId?: IntFieldUpdateOperationsInput | number
  }

  export type JogoUpdateWithoutCampeonatoInput = {
    numero?: IntFieldUpdateOperationsInput | number
    mandanteNome?: StringFieldUpdateOperationsInput | string
    visitanteNome?: StringFieldUpdateOperationsInput | string
    golsMandante?: IntFieldUpdateOperationsInput | number
    golsVisitante?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    mandante?: EquipeUpdateOneRequiredWithoutJogosMandanteNestedInput
    visitante?: EquipeUpdateOneRequiredWithoutJogosVisitanteNestedInput
    eventos?: EventoUpdateManyWithoutJogoNestedInput
  }

  export type JogoUncheckedUpdateWithoutCampeonatoInput = {
    id?: IntFieldUpdateOperationsInput | number
    numero?: IntFieldUpdateOperationsInput | number
    mandanteId?: IntFieldUpdateOperationsInput | number
    mandanteNome?: StringFieldUpdateOperationsInput | string
    visitanteId?: IntFieldUpdateOperationsInput | number
    visitanteNome?: StringFieldUpdateOperationsInput | string
    golsMandante?: IntFieldUpdateOperationsInput | number
    golsVisitante?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    eventos?: EventoUncheckedUpdateManyWithoutJogoNestedInput
  }

  export type JogoUncheckedUpdateManyWithoutCampeonatoInput = {
    id?: IntFieldUpdateOperationsInput | number
    numero?: IntFieldUpdateOperationsInput | number
    mandanteId?: IntFieldUpdateOperationsInput | number
    mandanteNome?: StringFieldUpdateOperationsInput | string
    visitanteId?: IntFieldUpdateOperationsInput | number
    visitanteNome?: StringFieldUpdateOperationsInput | string
    golsMandante?: IntFieldUpdateOperationsInput | number
    golsVisitante?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
  }

  export type ParticipacaoCreateManyEquipeInput = {
    id?: number
    campeonatoId: number
  }

  export type VinculoCreateManyEquipeInput = {
    id?: number
    atletaId: number
    tipo: string
  }

  export type JogoCreateManyMandanteInput = {
    id?: number
    numero: number
    campeonatoId: number
    mandanteNome: string
    visitanteId: number
    visitanteNome: string
    golsMandante?: number
    golsVisitante?: number
    status?: string
  }

  export type JogoCreateManyVisitanteInput = {
    id?: number
    numero: number
    campeonatoId: number
    mandanteId: number
    mandanteNome: string
    visitanteNome: string
    golsMandante?: number
    golsVisitante?: number
    status?: string
  }

  export type ParticipacaoUpdateWithoutEquipeInput = {
    campeonato?: CampeonatoUpdateOneRequiredWithoutParticipacoesNestedInput
  }

  export type ParticipacaoUncheckedUpdateWithoutEquipeInput = {
    id?: IntFieldUpdateOperationsInput | number
    campeonatoId?: IntFieldUpdateOperationsInput | number
  }

  export type ParticipacaoUncheckedUpdateManyWithoutEquipeInput = {
    id?: IntFieldUpdateOperationsInput | number
    campeonatoId?: IntFieldUpdateOperationsInput | number
  }

  export type VinculoUpdateWithoutEquipeInput = {
    tipo?: StringFieldUpdateOperationsInput | string
    atleta?: AtletaUpdateOneRequiredWithoutVinculosNestedInput
  }

  export type VinculoUncheckedUpdateWithoutEquipeInput = {
    id?: IntFieldUpdateOperationsInput | number
    atletaId?: IntFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
  }

  export type VinculoUncheckedUpdateManyWithoutEquipeInput = {
    id?: IntFieldUpdateOperationsInput | number
    atletaId?: IntFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
  }

  export type JogoUpdateWithoutMandanteInput = {
    numero?: IntFieldUpdateOperationsInput | number
    mandanteNome?: StringFieldUpdateOperationsInput | string
    visitanteNome?: StringFieldUpdateOperationsInput | string
    golsMandante?: IntFieldUpdateOperationsInput | number
    golsVisitante?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    campeonato?: CampeonatoUpdateOneRequiredWithoutJogosNestedInput
    visitante?: EquipeUpdateOneRequiredWithoutJogosVisitanteNestedInput
    eventos?: EventoUpdateManyWithoutJogoNestedInput
  }

  export type JogoUncheckedUpdateWithoutMandanteInput = {
    id?: IntFieldUpdateOperationsInput | number
    numero?: IntFieldUpdateOperationsInput | number
    campeonatoId?: IntFieldUpdateOperationsInput | number
    mandanteNome?: StringFieldUpdateOperationsInput | string
    visitanteId?: IntFieldUpdateOperationsInput | number
    visitanteNome?: StringFieldUpdateOperationsInput | string
    golsMandante?: IntFieldUpdateOperationsInput | number
    golsVisitante?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    eventos?: EventoUncheckedUpdateManyWithoutJogoNestedInput
  }

  export type JogoUncheckedUpdateManyWithoutMandanteInput = {
    id?: IntFieldUpdateOperationsInput | number
    numero?: IntFieldUpdateOperationsInput | number
    campeonatoId?: IntFieldUpdateOperationsInput | number
    mandanteNome?: StringFieldUpdateOperationsInput | string
    visitanteId?: IntFieldUpdateOperationsInput | number
    visitanteNome?: StringFieldUpdateOperationsInput | string
    golsMandante?: IntFieldUpdateOperationsInput | number
    golsVisitante?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
  }

  export type JogoUpdateWithoutVisitanteInput = {
    numero?: IntFieldUpdateOperationsInput | number
    mandanteNome?: StringFieldUpdateOperationsInput | string
    visitanteNome?: StringFieldUpdateOperationsInput | string
    golsMandante?: IntFieldUpdateOperationsInput | number
    golsVisitante?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    campeonato?: CampeonatoUpdateOneRequiredWithoutJogosNestedInput
    mandante?: EquipeUpdateOneRequiredWithoutJogosMandanteNestedInput
    eventos?: EventoUpdateManyWithoutJogoNestedInput
  }

  export type JogoUncheckedUpdateWithoutVisitanteInput = {
    id?: IntFieldUpdateOperationsInput | number
    numero?: IntFieldUpdateOperationsInput | number
    campeonatoId?: IntFieldUpdateOperationsInput | number
    mandanteId?: IntFieldUpdateOperationsInput | number
    mandanteNome?: StringFieldUpdateOperationsInput | string
    visitanteNome?: StringFieldUpdateOperationsInput | string
    golsMandante?: IntFieldUpdateOperationsInput | number
    golsVisitante?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    eventos?: EventoUncheckedUpdateManyWithoutJogoNestedInput
  }

  export type JogoUncheckedUpdateManyWithoutVisitanteInput = {
    id?: IntFieldUpdateOperationsInput | number
    numero?: IntFieldUpdateOperationsInput | number
    campeonatoId?: IntFieldUpdateOperationsInput | number
    mandanteId?: IntFieldUpdateOperationsInput | number
    mandanteNome?: StringFieldUpdateOperationsInput | string
    visitanteNome?: StringFieldUpdateOperationsInput | string
    golsMandante?: IntFieldUpdateOperationsInput | number
    golsVisitante?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
  }

  export type VinculoCreateManyAtletaInput = {
    id?: number
    equipeId: number
    tipo: string
  }

  export type EventoCreateManyAtletaInput = {
    id?: number
    jogoId: number
    gols?: number
    gc?: number
    am?: number
    vm?: number
  }

  export type VinculoUpdateWithoutAtletaInput = {
    tipo?: StringFieldUpdateOperationsInput | string
    equipe?: EquipeUpdateOneRequiredWithoutVinculosNestedInput
  }

  export type VinculoUncheckedUpdateWithoutAtletaInput = {
    id?: IntFieldUpdateOperationsInput | number
    equipeId?: IntFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
  }

  export type VinculoUncheckedUpdateManyWithoutAtletaInput = {
    id?: IntFieldUpdateOperationsInput | number
    equipeId?: IntFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
  }

  export type EventoUpdateWithoutAtletaInput = {
    gols?: IntFieldUpdateOperationsInput | number
    gc?: IntFieldUpdateOperationsInput | number
    am?: IntFieldUpdateOperationsInput | number
    vm?: IntFieldUpdateOperationsInput | number
    jogo?: JogoUpdateOneRequiredWithoutEventosNestedInput
  }

  export type EventoUncheckedUpdateWithoutAtletaInput = {
    id?: IntFieldUpdateOperationsInput | number
    jogoId?: IntFieldUpdateOperationsInput | number
    gols?: IntFieldUpdateOperationsInput | number
    gc?: IntFieldUpdateOperationsInput | number
    am?: IntFieldUpdateOperationsInput | number
    vm?: IntFieldUpdateOperationsInput | number
  }

  export type EventoUncheckedUpdateManyWithoutAtletaInput = {
    id?: IntFieldUpdateOperationsInput | number
    jogoId?: IntFieldUpdateOperationsInput | number
    gols?: IntFieldUpdateOperationsInput | number
    gc?: IntFieldUpdateOperationsInput | number
    am?: IntFieldUpdateOperationsInput | number
    vm?: IntFieldUpdateOperationsInput | number
  }

  export type EventoCreateManyJogoInput = {
    id?: number
    atletaId: number
    gols?: number
    gc?: number
    am?: number
    vm?: number
  }

  export type EventoUpdateWithoutJogoInput = {
    gols?: IntFieldUpdateOperationsInput | number
    gc?: IntFieldUpdateOperationsInput | number
    am?: IntFieldUpdateOperationsInput | number
    vm?: IntFieldUpdateOperationsInput | number
    atleta?: AtletaUpdateOneRequiredWithoutEventosNestedInput
  }

  export type EventoUncheckedUpdateWithoutJogoInput = {
    id?: IntFieldUpdateOperationsInput | number
    atletaId?: IntFieldUpdateOperationsInput | number
    gols?: IntFieldUpdateOperationsInput | number
    gc?: IntFieldUpdateOperationsInput | number
    am?: IntFieldUpdateOperationsInput | number
    vm?: IntFieldUpdateOperationsInput | number
  }

  export type EventoUncheckedUpdateManyWithoutJogoInput = {
    id?: IntFieldUpdateOperationsInput | number
    atletaId?: IntFieldUpdateOperationsInput | number
    gols?: IntFieldUpdateOperationsInput | number
    gc?: IntFieldUpdateOperationsInput | number
    am?: IntFieldUpdateOperationsInput | number
    vm?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}