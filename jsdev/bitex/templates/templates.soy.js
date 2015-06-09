// This file was automatically generated from templates.coinage.soy.
// Please don't edit this file by hand.

goog.provide('bitex.templates');

goog.require('soy');


bitex.templates.ProfileViewChangePasswordPlaceHolder = function(opt_data) {
  return '<div class="span6 well"></div>';
};


bitex.templates.AlgoPermissionsDialogContent = function(opt_data) {
  var output = '';
  /** @desc Algorithm trading request permmissions dialog content */
  var MSG_UNNAMED_1560 = goog.getMsg('This algorithm is requesting your permission to:');
  output += '<p class="lead"> ' + MSG_UNNAMED_1560 + '</p><ul class="list-unstyled" style="line-height: 2">';
  var permissionList9 = opt_data.permissions;
  var permissionListLen9 = permissionList9.length;
  for (var permissionIndex9 = 0; permissionIndex9 < permissionListLen9; permissionIndex9++) {
    var permissionData9 = permissionList9[permissionIndex9];
    output += '<li><span class="fa fa-check text-success"></span>';
    switch (permissionData9) {
      case 'notification':
        /** @desc Permission in Algo Permissions Dialog */
        var MSG_UNNAMED_1562 = goog.getMsg(' Show notifications');
        output += MSG_UNNAMED_1562;
        break;
      case 'balance':
        /** @desc Permission in Algo Permissions Dialog */
        var MSG_UNNAMED_1564 = goog.getMsg(' See your balances');
        output += MSG_UNNAMED_1564;
        break;
      case 'execution_report':
        /** @desc Permission in Algo Permissions Dialog */
        var MSG_UNNAMED_1566 = goog.getMsg(' Listen to the execution reports from your orders');
        output += MSG_UNNAMED_1566;
        break;
      case 'new_order_limited':
        /** @desc Permission in Algo Permissions Dialog */
        var MSG_UNNAMED_1568 = goog.getMsg(' Send limited orders');
        output += MSG_UNNAMED_1568;
        break;
      case 'new_buy_order_limited':
        /** @desc Permission in Algo Permissions Dialog */
        var MSG_UNNAMED_1570 = goog.getMsg(' Send buy limited orders');
        output += MSG_UNNAMED_1570;
        break;
      case 'new_sell_order_limited':
        /** @desc Permission in Algo Permissions Dialog */
        var MSG_UNNAMED_1572 = goog.getMsg(' Send sell limited orders');
        output += MSG_UNNAMED_1572;
        break;
      case 'new_market_order':
        /** @desc Permission in Algo Permissions Dialog */
        var MSG_UNNAMED_1574 = goog.getMsg(' Send market orders');
        output += MSG_UNNAMED_1574;
        break;
      case 'new_buy_market_order':
        /** @desc Permission in Algo Permissions Dialog */
        var MSG_UNNAMED_1576 = goog.getMsg(' Send buy market orders');
        output += MSG_UNNAMED_1576;
        break;
      case 'new_sell_market_order':
        /** @desc Permission in Algo Permissions Dialog */
        var MSG_UNNAMED_1578 = goog.getMsg(' Send sell market order');
        output += MSG_UNNAMED_1578;
        break;
      case 'cancel_order':
        /** @desc Permission in Algo Permissions Dialog */
        var MSG_UNNAMED_1580 = goog.getMsg(' Cancel orders');
        output += MSG_UNNAMED_1580;
        break;
      default:
        output += soy.$$escapeHtml(permissionData9);
    }
    output += '</li>';
  }
  output += '</ul>';
  return output;
};


bitex.templates.CustomerDetailDialog = function(opt_data) {
  var output = '';
  /** @desc Customer username */
  var MSG_UNNAMED_1582 = goog.getMsg('Username:');
  output += '<div class="row"><div class="span6">' + MSG_UNNAMED_1582 + soy.$$escapeHtml(opt_data.msg_customer_detail['Username']) + '</div></div>';
  return output;
};


bitex.templates.ErrorDialogContent = function(opt_data) {
  var output = '';
  /** @desc Error code label on error dialog content */
  var MSG_UNNAMED_1584 = goog.getMsg('Error code');
  output += '<p class="lead">' + soy.$$escapeHtml(opt_data.error_message) + '</p><dl class="dl-horizontal"><dt>' + MSG_UNNAMED_1584 + '</dt><dd>' + soy.$$escapeHtml(opt_data.error_code) + '</dd></dl>';
  return output;
};


bitex.templates.FileViewDialogContent = function(opt_data) {
  return '<img src="' + soy.$$escapeHtml(opt_data.filename) + '" style="width:500px"/>';
};


bitex.templates.DepositDetailDialogContent = function(opt_data) {
  var output = '<table class="table table-bordered table-condensed"><tbody>';
  var dataList68 = opt_data.depositDetailData;
  var dataListLen68 = dataList68.length;
  for (var dataIndex68 = 0; dataIndex68 < dataListLen68; dataIndex68++) {
    var dataData68 = dataList68[dataIndex68];
    output += '<tr><td>' + soy.$$escapeHtml(dataData68['key']) + ' :</td><td>' + soy.$$escapeHtml(dataData68['value']) + '</td></tr>';
  }
  if (opt_data.depositReceiptList) {
    /** @desc Download picture link on deposit receipt dialog content */
    var MSG_UNNAMED_1586 = goog.getMsg('Download');
    output += '<tr><td>Recibo:</td><td>';
    var receiptList78 = opt_data.depositReceiptList;
    var receiptListLen78 = receiptList78.length;
    for (var receiptIndex78 = 0; receiptIndex78 < receiptListLen78; receiptIndex78++) {
      var receiptData78 = receiptList78[receiptIndex78];
      output += '<a href="' + soy.$$escapeHtml(receiptData78['url']) + '" target="_blank">' + MSG_UNNAMED_1586 + '</a> ';
    }
    output += '</td></tr>';
    var receiptList87 = opt_data.depositReceiptList;
    var receiptListLen87 = receiptList87.length;
    for (var receiptIndex87 = 0; receiptIndex87 < receiptListLen87; receiptIndex87++) {
      var receiptData87 = receiptList87[receiptIndex87];
      output += '<tr><td colspan="2">' + ((receiptData87['type'] == 'image') ? '<img width="100%" src="' + soy.$$escapeHtml(receiptData87['url']) + '"/>' : (receiptData87['type'] == 'pdf') ? '<iframe src="https://docs.google.com/gview?url=' + soy.$$escapeHtml(receiptData87['url']) + '&embedded=true" style="width:515px; height:300px;" frameborder="0" />' : '') + '</td></tr>';
    }
  }
  output += '</tbody></table>';
  return output;
};


bitex.templates.DepositReceiptDialogContent = function(opt_data) {
  var output = '';
  /** @desc Download picture link on deposit receipt dialog content */
  var MSG_UNNAMED_1588 = goog.getMsg('Download');
  var receipt_urlList104 = opt_data.depositReceiptList;
  var receipt_urlListLen104 = receipt_urlList104.length;
  for (var receipt_urlIndex104 = 0; receipt_urlIndex104 < receipt_urlListLen104; receipt_urlIndex104++) {
    var receipt_urlData104 = receipt_urlList104[receipt_urlIndex104];
    output += '<img width="100%" src="' + soy.$$escapeHtml(receipt_urlData104) + '"/><a href="' + soy.$$escapeHtml(receipt_urlData104) + '" target="_blank">' + MSG_UNNAMED_1588 + '</a>';
  }
  return output;
};


bitex.templates.BrokerConfirmDepositContent = function(opt_data) {
  var output = '';
  /** @desc Control number label */
  var MSG_UNNAMED_1590 = goog.getMsg('Control number');
  /** @desc Amount label */
  var MSG_UNNAMED_1592 = goog.getMsg('Amount paid');
  /** @desc Fee percentage label */
  var MSG_UNNAMED_1594 = goog.getMsg('Fees:');
  /** @desc Net amount */
  var MSG_UNNAMED_1596 = goog.getMsg('Net amount');
  output += '<form class="form-horizontal broker-confirm-deposit"><div class="control-group"><label class="control-label">' + MSG_UNNAMED_1590 + '</label><div class="controls"><label class="control-label" style="text-align: left;">' + soy.$$escapeHtml(opt_data.controlNumber) + '</label></div></div><div class="control-group"><label class="control-label">' + MSG_UNNAMED_1592 + '</label><div class="controls"><div class="input-prepend"><span class="add-on">' + soy.$$escapeHtml(opt_data.currencySign) + '</span><input id="' + soy.$$escapeHtml(opt_data.id_value) + '" type="text" class="input-small" size="16" name="PaidValue" value="' + soy.$$escapeHtml(opt_data.value) + '"></div></div></div><div class="control-group"><label class="control-label">' + MSG_UNNAMED_1594 + '</label><div class="controls"><div class="row-fluid"><div class="span4"><div class="input-append"><input id="' + soy.$$escapeHtml(opt_data.percentFeeID) + '" type="text" class="input-mini" size="16" name="Fee" value="' + soy.$$escapeHtml(opt_data.percentFee) + '"><span class="add-on">%</span></div></div><div class="span4"><div class="input-prepend"><span class="add-on">' + soy.$$escapeHtml(opt_data.currencySign) + '</span><input id="' + soy.$$escapeHtml(opt_data.fixedFeeID) + '" type="text" class="input-mini" size="16" name="Fee" value="' + soy.$$escapeHtml(opt_data.fixedFee) + '"></div></div><div class="span4"><label id="' + soy.$$escapeHtml(opt_data.totalFeesID) + '" class="control-label broker-confirm-deposit-fee" style="text-align: left;"></label></div></div></div></div><div class="control-group"><label class="control-label">' + MSG_UNNAMED_1596 + '</label><div class="controls"><label id="' + soy.$$escapeHtml(opt_data.netValueID) + '" class="control-label broker-confirm-deposit-net-amount" style="text-align: left;"></label><input id="' + soy.$$escapeHtml(opt_data.netValueID) + '_value" type="hidden" value=""></div></div></form>';
  return output;
};


