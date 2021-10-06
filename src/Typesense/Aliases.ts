import ApiCall from './ApiCall'

const RESOURCEPATH = '/aliases'

export interface CollectionAliasCreateSchema {
  collection_name: string
}

export interface CollectionAliasSchema extends CollectionAliasCreateSchema {
  name: string
}

export interface CollectionAliasesResponseSchema {
  aliases: CollectionAliasSchema[]
}

export default class Aliases {
  constructor(private apiCall: ApiCall) {}

  async upsert(name: string, mapping: CollectionAliasCreateSchema): Promise<CollectionAliasSchema> {
    return await this.apiCall.put<CollectionAliasSchema>(this.endpointPath(name), mapping)
  }

  async retrieve(): Promise<CollectionAliasesResponseSchema> {
    return await this.apiCall.get<CollectionAliasesResponseSchema>(RESOURCEPATH)
  }

  private endpointPath(aliasName) {
    return `${Aliases.RESOURCEPATH}/${aliasName}`
  }

  static get RESOURCEPATH() {
    return RESOURCEPATH
  }
}
