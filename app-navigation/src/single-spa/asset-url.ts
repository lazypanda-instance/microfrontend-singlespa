import { environment } from 'src/environments/environment';

export function assetUrl(url: string): string {
  let publicPath;
  if (environment.production) {
    publicPath = environment.baseURL;
  } else {
    // @ts-ignore
    publicPath = __webpack_public_path__;
  }
  const publicPathSuffix = publicPath.endsWith('/') ? '' : '/';
  const urlPrefix = url.startsWith('/') ? '' : '/';

  return `${publicPath}${publicPathSuffix}assets${urlPrefix}${url}`;
}