bitex.templates.BrokerView = function(opt_data) {
  var output = '';
  if (opt_data.show_title) {
    /** @desc Title for the Broker view */
    var MSG_UNNAMED_1598 = goog.getMsg('My broker');
    output += '<header class="page__head section-title"><h1 class="page__title h2"><i class="glyphicon glyphicon-search"></i> ' + MSG_UNNAMED_1598 + '</h1></header>';
  }
  output += '<div class="page__body content">';
  if (opt_data.msg_broker['BrokerID'] == -1) {
  } else {
    /** @desc Terms of service section subtitle on Broker view */
    var MSG_UNNAMED_1636 = goog.getMsg('Terms of service');
    output += '<div class="broker-address"><h4 class="broker-address__title">Address</h4><p><strong>' + soy.$$escapeHtml(opt_data.msg_broker['BusinessName']) + '</strong><br/>' + soy.$$escapeHtml(opt_data.msg_broker['Address']) + '<br/>' + soy.$$escapeHtml(opt_data.msg_broker['City']) + ', ' + soy.$$escapeHtml(opt_data.msg_broker['State']) + ' ' + soy.$$escapeHtml(opt_data.msg_broker['ZipCode']) + ' - ' + soy.$$escapeHtml(opt_data.msg_broker['Country']) + '<br/>';
    if (opt_data.msg_broker['PhoneNumber1']) {
      /** @desc label in broker general information table */
      var MSG_UNNAMED_1600 = goog.getMsg('Phone');
      /** @desc label in broker general information table */
      var MSG_UNNAMED_1602 = goog.getMsg('P:');
      output += '<abbr title="' + MSG_UNNAMED_1600 + '">' + MSG_UNNAMED_1602 + '</abbr>' + soy.$$escapeHtml(opt_data.msg_broker['PhoneNumber1']) + ' ' + ((opt_data.msg_broker['PhoneNumber2']) ? ', ' + soy.$$escapeHtml(opt_data.msg_broker['PhoneNumber2']) : '') + '<br/>';
    }
    output += ((opt_data.msg_broker['Skype']) ? 'Skype: ' + soy.$$escapeHtml(opt_data.msg_broker['Skype']) + '<br/>' : '') + '<a href="mailto:' + soy.$$escapeHtml(opt_data.msg_broker['Email']) + '" target="_blank">' + soy.$$escapeHtml(opt_data.msg_broker['Email']) + '</a></p></div><hr />';
    if (opt_data.msg_broker['BrokerID'] > 0) {
      /** @desc Allowed markets section subtitle on broker view */
      var MSG_UNNAMED_1604 = goog.getMsg('Markets');
      output += '<div class="broker-market"><h4 class="broker-market__title">' + MSG_UNNAMED_1604 + '</h4><p class="broker-market__markets">';
      var allowed_marketList208 = soy.$$getMapKeys(opt_data.msg_broker['AllowedMarkets']);
      var allowed_marketListLen208 = allowed_marketList208.length;
      for (var allowed_marketIndex208 = 0; allowed_marketIndex208 < allowed_marketListLen208; allowed_marketIndex208++) {
        var allowed_marketData208 = allowed_marketList208[allowed_marketIndex208];
        output += soy.$$escapeHtml(opt_data.msg_broker['AllowedMarkets'][allowed_marketData208]['description']);
      }
      output += '</p></div>';
    }
    output += '<hr />';
    if (opt_data.msg_broker['BrokerID'] >= 0) {
      if (opt_data.msg_broker['FeeStructure'].length > 0) {
        /** @desc Fee section subtitle on Broker view */
        var MSG_UNNAMED_1606 = goog.getMsg('Fees');
        /** @desc Operation column on Broker fees table */
        var MSG_UNNAMED_1608 = goog.getMsg('Operation');
        /** @desc Fees column on Broker fees table */
        var MSG_UNNAMED_1610 = goog.getMsg('Fee');
        /** @desc Terms column on Broker fees table */
        var MSG_UNNAMED_1612 = goog.getMsg('Terms');
        output += '<!-- .broker-fee --><div class="broker-fee"><h4 class="broker-fee__title">' + MSG_UNNAMED_1606 + '</h4><table class="broker-fee__table table"><thead><tr><th>' + MSG_UNNAMED_1608 + '</th><th>' + MSG_UNNAMED_1610 + '</th><th>' + MSG_UNNAMED_1612 + '</th></tr></thead><tbody>';
        if (! opt_data.msg_broker['IsBrokerHub']) {
          if (opt_data.msg_broker['FormattedTransactionFeeBuy'] == opt_data.msg_broker['FormattedTransactionFeeSell']) {
            /** @desc label in broker fees table */
            var MSG_UNNAMED_1614 = goog.getMsg('Trade fee');
            output += '<tr><td>' + MSG_UNNAMED_1614 + '</td><td>' + soy.$$escapeHtml(opt_data.msg_broker['FormattedTransactionFeeBuy']) + '</td><td></td></tr>';
          } else {
            /** @desc label in broker fees table */
            var MSG_UNNAMED_1616 = goog.getMsg('Trade fee - Buy side');
            /** @desc label in broker fees table */
            var MSG_UNNAMED_1618 = goog.getMsg('Trade fee - Sell side');
            output += '<tr><td>' + MSG_UNNAMED_1616 + '</td><td>' + soy.$$escapeHtml(opt_data.msg_broker['FormattedTransactionFeeBuy']) + '</td><td></td></tr><tr><td>' + MSG_UNNAMED_1618 + '</td><td>' + soy.$$escapeHtml(opt_data.msg_broker['FormattedTransactionFeeSell']) + ' %</td><td></td></tr>';
          }
        }
        var feeList252 = opt_data.msg_broker['FeeStructure'];
        var feeListLen252 = feeList252.length;
        for (var feeIndex252 = 0; feeIndex252 < feeListLen252; feeIndex252++) {
          var feeData252 = feeList252[feeIndex252];
          output += '<tr><td>' + soy.$$escapeHtml(feeData252['Operation']) + '</td><td>' + soy.$$escapeHtml(feeData252['Fee']) + '</td><td>' + soy.$$escapeHtml(feeData252['Terms']) + '</td></tr>';
        }
        output += '</tbody></table></div><!-- /.broker-fee -->';
      }
    }
    if (! opt_data.msg_broker['IsBrokerHub']) {
      /** @desc Wallet section subtitle on Broker view */
      var MSG_UNNAMED_1620 = goog.getMsg('Wallets');
      /** @desc Coin  column on Broker wallet table */
      var MSG_UNNAMED_1622 = goog.getMsg('Coin');
      /** @desc type  column on Broker wallet table */
      var MSG_UNNAMED_1624 = goog.getMsg('Type');
      /** @desc address column type on Broker wallet table */
      var MSG_UNNAMED_1626 = goog.getMsg('Address');
      /** @desc multisig column type on Broker wallet table */
      var MSG_UNNAMED_1628 = goog.getMsg('Multi signature');
      /** @desc managed by column on Broker wallet table */
      var MSG_UNNAMED_1630 = goog.getMsg('Managed by');
      output += '<!-- .broker-wallet --><div class="broker-wallet"><h4 class="broker-wallet__title">' + MSG_UNNAMED_1620 + '</h4><table class="broker-wallet__table table"><thead><tr><th>' + MSG_UNNAMED_1622 + '</th><th>' + MSG_UNNAMED_1624 + '</th><th>' + MSG_UNNAMED_1626 + '</th><th>' + MSG_UNNAMED_1628 + '</th><th>' + MSG_UNNAMED_1630 + '</th></tr></thead><tbody>';
      var crypto_currenciesList283 = opt_data.msg_broker['CryptoCurrencies'];
      var crypto_currenciesListLen283 = crypto_currenciesList283.length;
      for (var crypto_currenciesIndex283 = 0; crypto_currenciesIndex283 < crypto_currenciesListLen283; crypto_currenciesIndex283++) {
        var crypto_currenciesData283 = crypto_currenciesList283[crypto_currenciesIndex283];
        var walletsList284 = crypto_currenciesData283['Wallets'];
        var walletsListLen284 = walletsList284.length;
        for (var walletsIndex284 = 0; walletsIndex284 < walletsListLen284; walletsIndex284++) {
          var walletsData284 = walletsList284[walletsIndex284];
          output += '<tr><td>' + soy.$$escapeHtml(crypto_currenciesData283['CurrencyDescription']) + '</td><td>' + soy.$$escapeHtml(walletsData284['type']) + '</td><td>';
          if (crypto_currenciesData283['CurrencyCode'] == 'BTC') {
            switch (walletsData284['address'][0]) {
              case 'm':
              case 'n':
              case '2':
              case '9':
              case 'c':
                output += '<a href="https://test-insight.bitpay.com/address/' + soy.$$escapeHtml(walletsData284['address']) + '/" target="_blank">' + soy.$$escapeHtml(walletsData284['address']) + '</a>';
                break;
              default:
                output += '<a href="https://blockchain.info/address/' + soy.$$escapeHtml(walletsData284['address']) + '/" target="_blank">' + soy.$$escapeHtml(walletsData284['address']) + '</a>';
            }
          } else {
            output += soy.$$escapeHtml(walletsData284['address']);
          }
          output += '</td><td>';
          if (walletsData284['multisig']) {
            /** @desc Multisig true */
            var MSG_UNNAMED_1632 = goog.getMsg('Yes');
            output += MSG_UNNAMED_1632;
          } else {
            /** @desc Multisig false */
            var MSG_UNNAMED_1634 = goog.getMsg('No');
            output += MSG_UNNAMED_1634;
          }
          output += '</td><td>' + soy.$$escapeHtml(walletsData284['managed_by']) + '</td></tr>';
        }
      }
      output += '</tbody></table></div><!-- /.broker-wallet -->';
    }
    output += '<!-- .broker-terms --><div class="broker-terms"><h4 class="broker-terms__title">' + MSG_UNNAMED_1636 + '</h4><iframe class="broker-terms__iframe" src="' + soy.$$escapeHtml(opt_data.msg_broker['TosUrl']) + '"></iframe></div><!-- /.broker-terms -->';
  }
  output += '</div>';
  return output;
};


