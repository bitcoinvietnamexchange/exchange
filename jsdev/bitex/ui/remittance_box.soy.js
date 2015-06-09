// This file was automatically generated from remittance_box.coinage.soy.
// Please don't edit this file by hand.

goog.provide('bitex.ui.RemittancesBox.templates');

goog.require('soy');


bitex.ui.RemittancesBox.templates.RemittancesBoxCurrency = function(opt_data) {
  return '<tr><td><strong>' + soy.$$escapeHtml(opt_data.remittance_pair[1]) + ':</strong></td><td><span id="' + soy.$$escapeHtml(opt_data.id) + '_' + soy.$$escapeHtml(opt_data.remittance_pair[0]) + '_buy"  data-blink-class="md-blink"></span><span> / <span><span id="' + soy.$$escapeHtml(opt_data.id) + '_' + soy.$$escapeHtml(opt_data.remittance_pair[0]) + '_sell" data-blink-class="md-blink"></span></td></tr>';
};


bitex.ui.RemittancesBox.templates.RemittancesBoxCurrencies = function(opt_data) {
  var output = '';
  var remittance_pairList15 = opt_data.remittance_pairs;
  var remittance_pairListLen15 = remittance_pairList15.length;
  for (var remittance_pairIndex15 = 0; remittance_pairIndex15 < remittance_pairListLen15; remittance_pairIndex15++) {
    var remittance_pairData15 = remittance_pairList15[remittance_pairIndex15];
    output += bitex.ui.RemittancesBox.templates.RemittancesBoxCurrency({id: opt_data.id, remittance_pair: remittance_pairData15});
  }
  return output;
};


bitex.ui.RemittancesBox.templates.RemittancesBox = function(opt_data) {
  var output = '';
  /** @desc Remittance box title */
  var MSG_UNNAMED_37 = goog.getMsg('Be your own Remittance Service');
  output += '<div id="' + soy.$$escapeHtml(opt_data.id) + '" class="remittance-box"><table class="table table-bordered table-condensed remittance-box-table"><!--thead><div>' + MSG_UNNAMED_37 + '</div></thead--><tbody class="remittance-box-content">' + bitex.ui.RemittancesBox.templates.RemittancesBoxCurrencies(opt_data) + '</tbody></table></div>';
  return output;
};
