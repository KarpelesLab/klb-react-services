import { useAction }                                                             from '../../useBaseHooks';
import { getShellAccountWarningsEndpoint, getShellProductChangeWarningEndpoint } from '../../..';

export const useShellAccountWarnings = () => useAction(getShellAccountWarningsEndpoint());
export const useShellProductChangeWarning = () => useAction(getShellProductChangeWarningEndpoint());