bitex.templates.CancelDepositDialogContent = function(opt_data) {
  var output = '';
  /** @desc Cancel deposit dialog message */
  var MSG_UNNAMED_1638 = goog.getMsg('Enter a reason for cancelling the deposit');
  /** @desc Cancel deposit reason label */
  var MSG_UNNAMED_1640 = goog.getMsg('Reason:');
  /** @desc reason for cancelling deposit */
  var MSG_UNNAMED_1642 = goog.getMsg('Other');
  output += '<p>' + MSG_UNNAMED_1638 + '</p><form class="form-horizontal"><fieldset><div class="control-group"><label class="control-label" for="' + soy.$$escapeHtml(opt_data.reason_id) + '" >' + MSG_UNNAMED_1640 + '</label><div class="controls"><select id="' + soy.$$escapeHtml(opt_data.reason_id) + '"><option value=0 selected>' + MSG_UNNAMED_1642 + '</option></select></div></div><div class="control-group"><div class="controls"><textarea id="' + soy.$$escapeHtml(opt_data.custom_reason_id) + '" rows="2" style=""></textarea></div></div></fieldset></form>';
  return output;
};


bitex.templates.CancelWithdrawDialogContent = function(opt_data) {
  var output = '';
  /** @desc Cancel withdraw dialog message */
  var MSG_UNNAMED_1644 = goog.getMsg('Enter a reason for cancelling the user withdraw');
  /** @desc Cancel withdraw reason label */
  var MSG_UNNAMED_1646 = goog.getMsg('Reason:');
  /** @desc reason for cancelling withdraw */
  var MSG_UNNAMED_1648 = goog.getMsg('Other');
  /** @desc reason for cancelling withdraw */
  var MSG_UNNAMED_1650 = goog.getMsg('Insufficient funds');
  /** @desc reason for cancelling withdraw */
  var MSG_UNNAMED_1652 = goog.getMsg('Account not verified');
  /** @desc reason for cancelling withdraw */
  var MSG_UNNAMED_1654 = goog.getMsg('Suspicion of fraud');
  /** @desc reason for cancelling withdraw */
  var MSG_UNNAMED_1656 = goog.getMsg('Withdrawing to a different account than yours');
  /** @desc reason for cancelling withdraw */
  var MSG_UNNAMED_1658 = goog.getMsg('Invalid wallet');
  /** @desc reason for cancelling withdraw */
  var MSG_UNNAMED_1660 = goog.getMsg('Invalid bank account');
  /** @desc reason for cancelling withdraw */
  var MSG_UNNAMED_1662 = goog.getMsg('Amount exceeded your daily withdraw limit');
  /** @desc reason for cancelling withdraw */
  var MSG_UNNAMED_1664 = goog.getMsg('User has deposits that are not yet confirmed');
  output += '<p>' + MSG_UNNAMED_1644 + '</p><form class="form-horizontal"><fieldset><div class="control-group"><label class="control-label" for="' + soy.$$escapeHtml(opt_data.reason_id) + '" >' + MSG_UNNAMED_1646 + '</label><div class="controls"><select id="' + soy.$$escapeHtml(opt_data.reason_id) + '"><option value=0>' + MSG_UNNAMED_1648 + '</option><option value=-1 selected>' + MSG_UNNAMED_1650 + '</option><option value=-2>' + MSG_UNNAMED_1652 + '</option><option value=-3>' + MSG_UNNAMED_1654 + '</option><option value=-4>' + MSG_UNNAMED_1656 + '</option><option value=-5>' + MSG_UNNAMED_1658 + '</option><option value=-6>' + MSG_UNNAMED_1660 + '</option><option value=-7>' + MSG_UNNAMED_1662 + '</option><option value=-8>' + MSG_UNNAMED_1664 + '</option></select></div></div><div class="control-group"><div class="controls"><textarea id="' + soy.$$escapeHtml(opt_data.custom_reason_id) + '" rows="2" style="display:none;"></textarea></div></div></fieldset></form>';
  return output;
};


bitex.templates.GoogleAuthenticationCodeDialogContent = function(opt_data) {
  var output = '';
  /** @desc Google Authenticator code dialog label */
  var MSG_UNNAMED_1666 = goog.getMsg('Google Authenticator code:');
  /** @desc Limit table field header */
  var MSG_UNNAMED_1668 = goog.getMsg('Google authenticator code');
  /** @desc Google Authenticator code placeholder */
  var MSG_UNNAMED_1670 = goog.getMsg('eg. 555555');
  output += '<form class="form-horizontal" data-deposit-status="prepare" data-uniform-control-holder-class="control-group"><fieldset><div class="control-group"><label>' + MSG_UNNAMED_1666 + '</label><input name="token" data-uniform-validators="required" data-uniform-label="' + MSG_UNNAMED_1668 + '" label="' + MSG_UNNAMED_1670 + '" class="input-large" type="text" size="10"></div></fieldset></form>';
  return output;
};


bitex.templates.WithdrawConfirmationDialogContent = function(opt_data) {
  var output = '';
  /** @desc Withdraw confirmation dialog message */
  var MSG_UNNAMED_1672 = goog.getMsg('We just sent a confirmation code to your email.');
  /** @desc Confirmation code placeholder on withdraw confirmation dialog */
  var MSG_UNNAMED_1674 = goog.getMsg('Confirmation code');
  /** @desc Withdraw confirmation dialog security disclaimer */
  var MSG_UNNAMED_1676 = goog.getMsg('This is security measure to improve your account security');
  output += '<form class="form-horizontal" data-deposit-status="prepare" data-uniform-control-holder-class="control-group"><fieldset><p>' + MSG_UNNAMED_1672 + '</p><div class="control-group"><label>Confirmation Code</label><input name="confirmation_code" type="text" data-uniform-validators="required" label="' + MSG_UNNAMED_1674 + '" class="input-block-level"></div><p><i>' + MSG_UNNAMED_1676 + '</i></p></fieldset></form>';
  return output;
};


bitex.templates.UserFeesDialogContent = function(opt_data) {
  var output = '';
  /** @desc Buy fee */
  var MSG_UNNAMED_1678 = goog.getMsg('Buy fee ');
  /** @desc Buy fee */
  var MSG_UNNAMED_1680 = goog.getMsg('Sell fee');
  output += '<form class="form-horizontal"><div class="control-group"><label class="control-label" for="' + soy.$$escapeHtml(opt_data.id) + '_buy_fee">' + MSG_UNNAMED_1678 + '</label><div class="controls"><input type="text" id="' + soy.$$escapeHtml(opt_data.id) + '_buy_fee"  style="text-align: right;" value="' + soy.$$escapeHtml(opt_data.buy_fee) + '"/><div class="checkbox"><label><input type="checkbox" id="' + soy.$$escapeHtml(opt_data.id) + '_broker_buy_fee"> Use Broker Fee</label></div></div></div><div class="control-group"><label class="control-label" for="' + soy.$$escapeHtml(opt_data.id) + '_sell_fee">' + MSG_UNNAMED_1680 + '</label><div class="controls"><input type="text" id="' + soy.$$escapeHtml(opt_data.id) + '_sell_fee"  style="text-align: right;" value="' + soy.$$escapeHtml(opt_data.sell_fee) + '"/><div class="checkbox"><label><input type="checkbox" id="' + soy.$$escapeHtml(opt_data.id) + '_broker_sell_fee"> Use Broker Fee</label></div></div></div></form>';
  return output;
};


