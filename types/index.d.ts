declare module "open-graph-parse" {
  export function parse(html: string): OpenGraphProperties

  export interface OpenGraphMedia {
    // Height and Width can be optional
    height?: string
    type: string
    url: string
    width?: string
  }

  export interface OpenGraphMusicSong {
    track: string
    disc: string
    url: string
  }

  export interface OpenGraphTwitterImage {
    // Height and Width can be optional
    height?: string
    alt: string
    url: string
    width?: string
  }

  export interface OpenGraphTwitterPlayer {
    // Height and Width can be optional
    height?: string
    stream: string
    url: string
    width?: string
  }

  export interface OpenGraphProperties {
    [key: string]: string | undefined
    alAndroidAppName?: string | undefined
    alAndroidClass?: string | undefined
    alAndroidPackage?: string | undefined
    alAndroidUrl?: string | undefined
    alIosAppName?: string | undefined
    alIosAppStoreId?: string | undefined
    alIosUrl?: string | undefined
    alIpadAppName?: string | undefined
    alIpadAppStoreId?: string | undefined
    alIpadUrl?: string | undefined
    alIphoneAppName?: string | undefined
    alIphoneAppStoreId?: string | undefined
    alIphoneUrl?: string | undefined
    alWebShouldFallback?: string | undefined
    alWebUrl?: string | undefined
    alWindowsAppId?: string | undefined
    alWindowsAppName?: string | undefined
    alWindowsPhoneAppId?: string | undefined
    alWindowsPhoneAppName?: string | undefined
    alWindowsPhoneUrl?: string | undefined
    alWindowsUniversalAppId?: string | undefined
    alWindowsUniversalAppName?: string | undefined
    alWindowsUniversalUrl?: string | undefined
    alWindowsUrl?: string | undefined
    articleAuthor?: string | undefined
    articleExpirationTime?: string | undefined
    articleModifiedTime?: string | undefined
    articlePublishedTime?: string | undefined
    articlePublisher?: string | undefined
    articleSection?: string | undefined
    articleTag?: string | undefined
    author?: string | undefined
    bookAuthor?: string | undefined
    bookCanonicalName?: string | undefined
    bookIsbn?: string | undefined
    bookReleaseDate?: string | undefined
    booksBook?: string | undefined
    booksRatingScale?: string | undefined
    booksRatingValue?: string | undefined
    bookTag?: string | undefined
    businessContactDataCountryName?: string | undefined
    businessContactDataLocality?: string | undefined
    businessContactDataPostalCode?: string | undefined
    businessContactDataRegion?: string | undefined
    businessContactDataStreetAddress?: string | undefined
    dcContributor?: string | undefined
    dcCoverage?: string | undefined
    dcCreator?: string | undefined
    dcDate?: string | undefined
    dcDateCreated?: string | undefined
    dcDateIssued?: string | undefined
    dcDescription?: string | undefined
    dcFormatMedia?: string | undefined
    dcFormatSize?: string | undefined
    dcIdentifier?: string | undefined
    dcLanguage?: string | undefined
    dcPublisher?: string | undefined
    dcRelation?: string | undefined
    dcRights?: string | undefined
    dcSource?: string | undefined
    dcSubject?: string | undefined
    dcTitle?: string | undefined
    dcType?: string | undefined
    modifiedTime?: string | undefined
    musicAlbum?: string | undefined
    musicAlbumDisc?: string | undefined
    musicAlbumTrack?: string | undefined
    musicAlbumUrl?: string | undefined
    musicCreator?: string | undefined
    musicDuration?: string | undefined
    musicMusician?: string | undefined
    musicReleaseDate?: string | undefined
    musicSong?: OpenGraphMusicSong | undefined
    musicSongDisc?: string | undefined
    musicSongTrack?: string | undefined
    musicSongUrl?: string | undefined
    ogArticleAuthor?: string | undefined
    ogArticleExpirationTime?: string | undefined
    ogArticleModifiedTime?: string | undefined
    ogArticlePublishedTime?: string | undefined
    ogArticlePublisher?: string | undefined
    ogArticleSection?: string | undefined
    ogArticleTag?: string | undefined
    ogAudio?: string | undefined
    ogAudioSecureURL?: string | undefined
    ogAudioType?: string | undefined
    ogAudioURL?: string | undefined
    ogAvailability?: string | undefined
    ogDate?: string | undefined
    ogDescription?: string | undefined
    ogDeterminer?: string | undefined
    ogImage?: OpenGraphMedia | undefined
    ogImageHeight?: string | undefined
    ogImageSecureURL?: string | undefined
    ogImageType?: string | undefined
    ogImageURL?: string | undefined
    ogImageWidth?: string | undefined
    ogLocale?: string | undefined
    ogLocaleAlternate?: string | undefined
    ogLogo?: string | undefined
    ogPriceAmount?: string | undefined
    ogPriceCurrency?: string | undefined
    ogProductAvailability?: string | undefined
    ogProductCondition?: string | undefined
    ogProductPriceAmount?: string | undefined
    ogProductPriceCurrency?: string | undefined
    ogProductRetailerItemId?: string | undefined
    ogSiteName?: string | undefined
    ogTitle?: string | undefined
    ogType?: string | undefined
    ogUrl?: string | undefined
    ogVideo?: OpenGraphMedia | undefined
    ogVideoActorId?: string | undefined
    ogVideoHeight?: string | undefined
    ogVideoSecureURL?: string | undefined
    ogVideoType?: string | undefined
    ogVideoWidth?: string | undefined
    placeLocationLatitude?: string | undefined
    placeLocationLongitude?: string | undefined
    profileFirstName?: string | undefined
    profileGender?: string | undefined
    profileLastName?: string | undefined
    profileUsername?: string | undefined
    publishedTime?: string | undefined
    releaseDate?: string | undefined
    restaurantContactInfoCountryName?: string | undefined
    restaurantContactInfoEmail?: string | undefined
    restaurantContactInfoLocality?: string | undefined
    restaurantContactInfoPhoneNumber?: string | undefined
    restaurantContactInfoPostalCode?: string | undefined
    restaurantContactInfoRegion?: string | undefined
    restaurantContactInfoStreetAddress?: string | undefined
    restaurantContactInfoWebsite?: string | undefined
    restaurantMenu?: string | undefined
    restaurantRestaurant?: string | undefined
    restaurantSection?: string | undefined
    restaurantVariationPriceAmount?: string | undefined
    restaurantVariationPriceCurrency?: string | undefined
    twitterAppIdGooglePlay?: string | undefined
    twitterAppIdiPad?: string | undefined
    twitterAppIdiPhone?: string | undefined
    twitterAppNameGooglePlay?: string | undefined
    twitterAppNameiPad?: string | undefined
    twitterAppNameiPhone?: string | undefined
    twitterAppUrlGooglePlay?: string | undefined
    twitterAppUrliPad?: string | undefined
    twitterAppUrliPhone?: string | undefined
    twitterCard?: string | undefined
    twitterCreator?: string | undefined
    twitterCreatorId?: string | undefined
    twitterDescription?: string | undefined
    twitterImage?: OpenGraphTwitterImage | undefined
    twitterImageAlt?: string | undefined
    twitterImageHeight?: string | undefined
    twitterImageSrc?: string | undefined
    twitterImageWidth?: string | undefined
    twitterPlayer?: OpenGraphTwitterPlayer | undefined
    twitterPlayerHeight?: string | undefined
    twitterPlayerStream?: string | undefined
    twitterPlayerStreamContentType?: string | undefined
    twitterPlayerWidth?: string | undefined
    twitterSite?: string | undefined
    twitterSiteId?: string | undefined
    twitterTitle?: string | undefined
    twitterUrl?: string | undefined
    updatedTime?: string | undefined
  }
}