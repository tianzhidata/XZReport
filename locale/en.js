!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([,function(e,t,n){"use strict";n.r(t);const r={toolbar:{undo:"Undo",redo:"Redo",print:"Print",paintformat:"Paint format",clearformat:"Clear format",format:"Format",fontName:"Font",fontSize:"Font size",fontBold:"Font bold",fontItalic:"Font italic",underline:"Underline",strike:"Strike",color:"Text color",bgcolor:"Fill color",border:"Borders",merge:"Merge cells",align:"Horizontal align",valign:"Vertical align",textwrap:"Text wrapping",freeze:"Freeze cell",autofilter:"Filter",formula:"Functions",more:"More",copy: 'Copy',cut:'Cut',paste:'Paste',alignLeft:'Left align ',alignRight:'Right clign',alignCenter:'Center clign',indent:'Right indent',indentReduce:'Left indent',valign: 'Vertical align',valignTop: 'Top align',valignMiddle: 'Middle align',valignBottom: 'Bottom align',},contextmenu:{copy:"Copy",cut:"Cut",paste:"Paste",pasteValue:"Paste values only",pasteFormat:"Paste format only",hide:"Hide",insertRow:"Insert row",insertColumn:"Insert column",deleteSheet:"Delete",copySheet:'Copy sheet',mergeSheet:'Merge sheet',deleteRow:"Delete row",deleteColumn:"Delete column",deleteCell:"Delete cell",deleteCellText:"Delete cell text",validation:"Data validations",cellprintable:"Enable export",cellnonprintable:"Disable export",celleditable:"Enable editing",cellnoneditable:"Disable editing"},print:{size:"Paper size",orientation:"Page orientation",orientations:["Landscape","Portrait"]},format:{normal:"Normal",text:"Plain Text",number:"Number",percent:"Percent",rmb:"RMB",usd:"USD",eur:"EUR",date:"Date",time:"Time",datetime:"Date time",duration:"Duration"},formula:{sum:"Sum",average:"Average",max:"Max",min:"Min",count:'Count',_if:"IF",and:"AND",or:"OR",concat:"Concat"},validation:{required:"it must be required",notMatch:"it not match its validation rule",between:"it is between {} and {}",notBetween:"it is not between {} and {}",notIn:"it is not in list",equal:"it equal to {}",notEqual:"it not equal to {}",lessThan:"it less than {}",lessThanEqual:"it less than or equal to {}",greaterThan:"it greater than {}",greaterThanEqual:"it greater than or equal to {}"},error:{pasteForMergedCell:"Unable to do this for merged cells"},calendar:{weeks:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],months:["January","February","March","April","May","June","July","August","September","October","November","December"]},button:{next:"Next",cancel:"Cancel",remove:"Remove",save:"Save",ok:"OK"},sort:{desc:"Sort Z -> A",asc:"Sort A -> Z"},filter:{empty:"empty"},dataValidation:{mode:"Mode",range:"Cell Range",criteria:"Criteria",modeType:{cell:"Cell",column:"Colun",row:"Row"},type:{list:"List",number:"Number",date:"Date",phone:"Phone",email:"Email"},operator:{be:"between",nbe:"not betwwen",lt:"less than",lte:"less than or equal to",gt:"greater than",gte:"greater than or equal to",eq:"equal to",neq:"not equal to"}}};window&&window.x_spreadsheet&&(window.x_spreadsheet.$messages=window.x_spreadsheet.$messages||{},window.x_spreadsheet.$messages.en=r),t.default=r}]);