bitex.templates.YourAccountSummary = function(opt_data) {
  var output = '';
  /** @desc Your account label in the right side bar */
  var MSG_UNNAMED_1682 = goog.getMsg('Your account');
  /** @desc Unconfirmed deposits */
  var MSG_UNNAMED_1684 = goog.getMsg('Unconfirmed deposits from your confirmed addresses');
  var accountList433 = opt_data.accounts;
  var accountListLen433 = accountList433.length;
  for (var accountIndex433 = 0; accountIndex433 < accountListLen433; accountIndex433++) {
    var accountData433 = accountList433[accountIndex433];
    output += '<div class="balance__title">' + MSG_UNNAMED_1682 + ':</div><div style="display: none;"><div id="id_account_summary_' + soy.$$escapeHtml(accountData433['brokerID']) + '" class=\'account-summary-broker model-action-set\' data-key="SelectedBrokerID" data-value="' + soy.$$escapeHtml(accountData433['brokerID']) + '"' + ((opt_data.accounts.length <= 1 || accountData433['currencies'].length == 0) ? 'style="display:none;"' : '') + '><div><strong>' + soy.$$escapeHtml(accountData433['brokerName']) + '</strong></div></div></div><!-- .balance__currencies --><ul class="balance__currencies"><!-- /.balance__currencies -->';
    var currency_infoList448 = accountData433['currencies'];
    var currency_infoListLen448 = currency_infoList448.length;
    for (var currency_infoIndex448 = 0; currency_infoIndex448 < currency_infoListLen448; currency_infoIndex448++) {
      var currency_infoData448 = currency_infoList448[currency_infoIndex448];
      output += '<!-- .balance-currency --><li class="balance-currency"><span class="balance-currency__name">' + soy.$$escapeHtml(currency_infoData448['currency']) + '</span>&nbsp;<span class="balance-currency__amount bitex-model" data-model-key="formatted_balance_' + soy.$$escapeHtml(accountData433['brokerID']) + ':' + soy.$$escapeHtml(accountData433['clientID']) + '_' + soy.$$escapeHtml(currency_infoData448['currency']) + '" data-blink-class="balance-info-blink">' + soy.$$escapeHtml(currency_infoData448['formattedBalance']) + '></span>&nbsp;<abbr title="' + MSG_UNNAMED_1684 + '"><em><span class="bitex-model" data-model-key="formatted_position_' + soy.$$escapeHtml(accountData433['brokerID']) + ':' + soy.$$escapeHtml(accountData433['clientID']) + '_' + soy.$$escapeHtml(currency_infoData448['currency']) + '" data-blink-class="balance-info-blink"></span></em></abbr>&nbsp;' + ((currency_infoData448['showDeposit']) ? '<a href="#" data-action="deposit" data-currency="' + soy.$$escapeHtml(currency_infoData448['currency']) + '"><i data-action="deposit" data-currency="' + soy.$$escapeHtml(currency_infoData448['currency']) + '" class="glyphicon glyphicon-save"></i></a>' : '') + '&nbsp;' + ((currency_infoData448['showWithdraw']) ? '<a href="#" data-action="withdraw" data-currency="' + soy.$$escapeHtml(currency_infoData448['currency']) + '"><i data-action="withdraw" data-currency="' + soy.$$escapeHtml(currency_infoData448['currency']) + '" class="glyphicon glyphicon-open"></i></a>' : '') + '</li><!-- /.balance-currency -->';
    }
    output += '</ul>';
  }
  return output;
};


bitex.templates.AccountBalances = function(opt_data) {
  var output = '<table class="table table-striped" style="width: 350px"><tbody>';
  var currencyList490 = opt_data.currencies;
  var currencyListLen490 = currencyList490.length;
  for (var currencyIndex490 = 0; currencyIndex490 < currencyListLen490; currencyIndex490++) {
    var currencyData490 = currencyList490[currencyIndex490];
    /** @desc label for available balance in a currency */
    var MSG_UNNAMED_1686 = goog.getMsg(
        'Available {$currency}',
        {'currency': soy.$$escapeHtml(currencyData490)});
    output += '<tr><td><strong>' + MSG_UNNAMED_1686 + '</strong></td><td><span class="bitex-model" data-model-key="formatted_balance_' + soy.$$escapeHtml(currencyData490) + '" data-blink-class="balance-info-blink"></span></td>';
    if (opt_data.action == 'deposit') {
      /** @desc Deposit button label */
      var MSG_UNNAMED_1688 = goog.getMsg(' Deposit');
      output += '<td><button class="btn btn-mini" data-action="deposit"  data-currency="' + soy.$$escapeHtml(currencyData490) + '"><i data-action="deposit"  data-currency="' + soy.$$escapeHtml(currencyData490) + '" class="icon-plus"/>' + MSG_UNNAMED_1688 + '</button></td>';
    }
    if (opt_data.action == 'withdraw') {
      /** @desc Deposit button label */
      var MSG_UNNAMED_1690 = goog.getMsg(' Withdraw');
      output += '<td><button class="btn btn-mini" data-action="withdraw" data-currency="' + soy.$$escapeHtml(currencyData490) + '"><i data-action="withdraw" data-currency="' + soy.$$escapeHtml(currencyData490) + '" class="icon-minus"/>' + MSG_UNNAMED_1690 + '</button></td>';
    }
    output += '</tr>';
  }
  output += '</tbody></table>';
  return output;
};


bitex.templates.WaitingForDepositResponseDialogContent = function(opt_data) {
  var output = '';
  /** @desc processing deposit request waiting dialog msg */
  var MSG_UNNAMED_1692 = goog.getMsg('Processing deposit request...');
  output += '<div class="row-fluid" data-deposit-status="processing"><h5 class="text-center">' + MSG_UNNAMED_1692 + '</h5></div><div class="row-fluid"><div class="span6 offset3"><div class="progress progress-striped active"><div class="bar" style="width: 100%;"></div></div></div></div>';
  return output;
};


bitex.templates.DepositCryptoCurrencyContentDialog = function(opt_data) {
  var output = '<div class="row-fluid" data-deposit-status="prepare"><h4 class="text-center">' + soy.$$escapeHtml(opt_data.deposit_message['Data']['InputAddress']) + '</h4>';
  if (opt_data.formattedAmount) {
    /** @desc deposit the amount */
    var MSG_UNNAMED_1694 = goog.getMsg(' Deposit the exact amount of :');
    output += '<div class="text-center">' + MSG_UNNAMED_1694 + ' ' + soy.$$escapeHtml(opt_data.formattedAmount) + '</div>';
  }
  output += '<div class="text-center"><img src="https://chart.googleapis.com/chart?cht=qr&chs=200x200&chl=bitcoin%3A' + soy.$$escapeHtml(opt_data.deposit_message['Data']['InputAddress']) + ((opt_data.amount) ? '%3Famount%3D' + soy.$$escapeHtml(opt_data.amount) : '') + '"/></div>';
  if (opt_data.hasInstantDepositsEnabled) {
    /** @desc Instant deposit warning */
    var MSG_UNNAMED_1696 = goog.getMsg('Your account has instant deposits enabled. In case you intentionally try to do a "double spending" attack, your account will be frozen, even if your double spending attack is not successful.');
    output += '<div class="alert alert-block">' + MSG_UNNAMED_1696 + '</div>';
  }
  output += '</div>';
  return output;
};


bitex.templates.CryptoCurrencyQRContentDialog = function(opt_data) {
  return '<div class="row-fluid" data-deposit-status="prepare"><h4 class="text-center">' + soy.$$escapeHtml(opt_data.data['Wallet']) + '</h4><div class="text-center"><img src="https://chart.googleapis.com/chart?cht=qr&chs=200x200&chl=' + soy.$$escapeHtml(opt_data.data['Wallet']) + '"/></div></div>';
};


bitex.templates.ConfirmTrustedAddressContentDialog = function(opt_data) {
  var output = '';
  /** @desc confirm trusted address dialog msg */
  var MSG_UNNAMED_1698 = goog.getMsg(' Do you want to enable instant deposits for this address?');
  /** @desc confirm trusted label placeholder */
  var MSG_UNNAMED_1700 = goog.getMsg('Enter a label for this address.');
  /** @desc confirm trusted address dialog msg */
  var MSG_UNNAMED_1702 = goog.getMsg('Only enable it if you have the private key for this address.');
  /** @desc confirm trusted address dialog msg */
  var MSG_UNNAMED_1704 = goog.getMsg('Always remember what happened at MtGox');
  /** @desc confirm trusted address dialog msg */
  var MSG_UNNAMED_1706 = goog.getMsg('Never ever under any circumstances leave your Bitcoins deposited at any Exchange, no matter how secure they claim to be. Bitcoins are meant to be with the people and not in the hands of the Exchange operator. We don\'t want to create a "pot of gold" that will attract hackers. The "Instant deposits" technology will allow you to send your bitcoins instantly to trade them in the exchange, thus eliminating the need for you to leave Bitcoins at the exchange in order to negotiate them quickly.');
  output += '<div class="row-fluid"><h3 class="text-center">' + MSG_UNNAMED_1698 + '</h3><h5 class="text-center">' + soy.$$escapeHtml(opt_data.data['Address']) + '</h5><div class="text-center"><input type="text" class="confirm-trusted-address-label" size="30" placeholder="' + MSG_UNNAMED_1700 + '"></input></div><h4 class="text-center">' + MSG_UNNAMED_1702 + '</h4><div class="alert alert-block"><h4>' + MSG_UNNAMED_1704 + '</h4>' + MSG_UNNAMED_1706 + '</div></div>';
  return output;
};


bitex.templates.ConfirmDepositCryptoCurrencyContentDialog = function(opt_data) {
  var output = '';
  /** @desc deposit done dialog msg */
  var MSG_UNNAMED_1708 = goog.getMsg(' IMPORTANT! ');
  /** @desc deposit done dialog msg */
  var MSG_UNNAMED_1710 = goog.getMsg(
      ' We will generate a unique {$currencydescription} address that will be valid only for this transaction.',
      {'currencydescription': soy.$$escapeHtml(opt_data.currencydescription)});
  /** @desc deposit done dialog msg */
  var MSG_UNNAMED_1712 = goog.getMsg(' Did you understand? ');
  output += '<div data-deposit-status="confirm"><h5 style="margin-bottom:0;">' + MSG_UNNAMED_1708 + '<br /><br /><div style="font-weight:400;">' + MSG_UNNAMED_1710 + '</div><br />' + MSG_UNNAMED_1712 + '</h5></div>';
  return output;
};


