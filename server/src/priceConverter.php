<?php
class PriceConverter
{
  private $supportedCurrencies = [
    'USD',
    'JPY',
    'GBP',
    'EUR',
    'CAD',
    'AUD',
    'SEK',
    'SGD',
    'MXN',
    'NZD',
    'DKK',
    'BRL',
    'NOK',
    'HKD',
    'CLP',
    'THB',
    'ZAR',
    'INR',
    'COP',
  ];
  private $defaultCurrency = 'USD';

  function convertPrice($amount, $currency)
  {
    if (in_array($currency, $this->supportedCurrencies)) {
      $curl = curl_init();
      curl_setopt(
        $curl,
        CURLOPT_URL,
        'https://api.apilayer.com/exchangerates_data/convert?to=' . $currency . '&from=USD&amount=' . $amount . ''
      );
      curl_setopt($curl, CURLOPT_HTTPHEADER, [
        'Content-Type: application/json',
        'apikey: 9BtR0d3BtDjP5988fjA9nzc25bxwOiCm',
      ]);
      curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);
      curl_setopt($curl, CURLOPT_CUSTOMREQUEST, 'GET');
      curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);

      $response = json_decode(curl_exec($curl));

      curl_close($curl);

      $amountConverted = $this->roundPrice((float) $response->result);
      $formatter = new NumberFormatter('en', NumberFormatter::CURRENCY);
      return $formatter->formatCurrency($amountConverted, $currency);
    } else {
      $amount = $this->roundPrice((float) $amount);
      $formatter = new NumberFormatter('en', NumberFormatter::CURRENCY);
      return $formatter->formatCurrency($amount, $this->defaultCurrency);
    }
  }

  public function roundPrice($amount)
  {
    if ($amount >= 0 && $amount <= 999) {
      return round($amount + 0.01) - 0.01;
    }
    if ($amount >= 1000 && $amount <= 9999) {
      return ceil($amount / 10) * 10;
    }
    return ceil($amount / 100) * 100;
  }
}
$priceConvertClass = new PriceConverter();
$amount = $argv[1];
$currency = $argv[2];
echo $priceConvertClass->convertPrice($amount, $currency);
?>
