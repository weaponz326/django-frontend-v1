import { Injectable } from '@angular/core';

import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;
import htmlToPdfmake from 'html-to-pdfmake';
export default 'html-to-pdfmake';


@Injectable({
  providedIn: 'root'
})
export class PdfPrintService {

  constructor() { }

  generatePdf(html: any) {
    var content = htmlToPdfmake(html);
    const def = { content: content };
    pdfMake.createPdf(def).open();
  }

  openPdf(content: any) {
    const def = { content: content };
    pdfMake.createPdf(def).open();
  }

  printPdf(content: any) {
    const def = { content: content };
    pdfMake.createPdf(def).print();
  }

  downloadPdf(content: any) {
    const def = { content: content };
    pdfMake.createPdf(def).download();
  }

}