bitex.templates.DepositSlipContentDialog = function(opt_data) {
  return '<div class="row-fluid" data-deposit-status="done"><iframe allowtransparency="true" src="' + soy.$$escapeHtml(opt_data.rest_url) + '/get_deposit?deposit_id=' + soy.$$escapeHtml(opt_data.deposit_id) + '" frameborder="0" style="width: 500px; height: 500px; border: none;" scrolling="yes"></iframe></div>';
};


bitex.templates.FeesFormControls = function(opt_data) {
  var output = '';
  /** @desc Fee label */
  var MSG_UNNAMED_1714 = goog.getMsg('Fees:');
  /** @desc Fee percentage label */
  var MSG_UNNAMED_1716 = goog.getMsg('Percent fee');
  /** @desc Fee fixed label */
  var MSG_UNNAMED_1718 = goog.getMsg('Fixed fee');
  /** @desc Net amount */
  var MSG_UNNAMED_1720 = goog.getMsg('Net amount');
  output += '<div class="control-group"><label class="control-label">' + MSG_UNNAMED_1714 + '</label><div class="controls"><div class="row-fluid"><div class="span3"><div class="input-append"><input id="' + soy.$$escapeHtml(opt_data.percentFeeID) + '" type="text" class="input-mini" size="16"  style="width: 40px;" name="PercentFee" value="' + soy.$$escapeHtml(opt_data.percentFee) + '"><span class="add-on">%</span></div><span style="font-style: italic;">' + MSG_UNNAMED_1716 + '</span></div><div class="span1" style="margin-top: 4px;margin-bottom: -4px;"><span style="font-weight: bold;">+</span></div><div class="span3"><div class="input-prepend"><span class="add-on">' + soy.$$escapeHtml(opt_data.currencySign) + '</span><input id="' + soy.$$escapeHtml(opt_data.fixedFeeID) + '" type="text" class="input-mini" size="16" style="width: 40px;" name="FixedFee" value="' + soy.$$escapeHtml(opt_data.fixedFee) + '"></div><span style="font-style: italic;">' + MSG_UNNAMED_1718 + '</span></div><div class="span1" style="margin-top: 4px;margin-bottom: -4px;"><span style="font-weight: bold;">=</span></div><div class="span4"><label id="' + soy.$$escapeHtml(opt_data.totalFeesID) + '" class="control-label" style="text-align: left;"></label></div></div></div></div><div class="control-group" style="' + ((opt_data.hideNetValueID) ? 'display:none' : '') + '"><label class="control-label">' + MSG_UNNAMED_1720 + '</label><div class="controls"><label id="' + soy.$$escapeHtml(opt_data.netValueID) + '" class="control-label" style="text-align: left;"></label><input id="' + soy.$$escapeHtml(opt_data.netValueID) + '_value" type="hidden" value=""></div></div>';
  return output;
};


bitex.templates.FeesForm = function(opt_data) {
  var output = '';
  /** @desc requested amount */
  var MSG_UNNAMED_1722 = goog.getMsg('Requested Amount');
  output += '<form class="form-horizontal" data-deposit-status="prepare"><input type="hidden" name="Currency" value="' + soy.$$escapeHtml(opt_data.currency) + '"><input id="' + soy.$$escapeHtml(opt_data.amountID) + '" type="hidden" name="Amount" value="' + soy.$$escapeHtml(opt_data.amount) + '"><div class="control-group"><label class="control-label">' + MSG_UNNAMED_1722 + '</label><div class="controls"><label class="control-label" style="text-align: left;">' + soy.$$escapeHtml(opt_data.formattedAmount) + '</label></div></div>' + bitex.templates.FeesFormControls({currencySign: opt_data.currencySign, percentFeeID: opt_data.percentFeeID, percentFee: opt_data.percentFee, fixedFeeID: opt_data.fixedFeeID, fixedFee: opt_data.fixedFee, totalFeesID: opt_data.totalFeesID, netValueID: opt_data.netValueID, hideNetValueID: true}) + '</form>';
  return output;
};


