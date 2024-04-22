import type { RequestHandler } from "./$types";

export const GET: RequestHandler = ({
  locals,
  params,
  platform,
  request,
  routeId,
  url,
  getClientAddress,
}) => {
  const headers = Object.fromEntries(request.headers.entries());
  const result = {
    routeId,
    url,
    headers,
    platform,
    params,
    locals,
    address: getClientAddress(),
  };

  console.log({ result });

  return new Response(JSON.stringify(result, null, 4));
};
