// IMPORTANT: './getBaseUrl' is intentionally without extension!
//            so that on Expo it will be resolved to './getBaseUrl.expo.js'
//            (our metro-config has an extra 'expo.js' extensions in resolver.sourceExts
//            which takes precedence over '.js')
import getBaseUrl from './getBaseUrl'

export default getBaseUrl()
