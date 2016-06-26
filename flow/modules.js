declare module 'entities' {
  declare function encodeHTML(html: string): string;
  declare function decodeHTML(html: string): string;
}

declare module 'source-map' {
  declare class SourceMapGenerator {
    setSourceContent(filename: string, content: string): void;
    addMapping(mapping: Object): void;
    toString(): string;
  }
}

declare module 'lru-cache' {
  declare var exports: {
    (): any
  }
}