bitex.templates.DepositWithdrawDialogContent = function(opt_data) {
  var output = '<form class="modal-form" data-deposit-status="prepare" data-uniform-control-holder-class="control-group"><input type="hidden" name="Currency" value="' + soy.$$escapeHtml(opt_data.currency) + '">' + ((opt_data.side == 'broker') ? '<input id="' + soy.$$escapeHtml(opt_data.amountID) + '" type="hidden" name="Amount" value="' + soy.$$escapeHtml(opt_data.amount / 1.0e8) + '">' : '') + '<div class="error"></div>';
  if (! opt_data.force_method) {
    if (opt_data.methods.length > 1) {
      /** @desc method */
      var MSG_UNNAMED_1724 = goog.getMsg('Method');
      output += '<label class="modal-form__label">' + MSG_UNNAMED_1724 + ':</label><select id="' + soy.$$escapeHtml(opt_data.methodID) + '" name="Method" class="withdraw-method-selector">';
      var methodList677 = opt_data.methods;
      var methodListLen677 = methodList677.length;
      for (var methodIndex677 = 0; methodIndex677 < methodListLen677; methodIndex677++) {
        var methodData677 = methodList677[methodIndex677];
        output += '<option ' + ((methodIndex677 == 0) ? 'selected' : '') + ' value="' + soy.$$escapeHtml(methodData677['method']) + '" data-net-value="' + soy.$$escapeHtml(methodData677['method']) + '_' + soy.$$escapeHtml(opt_data.netValueID) + '" data-percent-fee="' + soy.$$escapeHtml(methodData677['method']) + '_' + soy.$$escapeHtml(opt_data.percentFeeID) + '" data-fixed-fee="' + soy.$$escapeHtml(methodData677['method']) + '_' + soy.$$escapeHtml(opt_data.fixedFeeID) + '">' + soy.$$escapeHtml(methodData677['description']) + '</option>';
      }
      output += '</select>';
    } else {
      var methodList702 = opt_data.methods;
      var methodListLen702 = methodList702.length;
      for (var methodIndex702 = 0; methodIndex702 < methodListLen702; methodIndex702++) {
        var methodData702 = methodList702[methodIndex702];
        output += '<input  id="' + soy.$$escapeHtml(opt_data.methodID) + '" type="hidden" name="Method"  value="' + soy.$$escapeHtml(methodData702['method']) + '" data-net-value="' + soy.$$escapeHtml(methodData702['method']) + '_' + soy.$$escapeHtml(opt_data.netValueID) + '" data-percent-fee="' + soy.$$escapeHtml(methodData702['method']) + '_' + soy.$$escapeHtml(opt_data.percentFeeID) + '" data-fixed-fee="' + soy.$$escapeHtml(methodData702['method']) + '_' + soy.$$escapeHtml(opt_data.fixedFeeID) + '">';
      }
    }
  }
  output += '<div class="withdraw-methods">';
  if (opt_data.methods.length == 0) {
    if (opt_data.verificationLevel <= 2) {
      /** @desc Error message when the user is not yet verified. */
      var MSG_UNNAMED_1726 = goog.getMsg(
          'Due to anti-money laundry international laws and government regulations, deposits/withdrawals in the local currency are only available to verified customers.{$break}We are very sorry for the inconvenience.',
          {'break': '<br/>'});
      output += '<div class="alert alert-warning text-left">' + MSG_UNNAMED_1726 + '</div>';
      if (opt_data.verificationLevel == 0) {
        /** @desc get verified message */
        var MSG_UNNAMED_1728 = goog.getMsg(' Verify your account ');
        output += '<a href="" data-switch-view="verification">' + MSG_UNNAMED_1728 + '</a>';
      }
    } else {
      /** @desc Error message when the brokers doesn't have deposit methods */
      var MSG_UNNAMED_1730 = goog.getMsg('We are not accepting deposits at this moment. We sorry for the inconvenience.');
      output += '<div class="alert alert-danger text-center">' + MSG_UNNAMED_1730 + '</div>';
    }
  }
  var methodList747 = opt_data.methods;
  var methodListLen747 = methodList747.length;
  for (var methodIndex747 = 0; methodIndex747 < methodListLen747; methodIndex747++) {
    var methodData747 = methodList747[methodIndex747];
    if (opt_data.force_method) {
      if (methodData747['method'] == opt_data.force_method) {
        if (opt_data.side == 'client') {
          /** @desc amount */
          var MSG_UNNAMED_1732 = goog.getMsg('Amount');
          output += '<label class="modal-form__label">' + MSG_UNNAMED_1732 + ' ' + soy.$$escapeHtml(opt_data.currencySign) + ':</label><input id="' + soy.$$escapeHtml(methodData747['method']) + '_' + soy.$$escapeHtml(opt_data.amountID) + '" data-uniform-validators="required; validateNumber ' + ((methodData747['limits'][opt_data.verificationLevel]['enabled']) ? ' ' + ((methodData747['limits'][opt_data.verificationLevel]['min']) ? '; validateMin ' + soy.$$escapeHtml(methodData747['limits'][opt_data.verificationLevel]['formatted_min_value']) : '') + ((methodData747['limits'][opt_data.verificationLevel]['max']) ? '; validateMax ' + soy.$$escapeHtml(methodData747['limits'][opt_data.verificationLevel]['formatted_max_value']) + ' ' : '') + ' ' : '') + '" data-uniform-type="number" data-uniform-filters="positive_number" type="text" class="withdraw-field input input--full" size="16" value="' + ((opt_data.formattedAmount) ? soy.$$escapeHtml(opt_data.formattedAmount) : '') + '" name="Amount">';
          if (methodData747['limits'][opt_data.verificationLevel]['enabled']) {
            output += '<small>';
            if (methodData747['limits'][opt_data.verificationLevel]['max']) {
              /** @desc amount help block */
              var MSG_UNNAMED_1734 = goog.getMsg(
                  ' Available: {$xxx}',
                  {'xxx': soy.$$escapeHtml(methodData747['limits'][opt_data.verificationLevel]['formatted_max'])});
              output += MSG_UNNAMED_1734 + '<br>';
            }
            if (methodData747['limits'][opt_data.verificationLevel]['min']) {
              /** @desc amount help block */
              var MSG_UNNAMED_1736 = goog.getMsg(
                  ' Minimum: {$xxx} per transaction.  ',
                  {'xxx': soy.$$escapeHtml(methodData747['limits'][opt_data.verificationLevel]['formatted_min'])});
              output += MSG_UNNAMED_1736;
            }
            output += '</small>';
          }
        }
        var fieldList800 = methodData747['fields'];
        var fieldListLen800 = fieldList800.length;
        for (var fieldIndex800 = 0; fieldIndex800 < fieldListLen800; fieldIndex800++) {
          var fieldData800 = fieldList800[fieldIndex800];
          output += (fieldData800['side'] == opt_data.side) ? '<label class="modal-form__label">' + soy.$$escapeHtml(fieldData800['label']) + ':</label><input class="withdraw-field input input--full" data-uniform-validators="' + soy.$$escapeHtml(fieldData800['validator']) + '" type="' + soy.$$escapeHtml(fieldData800['type']) + '" name="' + soy.$$escapeHtml(fieldData800['name']) + '" label="' + soy.$$escapeHtml(fieldData800['placeholder']) + '" value="' + soy.$$escapeHtml(fieldData800['value']) + '"/>' : '';
        }
        if (opt_data.side == 'client') {
          /** @desc Fee percentage label */
          var MSG_UNNAMED_1738 = goog.getMsg('Fees');
          /** @desc Net amount */
          var MSG_UNNAMED_1740 = goog.getMsg('Net amount');
          output += '<label class="modal-form__label">' + soy.$$escapeHtml(methodData747['disclaimer']) + ':</label><input id="' + soy.$$escapeHtml(methodData747['method']) + '_' + soy.$$escapeHtml(opt_data.percentFeeID) + '" type="hidden" value="' + soy.$$escapeHtml(methodData747['percent_fee']) + '"><input id="' + soy.$$escapeHtml(methodData747['method']) + '_' + soy.$$escapeHtml(opt_data.fixedFeeID) + '" type="hidden" value="' + soy.$$escapeHtml(methodData747['fixed_fee']) + '"><label class="modal-form__label">' + MSG_UNNAMED_1738 + ':</label><label id="' + soy.$$escapeHtml(methodData747['method']) + '_' + soy.$$escapeHtml(opt_data.totalFeesID) + '" class="control-label" style="text-align: left;"></label><div ' + ((opt_data.hideNetAmount) ? ' style="display:none;"' : '') + '><label class="modal-form__label">' + MSG_UNNAMED_1740 + ':</label><label id="' + soy.$$escapeHtml(methodData747['method']) + '_' + soy.$$escapeHtml(opt_data.netValueID) + '" class="control-label" style="text-align: left;"></label><input id="' + soy.$$escapeHtml(methodData747['method']) + '_' + soy.$$escapeHtml(opt_data.netValueID) + '_value" type="hidden" value=""><input id="' + soy.$$escapeHtml(methodData747['method']) + '_' + soy.$$escapeHtml(opt_data.netValueID) + '_validator" type="hidden" value="" data-uniform-validators="required; validateNumber ' + ((methodData747['limits'][opt_data.verificationLevel]['enabled']) ? ' ' + ((methodData747['limits'][opt_data.verificationLevel]['min']) ? '; validateMin ' + soy.$$escapeHtml(methodData747['limits'][opt_data.verificationLevel]['formatted_min_value']) : '') + ((methodData747['limits'][opt_data.verificationLevel]['max']) ? '; validateMax ' + soy.$$escapeHtml(methodData747['limits'][opt_data.verificationLevel]['formatted_max_value']) + ' ' : '') + ' ' : '') + '" data-uniform-type="number" class="withdraw-field" data-uniform-filters="positive_number"' + ((! (methodIndex747 == 0)) ? 'disabled' : '') + '></div>';
        } else {
          output += (opt_data.side == 'broker') ? '<label class="modal-form__label">' + soy.$$escapeHtml(methodData747['disclaimer']) + ':</label>' + ((opt_data.showFeeDataEntry) ? bitex.templates.FeesFormControls({currencySign: opt_data.currencySign, percentFeeID: methodData747['method'] + '_' + opt_data.percentFeeID, percentFee: methodData747['percent_fee'], fixedFeeID: methodData747['method'] + '_' + opt_data.fixedFeeID, fixedFee: methodData747['fixed_fee'], totalFeesID: methodData747['method'] + '_' + opt_data.totalFeesID, netValueID: methodData747['method'] + '_' + opt_data.netValueID}) : '') : '';
        }
      }
    } else {
      /** @desc Fee percentage label */
      var MSG_UNNAMED_1748 = goog.getMsg('Fees:');
      /** @desc Net amount */
      var MSG_UNNAMED_1750 = goog.getMsg('Net amount');
      output += '<div class="withdraw-method" data-withdraw-method="' + soy.$$escapeHtml(methodData747['method']) + '" style="' + ((! (methodIndex747 == 0)) ? 'display:none;' : '') + '">';
      if (opt_data.side == 'client') {
        /** @desc amount */
        var MSG_UNNAMED_1742 = goog.getMsg('Amount');
        output += '<label class="modal-form__label">' + MSG_UNNAMED_1742 + ' ' + soy.$$escapeHtml(opt_data.currencySign) + ':</label><input id="' + soy.$$escapeHtml(methodData747['method']) + '_' + soy.$$escapeHtml(opt_data.amountID) + '" data-uniform-validators="required; validateNumber ' + ((methodData747['limits'][opt_data.verificationLevel]['enabled']) ? ' ' + ((methodData747['limits'][opt_data.verificationLevel]['min']) ? '; validateMin ' + soy.$$escapeHtml(methodData747['limits'][opt_data.verificationLevel]['formatted_min_value']) : '') + ((methodData747['limits'][opt_data.verificationLevel]['max']) ? '; validateMax ' + soy.$$escapeHtml(methodData747['limits'][opt_data.verificationLevel]['formatted_max_value']) + ' ' : '') + ' ' : '') + '" data-uniform-type="number" data-uniform-filters="positive_number" value="' + ((opt_data.formattedAmount) ? soy.$$escapeHtml(opt_data.formattedAmount) : '') + '" type="text" class="withdraw-field input input--full" size="16" name="Amount" ' + ((! (methodIndex747 == 0)) ? 'disabled' : '') + '>';
        if (methodData747['limits'][opt_data.verificationLevel]['enabled']) {
          output += '<small>';
          if (methodData747['limits'][opt_data.verificationLevel]['max']) {
            /** @desc amount help block */
            var MSG_UNNAMED_1744 = goog.getMsg(
                ' Available: {$xxx}',
                {'xxx': soy.$$escapeHtml(methodData747['limits'][opt_data.verificationLevel]['formatted_max'])});
            output += MSG_UNNAMED_1744 + '<br>';
          }
          if (methodData747['limits'][opt_data.verificationLevel]['min']) {
            /** @desc amount help block */
            var MSG_UNNAMED_1746 = goog.getMsg(
                ' Minimum: {$xxx} per transaction.  ',
                {'xxx': soy.$$escapeHtml(methodData747['limits'][opt_data.verificationLevel]['formatted_min'])});
            output += MSG_UNNAMED_1746;
          }
          output += '</small>';
        }
      }
      output += '<label class="modal-form__label">' + soy.$$escapeHtml(methodData747['disclaimer']) + '</label><input id="' + soy.$$escapeHtml(methodData747['method']) + '_' + soy.$$escapeHtml(opt_data.percentFeeID) + '" type="hidden" value="' + soy.$$escapeHtml(methodData747['percent_fee']) + '"><input id="' + soy.$$escapeHtml(methodData747['method']) + '_' + soy.$$escapeHtml(opt_data.fixedFeeID) + '" type="hidden" value="' + soy.$$escapeHtml(methodData747['fixed_fee']) + '"><label class="modal-form__label">' + MSG_UNNAMED_1748 + '</label><label id="' + soy.$$escapeHtml(methodData747['method']) + '_' + soy.$$escapeHtml(opt_data.totalFeesID) + '" class="control-label" style="text-align: left;"></label><div ' + ((opt_data.hideNetAmount) ? ' style="display:none;" ' : '') + '><label class="modal-form__label">' + MSG_UNNAMED_1750 + ':</label><label id="' + soy.$$escapeHtml(methodData747['method']) + '_' + soy.$$escapeHtml(opt_data.netValueID) + '" class="control-label broker-confirm-deposit-net-amount" style="text-align: left;"></label><input id="' + soy.$$escapeHtml(methodData747['method']) + '_' + soy.$$escapeHtml(opt_data.netValueID) + '_value" type="hidden" value=""><input id="' + soy.$$escapeHtml(methodData747['method']) + '_' + soy.$$escapeHtml(opt_data.netValueID) + '_validator" type="hidden" value="" data-uniform-validators="required; validateNumber ' + ((methodData747['limits'][opt_data.verificationLevel]['enabled']) ? ' ' + ((methodData747['limits'][opt_data.verificationLevel]['min']) ? '; validateMin ' + soy.$$escapeHtml(methodData747['limits'][opt_data.verificationLevel]['formatted_min_value']) : '') + ((methodData747['limits'][opt_data.verificationLevel]['max']) ? '; validateMax ' + soy.$$escapeHtml(methodData747['limits'][opt_data.verificationLevel]['formatted_max_value']) + ' ' : '') + ' ' : '') + '" data-uniform-type="number" class="withdraw-field" data-uniform-filters="positive_number"' + ((! (methodIndex747 == 0)) ? 'disabled' : '') + '></div>';
      var fieldList1013 = methodData747['fields'];
      var fieldListLen1013 = fieldList1013.length;
      for (var fieldIndex1013 = 0; fieldIndex1013 < fieldListLen1013; fieldIndex1013++) {
        var fieldData1013 = fieldList1013[fieldIndex1013];
        output += (fieldData1013['side'] == opt_data.side) ? '<label class="modal-form__label">' + soy.$$escapeHtml(fieldData1013['label']) + ':</label><input class="withdraw-field input input--full" data-uniform-validators="' + soy.$$escapeHtml(fieldData1013['validator']) + '" type="' + soy.$$escapeHtml(fieldData1013['type']) + '" name="' + soy.$$escapeHtml(fieldData1013['name']) + '" label="' + soy.$$escapeHtml(fieldData1013['placeholder']) + '" value="' + soy.$$escapeHtml(fieldData1013['value']) + '"' + ((! (methodIndex747 == 0)) ? 'disabled' : '') + ' />' : '';
      }
      output += '</div>';
    }
  }
  output += '<div class="control-group dlg-response-group"><label class="control-label dlg-response-group-label"></label><div class="controls" class="dlg-response-group-value" ></div></div></form>';
  return output;
};


