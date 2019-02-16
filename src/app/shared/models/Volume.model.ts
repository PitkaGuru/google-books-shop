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
      pageCount: number,
      printedPageCount: number,
      imageLinks: {
        thumbnail: string,
        small: string,
        medium: string
      },  
    };
    saleInfo: {
      // buyLink: string;
      // country: string
      // isEbook: boolean
      // listPrice: {
      //   amount: number
      //   currencyCode: string;
      // };
      retailPrice: {
        amount: number, 
        currencyCode: string
      }
      saleability: string;
    };

   

}