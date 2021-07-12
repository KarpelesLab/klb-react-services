import { useResource }              from '../../useBaseHooks';
import { getShellISOMountEndpoint } from '../../..';
import { getGeoIpEndpoint }         from '../../../enpoints/thirdParty/geoip/geoIpEndpoints';

export const useGeoIpLookup = (restSettings = null) => useResource(getGeoIpEndpoint(), null, restSettings);