bitex.templates.YourFeesBalances = function(opt_data) {
  var output = '';
  /** @desc label for user buy fee */
  var MSG_UNNAMED_1752 = goog.getMsg('Buy Fee');
  /** @desc label for user sell fee */
  var MSG_UNNAMED_1756 = goog.getMsg('Sell Fee');
  output += '<table class="table table-striped table-condensed"><tbody><tr><td><strong>' + MSG_UNNAMED_1752 + '</strong></td><td><span class="bitex-model">';
  if (opt_data.buy_fee) {
    output += soy.$$escapeHtml(opt_data.buy_fee);
  } else {
    /** @desc Using broker fee data */
    var MSG_UNNAMED_1754 = goog.getMsg('-');
    output += MSG_UNNAMED_1754;
  }
  output += '</span></td></tr><tr><td><strong>' + MSG_UNNAMED_1756 + '</strong></td><td><span class="bitex-model">';
  if (opt_data.sell_fee) {
    output += soy.$$escapeHtml(opt_data.sell_fee);
  } else {
    /** @desc Using broker fee data */
    var MSG_UNNAMED_1758 = goog.getMsg('-');
    output += MSG_UNNAMED_1758;
  }
  output += '</span></td></tr></tbody></table>';
  return output;
};


bitex.templates.YourAccountBalances = function(opt_data) {
  var output = '<table class="table table-striped" style="width: 350px"><tbody>';
  var currencyList1061 = opt_data.currencies;
  var currencyListLen1061 = currencyList1061.length;
  for (var currencyIndex1061 = 0; currencyIndex1061 < currencyListLen1061; currencyIndex1061++) {
    var currencyData1061 = currencyList1061[currencyIndex1061];
    /** @desc label for available balance in a currency */
    var MSG_UNNAMED_1760 = goog.getMsg(
        'Available {$code}',
        {'code': soy.$$escapeHtml(currencyData1061.code)});
    output += '<tr><td><strong>' + MSG_UNNAMED_1760 + '</strong></td><td><span class="bitex-model" data-model-key="formatted_balance_' + soy.$$escapeHtml(currencyData1061.model_key) + '" data-blink-class="balance-info-blink">' + ((currencyData1061.balance) ? soy.$$escapeHtml(currencyData1061.balance) : '-') + '</span></td></tr>';
  }
  output += '</tbody></table>';
  return output;
};


bitex.templates.AccountOverviewHeaderVerified = function(opt_data) {
  var output = '';
  /** @desc label on  overview header */
  var MSG_UNNAMED_1762 = goog.getMsg('No');
  /** @desc label on  overview header */
  var MSG_UNNAMED_1764 = goog.getMsg('Pending');
  /** @desc label on  overview header */
  var MSG_UNNAMED_1766 = goog.getMsg('Progress');
  /** @desc label on  overview header */
  var MSG_UNNAMED_1768 = goog.getMsg('Yes - Level I ');
  /** @desc label on  overview header */
  var MSG_UNNAMED_1770 = goog.getMsg('Yes - Level II ');
  /** @desc label on  overview header */
  var MSG_UNNAMED_1772 = goog.getMsg('Yes - Level III ');
  output += '<select id="id_select_new_verification_level" data-profile-change="Verified" ><option value=0 ' + ((opt_data.msg_customer_detail['Verified'] == 0) ? 'selected' : '') + '>' + MSG_UNNAMED_1762 + '</option><option value=1 ' + ((opt_data.msg_customer_detail['Verified'] == 1) ? 'selected' : '') + '>' + MSG_UNNAMED_1764 + '</option><option value=2 ' + ((opt_data.msg_customer_detail['Verified'] == 2) ? 'selected' : '') + '>' + MSG_UNNAMED_1766 + '</option><option value=3 ' + ((opt_data.msg_customer_detail['Verified'] == 3) ? 'selected' : '') + '>' + MSG_UNNAMED_1768 + '</option><option value=4 ' + ((opt_data.msg_customer_detail['Verified'] == 4) ? 'selected' : '') + '>' + MSG_UNNAMED_1770 + '</option><option value=5 ' + ((opt_data.msg_customer_detail['Verified'] == 5) ? 'selected' : '') + '>' + MSG_UNNAMED_1772 + '</option></select>';
  return output;
};


bitex.templates.AccountOverviewHeaderWithDrawEmailData = function(opt_data) {
  var output = '';
  if (opt_data.msg_customer_detail['NeedWithdrawEmail']) {
    /** @desc label on  overview header */
    var MSG_UNNAMED_1774 = goog.getMsg('Enabled');
    /** @desc label on  overview header */
    var MSG_UNNAMED_1776 = goog.getMsg('Disable');
    output += '<span class="label label-success">' + MSG_UNNAMED_1774 + '</span> <a href="#" class="btn btn-primary btn-mini" data-action="SET_WITHDRAW_EMAIL" data-row="' + soy.$$escapeHtml(opt_data.msg_customer_detail['ID']) + '">' + MSG_UNNAMED_1776 + '</a>';
  } else {
    /** @desc label on  overview header */
    var MSG_UNNAMED_1778 = goog.getMsg('Disabled');
    /** @desc label on  overview header */
    var MSG_UNNAMED_1780 = goog.getMsg('Enabled');
    output += '<span class="label label-important">' + MSG_UNNAMED_1778 + '</span> <a href="#" class="btn btn-primary btn-mini" data-action="SET_WITHDRAW_EMAIL" data-row="' + soy.$$escapeHtml(opt_data.msg_customer_detail['ID']) + '">' + MSG_UNNAMED_1780 + '</a>';
  }
  return output;
};


bitex.templates.AccountOverviewHeaderTwoFactors = function(opt_data) {
  var output = '';
  if (opt_data.msg_customer_detail['TwoFactorEnabled']) {
    /** @desc label on  overview header */
    var MSG_UNNAMED_1782 = goog.getMsg('Enabled');
    /** @desc label on  overview header */
    var MSG_UNNAMED_1784 = goog.getMsg('Disable');
    output += '<span class="label label-success">' + MSG_UNNAMED_1782 + '</span><a href="#" class="btn btn-primary btn-mini" data-action="SET_TWO_FACTOR" data-row="' + soy.$$escapeHtml(opt_data.msg_customer_detail['ID']) + '">' + MSG_UNNAMED_1784 + '</a>';
  } else {
    /** @desc label on  overview header */
    var MSG_UNNAMED_1786 = goog.getMsg('Disabled');
    output += '<span class="label label-important">' + MSG_UNNAMED_1786 + '</span>';
  }
  return output;
};


