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
      },  
    };
   

}