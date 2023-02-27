declare type Params<Key extends string = string> = {
  readonly [key in Key]: string | undefined;
};

declare interface RouteMeta {
  title?: string;
  layout?: boolean;
}

declare interface RouteProps {
  meta?: RouteMeta;
}

declare interface RouteMatch {
  id: string;
  pathname: string;
  params: Params<string>;
  data: unknown;
  handle: unknown;
  meta: RouteMeta;
}