bitex.templates.AccountOverviewHeader = function(opt_data) {
  var output = '';
  /** @desc label on overview header */
  var MSG_UNNAMED_1788 = goog.getMsg('ID');
  /** @desc label on  overview header */
  var MSG_UNNAMED_1790 = goog.getMsg('Username');
  /** @desc label on  overview header */
  var MSG_UNNAMED_1792 = goog.getMsg('Email');
  /** @desc label on  overview header */
  var MSG_UNNAMED_1794 = goog.getMsg('State');
  /** @desc label on  overview header */
  var MSG_UNNAMED_1796 = goog.getMsg('Country');
  /** @desc label on  overview header */
  var MSG_UNNAMED_1798 = goog.getMsg('Last login');
  /** @desc label on  overview header */
  var MSG_UNNAMED_1800 = goog.getMsg('Is verified');
  /** @desc label on  overview header */
  var MSG_UNNAMED_1802 = goog.getMsg('Has two step authentication');
  /** @desc label on  overview header */
  var MSG_UNNAMED_1804 = goog.getMsg('Registration date');
  /** @desc label on  overview header */
  var MSG_UNNAMED_1806 = goog.getMsg('Needs email confirmation on withdraw');
  output += '<table class="table table--bordered"><tbody><tr><td><strong>' + MSG_UNNAMED_1788 + '</strong></td><td>' + soy.$$escapeHtml(opt_data.msg_customer_detail['ID']) + '</td></tr><tr><td><strong>' + MSG_UNNAMED_1790 + '</strong></td><td>' + soy.$$escapeHtml(opt_data.msg_customer_detail['Username']) + '</td></tr><tr><td><strong>' + MSG_UNNAMED_1792 + '</strong></td><td>' + soy.$$escapeHtml(opt_data.msg_customer_detail['Email']) + '</td></tr><tr><td><strong>' + MSG_UNNAMED_1794 + '</strong></td><td>' + soy.$$escapeHtml(opt_data.msg_customer_detail['State']) + '</td></tr><tr><td><strong>' + MSG_UNNAMED_1796 + '</strong></td><td>' + soy.$$escapeHtml(opt_data.msg_customer_detail['CountryCode']) + '</td></tr><tr><td><strong>' + MSG_UNNAMED_1798 + '</strong></td><td>' + soy.$$escapeHtml(opt_data.msg_customer_detail['LastLogin']) + '</td></tr><tr><td><strong>' + MSG_UNNAMED_1800 + '</strong></td><td class="account-overview-val account-overview-verified">' + bitex.templates.AccountOverviewHeaderVerified(opt_data) + '</td></tr><tr><td><strong>' + MSG_UNNAMED_1802 + '</strong></td><td class="account-overview-val account-overview-two-factors" >' + bitex.templates.AccountOverviewHeaderTwoFactors(opt_data) + '</td></tr><tr><td><strong>' + MSG_UNNAMED_1804 + '</strong></td><td>' + soy.$$escapeHtml(opt_data.msg_customer_detail['Created']) + '</td></tr><tr><td><strong>' + MSG_UNNAMED_1806 + '</strong></td><td class="account-overview-val account-overview-withdraw-email">' + bitex.templates.AccountOverviewHeaderWithDrawEmailData(opt_data) + '</td></tr></tbody></table>';
  return output;
};


bitex.templates.AccountOverviewUser = function(opt_data) {
  var output = '';
  /** @desc label on overview header */
  var MSG_UNNAMED_1808 = goog.getMsg('ID');
  /** @desc label on  overview header */
  var MSG_UNNAMED_1810 = goog.getMsg('Username');
  /** @desc label on  overview header */
  var MSG_UNNAMED_1812 = goog.getMsg('Email');
  /** @desc label on  overview header */
  var MSG_UNNAMED_1814 = goog.getMsg('State');
  /** @desc label on  overview header */
  var MSG_UNNAMED_1816 = goog.getMsg('Country');
  /** @desc label on  overview header */
  var MSG_UNNAMED_1818 = goog.getMsg('Is verified');
  output += '<table class="profile-table table"><tbody><tr><td><strong>' + MSG_UNNAMED_1808 + '</strong></td><td>' + soy.$$escapeHtml(opt_data.msg_customer_detail['ID']) + '</td></tr><tr><td><strong>' + MSG_UNNAMED_1810 + '</strong></td><td>' + soy.$$escapeHtml(opt_data.msg_customer_detail['Username']) + '</td></tr><tr><td><strong>' + MSG_UNNAMED_1812 + '</strong></td><td>' + soy.$$escapeHtml(opt_data.msg_customer_detail['Email']) + '</td></tr><tr><td><strong>' + MSG_UNNAMED_1814 + '</strong></td><td>' + soy.$$escapeHtml(opt_data.msg_customer_detail['State']) + '</td></tr><tr><td><strong>' + MSG_UNNAMED_1816 + '</strong></td><td>' + soy.$$escapeHtml(opt_data.msg_customer_detail['CountryCode']) + '</td></tr><tr><td><strong>' + MSG_UNNAMED_1818 + '</strong></td><td class="account-overview-val account-overview-verified">';
  switch (opt_data.msg_customer_detail['Verified']) {
    case 0:
      /** @desc label on  overview header */
      var MSG_UNNAMED_1820 = goog.getMsg('No');
      output += '<span class="label label-important">' + MSG_UNNAMED_1820 + '</span>';
      break;
    case 1:
      /** @desc label on  overview header */
      var MSG_UNNAMED_1822 = goog.getMsg('Pending');
      output += '<span class="label label-important">' + MSG_UNNAMED_1822 + '</span>';
      break;
    case 2:
      /** @desc label on  overview header */
      var MSG_UNNAMED_1824 = goog.getMsg('Yes');
      output += '<span class="label label-success">' + MSG_UNNAMED_1824 + '</span>';
      break;
    case 3:
      /** @desc label on  overview header */
      var MSG_UNNAMED_1826 = goog.getMsg('Yes - Level II');
      output += '<span class="label label-success">' + MSG_UNNAMED_1826 + '</span>';
      break;
    case 4:
      /** @desc label on  overview header */
      var MSG_UNNAMED_1828 = goog.getMsg('Yes - Level III');
      output += '<span class="label label-success">' + MSG_UNNAMED_1828 + '</span>';
      break;
    case 5:
      /** @desc label on  overview header */
      var MSG_UNNAMED_1830 = goog.getMsg('Yes - Level IV');
      output += '<span class="label label-success">' + MSG_UNNAMED_1830 + '</span>';
      break;
  }
  output += '</td></tr></tbody></table>';
  return output;
};


bitex.templates.EnterVerificationDataDialogContent = function(opt_data) {
  var output = '';
  /** @desc label on  overview header */
  var MSG_UNNAMED_1832 = goog.getMsg('Verification data');
  output += '<form class="form-horizontal" data-deposit-status="prepare"><input type="hidden" name="ClientID" value="' + soy.$$escapeHtml(opt_data.clientID) + '"><div class="control-group"><label class="control-label"> ' + MSG_UNNAMED_1832 + ' </label><div class="controls"><input type="text" class="input-xlarge" size="16" name="VerificationData"></div></div></form>';
  return output;
};


bitex.templates.DataGrid = function(opt_data) {
  var output = '<div ' + ((opt_data.id) ? 'id="' + soy.$$escapeHtml(opt_data.id) + '"' : '') + '  class="fuelux ' + ((opt_data.base_class) ? soy.$$escapeHtml(opt_data.base_class) : '') + '" style="width:100%;"><table class="table table-bordered datagrid datagrid-stretch-header"><thead><tr><th colspan="4" ' + ((! opt_data.title && ! opt_data.show_search) ? 'style="display: none;"' : '') + '><span class="datagrid-header-title"  ' + ((! opt_data.title) ? 'style="display: none;"' : '') + ' ><strong>' + soy.$$escapeHtml(opt_data.title) + '</strong></span><div class="datagrid-header-left" ' + ((! opt_data.show_search) ? 'style="display: none;"' : '') + '><div class="input-append search datagrid-search"><input type="text" class="input-medium" placeholder="' + soy.$$escapeHtml(opt_data.search_placeholder) + '"><button type="button" class="btn"><i class="icon-search"></i></button></div></div><div class="datagrid-header-right">';
  if (opt_data.button_filters) {
    output += '<div class="select filter datagrid-filter" data-resize="auto"><button type="button" data-toggle="dropdown" class="btn dropdown-toggle">';
    var buttonList1316 = opt_data.button_filters;
    var buttonListLen1316 = buttonList1316.length;
    for (var buttonIndex1316 = 0; buttonIndex1316 < buttonListLen1316; buttonIndex1316++) {
      var buttonData1316 = buttonList1316[buttonIndex1316];
      output += (buttonIndex1316 == 0) ? '<span class="dropdown-label" style="width: 111px;">' + soy.$$escapeHtml(buttonData1316['label']) + '</span>' : '';
    }
    output += '<span class="caret"></span></button><ul class="dropdown-menu">';
    var buttonList1324 = opt_data.button_filters;
    var buttonListLen1324 = buttonList1324.length;
    for (var buttonIndex1324 = 0; buttonIndex1324 < buttonListLen1324; buttonIndex1324++) {
      var buttonData1324 = buttonList1324[buttonIndex1324];
      output += '<li data-value="' + soy.$$escapeHtml(buttonData1324['value']) + '"><a href="#">' + soy.$$escapeHtml(buttonData1324['label']) + '</a></li>';
    }
    output += '</ul></div>';
  }
  output += '</div></th></tr></thead></table><div class="datagrid-stretch-wrapper" style="height:' + ((opt_data.wrapper_height) ? soy.$$escapeHtml(opt_data.wrapper_height) : '360') + 'px;"><table class="table table-bordered datagrid"><tbody></tbody></table></div><table class="table table-bordered datagrid datagrid-stretch-footer"><tfoot><tr><th colspan="4"><div class="datagrid-footer-left" style="visibility: visible;"><div class="grid-controls"><span><span class="grid-start"></span> -<span class="grid-end"></span></span></div></div><div class="datagrid-footer-right" style="visibility: visible;"><div class="grid-pager"><button type="button" class="btn grid-prevpage"><i class="icon-chevron-left"></i></button><button type="button" class="btn grid-nextpage"><i class="icon-chevron-right"></i></button></div></div></th></tr></tfoot></table></div>';
  return output;
};
