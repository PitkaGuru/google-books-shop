export class Volume {

  
    kind: string;
    id: string;
    etag: string;
    selfLink: string;
    volumeInfo: {
      title: string,
      subtitle: string,
      authors: string[],
      publisher: string,
      publishedDate: string,
      description: string,
      industryIdentifiers: { type: string, identifier: string }[],
      readingModes: {
        text: boolean,
        image: boolean
      },
      pageCount: number,
      printedPageCount: number,
      dimensions: {
        height: string,
        width: string,
        thickness: string
      },
      printType: string,
      maturityRating: string,
      allowAnonLogging: boolean,
      contentVersion: string,
      imageLinks: {
        smallThumbnail: string,
        thumbnail: string,
        small: string,
        medium: string,
        large: string
        extraLarge: string
      },
      language: string,
      previewLink: string,
      infoLink: string,
      canonicalVolumeLink: string
    };
    layerInfo: {
      layers:  { layerId: string, volumeAnnotationsVersion: string }[]
    };
    saleInfo: {
      country: string,
      saleability: string,
      isEbook: boolean
    };
    accessInfo: {
      country: string,
      viewability: string,
      embeddable: boolean,
      publicDomain: boolean,
      textToSpeechPermission: string,
      epub: {
        isAvailable: boolean,
        acsTokenLink: string
      },
      pdf: {
        isAvailable: boolean,
        acsTokenLink: string
      },
      webReaderLink: string,
      accessViewStatus: string,
      quoteSharingAllowed: boolean
    };
   

}