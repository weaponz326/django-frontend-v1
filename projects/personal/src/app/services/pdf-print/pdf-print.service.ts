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

  // pdfMake: any;

  // async loadPdfMaker() {
  //   if (!this.pdfMake) {
  //     const pdfMakeModule = await import('pdfmake/build/pdfmake');
  //     const pdfFontsModule = await import('pdfmake/build/vfs_fonts');
  //     this.pdfMake = pdfMakeModule.default;
  //     this.pdfMake.vfs = pdfFontsModule.default.pdfMake.vfs;
  //   }
  // }

  // async generatePdf(documentDefinition: any) {
  //   await this.loadPdfMaker();

  //   const def = { content: documentDefinition };
  //   this.pdfMake.createPdf(def).open();
  // }

  generatePdf(html: any) {
    var content = htmlToPdfmake(html);
    const documentDefinition = { content: content };
    pdfMake.createPdf(documentDefinition).open();
  }

  printPdf(documentDefinition: any) {
    const def = { content: documentDefinition };
    pdfMake.createPdf(def).print();
  }

  downloadPdf(documentDefinition: any) {
    const def = { content: documentDefinition };
    pdfMake.createPdf(def).download();
  }

}
