function changeChecked(e){PropertyChanges.dispatchOwnPropertyChange(e.target,"checked",e.target.checked)}function changeValue(e){PropertyChanges.dispatchOwnPropertyChange(e.target,"value",e.target.value)}function makeObservable(e){"checked"===e?this.addEventListener("change",changeChecked):"value"===e&&(this.addEventListener("change",changeValue),("text"===this.type||"TEXTAREA"===this.nodeName)&&this.addEventListener("keyup",changeValue))}function makeUnobservable(e){"checked"===e?this.removeEventListener("change",changeChecked):"value"===e&&(this.removeEventListener("change",changeValue),("text"===this.type||"TEXTAREA"===this.nodeName)&&this.removeEventListener("keyup",changeValue))}var PropertyChanges=require("collections/listen/property-changes"),HTMLInputElement=Object.getPrototypeOf(document.createElement("input"));HTMLInputElement.makePropertyObservable=makeObservable,HTMLInputElement.makePropertyUnobservable=makeUnobservable;var HTMLTextAreaElement=Object.getPrototypeOf(document.createElement("textarea"));HTMLTextAreaElement.makePropertyObservable=makeObservable,HTMLTextAreaElement.makePropertyUnobservable=makeUnobservable;