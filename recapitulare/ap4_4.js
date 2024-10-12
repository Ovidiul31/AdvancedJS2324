class ThirdPartyLibrary{
    printText(text){
        console.log(text);
    }
}
class TextPrinter{
    displayText(text){
    }
}
    class TextPrinterAdapter extends TextPrinter{
        constructor(thirdPartyLibrary){
            super();
            this.thirdPartyLibrary = thirdPartyLibrary;

        }
        displayText(text){
            this.thirdPartyLibrary.printText(text);
        }
    }
    const text="Hello world!";
    const thirdPartyLibrary = new ThirdPartyLibrary();
    const textPrinter = new TextPrinteerAdapter(ThirdPartyLibrary);
    textPrinter.displayText(text);